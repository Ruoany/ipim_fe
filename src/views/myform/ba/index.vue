<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">{{ $t("formba.aa") }}</div>
        <ul>
            <li>{{ $t("formba.ab") }}</li>
            <li>{{ $t("formba.ac") }}</li>
            <li>{{ $t("formba.ad") }}</li>
        </ul>
        <div class="form-item-title">{{ $t("formba.ae") }}</div>
        <a-form-item :label="$t('formba.af')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator="name" />
        </a-form-item>
        <a-form-item :label="$t('formba.ag')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
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

        <div class="form-item-title">{{ $t("formba.ak") }}</div>
        <a-form-item :label="$t('formba.al')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formba.am')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.an')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.ao')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.ap')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item :label="$t('formba.aq')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">{{ $t("formba.ar") }}</div>
        <a-form-item :label="$t('formba.as')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formba.at')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formba.au')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item :label="$t('formba.av')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-textarea v-decorator :rows="4" />
            <div>{{ $t("formba.aw") }}</div>
        </a-form-item>
        <a-form-item :label="$t('formba.ax')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :label="$t('formba.ay')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <div class="form-item-title">{{ $t("formba.az") }}</div>
        <a-form-item :label="$t('formba.ba')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formba.bb')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formba.bc')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formba.bd')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">{{ $t("formba.be") }}</div>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <div>{{ $t("formba.bf") }}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("util.yes") }}</a-radio>
                <a-radio value="b">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
            <div>{{ $t("formba.bi") }}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <div>{{ $t("formba.bg") }}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("util.yes") }}</a-radio>
                <a-radio value="b">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
            <div>{{ $t("formba.bi") }}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
                <span>{{ $t("formba.bh") }}</span>
            </a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
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
                labelCol: { span: 4 },
                wrapperCol: { span: 16 }
            },
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
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
