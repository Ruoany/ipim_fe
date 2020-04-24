<template>
    <div class="form-container">
        <a-steps :current="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('mif.dc')" />
            <a-step :title="$t('mif.ck')" />
            <a-step :title="$t('mif.af')" />
            <a-step :title="$t('mif.aa')" />
            <a-step :title="$t('mif.an')" />
            <a-step :title="$t('mif.bb')" />
            <a-step :title="$t('mif.cf')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                ref="mif"
                :model="form"
                :rules="rules"
                v-bind="formatLayout"
            >
                <div v-show="stepCurrent === 0">
                    <a-form-model-item :label="$t('mif.dc')">
                        <ul>
                            <li>{{ $t("mif.dd") }}</li>
                            <li>{{ $t("mif.de") }}</li>
                            <li>{{ $t("mif.df") }}</li>
                            <li>{{ $t("mif.dg") }}</li>
                            <li>{{ $t("mif.dh") }}</li>
                            <li>{{ $t("mif.di") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 1">
                    <a-form-model-item :label="$t('mif.ck')">
                        <ul>
                            <li>{{ $t("mif.cl") }}</li>
                            <li>{{ $t("mif.cm") }}</li>
                            <li>{{ $t("mif.cn") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.co')">
                        <ul>
                            <li>{{ $t("mif.cp") }}</li>
                            <li>{{ $t("mif.cq") }}</li>
                            <li>{{ $t("mif.cr") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.cs')">
                        <ul>
                            <li>{{ $t("mif.ct") }}</li>
                            <li>{{ $t("mif.cu") }}</li>
                            <li>{{ $t("mif.cv") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.cw')">
                        <ul>
                            <li>{{ $t("mif.cx") }}</li>
                            <li>{{ $t("mif.cy") }}</li>
                            <li>{{ $t("mif.cz") }}</li>
                        </ul>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.da')">
                        <ul>
                            <li>{{ $t("mif.db") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item :label="$t('mif.ag')" required>
                        <a-input :value="currentInstitution.nameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item prop="liaisonId" :label="$t('mif.ai')">
                        <a-input
                            v-if="isCheck"
                            v-model="selectedLiaison.nameZh"
                            disabled
                        ></a-input>
                        <a-select
                            v-else
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
                    <a-form-model-item :label="$t('mif.aj')">
                        <a-input
                            :value="selectedLiaison.abroadPhone"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.dy')">
                        <a-input :value="selectedLiaison.phone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ak')" required>
                        <a-input :value="selectedLiaison.fax" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.al')" required>
                        <a-input :value="selectedLiaison.email" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.am')" required>
                        <a-input :value="selectedLiaison.address" disabled />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item :label="$t('mif.ab')" required>
                        <a-input
                            :value="selectedActivity.activityName"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ac')" required>
                        <a-input
                            :value="selectedActivity.activityDate"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ad')" required>
                        <a-input
                            :value="selectedActivity.activityPlace"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ae')" required>
                        <a-input
                            :value="selectedActivity.activityExpiry"
                            disabled
                        />
                    </a-form-model-item>
                </div>

                <div v-show="stepCurrent === 4">
                    <a-form-model-item prop="method" :label="$t('mif.ao')">
                        <a-radio-group
                            v-model="form.method"
                            :disabled="isCheck"
                        >
                            <a-radio
                                v-for="item in methods"
                                :key="item.value"
                                :value="item.value"
                                >{{ $t(item.label) }}</a-radio
                            >
                            <a-radio value="OTHER">{{ $t("mif.au") }}</a-radio>
                        </a-radio-group>
                        <a-input
                            class="inline-input"
                            v-model="form.otherExhibitMethod"
                            :disabled="form.method !== 'OTHER' || isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item prop="preference" :label="$t('mif.av')">
                        <a-radio-group
                            v-model="form.preference"
                            :disabled="isCheck"
                        >
                            <a-radio style="line-height:30px" value="BARELY">{{
                                $t("mif.aw")
                            }}</a-radio>
                            <a-radio
                                style="line-height:30px"
                                value="STANDARD_BOOTH"
                                >{{ $t("mif.ec") }}</a-radio
                            >
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item prop="area">
                        <span slot="label">
                            <span>{{ $t("mif.ax") }}</span>
                            <!-- <span style="color:#ccc">({{ $t("mif.ay") }})</span> -->
                        </span>
                        <a-input v-model="form.area" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="attendHistoryExhibition"
                        :label="$t('mif.az')"
                    >
                        <a-radio-group
                            v-model="form.attendHistoryExhibition"
                            :disabled="isCheck"
                        >
                            <a-radio :value="true">{{
                                $t("util.yes")
                            }}</a-radio>
                            <a-radio :value="false">{{
                                $t("util.no")
                            }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ba')">
                        <a-input
                            v-model="form.attendHistoryYear"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 5">
                    <a-form-model-item
                        prop="exhibitionProducts"
                        :label="$t('mif.bc')"
                    >
                        <a-checkbox-group
                            v-model="form.exhibitionProducts"
                            :disabled="isCheck"
                        >
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
                                :disabled="isCheck"
                            />
                        </a-checkbox-group>
                    </a-form-model-item>
                    <a-form-model-item
                        prop="businessMatchings"
                        :label="$t('mif.bj')"
                    >
                        <a-checkbox-group
                            v-model="form.businessMatchings"
                            :disabled="isCheck"
                        >
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
                                :disabled="isCheck"
                            />
                        </a-checkbox-group>
                    </a-form-model-item>
                    <a-form-model-item
                        prop="targetMarkets"
                        :label="$t('mif.br')"
                    >
                        <a-checkbox-group
                            v-model="form.targetMarkets"
                            :disabled="isCheck"
                        >
                            <a-checkbox
                                v-for="item in targetMarkets"
                                :key="item.value"
                                :value="item.value"
                                >{{ $t(item.label) }}</a-checkbox
                            >
                        </a-checkbox-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.cd')">
                        <upload
                            :value.sync="form.paymentRecordFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 6">
                    <a-form-model-item
                        v-show="form.method === 'GROUP_EXHIBITION'"
                        :label="$t('mif.cg')"
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
                                :disabled="isCheck"
                            />
                            <div class="button-wrapper">
                                <a-button
                                    v-if="index === 0"
                                    title="添加一項"
                                    type="primary"
                                    shape="circle"
                                    icon="plus"
                                    :disabled="isCheck"
                                    @click="operaCompany(true)"
                                ></a-button>
                                <a-button
                                    v-else
                                    title="減少一項"
                                    shape="circle"
                                    icon="minus"
                                    :disabled="isCheck"
                                    @click="operaCompany(false, index)"
                                ></a-button>
                            </div>
                        </div>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ee')">
                        <upload
                            :value.sync="form.institutions"
                            type="excel"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ch')">
                        <upload
                            :value.sync="form.letterFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.cj')">
                        <upload
                            :value.sync="form.applicantUnitFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.ef')">
                        <a-textarea
                            :rows="4"
                            :maxLength="150"
                            :disabled="isCheck"
                            v-model="form.companyProfile"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.eg')">
                        <upload
                            :value.sync="form.images"
                            type="image"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('mif.eh')">
                        <upload :value.sync="form.video" :disabled="isCheck" />
                    </a-form-model-item>
                </div>

                <a-form-model-item>
                    <a-button
                        type="primary"
                        @click="stepCurrent--"
                        style="margin-right:12px"
                        v-if="stepCurrent > 0"
                        >上一步</a-button
                    >
                    <a-button
                        v-if="stepCurrent < 6"
                        type="primary"
                        @click="stepCurrent++"
                        :disabled="timeNext > 0"
                        >{{
                            timeNext > 0 ? `(${timeNext}S)` : "下一步"
                        }}</a-button
                    >
                    <a-button
                        v-else
                        :class="isSubmit ? 'none' : ''"
                        type="primary"
                        @click="handleSubmit"
                        >{{ $t("mif.dk") }}</a-button
                    >
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
import MIF from "@/apis/participateMif";
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
                institutions: [],
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
                targetMarkets: [],
                companyProfile: "",
                images: [],
                video: []
            }
        };
    },
    computed: {
        ...mapGetters([
            "currentInstitution",
            "liaisonList",
            "currentUser",
            "timeNext"
        ]),
        selectedLiaison: function() {
            if (this.form.liaisonId) {
                const data = this.liaisonList.find(
                    item => item.id === this.form.liaisonId
                );
                return data ? data : this.form.liaison;
            }
            return {
                nameZh: "",
                abroadPhone: "",
                phone: "",
                fax: "",
                email: "",
                address: ""
            };
        },
        isSubmit: function() {
            if (!this.form.status) {
                return false;
            } else {
                return this.form.status !== "rejected";
            }
        },
        isCheck: function() {
            return (
                this.form.status === "passed" ||
                this.form.status === "withdraw" ||
                this.form.status === "approving"
            );
        }
    },
    methods: {
        initData: async function() {
            this.loading = true;
            if (this.formId) {
                this.$store.dispatch("setChangeFalse");
                const { data } = await MIF.one(this.formId);
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
            this.$refs.mif.validate(async valid => {
                if (valid) {
                    if (!this.formId)
                        this.form = {
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        };
                    const { data } = await MIF.create(this.form);
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
        this.$store.dispatch("setTimeNext");
    },
    destroyed: function() {
        this.$store.dispatch("setChangeTrue");
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
