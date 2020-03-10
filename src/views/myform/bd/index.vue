<template>
    <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
        <div class="form-title">{{ $t("formbd.note") }}</div>
        <div class="form-text">
            <div>{{ $t("formbd.text1") }}</div>
            <div>{{ $t("formbd.text2") }}</div>
            <div>
                {{ $t("formbd.text3") }}
                <ul>
                    <li>{{ $t("formbd.text4") }}</li>
                    <li>{{ $t("formbd.tel") }}(853)8798 9292</li>
                    <li>{{ $t("formbd.email") }}cesp@ipim.gov.mo</li>
                </ul>
            </div>

            <div>{{ $t("formbd.text5") }}</div>
            <div>{{ $t("formbd.text6") }}</div>
            <div>{{ $t("formbd.text7") }}</div>
        </div>
        <div class="form-title">{{ $t("formbd.aa") }}</div>
        <div class="form-text"></div>
        <a-form-item :label="$t('formbd.officeNameZh')">
            <a-input />
        </a-form-item>

        <a-form-item :label="$t('formbd.officeNameEn')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.officeBankName')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.comType')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.appliType')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('util.country')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('util.city')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.address')">
            <a-input />
        </a-form-item>

        <a-form-item :label="$t('formbd.tel')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.fax')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.email')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.url')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.text14')">
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
        <div class="form-title">{{ $t("formbd.contact") }}</div>
        <div class="form-text"></div>
        <a-form-item :label="$t('formbd.conPerson1')">
            <a-auto-complete @search="handleSearch">
                <template slot="dataSource">
                    <a-select-option v-for="email in result" :key="email">{{ email }}</a-select-option>
                </template>
            </a-auto-complete>
        </a-form-item>
        <a-form-item :label="$t('formbd.tel')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.phone')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.email')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.conPerson2')">
            <a-auto-complete @search="handleSearch">
                <template slot="dataSource">
                    <a-select-option v-for="email in result" :key="email">{{ email }}</a-select-option>
                </template>
            </a-auto-complete>
        </a-form-item>
        <a-form-item :label="$t('formbd.tel')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.phone')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.email')">
            <a-input />
        </a-form-item>

        <div class="form-title">{{ $t("formbd.ab") }}</div>
        <div class="form-text"></div>
        <a-form-item :label="$t('formbd.officeNameZh')">
            <a-input />
        </a-form-item>

        <a-form-item :label="$t('formbd.officeNameEn')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.activeUrl')">
            <a-input />
        </a-form-item>

        <a-form-item :label="$t('formbd.meetingCycle')">
            <a-input />
        </a-form-item>
        <div class="form-title">{{ $t("formbd.ac") }}</div>
        <div class="form-text"></div>

        <meeting-form></meeting-form>
        <div class="form-title">{{ $t("formbd.ad") }}</div>
        <div class="form-text"></div>
        <show-form></show-form>
        <div class="form-title">{{ $t("formbd.am") }}</div>
        <div class="form-text"></div>
        <area-form></area-form>

        <a-form-item :wrapperCol="upLabel">
            <a-button type="primary" size="large">{{ $t("formbd.submit") }}</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import { upFiles } from "@/apis/files";
import meetingForm from "./meeting";
import areaForm from "./area";
import showForm from "./show";
export default {
    components: { meetingForm, showForm, areaForm },
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
