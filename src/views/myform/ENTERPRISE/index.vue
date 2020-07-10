<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('enterprise.aa')" disabled />
            <a-step :title="$t('enterprise.ab')" disabled />
            <a-step :title="$t('enterprise.ad')" disabled />
            <a-step :title="$t('enterprise.ac')" disabled />
            <a-step :title="$t('enterprise.af')" disabled />
            <a-step :title="$t('enterprise.ah')" disabled />
            <a-step :title="$t('enterprise.ae')" disabled />
            <a-step :title="$t('enterprise.ai')" disabled />
            <a-step :title="$t('enterprise.aj')" disabled />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                ref="enterprise"
                :model="form"
                :rules="rules"
                v-bind="formatLayout"
            >
                <div v-show="stepCurrent === 0">
                    <a-form-model-item :label="$t('enterprise.aa')">
                        <ul>
                            <li>{{ $t("enterprise.cn") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 1">
                    <a-form-model-item
                        prop="institutionId"
                        :label="$t('enterprise.ak')"
                    >
                        <a-input :value="currentInstitution.nameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.al')">
                        <a-input :value="currentInstitution.nameEn" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.am')">
                        <a-input :value="currentInstitution.namePt" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.an')">
                        <a-input
                            :value="currentInstitution.siteRegistrationCode"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.ao')">
                        <a-input
                            :value="currentInstitution.registrationNumber"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.ap')">
                        <a-input
                            :value="currentInstitution.streetZh"
                            disabled
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item
                        prop="liaisonId"
                        :label="$t('enterprise.av')"
                    >
                        <a-select v-model="form.liaisonId" :disabled="isCheck">
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
                    <a-form-model-item :label="$t('enterprise.aw')">
                        <a-input
                            :value="selectedLiaison.titleNameZh"
                            disabled
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.ax')">
                        <a-input
                            :value="selectedLiaison.phone"
                            disabled
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.ay')">
                        <a-input
                            :value="selectedLiaison.email"
                            disabled
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.az')">
                        <a-radio-group
                            v-model="form.addressSame"
                            :disabled="isCheck"
                        >
                            <a-radio :value="true">{{
                                $t("enterprise.cq")
                            }}</a-radio>
                            <a-radio :value="false">{{
                                $t("util.other")
                            }}</a-radio>
                        </a-radio-group>
                        <a-input
                            v-if="form.addressSame"
                            :value="currentInstitution.streetZh"
                            disabled
                        ></a-input>
                        <a-input
                            v-else
                            v-model="form.liaisonOtherAddress"
                            :disabled="isCheck"
                        ></a-input>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item :label="$t('enterprise.aq')">
                        <a-input
                            v-model="currentInstitution.taxpayerName"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.ar')">
                        <a-input
                            v-model="currentInstitution.taxpayerNo"
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="taxpayerType"
                        :label="$t('enterprise.as')"
                    >
                        <a-radio-group
                            v-model="form.taxpayerType"
                            :disabled="isCheck"
                        >
                            <a-radio value="INDIVIDUAL_BUSINESS">
                                {{ $t("enterprise.at") }}
                            </a-radio>
                            <a-radio value="LIMITED_COMPANY">
                                {{ $t("enterprise.au") }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 4">
                    <a-form-model-item
                        prop="activityId"
                        :label="$t('enterprise.bc')"
                    >
                        <a-select v-model="form.activityId" :disabled="isCheck">
                            <a-select-option
                                v-for="item in list"
                                :key="item.id"
                                :value="item.id"
                                :label="item.nameZh"
                                >{{ item.nameZh }}</a-select-option
                            >
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bd')">
                        <div class="goverments-title">
                            <a-input
                                :value="selectedActivity.startTime"
                                disabled
                                style="width:48%;"
                            ></a-input>
                            <span style="width:4%;text-align:center;">~</span>
                            <a-input
                                :value="selectedActivity.endTime"
                                disabled
                                style="width:48%;"
                            ></a-input>
                        </div>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.be')">
                        <a-input
                            :value="selectedActivity.place"
                            disabled
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bf')">
                        <a-input
                            :value="selectedActivity.organizerStrs"
                            disabled
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.cm')">
                        <a-input
                            :value="selectedActivity.helperStrs"
                            disabled
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bg')">
                        <a-input
                            v-model="form.productServe"
                            :disabled="isCheck"
                        ></a-input>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 5">
                    <p>{{ $t("enterprise.bh") }}</p>
                    <ul>
                        <li>{{ $t("enterprise.bi") }}</li>
                        <li>{{ $t("enterprise.bj") }}</li>
                    </ul>
                    <p>{{ $t("enterprise.bk") }}</p>
                    <a-form-model-item :label="$t('enterprise.bl')">
                        <a-input
                            v-model="form.exhibitRent"
                            type="number"
                            :disabled="isCheck"
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bm')">
                        <a-input
                            v-model="form.makeCost"
                            type="number"
                            :disabled="isCheck"
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bn')">
                        <a-input
                            v-model="form.trafficCost"
                            type="number"
                            :disabled="isCheck"
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bo')">
                        <a-input
                            v-model="form.leafletCost"
                            type="number"
                            :disabled="isCheck"
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bp')">
                        <a-input
                            v-model="form.advertCost"
                            type="number"
                            :disabled="isCheck"
                        ></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bq')">
                        <a-input
                            :value="totalAmount"
                            :placeholder="$t('enterprise.cp')"
                            disabled
                        >
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.br')">
                        <a-radio-group
                            v-model="form.haveGovernment"
                            :disabled="isCheck"
                        >
                            <a-radio :value="false">
                                {{ $t("enterprise.bs") }}
                            </a-radio>
                            <a-radio :value="true">
                                {{ $t("enterprise.bt") }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item>
                        <div class="goverments-title">
                            <span>{{ $t("enterprise.bu") }}</span>
                            <span>{{ $t("enterprise.bv") }}</span>
                            <div v-show="!isCheck" class="button-wrapper">
                                <a-button
                                    type="primary"
                                    shape="circle"
                                    icon="plus"
                                    @click="
                                        form.governments.push({
                                            name: '',
                                            supporContent: ''
                                        })
                                    "
                                ></a-button>
                                <a-button
                                    shape="circle"
                                    icon="minus"
                                    style="margin-left:10px;"
                                    @click="form.governments.pop()"
                                ></a-button>
                            </div>
                        </div>
                        <div
                            v-for="(item, index) in form.governments"
                            :key="index"
                            style="margin-bottom:10px;"
                        >
                            <div class="goverments-title">
                                <a-input
                                    v-model="item.name"
                                    :disabled="isCheck"
                                ></a-input>
                                <a-input
                                    v-model="item.supportContent"
                                    :disabled="isCheck"
                                ></a-input>
                            </div>
                        </div>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 6">
                    <a-form-model-item
                        prop="receive"
                        :label="$t('enterprise.ae')"
                    >
                        <a-radio-group
                            v-model="form.receive"
                            :disabled="isCheck"
                        >
                            <a-radio value="CHEQUE">
                                {{ $t("enterprise.ba") }}
                            </a-radio>
                            <a-radio value="TRANSFER">
                                {{ $t("enterprise.bb") }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item
                        v-if="form.receive === 'TRANSFER'"
                        :label="$t('enterprise.cs')"
                    >
                        <upload-file
                            :value.sync="form.bankRecordFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item
                        v-if="form.receive === 'TRANSFER'"
                        :label="$t('enterprise.ct')"
                    >
                        <upload-file
                            :value.sync="form.bankAuthorizeFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 7">
                    <p>{{ $t("enterprise.bw") }}</p>
                    <p>{{ $t("enterprise.bx") }}</p>
                    <p>{{ $t("enterprise.by") }}</p>
                    <a-form-model-item>
                        <a-radio-group
                            v-model="form.stateAgree"
                            :disabled="isCheck"
                        >
                            <a-radio :value="true">
                                {{ $t("enterprise.bz") }}
                            </a-radio>
                            <a-radio :value="false">
                                {{ $t("enterprise.ca") }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 8">
                    <a-form-model-item
                        prop="identityFiles"
                        :label="$t('enterprise.cb')"
                    >
                        <upload-file
                            :value.sync="form.identityFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.cc')">
                        <upload-file
                            :value.sync="form.companyProfile"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.cd')">
                        <upload-file
                            :value.sync="form.exhibitData"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="incomeFiles"
                        :label="$t('enterprise.ce')"
                    >
                        <upload-file
                            :value.sync="form.incomeFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="depositFiles"
                        :label="$t('enterprise.cf')"
                    >
                        <upload-file
                            :value.sync="form.depositFiles"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item
                        prop="quotationSheet"
                        :label="$t('enterprise.cg')"
                    >
                        <upload-file
                            :value.sync="form.quotationSheet"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.ch')">
                        <!-- <upload-file :value.sync="form.noSubmit" :disabled="isCheck" /> -->
                        <a-radio-group
                            v-model="form.noSubmit"
                            :disabled="isCheck"
                        >
                            <a-radio :value="true">
                                {{ $t("util.agree") }}
                            </a-radio>
                            <a-radio :value="false">
                                {{ $t("util.disagree") }}
                            </a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <div v-if="!form.noSubmit">
                        <a-form-model-item
                            prop="registerFiles"
                            :label="$t('enterprise.ci')"
                        >
                            <upload-file
                                :value.sync="form.registerFiles"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                        <a-form-model-item :label="$t('enterprise.cj')">
                            <upload-file
                                :value.sync="form.noOwing"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                        <a-form-model-item
                            prop="identityForm"
                            :label="$t('enterprise.ck')"
                        >
                            <upload-file
                                :value.sync="form.identityForm"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                        <a-form-model-item
                            prop="taxationBills"
                            :label="$t('enterprise.cl')"
                        >
                            <upload-file
                                :value.sync="form.taxationBills"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </div>
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
                        v-show="stepCurrent < 8"
                        type="primary"
                        :disabled="timeNext > 0"
                        @click="handleNext"
                    >
                        {{ timeNext > 0 ? `(${timeNext}S)` : "下一步" }}
                    </a-button>
                    <a-button
                        v-show="stepCurrent === 8"
                        type="primary"
                        :class="isSubmit ? 'none' : ''"
                        @click="handleSubmit"
                        >{{ $t("enterprise.co") }}</a-button
                    >
                </a-form-model-item>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import EE from "@/apis/encourageEnterprise";
import validate from "./validate";
import UploadFile from "@/components/upload";

export default {
    props: { list: Array },
    components: { UploadFile },
    data() {
        return {
            ...validate,
            formId: "",
            form: {
                applicantId: "",
                institutionId: "",
                liaisonId: "",
                activityId: "",
                governments: [{ name: "", supportContent: "" }],
                receive: "",
                taxpayer: "",
                taxpayerCode: "",
                taxpayerType: "",
                productServe: "",
                exhibitRent: null,
                makeCost: null,
                trafficCost: null,
                leafletCost: null,
                advertCost: null,
                totalAmount: 0,
                liaisonOtherAddress: "",
                haveGovernment: false,
                stateAgree: true,
                identityFiles: [],
                exhibitData: [],
                incomeFiles: [],
                depositFiles: [],
                quotationSheet: [],
                registerFiles: [],
                noOwing: [],
                identityForm: [],
                taxationBills: [],
                noSubmit: true,
                companyProfile: [],
                addressSame: true,
                bankRecordFiles: [],
                bankAuthorizeFiles: []
            }
        };
    },
    computed: {
        ...mapGetters([
            "liaisonList",
            "timeNext",
            "currentInstitution",
            "currentUser",
            "encourageDis"
        ]),
        totalAmount: function() {
            const a = this.form.exhibitRent
                ? parseInt(this.form.exhibitRent)
                : 0;
            const b = this.form.makeCost ? parseInt(this.form.makeCost) : 0;
            const c = this.form.trafficCost
                ? parseInt(this.form.trafficCost)
                : 0;
            const e = this.form.leafletCost
                ? parseInt(this.form.leafletCost)
                : 0;
            const f = this.form.advertCost ? parseInt(this.form.advertCost) : 0;
            this.form.totalAmount = a + b + c + e + f;
            return this.form.totalAmount;
        },
        selectedLiaison: function() {
            if (this.form.liaisonId) {
                const data = this.liaisonList.find(
                    item => item.id === this.form.liaisonId
                );
                return data ? data : this.form.liaison;
            }
            return {
                titleNameZh: "",
                phone: "",
                email: "",
                address: ""
            };
        },
        selectedActivity: function() {
            if (this.form.activityId) {
                const data = this.list.find(
                    item => item.id === this.form.activityId
                );
                return data ? data : this.form.activity;
            }
            return {
                startTime: "",
                endTime: "",
                place: "",
                organizerStrs: "",
                helperStrs: ""
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
        async initData() {
            if (this.formId) {
                this.$store.dispatch("setChangeFalse");
                const { data } = await EE.one(this.formId);
                this.form = data;
            } else {
                this.form.applicantId = this.currentUser;
                this.form.institutionId = this.currentInstitution.id;
            }
        },
        //判斷機構是否已是認證機構
        isCertified() {
            this.$warning({
                title: "提示",
                content: "填寫本申請表前，需先進行機構認證！",
                okText: "去認證",
                maskClosable: false,
                keyboard: false,
                onOk: () => {
                    this.$router.push("/personal/info");
                }
            });
        },
        //点击下一步
        handleNext() {
            this.stepCurrent++;
            //滚回到顶部
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        handleSubmit(e) {
            this.$refs.enterprise.validate(async valid => {
                if (valid) {
                    const { data } = await EE.create(this.form);
                    if (data) {
                        this.$message.success("申請成功");
                        this.$router.replace("/personal/funding");
                    }
                } else {
                    this.$message.error(
                        "表單存在必填項為空或者不合法字符，請檢查"
                    );
                }
            });
        }
    },
    mounted() {
        this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
        if (!this.formId) this.$store.dispatch("setTimeNext");
        this.initData();
        this.$nextTick(() => {
            //判斷是否是未認證機構
            if (this.encourageDis) this.isCertified();
        });
    },
    destroyed() {
        this.$store.dispatch("setChangeTrue");
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.special {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.goverments-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    span,
    input {
        width: 48%;
    }
    .button-wrapper {
        position: absolute;
        right: 0;
    }
}
.none {
    display: none;
}
</style>
