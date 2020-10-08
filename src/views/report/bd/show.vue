<template>
    <div class="all"> 
         <a-form-model-item :label="$t('reportbd.exhibitorsCount')" props="exTotalExhibitors">
            <a-input-number :min="0" v-model.number="editData.exTotalExhibitors" style="width: 100%" />
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.allParticipants')" props="exTotalMacaoParticipants">
            <a-input-number :min="0" v-model.number="editData.exTotalMacaoParticipants" style="width: 100%" />
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.overseasParticipants')" props="exTotalOverseasParticipants">
            <a-input-number :min="0" v-model.number="editData.exTotalOverseasParticipants" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.actualParticipation')" props="exParticipation">
            <upload
                type="image"
                :multiple="true"
                :value.sync="editData.attachments_exParticipation"
                @handleChange="uploadChange"
            ></upload>
        </a-form-model-item>
        <a-form-model-item
            v-for="(item, index) in editData.activityJoins"
            :key="item.key"
            :label="index === 0 ? $t('reportbd.aj') : index === 1 ? $t('reportbd.ai') : $t('reportbd.ak')"
            :prop="'activityJoins.' + index"
            >
           <div class="flex-justify-content-space-between">
                <a-input-number :min="0" v-model.number="item.exhibitorsBooth" style="width:24%;" :placeholder="$t('reportbd.ep')"/>
                <a-input-number :min="0" v-model.number="item.exhibitors" style="width:24%;" :placeholder="$t('reportbd.eq')"/>
                <a-input-number :min="0" v-model.number="item.professionalBuyer" style="width:24%;" :placeholder="$t('reportbd.er')"/>
                <a-input-number :min="0" v-model.number="item.watchingThePublic" style="width:24%;" :placeholder="$t('reportbd.ex')"/>
            </div>
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    props:['editData'],
    methods: {
        // 更改上傳的文件
        uploadChange(info) {
            this.editData.attachments = info
        },
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
