<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('iiicf.ck')" />
            <a-step :title="$t('iiicf.dc')" />
            <a-step :title="$t('iiicf.aa')" />
            <a-step :title="$t('iiicf.af')" />
            <a-step :title="$t('iiicf.an')" />
            <a-step :title="$t('iiicf.bb')" />
            <a-step :title="$t('iiicf.cf')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model class="form" ref="iiicf" :model="form" :rules="rules" v-bind="formatLayout">
                <div v-show="stepCurrent === 0">
                    <a-form-model-item :label="$t('iiicf.ck')">
                        <ul>
                            <li>{{ $t("iiicf.cl") }}</li>
                            <li>{{ $t("iiicf.cm") }}</li>
                            <li>{{ $t("iiicf.cn") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.co')">
                        <ul>
                            <li>{{ $t("iiicf.cp") }}</li>
                            <li>{{ $t("iiicf.cq") }}</li>
                            <li>{{ $t("iiicf.cr") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.cs')">
                        <ul>
                            <li>{{ $t("iiicf.ct") }}</li>
                            <li>{{ $t("iiicf.cu") }}</li>
                            <li>{{ $t("iiicf.cv") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 1">
                    <a-form-model-item :label="$t('iiicf.cw')">
                        <ul>
                            <li>{{ $t("iiicf.cx") }}</li>
                            <li>{{ $t("iiicf.cy") }}</li>
                            <li>{{ $t("iiicf.cz") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.da')">
                        <ul>
                            <li>{{ $t("iiicf.db") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.dc')">
                        <ul>
                            <li>{{ $t("iiicf.dd") }}</li>
                            <li>{{ $t("iiicf.de") }}</li>
                            <li>{{ $t("iiicf.df") }}</li>
                            <li>{{ $t("iiicf.dg") }}</li>
                            <li>{{ $t("iiicf.dh") }}</li>
                            <li>{{ $t("iiicf.di") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item :label="$t('iiicf.ab')" required>
                        <a-input :value="selectedActivity.activityName" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.ac')" required>
                        <a-input :value="selectedActivity.activityDate" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.ad')" required>
                        <a-input :value="selectedActivity.activityPlace" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.ae')" required>
                        <a-input :value="selectedActivity.activityExpiry" disabled />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item :label="$t('iiicf.ag')" required>
                        <a-input :value="currentInstitution.nameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item prop="liaisonId" :label="$t('iiicf.ai')">
                        <a-select v-model="form.liaisonId" showSearch optionFilterProp="label" :filterOption="true">
                            <a-select-option
                                v-for="item in liaisonList"
                                :key="item.id"
                                :value="item.id"
                                :label="`${item.nameZh}${item.nameEnOrPt}`"
                                >{{ item.nameZh }} {{ item.nameEnOrPt }}</a-select-option
                            >
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.aj')">
                        <a-input :value="selectedLiaison.abroadPhone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.dm')">
                        <a-input :value="selectedLiaison.phone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.ak')" required>
                        <a-input :value="selectedLiaison.fax" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.al')" required>
                        <a-input :value="selectedLiaison.email" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.am')" required>
                        <a-input :value="selectedLiaison.address" disabled />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 4">
                    <a-form-model-item prop="preference" :label="$t('iiicf.av')">
                        <a-radio-group v-model="form.preference">
                            <a-radio style="line-height:30px" value="BARELY">{{ $t("iiicf.aw") }}</a-radio>
                            <a-radio style="line-height:30px" value="STANDARD_BOOTH">{{ $t("iiicf.dl") }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item prop="area">
                        <span slot="label">
                            <span>{{ $t("iiicf.ax") }}</span>
                            <span style="color:#ccc">({{ $t("iiicf.ay") }})</span>
                        </span>
                        <a-input v-model="form.area" />
                    </a-form-model-item>
                    <a-form-model-item prop="attendHistoryExhibition" :label="$t('iiicf.az')">
                        <a-radio-group v-model="form.attendHistoryExhibition">
                            <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                            <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.ba')">
                        <a-input v-model="form.attendHistoryYear" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 5">
                    <a-form-model-item prop="businessMatchings" :label="$t('iiicf.bj')">
                        <a-checkbox-group v-model="form.businessMatchings">
                            <a-checkbox v-for="item in businessMatchings" :key="item.value" :value="item.value">{{
                                $t(item.label)
                            }}</a-checkbox>
                            <a-input class="inline-input" v-model="form.otherMatchingSpecify" placeholder="others" />
                        </a-checkbox-group>
                    </a-form-model-item>
                    <a-form-model-item prop="targetMarkets" :label="$t('iiicf.br')">
                        <a-checkbox-group v-model="form.targetMarkets">
                            <a-checkbox v-for="item in targetMarkets" :key="item.value" :value="item.value">{{
                                $t(item.label)
                            }}</a-checkbox>
                        </a-checkbox-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.cd')">
                        <upload :value.sync="form.paymentRecordFiles" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 6">
                    <a-form-model-item :label="$t('iiicf.cg')">
                        <div class="company-item" v-for="(item, index) in form.groups" :key="index">
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
                    <a-form-model-item :label="$t('iiicf.ch')">
                        <upload :value.sync="form.letterFiles" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('iiicf.cj')">
                        <upload :value.sync="form.applicantUnitFiles" />
                    </a-form-model-item>
                </div>

                <a-form-model-item>
                    <a-button type="primary" @click="stepCurrent--" style="margin-right:12px" v-if="stepCurrent > 0"
                        >上一步</a-button
                    >
                    <a-button v-if="stepCurrent < 6" type="primary" @click="stepCurrent++">下一步</a-button>
                    <a-button v-else :class="isSubmit ? 'none' : ''" type="primary" @click="handleSubmit">{{
                        $t("iiicf.dk")
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
import PIIICF from "@/apis/participateIiicf";
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
                    phone: "",
                    fax: "",
                    email: "",
                    address: ""
                };
            const data = this.liaisonList.find(item => item.id === this.form.liaisonId);
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
        getActiveInfo: async function() {},
        initData: async function() {
            this.loading = true;
            if (this.formId) {
                const { data } = await PIIICF.one(this.formId);
                this.form = data;
                this.selectedActivity = {
                    activityName: data.activity.nameZh,
                    activityDate: `${data.activity.startTime} - ${data.activity.endTime}`,
                    activityPlace: data.activity.place,
                    activityExpiry: data.activity.expiryTime
                };
            } else {
                this.form.activityId = this.$crypto.decryption(unescape(this.$route.query.a));
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
            this.$refs.iiicf.validate(async valid => {
                if (valid) {
                    if (!this.formId)
                        this.form = {
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        };
                    const { data } = await PIIICF.create(this.form);
                    data ? this.onSuccess() : "";
                } else {
                    this.$message.error("表單存在必填項為空或者不合法字符，請檢查");
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
    .none {
        display: none;
    }
}
</style>
