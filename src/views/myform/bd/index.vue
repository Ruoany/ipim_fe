<template>
    <div class="center flex">
        <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
            <div class="form-title">{{ $t("general.note") }}</div>
            <div class="form-text">
                <div>{{ $t("note.text16") }}</div>
                <div>{{ $t("note.text17") }}</div>
                <div>
                    {{ $t("note.text18") }}
                    <ul>
                        <li>{{ $t("note.text19") }}</li>
                        <li>{{ $t("form.tel") }}(853)8798 9292</li>
                        <li>{{ $t("form.email") }}cesp@ipim.gov.mo</li>
                    </ul>
                </div>

                <div>{{ $t("note.text20") }}</div>
                <div>{{ $t("note.text21") }}</div>
                <div>{{ $t("note.text22") }}</div>
            </div>
            <div class="form-title">{{ $t("general.apUnIn") }}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.officeNameZh')">
                <a-input />
            </a-form-item>

            <a-form-item :label="$t('form.officeNameEn')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.officeBankName')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.comType')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.appliType')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('util.country')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('util.city')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.address')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.tel')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.fax')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.email')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.url')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.text14')">
                <a-upload-dragger
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    @change="handleChange"
                >
                    <p class="ant-upload-drag-icon">
                        <a-icon type="inbox" />
                    </p>
                    <p class="ant-upload-text">Click or drag file to this area to upload</p>
                    <p class="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                        files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <div class="form-title">{{ $t("general.contact") }}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.conPerson1')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.job')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.tel')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.phone')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.email')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.conPerson2')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.job')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.tel')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.phone')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.email')">
                <a-input />
            </a-form-item>

            <div class="form-title">{{ $t("general.activeBack") }}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.officeNameZh')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.officeNameEn')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.activeUrl')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.meetingCycle')">
                <a-input />
            </a-form-item>

            <a-form-item :wrapperCol="upLabel">
                <a-button type="primary" size="large">{{ $t("general.submit") }}</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { upFiles } from "@/apis/files";
import meetingForm from "./meeting";
export default {
    components: { meetingForm },
    data() {
        return {
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 }
            },
            upLabel: { span: 16, offset: 4 },
            upFiles,
            headers: {},
            form: {}
        };
    },
    methods: {
        handleSubmit(e) {},
        handleChange() {}
    }
};
</script>

<style></style>
