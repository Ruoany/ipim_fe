<template>
    <div class="all">
        <a-form-model-item :label="$t('reportbd.officeNameZh')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.officeNameEn')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.appliType')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("reportbd.ed") }}</a-radio>
                <a-radio :value="2">{{ $t("reportbd.ee") }}</a-radio>
                <a-radio :value="3">{{ $t("reportbd.ef") }}</a-radio>
                <a-radio :value="4"
                    >{{ $t("util.other") }}({{
                        $t("reportbd.dm")
                    }})</a-radio
                >
            </a-radio-group>
            <a-input class="full" />
        </a-form-model-item>
        <a-form-model-item :label="$t('util.country')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('util.city')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.address')">
            <a-input />
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.tel')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fax')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.email')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.url')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.text14')">
            <upload
                type="image"
                :multiple="true"
                :value.sync="form.activeSummary"
                @handleChange="uploadChange"
            ></upload>
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
    data() {
        return {
            form: { activeSummary: []}
        };
    },
    methods: {
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.$emit('next', this.form)
        },
        handleChange() {},
        //上傳的文件
        uploadChange(info) {
            const status = info.file.status;
            if (status === 'done') {
                let data = info.file.response;
                if (data.code === 200) {
                    this.$message.success(`${info.file.name} file uploaded successfully.`);
                    this.form.activeSummary.push({
                        oriname: info.file.name,
                        uid: info.file.uid,
                        url: data.data.url,
                    })
                    this.$emit('change', this.form);
                }
            } else if (status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
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
</style>
