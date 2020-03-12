<template>
    <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
        <div class="form-item-title">
            <p>{{ $t("formbb.aa") }}</p>
        </div>
        <ul>
            <li>{{ $t("formbb.ab") }}</li>
            <li>{{ $t("formbb.ac") }}</li>
            <li>{{ $t("formbb.ad") }}</li>
        </ul>
        <div class="form-item-title">
            <p>{{ $t("formbb.ae") }}</p>
        </div>
        <a-form-item :label="$t('formbb.af')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbb.ag')">
            <div class="form-content">
                <ul>
                    <li>{{ $t("formbb.ah") }}</li>
                    <li>{{ $t("formbb.ai") }}</li>
                    <li>{{ $t("formbb.aj") }}</li>
                </ul>
            </div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbb.ak") }}</p>
        </div>
        <a-form-item :label="$t('formbb.al')">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formbb.am')">
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item :label="$t('formbb.an')">
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formbb.ao')">
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formbb.ap')">
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item :label="$t('formbb.aq')">
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbb.ar") }}</p>
        </div>
        <a-form-item :label="$t('formbb.bj')">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbb.bk") }}</a-radio>
                <a-radio value="b">{{ $t("formbb.bl") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbb.aa')">
            <ul v-if="true">
                <li>{{ $t("formbb.bm") }}</li>
            </ul>
            <ul v-else>
                <li>{{ $t("formbb.bn") }}</li>
                <li>{{ $t("formbb.bo") }}</li>
                <li>{{ $t("formbb.bp") }}</li>
            </ul>
        </a-form-item>
        <a-form-item :label="$t('formbb.as')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbb.at')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbb.au')">
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item :label="$t('formbb.av')">
            <a-textarea v-decorator :rows="4" />
            <div>{{ $t("formbb.aw") }}</div>
        </a-form-item>
        <a-form-item :label="$t('formbb.ax')">
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :label="$t('formbb.ay')">
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbb.bt") }}</p>
        </div>
        <a-form-item :label="$t('formbb.bu')">
            <a-button style="margin-left:20px">{{ $t("formbb.bq") }}</a-button>
            <a-button style="margin-left:20px">{{ $t("formbb.br") }}</a-button>
            <a-button style="margin-left:20px">{{ $t("formbb.bs") }}</a-button>
        </a-form-item>
        <a-form-item :label="$t('formbb.bd')">
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbb.az") }}</p>
        </div>
        <a-form-item :label="$t('formbb.ba')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbb.bb')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbb.bc')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbb.bd')">
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbb.be") }}</p>
        </div>
        <a-form-item :wrapper-col="formatLayout.wrapperCol">
            <div>{{ $t("formbb.bf") }}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("util.yes") }}</a-radio>
                <a-radio value="b">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
            <div>{{ $t("formbb.bi") }}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="formatLayout.wrapperCol">
            <div>{{ $t("formbb.bg") }}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("util.yes") }}</a-radio>
                <a-radio value="b">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
            <div>{{ $t("formbb.bi") }}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="formatLayout.wrapperCol">
            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
                <span>{{ $t("formbb.bh") }}</span>
            </a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="formatLayout.wrapperCol">
            <a-button size="large" type="primary" html-type="submit">{{ $t("formbb.bv") }}</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
export default {
    data() {
        return {
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
            },
            form: this.$form.createForm(this)
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
