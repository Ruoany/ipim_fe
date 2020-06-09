<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('convention.note')" />
            <a-step :title="$t('convention.aa')" />
            <a-step :title="$t('convention.contact')" />
            <a-step :title="$t('convention.ab')" />
            <a-step :title="$t('convention.ac')" />
            <a-step :title="$t('convention.am')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                :form="form"
                @submit="handleSubmit"
                v-bind="formItemLayout"
            >
                <div v-show="step === 0">
                    <p>{{ $t("convention.text1") }}</p>
                    <p>{{ $t("convention.text2") }}</p>
                    <p>
                        {{ $t("convention.text3") }}
                        <ul>
                            <li>{{ $t("convention.text4") }}</li>
                            <li>{{ $t("convention.tel") }}(853)8798 9292</li>
                            <li>
                                {{ $t("convention.email") }}cesp@ipim.gov.mo
                            </li>
                        </ul>
                    </p>

                    <p>{{ $t("convention.text5") }}</p>
                    <p>{{ $t("convention.text6") }}</p>
                    <p>{{ $t("convention.text7") }}</p>
                </div>
                <div v-show="step === 1">
                    <a-form-model-item :label="$t('convention.officeNameZh')">
                        <a-input :value="currentInstitution.nameZh" disabled />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('convention.officeNameEn')">
                        <a-input :value="currentInstitution.nameEn" disabled />
                        <p>{{$t('convention.tips')}}</p>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.officeBankName')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{
                                $t("convention.eb")
                            }}</a-radio>
                            <a-radio :value="2">{{
                                $t("convention.ec")
                            }}</a-radio>
                        </a-radio-group>
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.comType')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{
                                $t("convention.dw")
                            }}</a-radio>
                            <a-radio :value="2">{{
                                $t("convention.dy")
                            }}</a-radio>
                            <a-radio :value="3">{{
                                $t("convention.dz")
                            }}</a-radio>
                            <a-radio :value="4">{{
                                $t("convention.ea")
                            }}</a-radio>
                            <a-radio
                                >{{ $t("util.other") }}({{
                                    $t("convention.dm")
                                }})</a-radio
                            >
                        </a-radio-group>
                        <a-input class="full" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.appliType')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{
                                $t("convention.ed")
                            }}</a-radio>
                            <a-radio :value="2">{{
                                $t("convention.ee")
                            }}</a-radio>
                            <a-radio :value="3">{{
                                $t("convention.ef")
                            }}</a-radio>
                            <a-radio :value="4"
                                >{{ $t("util.other") }}({{
                                    $t("convention.dm")
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
                    <a-form-model-item :label="$t('convention.address')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('convention.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.fax')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.email')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.url')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.text14')">
                        <upload />
                    </a-form-model-item>
                </div>
                <div v-show="step === 2">
                    <a-form-model-item :label="$t('convention.conPerson1')">
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
                    <a-form-model-item :label="$t('convention.job')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.phone')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.email')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.conPerson2')">
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
                    <a-form-model-item :label="$t('convention.job')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.tel')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.phone')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.email')">
                        <a-input />
                    </a-form-model-item>
                </div>
                <div v-show="step === 3">
                    <a-form-model-item :label="$t('convention.officeNameZh')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('convention.ej')">
                        <a-radio-group name="radioGroup" :defaultValue="1">
                            <a-radio :value="1">{{
                                $t("convention.ek")
                            }}</a-radio>
                            <a-radio :value="2">{{
                                $t("convention.el")
                            }}</a-radio>
                            <a-radio :value="3">{{
                                $t("convention.em")
                            }}</a-radio>
                            <a-radio :value="4">{{
                                $t("convention.en")
                            }}</a-radio>
                            <a-radio :value="5">{{
                                $t("convention.eo")
                            }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('convention.activeUrl')">
                        <a-input />
                    </a-form-model-item>

                    <a-form-model-item :label="$t('convention.meetingCycle')">
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
                        $t("convention.submit")
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
import validate from "./validate";
export default {
    props: { list: Array },
    components: { meetingForm, showForm, areaForm, Upload },
    computed: {
        ...mapGetters(["liaisonList", "currentInstitution"])
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
p {
    line-height: 30px;
    font-size: 15px;
}
</style>
