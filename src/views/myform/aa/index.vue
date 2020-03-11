<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">
            <p>{{ $t("formaa.aa") }}</p>
            <span class="span">{{ $t("formaa.ab") }}</span>
        </div>
        <a-form-item :label="$t('formaa.ac')">
            <a-input v-decorator="email" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ad')">
            <a-radio-group @change="onChange" v-model="value">
                <a-radio :value="1">{{ $t("formaa.ae") }}</a-radio>
                <a-radio :value="2">{{ $t("formaa.af") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.ag')">
            <a-date-picker style="width:100%;" />
        </a-form-item>
        <a-form-item :label="$t('formaa.ah')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker />
        </a-form-item>
        <a-form-item :label="$t('formaa.aj')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker />
        </a-form-item>
        <a-form-item :label="$t('formaa.ak')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker />
        </a-form-item>
        <a-form-item :label="$t('formaa.al')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.am')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ai')">
            <a-date-picker />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formaa.an") }}</p>
        </div>
        <a-form-item :label="$t('formaa.ac')">
            <a-select v-decorator></a-select>
            <a-checkbox>{{ $t("formaa.ao") }}</a-checkbox>
        </a-form-item>
        <a-form-item :label="$t('formaa.ap')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.aq')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ar')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.as')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.at')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formaa.au") }}</p>
            <span>{{ $t("formaa.av") }}</span>
        </div>
        <a-form-item :label="$t('formaa.aw')">
            <a-checkbox>{{ $t("formaa.bu") }}</a-checkbox>
        </a-form-item>
        <a-form-item :label="$t('formaa.ax')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ay')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.az')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ba')">
            <a-checkbox>{{ $t("formaa.bb") }}</a-checkbox>
        </a-form-item>
        <a-form-item :label="$t('formaa.bc')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.bd')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.ay')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.az')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formaa.be')">
            <a-checkbox>{{ $t("formaa.bf") }}</a-checkbox>
        </a-form-item>
        <a-form-item :label="$t('formaa.bg')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formaa.bh") }}</p>
        </div>
        <a-form-item :label="$t('formaa.bi')">
            <a-radio-group @change="onChange" v-model="value">
                <a-radio :value="1">{{ $t("formaa.bj") }}</a-radio>
                <a-radio :value="2">{{ $t("formaa.bk") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.bl')">
            <a-radio-group @change="onChange" v-model="value">
                <a-radio :value="1">{{ $t("formaa.bj") }}</a-radio>
                <a-radio :value="2">{{ $t("formaa.bk") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.bm')">
            <a-radio-group @change="onChange" v-model="value">
                <a-radio :value="1">{{ $t("formaa.bj") }}</a-radio>
                <a-radio :value="2">{{ $t("formaa.bk") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formaa.be')">
            <a-input v-decorator />
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
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 10 }
            }
        };
    }
};
</script>

<style lang="less" scoped>
.form {
    width: 100%;
    min-height: 400px;
    .form-item-title {
        color: #333;
        padding: 20px 0;
        p {
            line-height: 50px;
            border-bottom: 1px solid #ee1c24;
            font-size: 18px;
            font-weight: bold;
        }
        span {
            display: block;
            margin-top: -20px;
            font-size: 14px;
            color: #999;
        }
    }
}
</style>
