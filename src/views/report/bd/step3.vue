<template>
    <div class="all">
        <a-form-item :label="$t('reportbd.officeNameZh')">
            <a-input :model="activity.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.officeNameEn')">
            <a-input :model="activity.nameEn" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.activeUrl')">
            <a-input :model="activity.website" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.ej')">
            <a-radio-group name="radioGroup" :model="activity.trades" disabled>
                <a-radio value="GENERAL_MEET">{{ $t("reportbd.ek") }}</a-radio>
                <a-radio value="INT_MEET">{{ $t("reportbd.el") }}</a-radio>
                <a-radio value="GENERAL_EXHIBIT">{{ $t("reportbd.em") }}</a-radio>
                <a-radio value="SPECIALTY_EXHIBIT">{{ $t("reportbd.en") }}</a-radio>
                <a-radio value="MEET_EXHIBIT">{{ $t("reportbd.eo") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.activeTime')">
            <a-input :model="activity.date" disabled />
        </a-form-item>
        <a-form-model-item :label="$t('reportbd.activeSummary')" props="activeSummary">
            <upload
                type="image"
                :multiple="true"
                :value.sync="form.attachments"
                @handleChange="uploadChange"
            ></upload>
        </a-form-model-item>
        <a-form-item>
            <a-button type="primary" @click="preClick" style="margin-right:12px">上一步</a-button>
            <a-button type="primary" @click="nextClick">下一步</a-button>
        </a-form-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    props: ["activity", 'attachments'],
    data() {
        return {
            form: { attachments: [] }
        };
    },
    methods: {
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.form.attachments = this.form.attachments.map(i => ({...i, type: 'activeSummary'}))
            this.$emit('next', this.form)
        },
        // 更改上傳的文件
        uploadChange(info) {
            this.form.attachments = info
        },
    },
    mounted(){
        this.form.attachments = this.attachments.filter(i => i.type === 'activeSummary')
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
</style>
