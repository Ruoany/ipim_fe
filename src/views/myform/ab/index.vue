<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">
            <p>{{ $t("formab.aa") }}</p>
            <span>{{ $t("formab.ab") }}</span>
        </div>
        <a-form-item :label="$t('formab.ac')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formab.ad')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formab.ae')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formab.af')">
            <a-input />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.ag") }}</p>
        </div>
        <a-form-item :label="$t('formab.ah')">
            <a-select
                showSearch
                optionFilterProp="children"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                :filterOption="filterOption"
                class="full"
                v-decorator="name"
            >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="tom">Tom</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item :label="$t('formab.ai')">
            <a-input disabled />
        </a-form-item>
        <a-form-item :label="$t('formab.zz')">
            <a-input disabled />
        </a-form-item>
        <a-form-item :label="$t('formab.aj')">
            <a-input disabled />
        </a-form-item>

        <a-form-item :label="$t('formab.ak')">
            <a-input disabled />
        </a-form-item>
        <a-form-item :label="$t('formab.al')">
            <a-input disabled />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.am") }}</p>
        </div>
        <a-form-item :label="$t('formab.an')">
            <Upload></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.ao')">
            <Upload></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.ap')">
            <Upload></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.aq')">
            <Upload></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.ar')">
            <Upload></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.as')">
            <Upload></Upload>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.at") }}</p>
        </div>
        <a-form-item :label="$t('formab.au')">
            <Upload></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.aw')">
            <Upload></Upload>
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
            <Upload
                v-decorator="['nickname', { rules: [{ required: checkNick, message: 'Please upload file' }] }]"
            ></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.by')">
            <Upload
                v-decorator="['nickname', { rules: [{ required: checkNick, message: 'Please upload file' }] }]"
            ></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.bz')">
            <Upload
                v-decorator="['nickname', { rules: [{ required: checkNick, message: 'Please upload file' }] }]"
            ></Upload>
        </a-form-item>
        <a-form-item :label="$t('formab.ca')">
            <Upload
                v-decorator="['nickname', { rules: [{ required: checkNick, message: 'Please upload file' }] }]"
            ></Upload>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" size="large">{{ $t("formab.cb") }}</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import { upFiles } from "@/apis/files";
import Upload from "@/components/upload";
import rules from "./validate";
export default {
    components: { Upload },
    data() {
        return {
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 }
            },
            upLabel: { span: 16, offset: 4 },
            upFiles,
            headers: {},
            form: this.$form.createForm(this),
            ...rules,
            reason: 1,
            checkNick: false
        };
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
        handleSubmit(e) {},
        handleChange() {}
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
