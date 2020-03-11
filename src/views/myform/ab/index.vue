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
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formab.ai')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formab.aj')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formab.ak')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formab.al')">
            <a-input />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.am") }}</p>
        </div>
        <a-form-item>
            <span>{{ $t("formab.an") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.ao") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.ap") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.aq") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.ar") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.as") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formab.at") }}</p>
        </div>
        <a-form-item>
            <span>{{ $t("formab.au") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.aw") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
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
            <a-radio-group @change="onChange" v-model="value">
                <a-radio :value="1">{{ $t("formab.bv") }}</a-radio>
                <a-radio :value="2">{{ $t("formab.bw") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.bx") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.by") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.bz") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <span>{{ $t("formab.ca") }}</span>
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" size="large">{{ $t("formab.cb") }}</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import { upFiles } from "@/apis/files";
export default {
    data() {
        return {
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 }
            },
            upLabel: { span: 16, offset: 4 },
            upFiles,
            headers: {},
            form: this.$form.createForm(this)
        };
    },
    methods: {
        handleSubmit(e) {},
        handleChange() {}
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
