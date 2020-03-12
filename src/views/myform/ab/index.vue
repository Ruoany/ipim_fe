<template>
    <a-form class="form" :form="form" @submit="subForm">
        <div class="form-item-title">
            <p>{{ $t("formab.aa") }}</p>
            <span>{{ $t("formab.ab") }}</span>
        </div>
        <a-form-item :label="$t('formab.ac')">
            <a-input disabled />
        </a-form-item>
        <a-form-item :label="$t('formab.ad')">
            <a-input disabled />
        </a-form-item>
        <a-form-item :label="$t('formab.ae')">
            <a-input disabled />
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
            <a-input disabled v-model="liaisonObj.address" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.am") }}</p>
        </div>
        <a-form-item :label="$t('formab.an')">
            <upload
                v-decorator="macaoShareholderFiles"
                decorator="macaoShareholderFiles"
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
            <upload v-decorator="taxpayerFiles"></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.ar')">
            <upload v-decorator="shareholderSamesFiles"></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.as')">
            <upload v-decorator="differentTaxpayerFiles"></upload>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.at") }}</p>
        </div>
        <a-form-item :label="$t('formab.au')">
            <upload v-decorator="unitIntroductionFiles"></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.aw')">
            <upload v-decorator="idcardFiles"></upload>
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
            ></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.by')">
            <upload
                v-decorator="[
                    'certificateBureauFiles',
                    { rules: [{ required: checkNick, message: 'Please upload file' }] }
                ]"
            ></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.bz')">
            <upload
                v-decorator="['salesTaxOpenFiles', { rules: [{ required: checkNick, message: 'Please upload file' }] }]"
            ></upload>
        </a-form-item>
        <a-form-item :label="$t('formab.ca')">
            <upload></upload>
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
            } //當前選中聯係人
        };
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
        async subForm(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                console.log("val==>", values);
                if (!err) {
                }
            });
        },
        uploadChange(o) {
            console.log("輸出->", o);
            const key = o.keys;
            const value = o.value;
            this.form.setFieldsValue({ [key]: value });
        }
    },
    mounted() {
        this.initData();
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
