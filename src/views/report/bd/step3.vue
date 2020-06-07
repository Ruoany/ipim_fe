<template>
    <div class="all">
        <a-form-model-item :label="$t('reportbd.officeNameZh')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.officeNameEn')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.activeUrl')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.ej')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("reportbd.ek") }}</a-radio>
                <a-radio :value="2">{{ $t("reportbd.el") }}</a-radio>
                <a-radio :value="3">{{ $t("reportbd.em") }}</a-radio>
                <a-radio :value="4">{{ $t("reportbd.en") }}</a-radio>
                <a-radio :value="5">{{ $t("reportbd.eo") }}</a-radio>
            </a-radio-group>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.activeTime')">
            <a-range-picker class="full" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.activeSummary')">
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
            form: { activeSummary: [] }
        };
    },
    methods: {
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.$emit('next', this.form)
        },
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
