<template>
    <a-form class="form" :form="form" @submit="subForm">
        <div class="form-item-title">
            <p>{{ $t("formab.aa") }}</p>
            <span>{{ $t("formab.ab") }}</span>
        </div>
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
        <div class="form-item-title">
            <p>{{ $t("formab.ag") }}</p>
        </div>
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
                <a-select-option v-for="item in liaisonList" :key="item.id" :label="item.nameZh">
                    {{ item.nameZh }}
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
            <a-input disabled v-model="liaisonObj.address" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.am") }}</p>
        </div>
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
            <upload v-decorator="otherFiles" decorator="otherFiles" @handleChange="uploadChange"></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.aq')">
            <upload v-decorator="taxpayerFiles" decorator="taxpayerFiles" @handleChange="uploadChange"></upload>
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
        <div class="form-item-title">
            <p>{{ $t("formab.at") }}</p>
        </div>
        <a-form-item :label="$t('formab.au')">
            <upload
                v-decorator="unitIntroductionFiles"
                decorator="unitIntroductionFiles"
                @handleChange="uploadChange"
            ></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.aw')">
            <upload v-decorator="idcardFiles" decorator="idcardFiles" @handleChange="uploadChange"></upload>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.ax") }}</p>
        </div>
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
        <div class="form-item-title">
            <p>{{ $t("formab.bt") }}</p>
        </div>
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
        <a-form-item>
            <a-button type="primary" html-type="submit" size="large">{{ $t("formab.cb") }}</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import Upload from "@/components/upload";
import rules from "./validate";
import liaison from "@/apis/liaison";
import outShow from "@/apis/outShow";
export default {
    components: { Upload },
    data() {
        return {
            ...rules,
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
                id: 97,
                createAt: null,
                updateAt: null,
                name: null,
                nameZh: "機构測試123",
                nameEn: "test123",
                namePt: "Ensaio Institucional",
                logo: null,
                dateOfEstablishment: "1901-03",
                startTime: null,
                endTime: null,
                natureId: 4,
                natureName: "未開始",
                country: null,
                province: null,
                city: null,
                street: null,
                countryZh: "1",
                provinceZh: "110000000000",
                cityZh: "110100000000",
                streetZh: "測試",
                countryEnOrPt: null,
                provinceEnOrPt: null,
                cityEnOrPt: null,
                streetEnOrPt: null,
                email: null,
                tel: null,
                fax: "020-333",
                institutionShareholderVOS: null,
                m1Number: null,
                registrationNumber: null,
                taxpayerName: null,
                taxpayerNo: null,
                business: null,
                registeredCapital: 20000,
                currency: "CNY",
                institutionIndustryVOS: null,
                chargeName: null,
                status: null,
                shareholderComponents: null,
                deal: null,
                idnumber: null
            };
        }
    },
    created: function() {
        this.form = this.$form.createForm(this, { name: "formab" });
    },
    methods: {
        reasonChange(e) {
            console.log("ee==>", e);
            if (e.target.value === 2) {
                this.checkNick = true;
            } else {
                this.checkNick = false;
            }
            this.$nextTick(() => {
                this.form.validateFields(
                    ["businessRegistrationFiles", "certificateBureauFiles", "salesTaxOpenFiles", "salesTaxFiles"],
                    { force: true }
                );
            });
        },
        async initData() {
            const data = await liaison.get();
            if (data.code === 200) {
                this.liaisonList = data.data.content;
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
                    const data = await outShow.create({
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
