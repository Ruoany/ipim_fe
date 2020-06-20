<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('attend.aa')" disabled />
            <a-step :title="$t('attend.ae')" disabled />
            <a-step :title="$t('attend.aj')" disabled />
            <a-step :title="$t('attend.aq')" disabled />
            <a-step :title="$t('attend.bl')" disabled />
            <a-step :title="$t('attend.be')" disabled />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model ref="attend" :model="form" :rules="rules" v-bind="formatLayout">
                <div v-show="stepCurrent === 0">
                    <a-form-item>
                        <ul>
                            <li>{{ $t("attend.ab") }}</li>
                            <li>{{ $t("attend.ac") }}</li>
                            <li>{{ $t("attend.ad") }}</li>
                        </ul>
                    </a-form-item>
                </div>
                <div v-show="stepCurrent === 1">
                    <a-form-model-item :label="$t('attend.af')">
                        <a-input
                            :value="
                                `${currentInstitution.nameZh} ${currentInstitution.namePt?currentInstitution.namePt:''} ${currentInstitution.nameEn?currentInstitution.nameEn:''}`
                            "
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item prop="newspapers" :label="$t('attend.ag')">
                        <upload :value.sync="form.newspapers" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="registration" :label="$t('attend.ah')">
                        <upload :value.sync="form.registration" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="identification" :label="$t('attend.ai')">
                        <upload :value.sync="form.identification" :disabled="isCheck" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item prop="liaisonId" :label="$t('attend.ak')">
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
                    <a-form-model-item :label="$t('attend.al')">
                        <a-input :value="selectedLiaison.titleNameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.am')">
                        <a-input :value="selectedLiaison.phone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.an')">
                        <a-input :value="selectedLiaison.fax" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.ao')">
                        <a-input :value="selectedLiaison.email" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.ap')">
                        <a-input :value="selectedLiaison.address" disabled />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item prop="activityId" :label="$t('attend.ar')">
                        <a-select v-model="form.activityId" :disabled="isCheck">
                            <a-select-option
                                v-for="item in list"
                                :key="item.id"
                                :value="item.id"
                                :label="item.nameZh"
                            >{{ item.nameZh }}</a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.as')">
                        <a-input :value="selectedActivity.place" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.at')">
                        <a-input
                            :value="
                                `${selectedActivity.startTime}至${selectedActivity.endTime}`
                            "
                            disabled
                        />
                    </a-form-model-item>
                    <a-form-model-item prop="activityIntroduction" :label="$t('attend.au')">
                        <a-textarea
                            v-model="form.activityIntroduction"
                            :auto-size="{ minRows: 4, maxRows: 4 }"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item prop="activityFiles" :label="$t('attend.bm')">
                        <upload :value.sync="form.activityFiles" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item prop="objective" :label="$t('attend.av')">
                        <a-textarea
                            v-model="form.objective"
                            :auto-size="{ minRows: 4, maxRows: 4 }"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                    <a-form-model-item prop="expectedResults" :label="$t('attend.aw')">
                        <a-textarea
                            v-model="form.expectedResults"
                            :auto-size="{ minRows: 4, maxRows: 4 }"
                            :disabled="isCheck"
                        />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 4">
                    <a-form-model-item :label="$t('attend.ax')">
                        <a-input v-model="form.area" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.ay')">
                        <a-input v-model="form.money" :disabled="isCheck">
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.az')">
                        <a-input v-model="form.boothProductionFee" :disabled="isCheck">
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.ba')">
                        <upload :value.sync="form.budgets" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.bb')">
                        <upload :value.sync="form.rents" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.bc')">
                        <upload :value.sync="form.agents" :disabled="isCheck" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.bd')">
                        <upload :value.sync="form.booths" :disabled="isCheck" />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 5">
                    <a-form-model-item :label="$t('attend.bf')">
                        <a-radio-group v-model="form.haveReceive" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("attend.bh")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("attend.bi")
                                }}
                            </a-radio>
                        </a-radio-group>
                        <a-input v-model="form.receiveStatement" :placeholder="$t('attend.bj')" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.bg')">
                        <a-radio-group v-model="form.haveCharge" :disabled="isCheck">
                            <a-radio :value="true">
                                {{
                                $t("attend.bh")
                                }}
                            </a-radio>
                            <a-radio :value="false">
                                {{
                                $t("attend.bi")
                                }}
                            </a-radio>
                        </a-radio-group>
                        <a-input v-model="form.chargeStatement" :placeholder="$t('attend.bj')" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('attend.bk')" />
                </div>
            </a-form-model>
            <a-form-model-item :wrapper-col="formatLayout.wrapperCol">
                <a-button
                    v-show="stepCurrent > 0"
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                >上一步</a-button>
                <a-button
                    v-show="stepCurrent < 5"
                    type="primary"
                    :disabled="timeNext > 0"
                    @click="handleNext"
                >{{ timeNext > 0 ? `(${timeNext}S)` : "下一步" }}</a-button>
                <a-button
                    v-show="stepCurrent === 5"
                    type="primary"
                    :class="isSubmit ? 'none' : ''"
                    @click="handleSubmit"
                >{{ $t("attend.bo") }}</a-button>
            </a-form-model-item>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import validate from "./validate";
import Upload from "@/components/upload";
import EA from "@/apis/encourageAttend";
export default {
    props: { list: Array },
    components: { Upload },
    data() {
        return {
            ...validate,
            formId: "",
            form: {
                applicantId: "",
                institutionId: "",
                newspapers: [],
                registration: [],
                identification: [],
                liaisonId: "",
                activityId: "",
                activityIntroduction: "",
                activityFiles: [],
                objective: "",
                expectedResults: "",
                area: "",
                money: "",
                boothProductionFee: "",
                budgets: [],
                rents: [],
                agents: [],
                haveReceive: false,
                receiveStatement: "",
                haveCharge: false,
                chargeStatement: ""
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
                address: "",
                fax: ""
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
                place: ""
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
                const { data } = await EA.one(this.formId);
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
                content: "當前機構尚未認證，請點擊‘知道了’前往機構認證",
                okText: "知道了",
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
        handleSubmit() {
            this.$refs.attend.validate(async valid => {
                if (valid) {
                    const { data } = await EA.create(this.form);
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
    mounted: function() {
        this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
        if (!this.formId) this.$store.dispatch("setTimeNext");
        this.initData();
        this.$nextTick(() => {
            //判斷是否是未認證機構
            if (this.encourageDis) this.isCertified();
        });
    },
    destroyed: function() {
        this.$store.dispatch("setChangeTrue");
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.none {
    display: none;
}
</style>
