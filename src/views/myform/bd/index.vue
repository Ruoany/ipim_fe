<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('formbd.note')" />
            <a-step :title="$t('formbd.aa')" />
            <a-step :title="$t('formbd.contact')" />
            <a-step :title="$t('formbd.ab')" />
            <a-step :title="$t('formbd.ac')" />
            <a-step :title="$t('formbd.am')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formItemLayout">
            <Note v-show="step===0"></Note>

            <div v-show="step===1">
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
            </div>
            <div v-show="step===2">
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
            </div>

            <div v-show="step===3">
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
            </div>

            <meeting-form v-show="step===4"></meeting-form>

            <show-form v-show="step==='s'"></show-form>

            <area-form v-show="step===5"></area-form>
            <a-form-item>
                <a-button type="primary" @click="step--" v-if="step >0">上一步</a-button>
                <a-button
                    type="primary"
                    style="margin-left:12px"
                    @click="step++"
                    v-if="step < 5"
                >下一步</a-button>
            </a-form-item>

            <a-form-item v-show="step===5">
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
