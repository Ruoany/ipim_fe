<template>
    <div class="center flex">
        <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
            <div class="form-title">{{$t("formab.aa")}}</div>
            <div class="form-text">{{$t("formab.ab")}}</div>
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
            <div class="form-title">{{$t("formab.ag")}}</div>
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
            <div class="form-title">{{$t("formab.am")}}</div>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.an')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.ao')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.ap')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.aq')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.ar')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.as')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <div class="form-title">{{$t("formab.at")}}</div>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.au')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.aw')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <div class="form-title">{{$t("formab.ax")}}</div>
            <a-form-item :wrapperCol="upLabel">
                <ul>
                    <h3 class="font-bold">{{$t("formab.ay")}}</h3>
                    <li>{{$t("formab.az")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("formab.ba")}}</h3>
                    <li>{{$t("formab.bb")}}</li>
                    <li>{{$t("formab.bc")}}</li>
                    <li>{{$t("formab.bd")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("formab.be")}}</h3>
                    <li>{{$t("formab.bf")}}</li>
                    <li>{{$t("formab.bg")}}</li>
                    <li>{{$t("formab.bh")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("formab.bi")}}</h3>
                    <li>{{$t("formab.bj")}}</li>
                    <li>{{$t("formab.bk")}}</li>
                    <li>{{$t("formab.bl")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("formab.bm")}}</h3>
                    <li>{{$t("formab.bn")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("formab.bo")}}</h3>
                    <li>{{$t("formab.bp")}}</li>
                    <li>{{$t("formab.bq")}}</li>
                    <li>{{$t("formab.br")}}</li>
                    <li>{{$t("formab.bs")}}</li>
                </ul>
            </a-form-item>
            <div class="form-title">{{$t("formab.bt")}}</div>
            <a-form-item :wrapperCol="upLabel">
                <div>{{$t("formab.bu")}}</div>
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t("formab.bv")}}</a-radio>
                    <a-radio :value="2">{{$t("formab.bw")}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.bx')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.by')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.bz')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <span>{{$t('formab.ca')}}</span>
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
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </a-upload-dragger>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                <a-button type="primary" size="large">{{$t("formab.cb")}}</a-button>
            </a-form-item>
        </a-form>
    </div>
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
            form: {}
        };
    },
    methods: {
        handleSubmit(e) {},
        handleChange() {}
    }
};
</script>

<style>
</style>