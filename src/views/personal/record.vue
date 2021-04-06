<template>
    <a-spin :spinning="loading" class="container">
        <a-tabs v-model="status">
            <a-tab-pane
                :tab="$t('personal.undeal')"
                key="approving"
            ></a-tab-pane>
            <a-tab-pane
                :tab="$t('personal.deal')"
                key="unapproved"
            ></a-tab-pane>
        </a-tabs>
        <div class="list-content">
            <a-empty
                v-if="list.length === 0"
                :description="$t('util.nodata')"
                class="empty"
            ></a-empty>
            
            <cell
                v-for="item in list"
                :key="item.id"
                :scope="item.activity ? item.activity.scope : ''"
                :status="item.status"
                :activity-status="item.activity ? item.activity.showStatus : 'PROGRESS'"
                :title="item.activity ? item.activity.nameZh : item.type === 'ECB2B'? '電子商務推廣鼓勵措施申請表格': item.type === 'ENTERPRISE'? '': '電子商務推廣（應用 B2C 平台）鼓勵措施'"
                :address="item.activity ? item.activity.place : item.type === 'ENTERPRISE'? '': '無地址'"
                :date="item.activity ? `${item.activity.startTime} - ${item.activity.endTime}` : item.type === 'ENTERPRISE'? '': item.applyTime"
                :code="item.code"
                @handleClick="
                    item.activity && $router.push(`/show/detail?id=${item.activity.id}`)
                "
            >
            <!-- 申请 -->
                <!-- <div v-if="item.applyfortype === 'APPLY'"> -->
                    <a-tag slot="status" :color="item.status | formatStatus">{{
                        item.status | statusTextFilter
                    }}</a-tag>
                    <div slot="action" class="button-wrapper" v-if="item.applyfortype === 'APPLY'">
                        <!-- <a-button
                            v-if="
                                (item.status === 'passed' || item.status === 'finish') && item.activity.showStatus === 'END'
                            "
                            type="link"
                            @click="
                                NavigateTo('/report/index', {
                                    id: item.id,
                                    reportType:'ba',
                                    reportId: item.report ? item.report.id : '',
                                })
                            "
                            >{{ $t("personal.report") }}</a-button
                        > -->
                        <!-- 修改申請表 || 查看  当前可显示-->
                        <a-button
                            type="link"
                            @click="
                                FormNavigate(item.type, {
                                    a: item.activityId,
                                    d: item.id
                                })
                            "
                            >{{
                                item.status === "rejected"
                                    ? $t("personal.update")
                                    : $t("personal.showForm")
                            }}</a-button
                        >
                       

                       <!-- 上傳憑證-->
                        <a-button
                        v-if="item.status === 'obligation' && (item.type == 'PARTICIPATE' || item.type == 'MISSION')"
                            type="link"
                            @click="uploadCar()"
                            >{{
                                 $t("personal.upload1")
                            }}</a-button
                        >     

                    <a-modal v-model="visible1" title="提示" @ok="handleOk1(item.type,item.id)" @cancel="handCancel1" width="900px" height="1200px">
                        <p>請選擇需要上傳的憑證文件</p>
                         <a-form-model>
                             <a-form-model-item
                               prop="payOrderFiles"
                               >
                            <upload
                                :value.sync="form.accessoryFiles"
                                :multiple="true"
                            ></upload>
                             </a-form-model-item>
                         </a-form-model>
                    </a-modal> 


                    <!-- 查看憑證-->
                        <a-button
                        v-if="item.status === 'alreadypaid' && (item.type == 'PARTICIPATE' || item.type == 'MISSION')"
                            type="link"
                            @click="downloadCar(item.type,item.id)"
                            >{{
                                 $t("personal.download1")
                            }}</a-button>   

                    <a-modal v-model="visible2" title="提示"  @cancel="handCancel2" width="900px" height="1200px">
                        <p>請選擇需要下載的憑證文件</p>
                         <a-form-model>
                               <ul v-for="item in certificate" :key="item.index">
                                   <a :href='item.url' download="">{{item.oriname}}</a>
                               </ul>
                         </a-form-model>
                    </a-modal> 

                        <!-- 查看問卷 当前返回的数据中 status 在item.activity.status-->
                        <a-button
                            v-if="
                                (item.status === 'passed' ||
                                    item.status === 'finish') &&
                                    (item.activity.showStatus === 'END' ||
                                    item.activity.showStatus === 'PUBLISH')
                            "
                            type="link"
                            @click="
                                NavigateTo('/personal/question', {
                                    participateId: item.id,
                                    activityId: item.activity.id,
                                    institutionId: item.institution.id,
                                    questionnaireAnswerId:
                                        item.questionnaireAnswerId,
                                    method: item.method,
                                    participateScope: item.activityScope,
                                    

                                })
                            "
                            >{{
                                item.questionnaireAnswerId
                                    ? $t("personal.showQuestion")
                                    : $t("personal.writeQuestion")
                            }}</a-button
                        >
                        <!-- <a-button
                            v-if="
                                (item.status === 'passed' ||
                                    item.status === 'finish') &&
                                    item.activity.showStatus === 'END'
                            "
                            type="link"
                            :disabled="item.applyPictureStatus === 'approving'"
                            @click="
                                NavigateTo('/personal/picture', {
                                    participateId: item.id,
                                    activityId: item.activity.id,
                                    liaisonId: item.liaisonId,
                                    institutionId: item.institution.id,
                                    applyPictureId: item.applyPictureId
                                })
                            "
                            >{{
                                item.applyPictureStatus | pictureTextFilter
                            }}</a-button
                        > -->
                    </div>
                <!-- </div> -->
                
                <!-- 从这里区分APPLY和AID -->
                
                <!-- <a-tag slot="status" :color="item.status | formatStatus">{{
                    item.status | statusTextFilter
                }}</a-tag> -->
                <div slot="action" class="button-wrapper" v-if="item.applyfortype === 'AID'">
                        
                    <a-button
                        type="link"
                        v-if="item.status === 'approving' && item.activity && item.type === 'ENTERPRISE' && item.tasks.length == 1"
                        @click="cancel(item.id)"
                        >{{  
                            $t("personal.cancel")    
                        }}
                        
                        </a-button>

                    <a-modal v-model="visible" title="提示" @ok="handleOk" @cancel="handCancel">
                        <p>確定要取消申請嗎</p>
                    </a-modal>

                    <a-button type="link" v-if="item.status != 'tosubmit'" @click="ExportPDF(item.code, item.type)">下載資料</a-button>
                    <a-button
                        v-if="
                            item.activity && (item.status === 'passed' || item.status === 'finish') && item.activity.showStatus === 'END'
                        "
                        type="link"
                        @click="
                            NavigateTo('/report/index', {
                                id: item.id,
                                reportType: item.type,
                                reportId: item.report ? item.report.id : '',
                            })
                        "
                        >{{ $t("personal.report") }}</a-button
                    >
                    <a-button v-if="
                            item.activity && (item.status === 'passed' || item.status === 'finish') && item.activity.showStatus === 'END' && item.type === 'ENTERPRISE'"
                        type="link" @click="ExportNavigateTo(item.code)">下載展會報告資料</a-button>


                   <a-button
                        type="link"
                        v-if="item.status != 'rejected'"
                        @click="
                            FormNavigateAID(item.type,item.status,{
                                d: item.id,
                                a: item.institutionId,
                            })
                        "
                        >{{
                             item.status === 'supplementinfo' || item.status === 'tosubmit'
                                ? $t("personal.update")
                                : $t("personal.showForm")
                        }}</a-button>
                    <a-button
                        v-if="(item.status === 'passed' || item.status === 'finish') && 
                            (item.activity  ? item.activity.showStatus === 'END' : true)
                        "
                        type="link"
                        @click="
                            NavigateTo('/personal/question', {
                                participateId: item.id,
                                activityId: item.activity ? item.activity.id : '',
                                institutionId: item.institution.id,
                                participateScope: item.activityScope,
                                questionnaireAnswerId:
                                    item.questionnaireAnswerId,
                                method: item.method,
                                type: item.type,
                                
                            })
                        "
                        >{{
                            item.questionnaireAnswerId
                                ? $t("personal.showQuestion")
                                : $t("personal.writeQuestion")
                        }}</a-button
                    >
                    <a-button
                        v-if="(item.status === 'passed' || item.status === 'finish') && 
                            (item.activity  ? item.activity.showStatus === 'END' : true)
                        "
                        type="link"
                        :disabled="item.applyPictureStatus === 'approving'"
                        @click="
                            NavigateTo('/personal/picture', {
                                participateId: item.id,
                                activityId: item.activity ? item.activity.id : '',
                                liaisonId: item.liaisonId,
                                institutionId: item.institution.id,
                                applyPictureId: item.applyPictureId,
                                participateScope: item.activityScope
                            })
                        "
                        >{{
                            item.applyPictureStatus | pictureTextFilter
                        }}</a-button
                    >
                </div>
              
            </cell>
        </div>
        <pagination :page.sync="page" :size="size" :total="total" />
    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";
import Cell from "./components/cell";
import Pagination from "@/components/pagination";
import Participate from "@/apis/participate";
import Institution  from "@/apis/institution";
import i18n from "@/assets/i18n/index";
import PDFDown from "@/apis/PDFDown";
import Upload from "@/components/upload";
export default {
    components: { Cell, Pagination, Upload },
    data() {
        return {
            loading: false,
            status: "approving",
            page: 0,
            size: 5,
            total: 1,
            list: [],
            visible: false,
            visible1: false,
            visible2: false,
            certificate: [],
            form: {
                accessoryFiles: '',
                id: '',
            }
               
                
            
        };
    },
    computed: {
        ...mapGetters(["currentInstitution"])
    },
    watch: {
        status: function() {
            this.page = 0;
            this.initData();
        },
        page: function() {
            this.initData();
        }
    },
    filters: {
        formatStatus: function(value) {
            switch (value) {
                case "approving":
                    return "blue";
                case "passed":
                    return "green";
                case "rejected":
                    return "orange";
                case "withdraw":
                    return "red";
                case "finish":
                    return "green";
                case "supplementinfo":
                    return "orange";
                case "obligation":
                    return "yellow";
                case "tosubmit":
                    return "green";
                case "alreadypaid":
                    return "purple";
            }
        },
        statusTextFilter: function(value) {
            switch (value) {
                case "approving":
                    return i18n.t("personal.approving");
                case "passed":
                    return i18n.t("personal.passed");
                case "rejected":
                    return i18n.t("personal.rejected");
                case "withdraw":
                    return i18n.t("personal.withdraw");
                case "finish":
                    return i18n.t("personal.finish");
                case "supplementinfo":
                    return i18n.t("personal.supplementinfo");
                case "obligation":
                    return i18n.t("personal.obligation");
                case "tosubmit":
                    return i18n.t("personal.tosubmit");
                case "alreadypaid":
                    return i18n.t("personal.alreadypaid");
            }
        },
        pictureTextFilter: function(value) {
            switch (value) {
                case "approving":
                    return i18n.t("personal.uploading");
                case "passed":
                    return i18n.t("personal.showPic");
                default:
                    return i18n.t("personal.uploadPic");
            }
        }
    },
    methods: {
        initData: async function() {
            if (!this.currentInstitution) {
                return;
            }
            this.loading = true;
            const { data } = await Participate.get({
                institutionId: this.currentInstitution.id,
                page: this.page,
                size: this.size,
                approved: this.status === "unapproved"
            });

            
           this.list = data ? data.content : [];

           console.log("899898",this.list)


            // let filterData = data.content.filter(obj => obj.activity != null);
            // this.$set(this.list,0, filterData);
            this.total = data ? data.totalElements : 0;
            this.loading = false;

        },
        Transform: function(o) {
            Object.keys(o).map(item => {
                if (o[item]) {
                    o[item] = escape(this.$crypto.encryption(o[item]));
                } else {
                    delete o[item];
                }
            });
            return o;
        },
        FormNavigate: function(form, o) {
            const query = {
                form,
                ...this.Transform(o)
            };
            this.$router.push({
                path: "/myform/index",
                query
            });
        },
        FormNavigateAID: function(form, status, o, institutionId) {
            // 參數MISSION轉為bb
            form = form == "EN_MISSION" ? "bb" : form;
            const query = {
                form,
                ...this.Transform(o),
                institutionId,
                status
            };
            this.$router.push({
                path: "/myform/special",
                query
            });
        },


        cancel(o) {
            this.visible = true;
            sessionStorage.setItem("exhibitionId",o)
        },

       async handleOk(){
           this.visible = false;
           const o = sessionStorage.getItem("exhibitionId");
           const { data } = await Institution.cancel(o);
             location.reload();
        },
        handCancel(){
           this.visible = false;
        },

        async handleOk1(type,id){
           this.visible1 = false;
           console.log("121221",id)
           this.form.id = id;
        //   if(type == 'PARTICIPATE'){
        //       const {data} = await Institution.certificate_2(this.form);
        //   }else if(type == 'MISSION'){
        //       const {data} = await Institution.certificate_1(this.form);
        //   }
           console.log("32322",this.form.id)
           const {data} = await Institution.certificate(this.form);
           console.log(data)

        },
        handCancel1(){
           this.visible1 = false;
        },

        async handleOk2(type,id){
           this.visible1 = false;
           this.form.id = id;
        //   if(type == 'PARTICIPATE'){
        //       const {data} = await Institution.certificate_2(this.form);
        //   }else if(type == 'MISSION'){
        //       const {data} = await Institution.certificate_1(this.form);
        //   }

           const {data} = await Institution.certificate(this.form);
           console.log(data)

        },
        handCancel2(){
           this.visible2 = false;
        },


        NavigateTo: function(path, o) {
            const query = this.Transform(o);
            this.$router.push({ path, query });
        },
        ExportPDF: async function(code, type) {
            // if('ENTERPRISE' != type && 'MISSION' != type && 'CONVENTION' != type && 'ATTEND' != type){
            //     alert("提示: 目前暂时支持031, 032, 033、034申请类型！");
            //     return;
            // }
        
            this.loading = true;
            const { data } = await PDFDown.get({
                applyCode: code,
                encourageType: type
            });
            this.pdfFileName = data ? data.pdfFileName : null;
            this.loading = false;
        
            if(null != this.pdfFileName)
                this.DownloadPDF(this.pdfFileName);
            else {
                alert('提示: 服务端数据不匹配！')
            }
        },
         ExportNavigateTo: async function(code) {
        
            this.loading = true;
            const { data } = await PDFDown.get({
                applyCode: code,
                encourageType: 'REPORT'
            });
            this.pdfFileName = data ? data.pdfFileName : null;
            this.loading = false;
        
            if(null != this.pdfFileName)
              if(this.pdfFileName == 'Report'){
                  alert('請填寫展會報告資料');
              }else{
                  this.DownloadPDF(this.pdfFileName);
              }
            else {
                alert('提示: 服务端数据不匹配！')
            }
        },
        DownloadPDF: function(pdfName){
            window.open('/api/export_pdf/' + pdfName);
        },
        uploadCar(){
            this.visible1 = true;
        },
       async downloadCar(type,id){
        //    if(type == 'PARTICIPATE'){
        //       const {data} = await Institution.downloadCar_1(id);
        //       console.log(data);
        //       window.open(data)
        //   }else if(type == 'MISSION'){
        //       const {data} = await Institution.downloadCar_2(id);
        //       console.log(data)
        //   }
            // down(url, name)  

        const {data} = await Institution.downloadCar(id);

        this.certificate = data;

        this.visible2 = true;
       }

    },
    mounted: function() {
        this.initData();
    }
};
</script>

<style lang="less" scoped>
.container {
    /deep/.ant-tabs-bar {
        border-color: transparent;
    }
    /deep/.ant-tabs-nav .ant-tabs-tab {
        font-size: 18px;
    }
    /deep/.ant-btn-sm {
        font-size: 12px;
    }
    .list-content {
        min-height: 300px;
        padding-bottom: 30px;
    }
    .empty {
        min-height: 400px;
    }
}
</style>
