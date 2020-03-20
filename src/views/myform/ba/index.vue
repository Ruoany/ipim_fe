<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formba.aa')" />
            <a-step :title="$t('formba.ae')" />
            <a-step :title="$t('formba.ak')" />
            <a-step :title="$t('formba.ar')" />
            <a-step :title="$t('formba.az')" />
            <a-step :title="$t('formba.be')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item>
                    <ul>
                        <li>{{ $t("formba.ab") }}</li>
                        <li>{{ $t("formba.ac") }}</li>
                        <li>{{ $t("formba.ad") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('formba.af')">
                    <a-input v-decorator="name" />
                </a-form-item>
                <a-form-item :label="$t('formba.ag')">
                    <div class="form-content">
                        <ul>
                            <li>{{ $t("formba.ah") }}</li>
                            <li>{{ $t("formba.ai") }}</li>
                            <li>{{ $t("formba.aj") }}</li>
                        </ul>
                    </div>
                    <a-upload-dragger v-decorator="files" name="files" action="/upload.do">
                        <p class="ant-upload-drag-icon">
                            <a-icon type="inbox" />
                        </p>
                        <p class="ant-upload-text">Click or drag file to this area to upload</p>
                        <p class="ant-upload-hint">Support for a single or bulk upload.</p>
                    </a-upload-dragger>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('formba.al')">
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
                            {{ item.nameZh }} {{ item.nameEnOrPt }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :label="$t('formba.am')">
                    <a-input v-decorator disabled v-model="titleName"></a-input>
                </a-form-item>
                <a-form-item :label="$t('formba.an')">
                    <a-input v-decorator type="number" disabled v-model="liaisonObj.tel"></a-input>
                </a-form-item>
                <a-form-item :label="$t('formba.ao')">
                    <a-input v-decorator type="number" disabled v-model="liaisonObj.fax"></a-input>
                </a-form-item>
                <a-form-item :label="$t('formba.ap')">
                    <a-input v-decorator disabled v-model="liaisonObj.email"></a-input>
                </a-form-item>
                <a-form-item :label="$t('formba.aq')">
                    <a-textarea disabled v-model="liaisonObj.address"></a-textarea>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('formba.as')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formba.at')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formba.au')">
                    <a-range-picker v-decorator style="width:100%;" />
                </a-form-item>
                <a-form-item :label="$t('formba.av')">
                    <a-textarea v-decorator :rows="4" />
                    <div>{{ $t("formba.aw") }}</div>
                </a-form-item>
                <a-form-item :label="$t('formba.ax')">
                    <a-textarea v-decorator :rows="4" />
                </a-form-item>
                <a-form-item :label="$t('formba.ay')">
                    <a-textarea v-decorator :rows="4" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('formba.ba')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formba.bb')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formba.bc')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formba.bd')">
                    <a-upload-dragger v-decorator name="files" action="/upload.do">
                        <p class="ant-upload-drag-icon">
                            <a-icon type="inbox" />
                        </p>
                        <p class="ant-upload-text">Click or drag file to this area to upload</p>
                        <p class="ant-upload-hint">Support for a single or bulk upload.</p>
                    </a-upload-dragger>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item :wrapper-col="formatLayout.wrapperCol">
                    <div>{{ $t("formba.bf") }}</div>
                    <a-radio-group v-decorator>
                        <a-radio value="a">{{ $t("util.yes") }}</a-radio>
                        <a-radio value="b">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                    <div>{{ $t("formba.bi") }}</div>
                    <a-textarea v-decorator :rows="4" />
                </a-form-item>
                <a-form-item :wrapper-col="formatLayout.wrapperCol">
                    <div>{{ $t("formba.bg") }}</div>
                    <a-radio-group v-decorator>
                        <a-radio value="a">{{ $t("util.yes") }}</a-radio>
                        <a-radio value="b">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                    <div>{{ $t("formba.bi") }}</div>
                    <a-textarea v-decorator :rows="4" />
                </a-form-item>
                <a-form-item :wrapper-col="formatLayout.wrapperCol">
                    <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
                        <span>{{ $t("formba.bh") }}</span>
                    </a-checkbox>
                </a-form-item>
            </div>
            <a-form-item :wrapper-col="formatLayout.wrapperCol">
                <a-button v-show="stepCurrent > 0" type="primary" @click="stepCurrent--" style="margin-right:12px"
                    >上一步</a-button
                >
                <a-button v-show="stepCurrent < 5" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button v-show="stepCurrent === 5" type="primary" html-type="submit">{{ $t("gmbpf.dk") }}</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import validate from "./validate";
import Liaison from "@/apis/liaison";
export default {
    data() {
        return {
            ...validate,
            stepCurrent: 0,
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
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
        },
        titleName() {
            return `${this.liaisonObj.titleNameZh} ${this.liaisonObj.titleNameEnOrPt}`;
        }
    },
    methods: {
        handleSubmit: function(e) {
            e.preventDefault();
            this.$form.validateFields((err, values) => {
                if (!err) {
                    console.log("--->", values);
                }
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
        //選擇聯絡人
        liaisonChange(e) {
            let data = this.liaisonList.find(item => item.id === e);
            this.liaisonObj = data;
            console.log("data==>", data, e);
        }
    },
    created: function() {
        this.form = this.$form.createForm(this, { name: "FORMBA" });
        this.initData();
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
