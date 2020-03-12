<template>
    <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formItemLayout">
        <div class="form-item-title">
            <p>{{ $t("formaa.aa") }}</p>
            <span class="span">{{ $t("formaa.ab") }}</span>
        </div>
        <a-form-item :label="$t('formaa.ac')">
            <a-input v-decorator="nameZh" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ad')">
            <a-radio-group v-decorator="gender">
                <a-radio value="M">{{ $t("formaa.ae") }}</a-radio>
                <a-radio value="F">{{ $t("formaa.af") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.ag')">
            <a-date-picker v-decorator="birthDate" class="full" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ah')">
            <a-input v-decorator="idcard" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker v-decorator="idcardValidityDate" class="full" />
        </a-form-item>
        <a-form-item :label="$t('formaa.aj')">
            <a-input v-decorator="exitNumber" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker v-decorator="exitValidityDate" class="full" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ak')">
            <a-input v-decorator="passportNumber" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker v-decorator="passportValidityDate" class="full" />
        </a-form-item>
        <a-form-item :label="$t('formaa.al')">
            <a-input v-decorator="otherCertificateName" />
        </a-form-item>
        <a-form-item :label="$t('formaa.am')">
            <a-input v-decorator="otherIDNumber" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker v-decorator="otherValidityDate" class="full" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formaa.an") }}</p>
        </div>
        <a-form-item :label="$t('formaa.ac')">
            <a-select v-decorator="liaisonId"></a-select>
        </a-form-item>
        <a-form-item :label="$t('formaa.ap')">
            <a-input v-decorator="phone" />
        </a-form-item>
        <a-form-item :label="$t('formaa.aq')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ar')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.as')">
            <a-input v-decorator="fax" />
        </a-form-item>
        <a-form-item :label="$t('formaa.at')">
            <a-input v-decorator="email" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formaa.au") }}</p>
            <span>{{ $t("formaa.av") }}</span>
        </div>
        <a-form-item :label="$t('formaa.aw')">
            <a-checkbox v-decorator="isAssociation">{{ $t("formaa.bu") }}</a-checkbox>
        </a-form-item>
        <a-form-item :label="$t('formaa.ax')">
            <a-input v-decorator="associationName" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ay')">
            <a-input v-decorator="associationPosition" />
        </a-form-item>
        <a-form-item :label="$t('formaa.az')">
            <a-input v-decorator="associateIndustry" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ba')">
            <a-checkbox v-decorator="isCompany">{{ $t("formaa.bb") }}</a-checkbox>
        </a-form-item>
        <a-form-item :label="$t('formaa.bc')">
            <a-input v-decorator="companyName" />
        </a-form-item>
        <a-form-item :label="$t('formaa.bd')">
            <a-input v-decorator="companyAddress" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ay')">
            <a-input v-decorator="companyPosition" />
        </a-form-item>
        <a-form-item :label="$t('formaa.az')">
            <a-input v-decorator="companyIndustry" />
        </a-form-item>
        <a-form-item :label="$t('formaa.be')">
            <a-checkbox v-decorator="isOtherWay">{{ $t("formaa.bf") }}</a-checkbox>
        </a-form-item>
        <a-form-item :label="$t('formaa.bg')">
            <a-input v-decorator="otherWayName" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formaa.bh") }}</p>
        </div>
        <a-form-item :label="$t('formaa.bi')">
            <a-radio-group v-decorator="goWithGroup">
                <a-radio :value="1">{{ $t("formaa.bj") }}</a-radio>
                <a-radio :value="0">{{ $t("formaa.bk") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.bl')">
            <a-radio-group v-decorator="backWithGroup">
                <a-radio :value="1">{{ $t("formaa.bj") }}</a-radio>
                <a-radio :value="0">{{ $t("formaa.bk") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.bm')">
            <a-radio-group v-decorator="arrangement">
                <a-radio :value="1">{{ $t("formaa.bj") }}</a-radio>
                <a-radio :value="0">{{ $t("formaa.bk") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.be')">
            <a-input v-decorator="otherArrangement" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formaa.bn") }}</p>
        </div>
        <a-form-item>
            <ul>
                <li>{{ $t("formaa.bo") }}</li>
                <li>{{ $t("formaa.bp") }}</li>
                <li>{{ $t("formaa.bq") }}</li>
            </ul>
            <div>{{ $t("formaa.br") }}</div>
            <div>{{ $t("formaa.bs") }}</div>
        </a-form-item>

        <a-form-item>
            <a-button type="primary" size="large">{{ $t("formaa.bt") }}</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import validate from "./validate";
import Liaison from "@/apis/liaison";
export default {
    data() {
        return {
            ...validate,
            formItemLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            }
        };
    },
    created: function() {
        this.form = this.$form.createForm(this, { name: "formaa" });
    },
    mounted: async function() {
        const { data } = await Liaison.get();
        console.log("--->", data);
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
