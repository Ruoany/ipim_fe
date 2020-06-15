<template>
    <div class="all"> 
        <a-form-item :label="$t('reportbd.registerNameZh')" props="nameZh">
            <a-input :model="institution.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.registerNameEn')" props="nameEn">
            <a-input :model="institution.nameEn" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.appliType')" props="applicantType">
            <a-radio-group name="radioGroup" :model="institution.applicantType" disabled>
                <a-radio value="ALL">{{ $t("reportbd.ed") }}</a-radio>
                <a-radio value="ORGANIZER">{{ $t("reportbd.ee") }}</a-radio>
                <a-radio value="LOCAL_BRANCH">{{ $t("reportbd.ef") }}</a-radio>
                <a-radio value="OTHER">{{ $t("util.other") }}({{$t("reportbd.dm")}})</a-radio>
            </a-radio-group>
            <a-input class="full" :model="institution.applicantTypeDescription" disabled />
        </a-form-item>
        <a-form-item :label="$t('util.country')">
            <a-input :model="institution.countryZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('util.city')">
            <a-input :model="institution.cityZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.address')">
            <a-input :model="institution.streetZh" disabled />
        </a-form-item>

        <a-form-item :label="$t('reportbd.tel')">
            <a-input :model="institution.tel" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.fax')">
            <a-input :model="institution.fax" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.email')">
            <a-input :model="institution.email" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.url')">
            <a-input :model="institution.website" disabled />
        </a-form-item>
        <a-form-model-item :label="$t('reportbd.text14')" props="institution">
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
    props:['institution', 'attachments'],
    data() {
        return {
            form: {
                attachments: []
            }
        };
    },
    methods: {
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.form.attachments = this.form.attachments.map(i => ({...i, type: 'institution'}))
            this.$emit('next', this.form)
        },
        // 更改上傳的文件
        uploadChange(info) {
            this.form.attachments = info
        },
    },
    mounted(){
        this.form.attachments = this.attachments.filter(i => i.type === 'institution')
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
