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
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                :form="form"
                @submit="handleSubmit"
                v-bind="formItemLayout"
            >
                <Note v-show="step === 0"></Note>
                <div v-show="step === 1">
                    <a-form-model-item :label="$t('formbd.officeNameZh')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('formbd.officeNameEn')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.officeBankName')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{ $t("formbd.eb") }}</a-radio>
                            <a-radio :value="2">{{ $t("formbd.ec") }}</a-radio>
                        </a-radio-group>
                        <a-input class="full" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.comType')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{ $t("formbd.dw") }}</a-radio>
                            <a-radio :value="2">{{ $t("formbd.dy") }}</a-radio>
                            <a-radio :value="3">{{ $t("formbd.dz") }}</a-radio>
                            <a-radio :value="4">{{ $t("formbd.ea") }}</a-radio>
                            <a-radio
                                >{{ $t("util.other") }}({{
                                    $t("formbd.dm")
                                }})</a-radio
                            >
                        </a-radio-group>
                        <a-input class="full" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.appliType')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{ $t("formbd.ed") }}</a-radio>
                            <a-radio :value="2">{{ $t("formbd.ee") }}</a-radio>
                            <a-radio :value="3">{{ $t("formbd.ef") }}</a-radio>
                            <a-radio :value="4"
                                >{{ $t("util.other") }}({{
                                    $t("formbd.dm")
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
                    <a-form-model-item :label="$t('formbd.address')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('formbd.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.fax')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.email')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.url')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.text14')">
                        <upload />
                    </a-form-model-item>
                </div>
                <div v-show="step === 2">
                    <a-form-model-item :label="$t('formbd.conPerson1')">
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
                    <a-form-model-item :label="$t('formbd.job')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.phone')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.email')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.conPerson2')">
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
                    <a-form-model-item :label="$t('formbd.job')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.phone')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.email')">
                        <a-input />
                    </a-form-model-item>
                </div>
                <div v-show="step === 3">
                    <a-form-model-item :label="$t('formbd.officeNameZh')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('formbd.ej')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{ $t("formbd.ek") }}</a-radio>
                            <a-radio :value="2">{{ $t("formbd.el") }}</a-radio>
                            <a-radio :value="3">{{ $t("formbd.em") }}</a-radio>
                            <a-radio :value="4">{{ $t("formbd.en") }}</a-radio>
                            <a-radio :value="5">{{ $t("formbd.eo") }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbd.activeUrl')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('formbd.meetingCycle')">
                        <a-input />
                    </a-form-model-item>
                </div>
                <meeting-form v-show="step === 4"></meeting-form>
                <show-form v-show="step === 's'"></show-form>
                <area-form v-show="step === 5"></area-form>
                <a-form-model-item>
                    <a-button
                        type="primary"
                        @click="step--"
                        v-show="step > 0"
                        style="margin-right:12px"
                        >上一步</a-button
                    >
                    <a-button type="primary" @click="step++" v-show="step < 5"
                        >下一步</a-button
                    >
                    <a-button v-show="step === 5" type="primary">{{
                        $t("formbd.submit")
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
        handleSubmit(e) {},
        handleChange() {}
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
