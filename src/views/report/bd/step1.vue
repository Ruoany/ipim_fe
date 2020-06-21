<template>
    <div class="all"> 
        <a-form-item :label="$t('reportbd.registerNameZh')">
            <a-input :value="institution.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.registerNameEn')">
            <a-input :value="institution.nameEn" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.appliType')">
            <a-radio-group name="radioGroup" :value="institution.applicantType" disabled>
                <a-radio value="ALL">{{ $t("reportbd.ed") }}</a-radio>
                <a-radio value="ORGANIZER">{{ $t("reportbd.ee") }}</a-radio>
                <a-radio value="LOCAL_BRANCH">{{ $t("reportbd.ef") }}</a-radio>
                <a-radio value="OTHER">{{ $t("util.other") }}({{$t("reportbd.dm")}})</a-radio>
            </a-radio-group>
            <a-input class="full" :value="institution.applicantTypeDescription" disabled />
        </a-form-item>
        <a-form-item :label="$t('util.country')">
            <a-input :value="institution.country" disabled />
        </a-form-item>
        <a-form-item :label="$t('util.city')">
            <a-input :value="institution.city" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.address')">
            <a-input :value="institution.address" disabled />
        </a-form-item>

        <a-form-item :label="$t('reportbd.tel')">
            <a-input :value="institution.phone" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.fax')">
            <a-input :value="institution.fax" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.email')">
            <a-input :value="institution.email" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.url')">
            <a-input :value="institution.website" disabled />
        </a-form-item>
        <a-form-model-item :label="$t('reportbd.text14')" props="institution">
            <upload disabled :value.sync="institution.relatedFiles"></upload>
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    props:['institution'],
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
