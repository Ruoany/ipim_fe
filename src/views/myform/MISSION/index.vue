<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('mission.aa')" />
            <a-step :title="$t('mission.an')" />
            <a-step :title="$t('mission.au')" />
            <a-step :title="$t('mission.bh')" />
            <a-step :title="$t('mission.bn')" />
        </a-steps>
        <a-form-model
            class="form"
            ref="MISSION"
            :model="form"
            :rules="rules"
            v-bind="formItemLayout"
        >
            <div v-show="stepCurrent === 0">
                <a-form-model-item prop="nameZh" :label="$t('mission.ac')">
                    <a-input v-model="form.nameZh" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ad')">
                    <a-radio-group v-model="form.gender">
                        <a-radio value="M">{{ $t("mission.ae") }}</a-radio>
                        <a-radio value="F">{{ $t("mission.af") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item prop="birthDate" :label="$t('mission.ag')">
                    <a-date-picker
                        format="YYYY-MM-DD"
                        v-model="form.birthDate"
                        class="full"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ah')">
                    <a-input v-model="form.idCard" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ai')">
                    <a-date-picker
                        v-model="form.idCardValidityDate"
                        class="full"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.aj')">
                    <a-input v-model="form.exitNumber" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ai')">
                    <a-date-picker
                        v-model="form.exitValidityDate"
                        class="full"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ak')">
                    <a-input v-model="form.passportNumber" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ai')">
                    <a-date-picker
                        v-model="form.passportValidityDate"
                        class="full"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.al')">
                    <a-input v-model="form.otherCertificateName" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.am')">
                    <a-input v-model="form.otherIDNumber" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ai')">
                    <a-date-picker
                        v-model="form.otherValidityDate"
                        class="full"
                    />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 1">
                <p>{{ $t("mission.an") }}</p>
                <a-form-model-item prop="liaisonId" :label="$t('mission.ac')">
                    <a-select
                        v-model="form.liaisonId"
                        showSearch
                        optionFilterProp="label"
                        :filterOption="true"
                    >
                        <a-select-option
                            v-for="item in liaisonList"
                            :key="item.id"
                            :value="item.id"
                            :label="`${item.nameZh}${item.nameEnOrPt}`"
                        >
                            {{ item.nameZh }}
                            {{ item.nameEnOrPt }}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ap')">
                    <a-input v-model="selectedLiaison.tel" :disabled="true" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.aq')">
                    <a-input v-model="selectedLiaison.phone" :disabled="true" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ar')">
                    <a-input
                        v-model="selectedLiaison.abroadPhone"
                        :disabled="true"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.as')">
                    <a-input v-model="selectedLiaison.fax" :disabled="true" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.at')">
                    <a-input v-model="selectedLiaison.email" :disabled="true" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('mission.aw')">
                    <a-checkbox
                        :checked="form.isAssociation"
                        @change="e => (form.isAssociation = e.target.checked)"
                        >{{ $t("mission.bu") }}</a-checkbox
                    >
                </a-form-item>
                <a-form-item :label="$t('mission.ax')">
                    <a-input v-model="form.associationName" />
                </a-form-item>
                <a-form-item :label="$t('mission.ay')">
                    <a-input v-model="form.associationPosition" />
                </a-form-item>
                <a-form-item :label="$t('mission.az')">
                    <a-input v-model="form.associateIndustry" />
                </a-form-item>
                <a-form-item :label="$t('mission.ba')">
                    <a-checkbox
                        :ckecked="form.isCompany"
                        @change="e => (form.isCompany = e.target.checked)"
                        >{{ $t("mission.bb") }}</a-checkbox
                    >
                </a-form-item>
                <a-form-item :label="$t('mission.bc')">
                    <a-input v-model="form.companyName" />
                </a-form-item>
                <a-form-item :label="$t('mission.bd')">
                    <a-input v-model="form.companyAddress" />
                </a-form-item>
                <a-form-item :label="$t('mission.ay')">
                    <a-input v-model="form.companyPosition" />
                </a-form-item>
                <a-form-item :label="$t('mission.az')">
                    <a-input v-model="form.companyIndustry" />
                </a-form-item>
                <a-form-item :label="$t('mission.be')">
                    <a-checkbox
                        :checked="form.isOtherWay"
                        @change="e => (form.isOtherWay = e.target.checked)"
                        >{{ $t("mission.bf") }}</a-checkbox
                    >
                </a-form-item>
                <a-form-item :label="$t('mission.bg')">
                    <a-input v-model="form.otherWayName" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-model-item :label="$t('mission.bi')">
                    <a-radio-group v-model="form.goWithGroup">
                        <a-radio :value="true">{{ $t("mission.bj") }}</a-radio>
                        <a-radio :value="false">{{ $t("mission.bk") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.bl')">
                    <a-radio-group v-model="form.backWithGroup">
                        <a-radio :value="true">{{ $t("mission.bj") }}</a-radio>
                        <a-radio :value="false">{{ $t("mission.bk") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.bm')">
                    <a-radio-group v-model="form.arrangement">
                        <a-radio :value="true">{{ $t("mission.bj") }}</a-radio>
                        <a-radio :value="false">{{ $t("mission.bk") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.be')">
                    <a-input v-model="form.otherArrangement" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-model-item>
                    <ul>
                        <li>{{ $t("mission.bo") }}</li>
                        <li>{{ $t("mission.bp") }}</li>
                        <li>{{ $t("mission.bq") }}</li>
                    </ul>
                    <div>{{ $t("mission.br") }}</div>
                    <div>{{ $t("mission.bs") }}</div>
                </a-form-model-item>
            </div>
            <a-form-model-item>
                <a-button
                    v-show="stepCurrent > 0"
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                    >上一步</a-button
                >
                <a-button
                    v-show="stepCurrent < 4"
                    type="primary"
                    @click="stepCurrent++"
                    >下一步</a-button
                >
                <a-button
                    v-show="stepCurrent === 4"
                    :class="isSubmit ? 'none' : ''"
                    type="primary"
                    @click="handleSubmit"
                    >{{ $t("mission.bt") }}</a-button
                >
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import { formatMoment, formatString } from "@/common/format";
import validate from "./validate";
import PD from "@/apis/participateDelegation";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            ...validate,
            formId: undefined,
            form: {
                activityId: "",
                institutionId: "",
                applicantId: "",
                liaisonId: "",
                certs: [],
                nameZh: "",
                gender: "M",
                birthDate: null,
                exitNumber: "",
                exitValidityDate: null,
                passportNumber: "",
                passportValidityDate: null,
                otherCertificateName: "",
                otherIDNumber: "",
                otherValidityDate: null,
                isAssociation: false,
                associationName: "",
                associationPosition: "",
                associateIndustry: "",
                isCompany: false,
                companyName: "",
                companyAddress: "",
                companyPosition: "",
                companyIndustry: "",
                isOtherWay: false,
                otherWayName: "",
                goWithGroup: true,
                backWithGroup: true,
                arrangement: true,
                otherArrangement: "",
                idCard: "",
                idCardValidityDate: null
            }
        };
    },
    computed: {
        ...mapGetters(["liaisonList", "currentUser", "currentInstitution"]),
        selectedLiaison: function() {
            if (!this.form.liaisonId)
                return {
                    abroadPhone: "",
                    tel: "",
                    phone: "",
                    fax: "",
                    email: "",
                    address: ""
                };
            const data = this.liaisonList.find(
                item => item.id === this.form.liaisonId
            );
            return data;
        },
        isSubmit: function() {
            if (!this.form.status) {
                return false;
            } else {
                return this.form.status !== "rejected";
            }
        }
    },
    methods: {
        initData: async function() {
            if (this.formId) {
                const { data } = await PD.one(this.formId);
                this.form = formatMoment(data);
            }
        },
        handleLiaisonChange: function(value) {
            const o = this.liaisons.find(item => item.id === value);
            this.selectedLiaison = { ...o };
        },
        success: function() {
            this.$message.success("申請成功");
            this.$router.back();
        },
        handleSubmit: function() {
            this.form = formatString(this.form);
            this.$refs.MISSION.validate(async valid => {
                if (valid) {
                    if (!this.formId)
                        this.form = formatString({
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        });
                    const { data } = await PD.create(this.form);
                    data ? this.success() : "";
                } else {
                    this.$message.error("表單存在不符合情況，請檢查");
                }
            });
        }
    },
    mounted: function() {
        this.form.activityId = this.$crypto.decryption(
            unescape(this.$route.query.a)
        );
        this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
        this.initData();
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.none {
    display: none;
}
</style>
