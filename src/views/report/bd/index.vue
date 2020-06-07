<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('reportbd.note')" />
            <a-step :title="$t('reportbd.aa')" />
            <a-step :title="$t('reportbd.contact')" />
            <a-step :title="$t('reportbd.ab')" />
            <a-step :title="$t('reportbd.ac')" />
            <a-step :title="$t('reportbd.ad')" />
            <a-step :title="$t('reportbd.am')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                :form="form"
                @submit="handleSubmit"
                v-bind="formItemLayout"
            >
                <Note v-show="step === 0"></Note>
                <div v-show="step === 1">
                    <a-form-model-item :label="$t('reportbd.officeNameZh')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('reportbd.officeNameEn')">
                        <a-input />
                    </a-form-model-item>
                    <!-- <a-form-model-item :label="$t('reportbd.officeBankName')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{ $t("reportbd.eb") }}</a-radio>
                            <a-radio :value="2">{{ $t("reportbd.ec") }}</a-radio>
                        </a-radio-group>
                        <a-input class="full" />
                    </a-form-model-item> 
                    <a-form-model-item :label="$t('reportbd.comType')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{ $t("reportbd.dw") }}</a-radio>
                            <a-radio :value="2">{{ $t("reportbd.dy") }}</a-radio>
                            <a-radio :value="3">{{ $t("reportbd.dz") }}</a-radio>
                            <a-radio :value="4">{{ $t("reportbd.ea") }}</a-radio>
                            <a-radio
                                >{{ $t("util.other") }}({{
                                    $t("reportbd.dm")
                                }})</a-radio
                            >
                        </a-radio-group>
                        <a-input class="full" />
                    </a-form-model-item> -->
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
                        <upload />
                    </a-form-model-item>
                </div>
                <div v-show="step === 2">
                    <a-form-model-item :label="$t('reportbd.conPerson1')">
                        <a-select
                            v-model="form.liaisonId1"
                            showSearch
                            optionFilterProp="label"
                            :filterOption="true"
                        >
                            <a-select-option
                                v-for="item in liaisonList"
                                :key="item.id"
                                :value="item.id"
                                :label="`${item.nameZh}${item.nameEnOrPt}`"
                                >{{ item.nameZh }}
                                {{ item.nameEnOrPt }}</a-select-option
                            >
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.job')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.phone')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.email')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.conPerson2')">
                        <a-select
                            v-model="form.liaisonId2"
                            showSearch
                            optionFilterProp="label"
                            :filterOption="true"
                        >
                            <a-select-option
                                v-for="item in liaisonList"
                                :key="item.id"
                                :value="item.id"
                                :label="`${item.nameZh}${item.nameEnOrPt}`"
                                >{{ item.nameZh }}
                                {{ item.nameEnOrPt }}</a-select-option
                            >
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.job')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.phone')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbd.email')">
                        <a-input />
                    </a-form-model-item>
                </div>
                <div v-show="step === 3">
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
                    <a-form-item :label="$t('reportbd.activeTime')">
                        <a-range-picker class="full" />
                    </a-form-item>
                     <a-form-item :label="$t('reportbd.activeSummary')">
                        <a-upload-dragger
                            name="file"
                            :multiple="true"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            @change="handleChange"
                        >
                            <p class="ant-upload-drag-icon">
                                <a-icon type="inbox" />
                            </p>
                            <p class="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p class="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from
                                uploading company data or other band files
                            </p>
                        </a-upload-dragger>
                    </a-form-item>
                    <!-- <a-form-model-item :label="$t('reportbd.meetingCycle')">
                        <a-input />
                    </a-form-model-item> -->
                </div>
                <meeting-form v-show="step === 4"></meeting-form>
                <show-form v-show="step === 5"></show-form>
                <area-form v-show="step === 6"></area-form>
                <a-form-model-item>
                    <a-button
                        type="primary"
                        @click="step--"
                        v-show="step > 0"
                        style="margin-right:12px"
                        >上一步</a-button
                    >
                    <a-button type="primary" @click="step++" v-show="step < 6"
                        >下一步</a-button
                    >
                    <a-button v-show="step === 6" type="primary">{{
                        $t("reportbd.submit")
                    }}</a-button>
                </a-form-model-item>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Upload from "@/components/upload";
import meetingForm from "./meeting";
import areaForm from "./area";
import showForm from "./show";
import Note from "./note";
import validate from "./validate";
export default {
    props: { list: Array },
    components: { meetingForm, showForm, areaForm, Note, Upload },
    computed: {
        ...mapGetters(["liaisonList"])
    },
    data() {
        return {
            ...validate,
            formId: undefined,
            form: {
                liaisonId1: "",
                liaisonId2: ""
            }
        };
    },
    methods: {
        handleSubmit() {},
        handleChange() {}
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
