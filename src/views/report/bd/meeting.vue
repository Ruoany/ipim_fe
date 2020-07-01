<template>
    <div class="all"> 
         <a-form-model-item :label="$t('reportbd.personCount')" props="totalExhibitors">
            <a-input-number v-model.number="editData.totalExhibitors" :min="0" style="width: 100%" />
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.macaoPersionCount')" props="totalMacaoParticipants">
            <a-input-number v-model.number="editData.totalMacaoParticipants" :min="0" style="width: 100%" />
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.overseasPersionCount')" props="totalOverseasParticipants">
            <a-input-number v-model.number="editData.totalOverseasParticipants" :min="0" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.parInformation')" props="participant">
            <upload
                type="image"
                :multiple="true"
                :value.sync="editData.attachments_participant"
                @handleChange="uploadChange"
            ></upload>
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
    },
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
</style>
