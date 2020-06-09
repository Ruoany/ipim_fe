<template>
    <div class="all"> 
         <a-form-model-item :label="$t('reportbd.exhibitorsCount')" props="exTotalExhibitors">
            <a-input :model="form.exTotalExhibitors"></a-input>
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.allParticipants')" props="exTotalMacaoParticipants">
            <a-input :model="form.exTotalMacaoParticipants"></a-input>
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.overseasParticipants')" props="exTotalOverseasParticipants">
            <a-input :model="form.exTotalOverseasParticipants"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.actualParticipation')" props="exParticipation">
            <upload
                type="image"
                :multiple="true"
                :value.sync="form.attachments"
                @handleChange="uploadChange"
            ></upload>
        </a-form-model-item>
        <a-form-model-item
            v-for="(item, index) in form.activityJoins"
            :key="item.key"
            :label="index === 0 ? $t('reportbd.aj') : index === 1 ? $t('reportbd.ai') : $t('reportbd.ak')"
            :prop="'activityJoins.' + index"
            >
           <div class="flex-justify-content-space-between">
                <a-input :model="item.exhibitorsBooth" style="width:24%;" :placeholder="$t('reportbd.ep')"></a-input>
                <a-input :model="item.exhibitors" style="width:24%;" :placeholder="$t('reportbd.eq')"></a-input>
                <a-input :model="item.professionalBuyer" style="width:24%;" :placeholder="$t('reportbd.er')"></a-input>
                <a-input :model="item.watchingThePublic" style="width:24%;" :placeholder="$t('reportbd.ex')"></a-input>
            </div>
        </a-form-model-item>
        <a-form-model-item>
            <a-button type="primary" @click="preClick" style="margin-right:12px">上一步</a-button>
            <a-button type="primary" @click="nextClick">下一步</a-button>
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    props:['attachments'],
    data() {
        return {
            form: { 
                exTotalExhibitors: "",
                exTotalMacaoParticipants: "",
                exTotalOverseasParticipants: "",
                attachments:[],
                activityJoins: [{
                    type: "MACAO",
                    exhibitorsBooth: "",
                    exhibitors: "",
                    professionalBuyer: "",
                    watchingThePublic: "",
                },{
                    type: "OVERSEAS",
                    exhibitorsBooth: "",
                    exhibitors: "",
                    professionalBuyer: "",
                    watchingThePublic: "",
                },{
                    type: "TOTAL",
                    exhibitorsBooth: "",
                    exhibitors: "",
                    professionalBuyer: "",
                    watchingThePublic: "",
                }]
            },
            openTime: [
                {
                    time: null,
                    houser: null
                }
            ]
        };
    },
    methods: {
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.form.attachments = this.form.attachments.map(i => ({...i, type: 'exParticipation'}))
            this.$emit('next', this.form)
        },
        // 更改上傳的文件
        uploadChange(info) {
            this.form.attachments = info
        },
    },
    mounted(){
        this.form.attachments = this.attachments.filter(i => i.type === 'exParticipation')
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
.cur {
    cursor: pointer;
}
</style>
