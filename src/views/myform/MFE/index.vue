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
            :model="form"
            :rules="rules"
            v-bind="formatLayout"
        >
            <div v-show="stepCurrent === 0">
                <a-form-model-item :label="$t('mfe.ab')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ac')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ad')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ae')">
                    <a-input v-decorator />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-model-item :label="$t('mfe.ag')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ai')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.aj')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ak')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.al')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.am')">
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.an')">
                    <a-input v-decorator />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-model-item :label="$t('mfe.ao')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("mfe.ap") }}</a-radio>
                        <a-radio :value="2">{{ $t("mfe.aq") }}</a-radio>
                        <a-radio :value="3">{{ $t("mfe.ar") }}</a-radio>
                        <a-radio :value="4">{{ $t("mfe.as") }}</a-radio>
                        <a-radio :value="6">{{ $t("mfe.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("mfe.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("mfe.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-model-item>
                <a-form-model-item>
                    <span slot="label">
                        <span>{{ $t("mfe.ax") }}</span>
                        <span style="color:#ccc">({{ $t("mfe.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ba')">
                    <a-date-picker class="full" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-model-item :label="$t('mfe.bc')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{ $t("mfe.dl") }}</a-checkbox>
                        <a-checkbox :value="2">{{ $t("mfe.dm") }}</a-checkbox>
                        <a-checkbox :value="3">{{ $t("mfe.dn") }}</a-checkbox>
                        <a-checkbox :value="4">{{ $t("mfe.do") }}</a-checkbox>
                        <a-checkbox :value="5">{{ $t("mfe.dp") }}</a-checkbox>
                        <a-checkbox :value="6">{{ $t("mfe.dq") }}</a-checkbox>
                        <a-checkbox :value="7">{{ $t("mfe.dr") }}</a-checkbox>
                        <a-checkbox :value="8">{{ $t("mfe.ds") }}</a-checkbox>
                        <a-input
                            class="inline-input"
                            v-decorator
                            placeholder="others"
                        />
                    </a-checkbox-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.bj')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{ $t("mfe.bk") }}</a-checkbox>
                        <a-checkbox :value="2">{{ $t("mfe.bl") }}</a-checkbox>
                        <a-checkbox :value="3">{{ $t("mfe.bm") }}</a-checkbox>
                        <a-checkbox :value="4">{{ $t("mfe.bn") }}</a-checkbox>
                        <a-checkbox :value="5">{{ $t("mfe.bo") }}</a-checkbox>
                        <a-checkbox :value="6">{{ $t("mfe.bp") }}</a-checkbox>
                        <a-input
                            class="inline-input"
                            v-decorator
                            placeholder="others"
                        />
                    </a-checkbox-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.br')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{ $t("mfe.bs") }}</a-checkbox>
                        <a-checkbox :value="2">{{ $t("mfe.bt") }}</a-checkbox>
                        <a-checkbox :value="3">{{ $t("mfe.bu") }}</a-checkbox>
                        <a-checkbox :value="4">{{ $t("mfe.bv") }}</a-checkbox>
                        <a-checkbox :value="5">{{ $t("mfe.bw") }}</a-checkbox>
                        <a-checkbox :value="6">{{ $t("mfe.bx") }}</a-checkbox>
                        <a-checkbox :value="7">{{ $t("mfe.by") }}</a-checkbox>
                        <a-checkbox :value="8">{{ $t("mfe.bz") }}</a-checkbox>
                        <a-checkbox :value="9">{{ $t("mfe.ca") }}</a-checkbox>
                        <a-checkbox :value="10">{{ $t("mfe.cb") }}</a-checkbox>
                        <a-checkbox :value="11">{{ $t("mfe.cc") }}</a-checkbox>
                    </a-checkbox-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.cd')">
                    <upload />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-model-item :label="$t('mfe.cg')">
                    <div v-decorator="company">
                        <div
                            class="company-item"
                            v-for="(item, index) in companyArray"
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
                    </div>
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.ch')">
                    <upload />
                </a-form-model-item>
                <a-form-model-item :label="$t('mfe.cj')">
                    <upload />
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
                <a-button v-else type="primary" html-type="submit">{{
                    $t("mfe.dk")
                }}</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import Upload from "@/components/upload";
import Company from "../components/company";
import validate from "./validate";
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
    methods: {
        operaCompany: function(type, index) {
            if (type) {
                const body = {
                    name: "",
                    liaisonName: "",
                    phone: "",
                    email: ""
                };
                this.companyArray.push(body);
            } else {
                this.companyArray.splice(index, 1);
            }
        },
        handleSubmit: function(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("--->", values);
                }
            });
        }
    },
    created: function() {
        this.form = this.$form.createForm(this, { name: "MFE" });
    },
    mounted: function() {
        this.companyArray = this.form.getFieldValue("company");
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
