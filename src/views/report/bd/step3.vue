<template>
    <div class="all">
        <a-form-item :label="$t('reportbd.officeNameZh')">
            <a-input :value="activity.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.officeNameEn')">
            <a-input :value="activity.nameEn" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.activeUrl')">
            <a-input :value="activity.website" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.ej')">
            <a-radio-group name="radioGroup" :value="activity.conventionType" disabled>
                <a-radio value="GENERAL_MEET">{{ $t("reportbd.ek") }}</a-radio>
                <a-radio value="INT_MEET">{{ $t("reportbd.el") }}</a-radio>
                <a-radio value="GENERAL_EXHIBIT">{{ $t("reportbd.em") }}</a-radio>
                <a-radio value="SPECIALTY_EXHIBIT">{{ $t("reportbd.en") }}</a-radio>
                <a-radio value="MEET_EXHIBIT">{{ $t("reportbd.eo") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <ul>
            <li>{{ $t("convention.fa") }}</li>
            <li>{{ $t("convention.fb") }}</li>
            <li>{{ $t("convention.fc") }}</li>
        </ul>
        <a-form-item :label="$t('reportbd.activeTime')">
            <a-input :value="activity.date" disabled />
        </a-form-item>
        <a-form-model-item :label="$t('reportbd.activeSummary')" props="attachments_activeSummary">
            <upload
                type="image"
                :multiple="true"
                :value.sync="editData.attachments_activeSummary"
                @handleChange="uploadChange"
            ></upload>
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    props: ["activity", 'editData'],
    data() {
        return {};
    },
    computed: {
        fileList(){
            return this.editData.attachments.filter(i => i.type === 'activeSummary')
        }
    },
    methods: {
        // 更改上傳的文件
        uploadChange(info) {
            this.editData.attachments = info
        },
    },
    mounted(){}
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
