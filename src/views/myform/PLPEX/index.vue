<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('plpex.aa')" />
            <a-step :title="$t('plpex.af')" />
            <a-step :title="$t('plpex.an')" />
            <a-step :title="$t('plpex.bb')" />
            <a-step :title="$t('plpex.cf')" />
            <a-step :title="$t('plpex.ck')" />
            <a-step :title="$t('plpex.dc')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                ref="plpex"
                :model="form"
                :rules="rules"
                v-bind="formatLayout"
            >
                <div v-show="stepCurrent === 0">
                    <a-form-model-item :label="$t('plpex.ab')" required>
                        <a-input
                            :value="selectedActivity.activityName"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.ac')" required>
                        <a-input
                            :value="selectedActivity.activityDate"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.ad')" required>
                        <a-input
                            :value="selectedActivity.activityPlace"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.ae')" required>
                        <a-input
                            :value="selectedActivity.activityExpiry"
                            disabled
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 1">
                    <a-form-model-item :label="$t('plpex.ag')" :required="true">
                        <a-input
                            :value="currentInstitution.nameZh"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item prop="liaisonId" :label="$t('plpex.ai')">
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
                    <a-form-model-item :label="$t('plpex.aj')">
                        <a-input
                            :value="selectedLiaison.abroadPhone"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.ed')">
                        <a-input :value="selectedLiaison.phone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.ak')" required>
                        <a-input :value="selectedLiaison.fax" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.al')" required>
                        <a-input :value="selectedLiaison.email" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.am')" required>
                        <a-input :value="selectedLiaison.address" disabled />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item prop="method" :label="$t('plpex.ao')">
                        <a-radio-group v-model="form.method">
                            <a-radio
                                v-for="item in methods"
                                :key="item.value"
                                :value="item.value"
                                >{{ $t(item.label) }}</a-radio
                            >
                            <a-radio value="OTHER">{{
                                $t("plpex.au")
                            }}</a-radio>
                        </a-radio-group>
                        <a-input
                            class="inline-input"
                            v-model="form.otherExhibitMethod"
                            :disabled="form.method !== 'OTHER'"
                        />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="preference"
                        :label="$t('plpex.av')"
                    >
                        <a-radio-group v-model="form.preference">
                            <a-radio style="line-height:30px" value="BARELY">{{
                                $t("plpex.aw")
                            }}</a-radio>
                            <a-radio
                                style="line-height:30px"
                                value="STANDARD_BOOTH"
                                >{{ $t("plpex.eb") }}</a-radio
                            >
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item prop="area">
                        <span slot="label">
                            <span>{{ $t("plpex.ax") }}</span>
                            <span style="color:#ccc"
                                >({{ $t("plpex.ay") }})</span
                            >
                        </span>
                        <a-input v-model="form.area" />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="attendHistoryExhibition"
                        :label="$t('plpex.az')"
                    >
                        <a-radio-group v-model="form.attendHistoryExhibition">
                            <a-radio :value="true">{{
                                $t("util.yes")
                            }}</a-radio>
                            <a-radio :value="false">{{
                                $t("util.no")
                            }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.ba')">
                        <a-input v-model="form.attendHistoryYear" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item
                        prop="exhibitionProducts"
                        :label="$t('plpex.bc')"
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
                        :label="$t('plpex.bj')"
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
                    <a-form-model-item
                        prop="targetMarkets"
                        :label="$t('plpex.br')"
                    >
                        <a-checkbox-group v-model="form.targetMarkets">
                            <a-checkbox
                                v-for="item in targetMarkets"
                                :key="item.value"
                                :value="item.value"
                                >{{ $t(item.label) }}</a-checkbox
                            >
                        </a-checkbox-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.cd')">
                        <upload :value.sync="form.paymentRecordFiles" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 4">
                    <a-form-model-item
                        :label="$t('plpex.cg')"
                        :required="form.method === 'GROUP_EXHIBITION'"
                    >
                        <div
                            class="company-item"
                            v-for="(item, index) in form.groups"
                            :key="index"
                        >
                            <company
                                :name.sync="item.enterpriseName"
                                :liaison-name.sync="item.liaisonName"
                                :phone.sync="item.liaisonTel"
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
                    <a-form-model-item :label="$t('plpex.ch')">
                        <upload :value.sync="form.letterFiles" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.cj')">
                        <upload :value.sync="form.applicantUnitFiles" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 5">
                    <a-form-model-item :label="$t('plpex.ck')">
                        <ul>
                            <li>{{ $t("plpex.cl") }}</li>
                            <li>{{ $t("plpex.cm") }}</li>
                            <li>{{ $t("plpex.cn") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.co')">
                        <ul>
                            <li>{{ $t("plpex.cp") }}</li>
                            <li>{{ $t("plpex.cq") }}</li>
                            <li>{{ $t("plpex.cr") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.cs')">
                        <ul>
                            <li>{{ $t("plpex.ct") }}</li>
                            <li>{{ $t("plpex.cu") }}</li>
                            <li>{{ $t("plpex.cv") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 6">
                    <a-form-model-item :label="$t('plpex.cw')">
                        <ul>
                            <li>{{ $t("plpex.cx") }}</li>
                            <li>{{ $t("plpex.cy") }}</li>
                            <li>{{ $t("plpex.cz") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.da')">
                        <ul>
                            <li>{{ $t("plpex.db") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('plpex.dc')">
                        <ul>
                            <li>{{ $t("plpex.dd") }}</li>
                            <li>{{ $t("plpex.de") }}</li>
                            <li>{{ $t("plpex.df") }}</li>
                            <li>{{ $t("plpex.dg") }}</li>
                            <li>{{ $t("plpex.dh") }}</li>
                            <li>{{ $t("plpex.di") }}</li>
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
                        $t("plpex.dk")
                    }}</a-button>
                </a-form-model-item>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Upload from "@/components/upload";
import Company from "../components/company";
import validate from "./validate";
import Activity from "@/apis/activity";
import PPLPEX from "@/apis/participatePlpex";
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
        ...mapGetters([
            "currentInstitution",
            "liaisonList",
            "currentForm",
            "currentUser"
        ]),
        selectedLiaison: function() {
            if (!this.form.liaisonId)
                return {
                    abroadPhone: "",
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
                const { data } = await PPLPEX.one(this.formId);
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
                    email: "",
                    enterpriseName: "",
                    liaisonName: "",
                    liaisonTel: ""
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
            this.$refs.plpex.validate(async valid => {
                if (valid) {
                    if (!this.formId)
                        this.form = {
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        };
                    const { data } = await PPLPEX.create(this.form);
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
.form-container {
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
    /deep/.ant-form-item-control {
        line-height: 30px;
    }
}
</style>
