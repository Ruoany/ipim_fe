<template>
    <div class="center flex">
        <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
            <div class="form-title">{{$t("general.note")}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.coName')">
                <a-input />
            </a-form-item>

            <a-form-item :label="$t('form.plReCode')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.coMoCode')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.exPr')">
                <a-input />
            </a-form-item>
            <div class="form-title">{{$t("general.contact")}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.name')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.phone')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.fax')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.email')">
                <a-input />
            </a-form-item>
            <a-form-item :label="$t('form.address')">
                <a-input />
            </a-form-item>
            <div class="form-title">{{$t("general.eligibility")}}</div>
            <div class="form-text"></div>
            <a-form-item :wrapperCol="upLabel">
                {{$t('form.text1')}}
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
                {{$t('form.text2')}}
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
                {{$t('form.text3')}}
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
                {{$t('form.text4')}}
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
                {{$t('form.text5')}}
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
                {{$t('form.text6')}}
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
            <div class="form-title">{{$t("general.doAp")}}</div>
            <div class="form-text"></div>
            <a-form-item :wrapperCol="upLabel">
                {{$t('form.text7')}}
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
                {{$t('form.text8')}}
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
            <div class="form-title">{{$t("general.note")}}</div>
            <div class="form-text"></div>
            <a-form-item :wrapperCol="upLabel">
                <ul>
                    <h3 class="font-bold">{{$t("note.a")}}</h3>
                    <li>{{$t("note.text1")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("note.b")}}</h3>
                    <li>{{$t("note.text2")}}</li>
                    <li>{{$t("note.text3")}}</li>
                    <li>{{$t("note.text4")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("note.c")}}</h3>
                    <li>{{$t("note.text5")}}</li>
                    <li>{{$t("note.text6")}}</li>
                    <li>{{$t("note.text7")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("note.d")}}</h3>
                    <li>{{$t("note.text8")}}</li>
                    <li>{{$t("note.text9")}}</li>
                    <li>{{$t("note.text10")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("note.e")}}</h3>
                    <li>{{$t("note.text11")}}</li>
                </ul>
                <ul>
                    <h3 class="font-bold">{{$t("note.f")}}</h3>
                    <li>{{$t("note.text12")}}</li>
                    <li>{{$t("note.text13")}}</li>
                    <li>{{$t("note.text14")}}</li>
                    <li>{{$t("note.text15")}}</li>
                </ul>
            </a-form-item>
            <div class="form-title">{{$t("general.statement")}}</div>
            <div class="form-text"></div>
            <a-form-item :wrapperCol="upLabel">
                <div>{{$t("form.text9")}}</div>
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t("general.know")}}</a-radio>
                    <a-radio :value="2">{{$t("general.unknow")}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :wrapperCol="upLabel">
                {{$t("form.text10")}}
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
                {{$t("form.text11")}}
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
                {{$t("form.text12")}}
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
                {{$t("form.text13")}}
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
                <a-button type="primary" size="large">{{$t("general.submit")}}</a-button>
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