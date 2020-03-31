<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('miecf.aa')" />
            <a-step :title="$t('miecf.af')" />
            <a-step :title="$t('miecf.an')" />
            <a-step :title="$t('miecf.bb')" />
            <a-step :title="$t('miecf.cf')" />
            <a-step :title="$t('miecf.ck')" />
            <a-step :title="$t('miecf.dc')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                ref="miecf"
                :model="form"
                :rules="rules"
                v-bind="formatLayout"
            >
                <div v-show="stepCurrent === 0">
                    <a-form-model-item :label="$t('miecf.ab')" :required="true">
                        <a-input
                            v-model="selectedActivity.activityName"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.ac')" :required="true">
                        <a-input
                            v-model="selectedActivity.activityDate"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.ad')" :required="true">
                        <a-input
                            v-model="selectedActivity.activityPlace"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.ae')" :required="true">
                        <a-input
                            v-model="selectedActivity.activityExpiry"
                            :disabled="true"
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 1">
                    <a-form-model-item :label="$t('miecf.ag')" :required="true">
                        <a-input
                            v-model="currentInstitution.nameZh"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item prop="liaisonId" :label="$t('miecf.ai')">
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
                    <a-form-model-item :label="$t('miecf.aj')">
                        <a-input
                            v-model="selectedLiaison.phone"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.ak')">
                        <a-input
                            v-model="selectedLiaison.fax"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.al')">
                        <a-input
                            v-model="selectedLiaison.email"
                            :disabled="true"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.am')">
                        <a-input
                            v-model="selectedLiaison.address"
                            :disabled="true"
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item prop="method" :label="$t('miecf.ao')">
                        <a-radio-group v-model="form.method">
                            <a-radio
                                v-for="item in methods"
                                :key="item.value"
                                :value="item.value"
                                >{{ $t(item.label) }}</a-radio
                            >
                            <a-radio value="OTHER">{{
                                $t("miecf.au")
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
                        :label="$t('miecf.av')"
                    >
                        <a-radio-group v-model="form.preference">
                            <a-radio style="line-height:30px" value="BARELY">{{
                                $t("miecf.aw")
                            }}</a-radio>
                            <a-radio
                                style="line-height:30px"
                                value="STANDARD_BOOTH"
                                >{{ $t("miecf.dx") }}</a-radio
                            >
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item prop="area">
                        <span slot="label">
                            <span>{{ $t("miecf.ax") }}</span>
                            <span style="color:#ccc"
                                >({{ $t("miecf.ay") }})</span
                            >
                        </span>
                        <a-input v-model="form.area" />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="attendHistoryExhibition"
                        :label="$t('miecf.az')"
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
                    <a-form-model-item :label="$t('miecf.ba')">
                        <a-input v-model="form.attendHistoryYear" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item
                        prop="exhibitionProducts"
                        :label="$t('miecf.bc')"
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
                        :label="$t('miecf.bj')"
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
                        :label="$t('miecf.br')"
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
                    <a-form-model-item :label="$t('miecf.cd')">
                        <upload :value.sync="form.paymentRecordFiles" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 4">
                    <a-form-model-item
                        :label="$t('miecf.cg')"
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
                    <a-form-model-item :label="$t('miecf.ch')">
                        <upload :value.sync="form.letterFiles" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.cj')">
                        <upload :value.sync="form.applicantUnitFiles" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 5">
                    <a-form-model-item :label="$t('miecf.ck')">
                        <ul>
                            <li>{{ $t("miecf.cl") }}</li>
                            <li>{{ $t("miecf.cm") }}</li>
                            <li>{{ $t("miecf.cn") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.co')">
                        <ul>
                            <li>{{ $t("miecf.cp") }}</li>
                            <li>{{ $t("miecf.cq") }}</li>
                            <li>{{ $t("miecf.cr") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.cs')">
                        <ul>
                            <li>{{ $t("miecf.ct") }}</li>
                            <li>{{ $t("miecf.cu") }}</li>
                            <li>{{ $t("miecf.cv") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 6">
                    <a-form-model-item :label="$t('miecf.cw')">
                        <ul>
                            <li>{{ $t("miecf.cx") }}</li>
                            <li>{{ $t("miecf.cy") }}</li>
                            <li>{{ $t("miecf.cz") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.da')">
                        <ul>
                            <li>{{ $t("miecf.db") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('miecf.dc')">
                        <ul>
                            <li>{{ $t("miecf.dd") }}</li>
                            <li>{{ $t("miecf.de") }}</li>
                            <li>{{ $t("miecf.df") }}</li>
                            <li>{{ $t("miecf.dg") }}</li>
                            <li>{{ $t("miecf.dh") }}</li>
                            <li>{{ $t("miecf.di") }}</li>
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
                        $t("miecf.dk")
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
import PMIECF from "@/apis/participateMiecf";
export default {
    components: { Upload, Company },
    data() {
        return {
            ...validate,
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
            if (this.currentForm) {
                const { data } = PMIECF.one(this.currentForm);
                this.form = data;
                this.selectedActivity = {
                    activityName: data.activity.nameZh,
                    activityDate: `${data.activity.startTime} - ${data.activity.endTime}`,
                    activityPlace: data.activity.place,
                    activityExpiry: data.activity.expiryTime
                };
            } else {
                this.form.activityId = this.$route.query.activityId;
                const { data } = await Activity.one(
                    this.$route.query.activityId
                );
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
            this.$refs.miecf.validate(async valid => {
                if (valid) {
                    if (!this.currentForm)
                        this.form = {
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        };
                    const { data } = await PMIECF.create(this.form);
                    data ? this.onSuccess() : "";
                } else {
                    this.$message.error(
                        "表單存在必填項為空或者不合法字符，請檢查"
                    );
                }
            });
        },
        beforeunloadHandler: function(e) {
            e = e || window.event;
            if (e) {
                e.returnValue = "刷新頁面將會導致數據丟失";
            }
            return "刷新頁面將會導致數據丟失";
        }
    },
    created: function() {
        if (this.currentForm) {
            window.addEventListener("beforeunload", e =>
                this.beforeunloadHandler(e)
            );
        }
    },
    mounted: function() {
        this.initData();
    },
    destroyed: function() {
        if (this.currentForm) {
            this.$store.dispatch("removeFormId");
        }
        window.removeEventListener("beforeunload", e =>
            this.beforeunloadHandler(e)
        );
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
