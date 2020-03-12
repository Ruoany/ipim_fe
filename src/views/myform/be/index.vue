<template>
    <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
        <div class="form-item-title">
            <p>{{ $t("formbe.aa") }}</p>
        </div>
        <a-form-item :label="$t('formbe.ab')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.ac')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.ad')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.ae')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbe.af") }}</p>
        </div>
        <a-form-item :label="$t('formbe.ag')">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formbe.ah')">
            <a-input v-decorator type="number" />
        </a-form-item>
        <a-form-item :label="$t('formbe.ai')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.aj')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.ak')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbe.al") }}</p>
        </div>
        <a-form-item :label="$t('formbe.am')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.an')">
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item :label="$t('formbe.ao')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbe.ap") }}</p>
        </div>
        <a-form-item>
            <div>{{ $t("formbe.aq") }}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <div>{{ $t("formbe.ar") }}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <div>{{ $t("formbe.as") }}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <div>{{ $t("formbe.at") }}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <div>{{ $t("formbe.au") }}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <div>{{ $t("formbe.av") }}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <div>{{ $t("formbe.aw") }}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("util.agree") }}</a-radio>
                <a-radio value="b">{{ $t("util.disagree") }}</a-radio>
            </a-radio-group>
            <a-input v-decorator :placeholder="$t('formbe.be')" />
            <ul>
                <li>{{ $t("formbe.ax") }}</li>
                <li>{{ $t("formbe.ay") }}</li>
            </ul>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbe.az") }}</p>
        </div>
        <a-form-item>
            <ul>
                <li>{{ $t("formbe.ba") }}</li>
                <li>{{ $t("formbe.bb") }}</li>
                <li>{{ $t("formbe.bc") }}</li>
                <li>{{ $t("formbe.bd") }}</li>
            </ul>
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
.remark {
    width: 100%;
    display: inline-block;
}
</style>
