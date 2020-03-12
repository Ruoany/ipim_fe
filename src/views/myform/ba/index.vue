<template>
    <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
        <div class="form-item-title">
            <p>{{ $t("formba.aa") }}</p>
        </div>
        <a-form-item>
            <ul>
                <li>{{ $t("formba.ab") }}</li>
                <li>{{ $t("formba.ac") }}</li>
                <li>{{ $t("formba.ad") }}</li>
            </ul>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formba.ae") }}</p>
        </div>
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

        <div class="form-item-title">
            <p>{{ $t("formba.ak") }}</p>
        </div>
        <a-form-item :label="$t('formba.al')">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formba.am')">
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.an')">
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.ao')">
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.ap')">
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.aq')">
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formba.ar") }}</p>
        </div>
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
        <div class="form-item-title">
            <p>{{ $t("formba.az") }}</p>
        </div>
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
        <div class="form-item-title">
            <p>{{ $t("formba.be") }}</p>
        </div>
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
        <a-form-item :wrapper-col="formatLayout.wrapperCol">
            <a-button size="large" type="primary" html-type="submit">提交</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import validate from "./validate";
export default {
    data() {
        return {
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            form: this.$form.createForm(this),
            ...validate
        };
    },
    methods: {
        handleSubmit: function(e) {
            e.preventDefault();
            this.$form.validate((err, values) => {
                if (!err) {
                    console.log("--->", values);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
