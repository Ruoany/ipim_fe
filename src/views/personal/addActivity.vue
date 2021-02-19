<template>
    <a-spin   :spinning="spinning">
        <h1>展會登記-{{isUpdate()?"修改":"新增"}}</h1>
        <a-form-model
            ref="form"
            :model="form"
            :rules="rules"
            style="width:100%;"
        >
            <a-form-model-item prop="nameZh" label="展會名稱">
                <a-input v-model="form.nameZh" @blur="repeat(form.nameZh)"></a-input>
            </a-form-model-item>

             <a-modal v-model="visible" title="提示" @ok="handleOk">
                        <p>展會名稱已存在</p>
            </a-modal>

            <a-form-model-item prop="startEndDate" label="展會舉行日期(注：展會在開始日期的前46天才可申請)">
                <a-range-picker     v-model="form.startEndDate" style="width:1000px">

                </a-range-picker>
            </a-form-model-item>
            <a-form-model-item prop="place" label="展會舉行地點">
                <a-input v-model="form.place"></a-input>
            </a-form-model-item>
            <a-form-model-item        label="主辦單位"            >
                <a-input v-model="form.sposor"></a-input>
            </a-form-model-item>
            <a-form-model-item         prop="website"        label="展會官方網址"  >
                <a-input v-model="form.website"></a-input>
            </a-form-model-item>
            <a-form-model-item label="展會聯絡人-姓名">
                <a-input v-model="form.liaisonname"></a-input>
            </a-form-model-item>
            <a-form-model-item label="展會聯絡人-流動電話">
                <a-input v-model="form.liaisonphone"></a-input>
            </a-form-model-item>
            <a-form-model-item label="展會聯絡人-電郵">
                <a-input v-model="form.liaisonemail"></a-input>
            </a-form-model-item>
            <a-form-model-item label="登記人-姓名">
                <a-input v-model="form.regPersonName"></a-input>
            </a-form-model-item>
            <a-form-model-item label="登記人-流動電話">
                <a-input v-model="form.regPersonPhone"></a-input>
            </a-form-model-item>


            <a-form-model-item prop="brief" label="招展書/展會簡介">
                <upload
                        :value.sync="form.brief"
                />
            </a-form-model-item>

            <a-form-model-item prop="requirement" label="招商條件">
                <upload
                        :value.sync="form.requirement"

                />
            </a-form-model-item>


            <a-form-model-item prop="scopeAppendix"  label="展會規模">
                <upload
                        :value.sync="form.scopeAppendix"

                />
            </a-form-model-item>

            <a-form-model-item  prop="price"   label="展位價格">
                <upload
                        :value.sync="form.price"
                />
            </a-form-model-item>

            <a-form-model-item>
                <a-button
                    :style="{ marginRight: '8px' }"
                    @click="$router.back()"
                    >{{ $t("util.cancel") }}</a-button
                >
                <a-button type="primary" @click="handleSubmit">{{
                    $t("util.save")
                }}</a-button>
            </a-form-model-item>
        </a-form-model>
    </a-spin>

</template>

<script>
import { mapGetters } from "vuex";
import Liaison from "@/apis/liaison";
import { upFiles } from "@/apis/files";
import Upload from "@/components/upload";
import activity from "@/apis/activity";
import User from "@/apis/user";
import { formatString } from "@/common/format";
export default {
    components: { Upload },

    data() {
        let config = { required: true, message: "Please input" };
        return {
            upFiles,
            rules: {
                nameZh: [config],
                startEndDate: [config],
                brief: [config],
                requirement: [config],
                scopeAppendix: [config],
                price: [config],
            },
            form: {
                adminId: this.$store.getters.currentUser,
                nameZh: "",
                startEndDate:[],
                startTime:null,
                endTime:null,
                place: "",
                sposor: "",
                website: "",
                liaisonname: "",
                liaisonphone: "",
                liaisonemail:"",
                regpersonphone:"",
                regPersonName:"",
                brief:[],
                requirement:[],
                scopeAppendix:[],
                price:[],
            },
            loading: false,
            spinning: false,
            visible: false
        };
    },
    computed: {
        ...mapGetters(["currentInstitution", "currentUser"]),
        role() {
            if (this.currentInstitution) {
                return (
                    this.$route.query.type === "new" ||
                    this.currentInstitution.adminId === this.currentUser
                );
            }
            return true;
        }
    },
    filters: {
        formatShareholders(value) {
            return value
                ? value
                      .map(item => {
                          return `${item.name}:${item.percent}%`;
                      })
                      .join(";")
                : "尚未設定";
        }
    },
    methods: {
        beforeUpload(file) {
            const isJPG =
                file.type === "image/jpeg" || file.type === "image/png";
            if (!isJPG) {
                this.$message.error("You can only upload JPG and PNG file!");
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error("Image must smaller than 2MB!");
            }
            if (isJPG && isLt2M) {
                this.loading = true;
            }
            return isJPG && isLt2M;
        },
        async onSuccess() {

            this.spinning = false;
            this.$message.success("操作成功");
           this.$router.replace("/personal/register");
        },
        async handleSubmit() {
            console.log("add activity");
            this.$refs.form.validate(async valid => {

                if (valid) {

                    this.spinning = true;
                    var tempData=this.form;

                    if(tempData.startEndDate!=null&&tempData.startEndDate.length>=1){
                        tempData.startTime=tempData.startEndDate[0];
                    }

                    if(tempData.startEndDate!=null&&tempData.startEndDate.length>=2){
                        tempData.endTime=tempData.startEndDate[1];
                    }
                    //填充默認字段 當前機構id
                    tempData.institutionId= this.currentInstitution.id;

                    //主辦單位轉成數組
                    tempData.organizers=[];
                    tempData.organizers[0]={};
                    tempData.organizers[0].name=tempData.sposor;

                    //聯絡人轉化為數組
                    tempData.liaisons=[];
                    tempData.liaisons[0]={};
                    tempData.liaisons[0].name=tempData.liaisonname;
                    tempData.liaisons[0].tel=tempData.liaisonphone;
                    tempData.liaisons[0].email=tempData.liaisonemail;

                    let   returndata;

                    if(this.isUpdate()){
                        returndata = await activity.update(
                            formatString(tempData)  );

                    }
                    else{
                        returndata = await activity.create(
                        formatString(tempData)
                    );
                    }
                    let message ;
                    let code;
                    code=returndata.code;
                    message=returndata.message;

                    if (code !== 200) {
                        this.spinning = false;
                        return;
                    }

                    this.onSuccess();
                }
            });
        },
        async initData( id ) {
            this.spinning = true;
             const { data } = await activity.one(id);

            data.startEndDate=new Array();
           //修改开始日期结束日期
            if(data.startTime!=null){
                data.startEndDate[0]  =data.startTime;
            }
            if(data.endTime!=null){
                data.startEndDate[1]  =data.endTime;
            }
            this.form = data;

            //主辦單位轉成數組
            this.form.sposor=data.organizers[0].name;


            //聯絡人轉化為數組
            this.form.liaisonname=data.liaisons[0].name
            this.form.liaisonphone=data.liaisons[0].tel
            this.form.liaisonemail=data.liaisons[0].email


           this.spinning = false;
        },

        isUpdate(){
            return this.$route.query.type==='update'
        },

         async repeat(name) {  
            const { data } = await activity.repeat(name);
              if(data != 0  && data >0){
                  this.visible = true;
                  this.form.nameZh = null;
              }
           
        },

        handleOk () {
            this.visible = false;
        },
    },
    mounted() {
       // this.form.startEndDate[0]=null;
        //this.form.startEndDate[1]=null;
        if (this.isUpdate()) {
            this.initData(this.$route.query.id);
        }

    }
};
</script>

<style lang="less" scoped>
.img {
    width: 80px;
    max-height: 80px;
}
/deep/ .ant-descriptions-item > .ant-descriptions-item-label {
    width: 250px;
    text-align: right;
    white-space: pre-wrap;
    color: #aaa;
}
/deep/.ant-descriptions-item > .ant-descriptions-item-content {
    color: #000;
    padding-left: 20px;
    max-width: 700px;
}
.shareholder-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    input {
        width: 46%;
    }
}
</style>
