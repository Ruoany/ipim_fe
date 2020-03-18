<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formab.aa')" />
            <a-step :title="$t('formab.ag')" />
            <a-step :title="$t('formab.am')" />
            <a-step :title="$t('formab.at')" />
            <a-step :title="$t('formab.ax')" />
            <a-step :title="$t('formab.bt')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="subForm">
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('formab.ac')">
                    <a-input disabled v-model="company.nameZh" />
                </a-form-item>
                <a-form-item :label="$t('formab.ad')">
                    <a-input disabled v-model="company.siteRegistrationCode" />
                </a-form-item>
                <a-form-item :label="$t('formab.ae')">
                    <a-input disabled v-model="company.registrationNumber" />
                </a-form-item>
                <a-form-item :label="$t('formab.af')">
                    <a-input v-decorator="exhibitionProduct" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('formab.ah')">
                    <a-select
                        showSearch
                        optionFilterProp="label"
                        @change="liaisonChange"
                        :filterOption="true"
                        :notFoundContent="null"
                        class="full"
                        v-decorator="liaisonId"
                    >
                        <a-select-option
                            v-for="item in liaisonList"
                            :key="item.id"
                            :label="item.nameZh"
                        >
                            {{
                            item.nameZh
                            }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :label="$t('formab.ai')">
                    <a-input disabled v-model="liaisonObj.phone" />
                </a-form-item>
                <a-form-item :label="$t('formab.zz')">
                    <a-input disabled />
                </a-form-item>
                <a-form-item :label="$t('formab.aj')">
                    <a-input disabled v-model="liaisonObj.fax" />
                </a-form-item>

                <a-form-item :label="$t('formab.ak')">
                    <a-input disabled v-model="liaisonObj.email" />
                </a-form-item>
                <a-form-item :label="$t('formab.al')">
                    <a-textarea disabled v-model="liaisonObj.address" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('formab.an')">
                    <upload
                        v-decorator="registrationOfBureauFiles"
                        decorator="registrationOfBureauFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.ao')">
                    <upload
                        v-decorator="macaoShareholderFiles"
                        decorator="macaoShareholderFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.ap')">
                    <upload
                        v-decorator="otherFiles"
                        decorator="otherFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.aq')">
                    <upload
                        v-decorator="taxpayerFiles"
                        decorator="taxpayerFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.ar')">
                    <upload
                        v-decorator="shareholderSamesFiles"
                        decorator="shareholderSamesFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.as')">
                    <upload
                        v-decorator="differentTaxpayerFiles"
                        decorator="differentTaxpayerFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('formab.au')">
                    <upload
                        v-decorator="unitIntroductionFiles"
                        decorator="unitIntroductionFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.aw')">
                    <upload
                        v-decorator="idcardFiles"
                        decorator="idcardFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.ay") }}</h3>
                        <li>{{ $t("formab.az") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.ba") }}</h3>
                        <li>{{ $t("formab.bb") }}</li>
                        <li>{{ $t("formab.bc") }}</li>
                        <li>{{ $t("formab.bd") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.be") }}</h3>
                        <li>{{ $t("formab.bf") }}</li>
                        <li>{{ $t("formab.bg") }}</li>
                        <li>{{ $t("formab.bh") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.bi") }}</h3>
                        <li>{{ $t("formab.bj") }}</li>
                        <li>{{ $t("formab.bk") }}</li>
                        <li>{{ $t("formab.bl") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.bm") }}</h3>
                        <li>{{ $t("formab.bn") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.bo") }}</h3>
                        <li>{{ $t("formab.bp") }}</li>
                        <li>{{ $t("formab.bq") }}</li>
                        <li>{{ $t("formab.br") }}</li>
                        <li>{{ $t("formab.bs") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item>
                    <div>{{ $t("formab.bu") }}</div>
                    <a-radio-group @change="reasonChange" v-model="reason">
                        <a-radio :value="1">{{ $t("formab.bv") }}</a-radio>
                        <a-radio :value="2">{{ $t("formab.bw") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('formab.bx')">
                    <upload
                        v-decorator="[
                    'businessRegistrationFiles',
                    { rules: [{ required: checkNick, message: 'Please upload file' }] }
                ]"
                        decorator="businessRegistrationFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.by')">
                    <upload
                        v-decorator="[
                    'certificateBureauFiles',
                    { rules: [{ required: checkNick, message: 'Please upload file' }] }
                ]"
                        decorator="certificateBureauFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.bz')">
                    <upload
                        v-decorator="['salesTaxOpenFiles', { rules: [{ required: checkNick, message: 'Please upload file' }] }]"
                        decorator="salesTaxOpenFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('formab.ca')">
                    <upload
                        v-decorator="['salesTaxFiles', { rules: [{ required: checkNick, message: 'Please upload file' }] }]"
                        decorator="salesTaxFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button
                    v-show="stepCurrent > 0"
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                >上一步</a-button>
                <a-button v-show="stepCurrent < 5" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button
                    v-show="stepCurrent === 5"
                    type="primary"
                    html-type="submit"
                >{{ $t("formab.cb") }}</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import Upload from "@/components/upload";
import rules from "./validate";
import Liaison from "@/apis/liaison";
import PAA from "@/apis/participateAttendAbroad";
export default {
    components: { Upload },
    data() {
        return {
            ...rules,
            stepCurrent: 0,
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 }
            },
            upLabel: { span: 16, offset: 4 },
            reason: 1,
            checkNick: false,
            liaisonList: [], //聯係人列表
            liaisonObj: {
                id: null,
                nameZh: null,
                phone: null,
                fax: null,
                email: null,
                address: null
            }, //當前選中聯係人
            activityId: null,
            applicantId: 5
        };
    },
    computed: {
        company() {
            // return JSON.parse(sessionStorage.getItem("company"));
            return {
                id: 96,
                createAt: null,
                updateAt: null,
                name: null,
                nameZh: "機构測試1",
                nameEn: "test",
                namePt: "Ensaio Institucional",
                logo: null,
                dateOfEstablishment: "2020-02",
                startTime: null,
                endTime: null,
                natureId: 2,
                natureName: "本地",
                country: null,
                province: null,
                city: null,
                street: null,
                countryZh: "3",
                provinceZh: null,
                cityZh: "31",
                streetZh: "測試",
                countryEnOrPt: null,
                provinceEnOrPt: null,
                cityEnOrPt: null,
                streetEnOrPt: null,
                email: null,
                tel: null,
                fax: "020-112345",
                institutionShareholderVOS: [
                    {
                        id: 64,
                        createAt: null,
                        updateAt: null,
                        institutionId: 96,
                        institutionName: "機构測試1",
                        name: null,
                        percent: null
                    }
                ],
                m1Number: null,
                registrationNumber: null,
                siteRegistrationCode: null,
                taxpayerName: null,
                taxpayerNo: null,
                business: null,
                registeredCapital: 200,
                currency: "USD",
                institutionIndustryVOS: [
                    {
                        institutionId: 96,
                        institutionName: "機构測試1",
                        name: "",
                        category: ""
                    }
                ],
                chargeName: null,
                status: null,
                shareholderComponents: null,
                deal: null,
                tasks: null,
                idnumber: null
            };
        }
    },
    created: function() {
        this.form = this.$form.createForm(this, { name: "PARTICIPATE" });
    },
    methods: {
        reasonChange(e) {
            if (e.target.value === 2) {
                this.checkNick = true;
            } else {
                this.checkNick = false;
            }
            this.$nextTick(() => {
                this.form.validateFields(
                    [
                        "businessRegistrationFiles",
                        "certificateBureauFiles",
                        "salesTaxOpenFiles",
                        "salesTaxFiles"
                    ],
                    { force: true }
                );
            });
        },
        async initData() {
            const data = await Liaison.getList({
                institutionId: this.company.id
            });
            console.log("daya==>", data);
            if (data.code === 200) {
                this.liaisonList = data.data;
            } else {
                this.$message.error(data.message);
            }
        },
        liaisonChange(e) {
            let data = this.liaisonList.find(item => item.id === e);
            this.liaisonObj = data;
            console.log("data==>", data, e);
        },
        subForm(e) {
            e.preventDefault();

            this.form.validateFields(async (err, values) => {
                console.log("val==>", values);

                if (!err) {
                    const data = await PAA.create({
                        ...values,
                        institutionId: this.company.id,
                        activityId: this.activityId,
                        applicantId: this.applicantId
                    });
                    if (data.code === 200) {
                        this.$message.success("提交申请成功");
                        this.$router.back();
                    } else {
                        this.$message.error(data.message);
                    }
                }
            });
        },
        uploadChange(o) {
            console.log("輸出->", o);
            const key = o.keys;
            const value = o.value.map(item => {
                return item.url;
            });
            this.form.setFieldsValue({ [key]: value });
        }
    },
    mounted() {
        this.activityId = this.$route.query.activityId;
        this.initData();
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
