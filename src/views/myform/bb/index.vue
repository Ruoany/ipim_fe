<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formbb.aa')" />
            <a-step :title="$t('formbb.ae')" />
            <a-step :title="$t('formbb.ak')" />
            <a-step :title="$t('formbb.ar')" />
            <a-step :title="$t('formbb.bt')" />
            <a-step :title="$t('formbb.az')" />
            <a-step :title="$t('formbb.be')" />
        </a-steps>
        <a-form-model
            ref="mission"
            class="form"
            :rules="rules"
            :model="form"
            @submit="handleSubmit"
            v-bind="formatLayout"
        >
            <div v-show="stepCurrent === 0">
                <a-form-model-item>
                    <ul>
                        <li>{{ $t("formbb.ab") }}</li>
                        <li>{{ $t("formbb.ac") }}</li>
                        <li>{{ $t("formbb.ad") }}</li>
                    </ul>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-model-item :label="$t('formbb.af')">
                    <a-input
                        :value="
                            `${currentInstitution.nameZh}/${currentInstitution.namePt}/${currentInstitution.nameEn}`
                        "
                        disabled
                    />
                </a-form-model-item>
                <a-form-model-item prop="newspapers" :label="$t('formbb.ah')">
                    <upload :value.sync="form.newspapers" :disabled="isCheck" />
                </a-form-model-item>
                <a-form-model-item prop="registration" :label="$t('formbb.ai')">
                    <upload
                        :value.sync="form.registration"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
                <a-form-model-item
                    prop="identification"
                    :label="$t('formbb.aj')"
                >
                    <upload
                        :value.sync="form.identification"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-model-item prop="liaisonId" :label="$t('formbb.al')">
                    <a-select v-model="form.liaisonId" :disabled="isCheck">
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
                <a-form-model-item :label="$t('formbb.am')">
                    <a-input :value="selectedLiaison.titleNameZh" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('formbb.an')">
                    <a-input :value="selectedLiaison.phone" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('formbb.ao')">
                    <a-input :value="selectedLiaison.fax" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('formbb.ap')">
                    <a-input :value="selectedLiaison.email" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('formbb.aq')">
                    <a-input :value="selectedLiaison.address" disabled />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-model-item :label="$t('formbb.bj')">
                    <a-radio-group
                        v-model="attendType"
                        @change="onAttendTypeChange"
                        :disabled="isCheck"
                    >
                        <a-radio value="a">{{ $t("formbb.bk") }}</a-radio>
                        <a-radio value="b">{{ $t("formbb.bl") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('formbb.aa')">
                    <ul v-if="attendType == 'a'">
                        <li>{{ $t("formbb.bm") }}</li>
                    </ul>
                    <ul v-else>
                        <li>{{ $t("formbb.bn") }}</li>
                        <li>{{ $t("formbb.bo") }}</li>
                        <li>{{ $t("formbb.bp") }}</li>
                    </ul>
                </a-form-model-item>
                <a-form-model-item prop="activityId" :label="$t('formbb.as')">
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
                <a-form-model-item :label="$t('formbb.at')">
                    <a-input :value="selectedActivity.place" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('formbb.au')">
                    <a-input
                        :value="
                            `${selectedActivity.startTime}至${selectedActivity.endTime}`
                        "
                        disabled
                    />
                </a-form-model-item>
                <a-form-model-item
                    prop="activityIntroduction"
                    :label="$t('formbb.av')"
                >
                    <a-textarea
                        v-model="form.activityIntroduction"
                        :auto-size="{ minRows: 4, maxRows: 4 }"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
                <a-form-model-item
                    prop="activityFiles"
                    :label="$t('formbb.av')"
                >
                    <upload
                        :value.sync="form.activityFiles"
                        :disabled="isCheck"
                    />
                    <div>{{ $t("formbb.aw") }}</div>
                </a-form-model-item>
                <a-form-model-item prop="objective" :label="$t('formbb.ax')">
                    <a-textarea
                        v-model="form.objective"
                        :auto-size="{ minRows: 4, maxRows: 4 }"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
                <a-form-model-item
                    prop="expectedResults"
                    :label="$t('formbb.ay')"
                >
                    <a-textarea
                        v-model="form.expectedResults"
                        :auto-size="{ minRows: 4, maxRows: 4 }"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-model-item :label="$t('formbb.bu')">
                    <a-button
                        style="margin-left:20px"
                        @click="downloadExcel('nameList')"
                        >{{ $t("formbb.bq") }}</a-button
                    >
                    <a-button
                        style="margin-left:20px"
                        @click="downloadExcel('schedule')"
                        >{{ $t("formbb.br") }}</a-button
                    >
                    <a-button
                        style="margin-left:20px"
                        @click="downloadExcel('budgetSheet')"
                        >{{ $t("formbb.bs") }}</a-button
                    >
                </a-form-model-item>
                <a-form-model-item
                    prop="missionNameList"
                    :label="$t('formbb.bq')"
                >
                    <upload
                        :value.sync="form.missionNameList"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
                <a-form-model-item
                    prop="missionSchedule"
                    :label="$t('formbb.br')"
                >
                    <upload
                        :value.sync="form.missionSchedule"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
                <a-form-model-item
                    prop="missionBudgetSheet"
                    :label="$t('formbb.bs')"
                >
                    <upload
                        :value.sync="form.missionBudgetSheet"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-model-item :label="$t('formbb.ba')">
                    <a-input :disabled="isCheck" />
                    <div>{{ $t("formbb.bw") }}</div>
                </a-form-model-item>
                <a-form-model-item :label="$t('formbb.bb')">
                    <a-checkbox
                        :disabled="isCheck"
                        :checked="form.haveAirTicket"
                        ref="haveAirTicket"
                        @change="onCheckboxChange('haveAirTicket')"
                    >
                        {{ $t("formbb.bx") }}
                    </a-checkbox>
                    <a-checkbox
                        :disabled="isCheck"
                        :checked="form.haveBoatTicket"
                        ref="haveBoatTicket"
                        @change="onCheckboxChange('haveBoatTicket')"
                    >
                        {{ $t("formbb.by") }}
                    </a-checkbox>
                    <a-checkbox
                        :disabled="isCheck"
                        :checked="form.haveRailTicket"
                        ref="haveRailTicket"
                        @change="onCheckboxChange('haveRailTicket')"
                    >
                        {{ $t("formbb.bz") }}
                    </a-checkbox>
                    <a-checkbox
                        :disabled="isCheck"
                        :checked="form.haveTranOther"
                        ref="haveTranOther"
                        @change="onCheckboxChange('haveTranOther')"
                    >
                        {{ $t("formbb.ca") }}
                    </a-checkbox>
                    <a-input
                        v-model="form.tranOtherNote"
                        style="width: 30%"
                        :disabled="isCheck || !form.haveTranOther"
                    />
                </a-form-model-item>

                <a-row v-if="form.haveAirTicket" type="flex">
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.bx') + $t('formbb.cc')"
                        >
                            <a-input
                                v-model="form.airTicketNum"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.bx') + $t('formbb.cd')"
                        >
                            <a-input
                                v-model="form.airTicketFee"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                </a-row>

                <a-row v-if="form.haveBoatTicket" type="flex">
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.by') + $t('formbb.cc')"
                        >
                            <a-input
                                v-model="form.boatTicketNum"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.by') + $t('formbb.cd')"
                        >
                            <a-input
                                v-model="form.boatTicketFee"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                </a-row>

                <a-row v-if="form.haveRailTicket" type="flex">
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.bz') + $t('formbb.cc')"
                        >
                            <a-input
                                v-model="form.railTicketNum"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.bz') + $t('formbb.cd')"
                        >
                            <a-input
                                v-model="form.railTicketFee"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                </a-row>

                <a-row v-if="form.haveTranOther" type="flex">
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.ca') + $t('formbb.cc')"
                        >
                            <a-input
                                v-model="form.tranOtherNum"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-model-item
                            :label="$t('formbb.ca') + $t('formbb.cd')"
                        >
                            <a-input
                                v-model="form.tranOtherFee"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                </a-row>

                <a-row type="flex">
                    <a-col :span="8">
                        <a-form-model-item
                            :label="$t('formbb.cf') + $t('formbb.cl')"
                        >
                            <a-input
                                v-model="form.hotelName1"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-model-item
                            :label="$t('formbb.cf') + $t('formbb.cc')"
                        >
                            <a-input
                                v-model="form.hotelNum1"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-model-item
                            :label="$t('formbb.cf') + $t('formbb.cd')"
                        >
                            <a-input
                                v-model="form.hotelFee1"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                </a-row>
                <a-row type="flex">
                    <a-col :span="8">
                        <a-form-model-item
                            :label="
                                $t('formbb.cg') +
                                    $t('formbb.cl') +
                                    $t('formbb.cm')
                            "
                        >
                            <a-input
                                v-model="form.hotelName2"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-model-item
                            :label="
                                $t('formbb.cg') +
                                    $t('formbb.cc') +
                                    $t('formbb.cm')
                            "
                        >
                            <a-input
                                v-model="form.hotelNum2"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-model-item
                            :label="
                                $t('formbb.cg') +
                                    $t('formbb.cd') +
                                    $t('formbb.cm')
                            "
                        >
                            <a-input
                                v-model="form.hotelFee2"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                </a-row>
                <a-row type="flex">
                    <a-col :span="8">
                        <a-form-model-item
                            :label="
                                $t('formbb.ch') +
                                    $t('formbb.cl') +
                                    $t('formbb.cm')
                            "
                        >
                            <a-input
                                v-model="form.hotelName3"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-model-item
                            :label="
                                $t('formbb.ch') +
                                    $t('formbb.cc') +
                                    $t('formbb.cm')
                            "
                        >
                            <a-input
                                v-model="form.hotelNum3"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-model-item
                            :label="
                                $t('formbb.ch') +
                                    $t('formbb.cd') +
                                    $t('formbb.cm')
                            "
                        >
                            <a-input
                                v-model="form.hotelFee3"
                                :disabled="isCheck"
                            />
                        </a-form-model-item>
                    </a-col>
                </a-row>
                
                <a-form-model-item>
                    <a-checkbox
                        :disabled="isCheck"
                        :checked="form.haveAccommodationCost"
                        ref="haveAccommodationCost"
                        @change="onCheckboxChange('haveAccommodationCost')"
                    >
                        {{ $t("formbb.cn") + $t("formbb.cj") }}
                    </a-checkbox>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-model-item :wrapper-col="formatLayout.wrapperCol">
                    <div>{{ $t("formbb.bf") }}</div>
                    <a-radio-group
                        v-model="form.haveReceive"
                        :disabled="isCheck"
                    >
                        <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                    <div>{{ $t("formbb.bi") }}</div>
                    <a-textarea
                        :disabled="isCheck"
                        v-model="form.receiveStatement"
                        :rows="4"
                    />
                </a-form-model-item>
                <a-form-model-item :wrapper-col="formatLayout.wrapperCol">
                    <div>{{ $t("formbb.bg") }}</div>
                    <a-radio-group
                        v-model="form.haveCharge"
                        :disabled="isCheck"
                    >
                        <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                    <div>{{ $t("formbb.bi") }}</div>
                    <a-textarea
                        :disabled="isCheck"
                        v-model="form.chargeStatement"
                        :rows="4"
                    />
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('formbb.bh')"
                    :wrapper-col="formatLayout.wrapperCol"
                >
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
                    v-show="stepCurrent < 6"
                    type="primary"
                    :disabled="timeNext > 0"
                    @click="stepCurrent++"
                >
                    {{ timeNext > 0 ? `(${timeNext}S)` : "下一步" }}</a-button
                >
                <a-button
                    v-show="stepCurrent === 6 && !isCheck"
                    type="primary"
                    html-type="submit"
                    >{{ $t("formbb.bv") }}</a-button
                >
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import validate from "./validate";
import Upload from "@/components/upload";
import EA from "@/apis/encourageMission";
export default {
    props: { list: Array },
    components: { Upload },
    data() {
        return {
            ...validate,
            stepCurrent: 0,
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
            },
            dateFormat: "YYYY-MM-DD",
            formId: "",
            attendType: "a",
            hotelSlect: [],
            form: {
                applicantId: "",
                institutionId: "",
                newspapers: [],
                registration: [],
                identification: [],
                liaisonId: "",
                isAttendExhibition: true,
                isAttendMeeting: false,
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
                chargeStatement: "",
                haveAirTicket: false,
                haveBoatTicket: false,
                haveRailTicket: false,
                haveTranOther: false,
                tranOtherNote: "",
                haveTransportationCost: false,
                haveAccommodationCost: false
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
        onCheckboxChange(n) {
            this.$set(this.form, n, !this.form[n]);
        },
        onAttendTypeChange(e) {
            this.form.isAttendExhibition = e.target.value == "a";
            this.form.isAttendMeeting = e.target.value == "b";
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
        handleSubmit: function(e) {
            e.preventDefault();

            this.$refs.mission.validate(async valid => {
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
        },
        downloadExcel: async function(t) {
            let result = {};
            switch (t) {
                case "nameList":
                    result = await EA.downloadNameList();
                    break;
                case "schedule":
                    result = await EA.downloadSchedule();
                    break;
                case "budgetSheet":
                    result = await EA.downloadBudgetSheet();
                    break;
            }
            const blob = new Blob([result], {
                type:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            });
            const a = document.createElement("a");
            a.download = this.form;
            a.target = "blank";
            a.href = URL.createObjectURL(blob);
            a.click();
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
    created: function() {
        // this.form = this.$form.createForm(this, { name: "FORMBB" });
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
