<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('mfe.aa')" />
            <a-step :title="$t('mfe.af')" />
            <a-step :title="$t('mfe.an')" />
            <a-step :title="$t('mfe.bb')" />
            <a-step :title="$t('mfe.cf')" />
            <a-step :title="$t('mfe.ck')" />
            <a-step :title="$t('mfe.dc')" />
        </a-steps>
        <a-form-model
            class="form"
            ref="mfe"
            :model="form"
            :rules="rules"
            v-bind="formatLayout"
        >
            <div v-show="stepCurrent === 0">
                <a-form-model-item :label="$t('mfe.ab')" required>
                    <a-input v-model="selectedActivity.activityName" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ac')" required>
                    <a-input v-model="selectedActivity.activityDate" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ad')" required>
                    <a-input
                        v-model="selectedActivity.activityPlace"
                        disabled
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ae')" required>
                    <a-input
                        v-model="selectedActivity.activityExpiry"
                        disabled
                    />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-model-item :label="$t('mfe.ag')" required>
                    <a-input v-model="currentInstitution.nameZh" disabled />
                </a-form-model-item>
                <a-form-model-item prop="liaisonId" :label="$t('mfe.ai')">
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
                            >{{ item.nameZh }}
                            {{ item.nameEnOrPt }}</a-select-option
                        >
                    </a-select>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.aj')" required>
                    <a-input v-model="selectedLiaison.phone" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ak')" required>
                    <a-input v-model="selectedLiaison.fax" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.al')" required>
                    <a-input v-model="selectedLiaison.email" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.am')" required>
                    <a-input v-model="selectedLiaison.address" disabled />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-model-item prop="method" :label="$t('mfe.ao')">
                    <a-radio-group v-model="form.method">
                        <a-radio
                            v-for="item in methods"
                            :key="item.value"
                            :value="item.value"
                            >{{ $t(item.label) }}</a-radio
                        >
                        <a-radio value="OTHER">{{ $t("mfe.au") }}</a-radio>
                    </a-radio-group>
                    <a-input
                        class="inline-input"
                        v-model="form.otherExhibitMethod"
                        :disabled="form.method !== 'OTHER'"
                    />
                </a-form-model-item>
                <a-form-model-item prop="preference" :label="$t('mfe.av')">
                    <a-radio-group v-model="form.preference">
                        <a-radio style="line-height:30px" value="BARELY">{{
                            $t("mfe.aw")
                        }}</a-radio>
                        <a-radio
                            style="line-height:30px"
                            value="STANDARD_BOOTH"
                            >{{ $t("mfe.dt") }}</a-radio
                        >
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item prop="area">
                    <span slot="label">
                        <span>{{ $t("mfe.ax") }}</span>
                        <span style="color:#ccc">({{ $t("mfe.ay") }})</span>
                    </span>
                    <a-input v-model="form.area" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.az')">
                    <a-radio-group v-model="form.attendHistoryExhibition">
                        <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ba')">
                    <a-input v-model="form.attendHistoryYear" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-model-item
                    prop="exhibitionProducts"
                    :label="$t('mfe.bc')"
                >
                    <a-checkbox-group v-model="form.exhibitionProducts">
                        <a-checkbox
                            v-for="item in exhibitionProducts"
                            :key="item.value"
                            :value="item.value"
                            >{{ $t(item.label) }}</a-checkbox
                        >
                        <a-input
                            class="inline-input"
                            v-model="form.otherProductSpecify"
                            placeholder="others"
                        />
                    </a-checkbox-group>
                </a-form-model-item>
                <a-form-model-item
                    prop="businessMatchings"
                    :label="$t('mfe.bj')"
                >
                    <a-checkbox-group v-model="form.businessMatchings">
                        <a-checkbox
                            v-for="item in businessMatchings"
                            :key="item.value"
                            :value="item.value"
                            >{{ $t(item.label) }}</a-checkbox
                        >
                        <a-input
                            class="inline-input"
                            v-model="form.otherMatchingSpecify"
                            placeholder="others"
                        />
                    </a-checkbox-group>
                </a-form-model-item>
                <a-form-model-item prop="targetMarkets" :label="$t('mfe.br')">
                    <a-checkbox-group v-model="form.targetMarkets">
                        <a-checkbox
                            v-for="item in targetMarkets"
                            :key="item.value"
                            :value="item.value"
                            >{{ $t(item.label) }}</a-checkbox
                        >
                    </a-checkbox-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.cd')">
                    <upload :value.sync="form.paymentRecordFiles" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-model-item
                    :label="$t('mfe.cg')"
                    :required="form.method === 'GROUP_EXHIBITION'"
                >
                    <div
                        class="company-item"
                        v-for="(item, index) in form.groups"
                        :key="index"
                    >
                        <company
                            :name.sync="item.name"
                            :liaison-name.sync="item.liaisonName"
                            :phone.sync="item.phone"
                            :email.sync="item.email"
                        />
                        <div class="button-wrapper">
                            <a-button
                                v-if="index === 0"
                                title="添加一項"
                                type="primary"
                                shape="circle"
                                icon="plus"
                                @click="operaCompany(true)"
                            ></a-button>
                            <a-button
                                v-else
                                title="減少一項"
                                shape="circle"
                                icon="minus"
                                @click="operaCompany(false, index)"
                            ></a-button>
                        </div>
                    </div>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ch')">
                    <upload :value.sync="form.letterFiles" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.cj')">
                    <upload :value.sync="form.applicantUnitFiles" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-model-item :label="$t('mfe.ck')">
                    <ul>
                        <li>{{ $t("mfe.cl") }}</li>
                        <li>{{ $t("mfe.cm") }}</li>
                        <li>{{ $t("mfe.cn") }}</li>
                    </ul>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.co')">
                    <ul>
                        <li>{{ $t("mfe.cp") }}</li>
                        <li>{{ $t("mfe.cq") }}</li>
                        <li>{{ $t("mfe.cr") }}</li>
                    </ul>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.cs')">
                    <ul>
                        <li>{{ $t("mfe.ct") }}</li>
                        <li>{{ $t("mfe.cu") }}</li>
                        <li>{{ $t("mfe.cv") }}</li>
                    </ul>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-model-item :label="$t('mfe.cw')">
                    <ul>
                        <li>{{ $t("mfe.cx") }}</li>
                        <li>{{ $t("mfe.cy") }}</li>
                        <li>{{ $t("mfe.cz") }}</li>
                    </ul>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.da')">
                    <ul>
                        <li>{{ $t("mfe.db") }}</li>
                    </ul>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.dc')">
                    <ul>
                        <li>{{ $t("mfe.dd") }}</li>
                        <li>{{ $t("mfe.de") }}</li>
                        <li>{{ $t("mfe.df") }}</li>
                        <li>{{ $t("mfe.dg") }}</li>
                        <li>{{ $t("mfe.dh") }}</li>
                        <li>{{ $t("mfe.di") }}</li>
                    </ul>
                </a-form-model-item>
            </div>
            <a-form-model-item>
                <a-button
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                    >上一步</a-button
                >
                <a-button
                    v-if="stepCurrent < 6"
                    type="primary"
                    @click="stepCurrent++"
                    >下一步</a-button
                >
                <a-button v-else type="primary" @click="handleSubmit">{{
                    $t("mfe.dk")
                }}</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Upload from "@/components/upload";
import Company from "../components/company";
import validate from "./validate";
import Activity from "@/apis/activity";
import PMFE from "@/apis/participateMfe";
export default {
    components: { Upload, Company },
    data() {
        return {
            ...validate,
            formId: undefined,
            form: {
                activityId: null,
                applicantUnitFiles: [],
                area: "",
                attendHistoryExhibition: true,
                attendHistoryYear: "",
                businessMatchings: [],
                exhibitionProducts: [],
                groups: [
                    {
                        email: "",
                        enterpriseName: "",
                        liaisonName: "",
                        liaisonTel: ""
                    }
                ],
                letterFiles: [],
                liaisonId: null,
                method: "GENERAL_EXHIBITION",
                otherAsiaAreaSpecify: "",
                otherCountriesSpecify: "",
                otherExhibitMethod: "",
                otherMatchingSpecify: "",
                otherProductSpecify: "",
                paymentRecordFiles: [],
                preference: "BARELY",
                remarks: "",
                targetMarkets: []
            }
        };
    },
    computed: {
        ...mapGetters(["currentInstitution", "liaisonList", "currentUser"]),
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
        }
    },
    methods: {
        initData: async function() {
            this.loading = true;
            if (this.formId) {
                const { data } = PMFE.one(this.formId);
                this.form = data;
                this.selectedActivity = {
                    activityName: data.activity.nameZh,
                    activityDate: `${data.activity.startTime} - ${data.activity.endTime}`,
                    activityPlace: data.activity.place,
                    activityExpiry: data.activity.expiryTime
                };
            } else {
                this.form.activityId = this.$crypto.decryption(
                    unescape(this.$route.query.a)
                );
                const { data } = await Activity.one(this.form.activityId);
                this.selectedActivity = {
                    activityName: data.nameZh,
                    activityDate: `${data.startTime} - ${data.endTime}`,
                    activityPlace: data.place,
                    activityExpiry: data.expiryTime
                };
            }
            this.loading = false;
        },
        operaCompany: function(type, index) {
            if (type) {
                const body = {
                    name: "",
                    liaisonName: "",
                    phone: "",
                    email: ""
                };
                this.form.groups.push(body);
            } else {
                this.form.groups.splice(index, 1);
            }
        },
        onSuccess: function() {
            this.$message.success("申請成功");
            this.$router.back();
        },
        handleSubmit: function() {
            this.$refs.mfe.validate(async valid => {
                if (valid) {
                    if (!this.formId)
                        this.form = {
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        };
                    const { data } = await PMFE.create(this.form);
                    data ? this.onSuccess() : "";
                } else {
                    this.$message.error(
                        "表單存在必填項為空或者不合法字符，請檢查"
                    );
                }
            });
        }
    },
    mounted: function() {
        this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
        this.initData();
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");

.remark {
    width: 100%;
    display: inline-block;
}
.company-item {
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button-wrapper {
        width: 80px;
        margin-left: 20px;
    }
}
/deep/ .ant-checkbox-wrapper {
    min-width: 150px;
    height: 40px;
    margin-left: 0;
}
</style>
