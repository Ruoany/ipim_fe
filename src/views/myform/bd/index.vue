<template>
    <div>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formItemLayout">
            <a-steps v-model="step" direction="vertical">
                <a-step />
                <a-step />
                <a-step />
            </a-steps>
            <Note v-show="step===0"></Note>

            <div class="form-item-title">
                <p>{{ $t("formbd.aa") }}</p>
            </div>
            <a-form-item :label="$t('formbd.officeNameZh')">
                <a-input />
            </a-form-item>

            <a-form-item :label="$t('formbd.officeNameEn')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('formbd.officeBankName')">
                <a-radio-group name="radioGroup" :defaultValue="1">
                    <a-radio :value="1">{{ $t("formbd.eb") }}</a-radio>
                    <a-radio :value="2">{{ $t("formbd.ec") }}</a-radio>
                </a-radio-group>
                <a-input class="full" />
            </a-form-item>
            <a-form-item :label="$t('formbd.comType')">
                <a-radio-group name="radioGroup" :defaultValue="1">
                    <a-radio :value="1">{{ $t("formbd.dw") }}</a-radio>
                    <a-radio :value="2">{{ $t("formbd.dy") }}</a-radio>
                    <a-radio :value="3">{{ $t("formbd.dz") }}</a-radio>
                    <a-radio :value="4">{{ $t("formbd.ea") }}</a-radio>
                    <a-radio>{{ $t("util.other") }}({{ $t("formbd.dm") }})</a-radio>
                </a-radio-group>
                <a-input class="full" />
            </a-form-item>
            <a-form-item :label="$t('formbd.appliType')">
                <a-radio-group name="radioGroup" :defaultValue="1">
                    <a-radio :value="1">{{ $t("formbd.ed") }}</a-radio>
                    <a-radio :value="2">{{ $t("formbd.ee") }}</a-radio>
                    <a-radio :value="3">{{ $t("formbd.ef") }}</a-radio>
                    <a-radio :value="4">{{ $t("util.other") }}({{ $t("formbd.dm") }})</a-radio>
                </a-radio-group>
                <a-input class="full" />
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
            <div class="form-item-title">
                <p>{{ $t("formbd.contact") }}</p>
            </div>
            <a-form-item :label="$t('formbd.conPerson1')">
                <a-auto-complete @search="handleSearch">
                    <template slot="dataSource">
                        <a-select-option v-for="email in result" :key="email">{{ email }}</a-select-option>
                    </template>
                </a-auto-complete>
            </a-form-item>
            <a-form-item :label="$t('formbd.job')">
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
            <a-form-item :label="$t('formbd.job')">
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

            <div class="form-item-title">
                <p>{{ $t("formbd.ab") }}</p>
            </div>
            <a-form-item :label="$t('formbd.officeNameZh')">
                <a-input />
            </a-form-item>

            <a-form-item :label="$t('formbd.ej')">
                <a-radio-group name="radioGroup" :defaultValue="1">
                    <a-radio :value="1">{{ $t("formbd.ek") }}</a-radio>
                    <a-radio :value="2">{{ $t("formbd.el") }}</a-radio>
                    <a-radio :value="3">{{ $t("formbd.em") }}</a-radio>
                    <a-radio :value="4">{{ $t("formbd.en") }}</a-radio>
                    <a-radio :value="5">{{ $t("formbd.eo") }}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('formbd.activeUrl')">
                <a-input />
            </a-form-item>

            <a-form-item :label="$t('formbd.meetingCycle')">
                <a-input />
            </a-form-item>
            <div class="form-item-title">
                <p>{{ $t("formbd.ac") }}</p>
            </div>

            <meeting-form></meeting-form>
            <div class="form-item-title">
                <p>{{ $t("formbd.ad") }}</p>
            </div>
            <div class="form-text"></div>
            <show-form></show-form>
            <div class="form-item-title">
                <p>{{ $t("formbd.am") }}</p>
            </div>
            <div class="form-text"></div>
            <area-form></area-form>

            <a-form-item>
                <a-button type="primary" size="large">{{ $t("formbd.submit") }}</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { upFiles } from "@/apis/files";
import meetingForm from "./meeting";
import areaForm from "./area";
import showForm from "./show";
import Note from "./note";
import rules from "./validate";
export default {
    components: { meetingForm, showForm, areaForm, Note },
    data() {
        return {
            formItemLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            upFiles,
            headers: {},
            form: {},
            step: 0
        };
    },
    methods: {
        handleSubmit(e) {},
        handleChange() {}
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
