<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('formba.aa')" />
            <a-step :title="$t('reportba.ae')" />
            <a-step :title="$t('reportba.am')" />
            <a-step :title="$t('reportba.bj')" />
            <a-step :title="$t('reportba.bk')" />
            <a-step :title="$t('reportba.bl')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="step===0">
                <a-form-item>
                    <ul>
                        <li>{{ $t("reportba.ab") }}</li>
                        <li>{{ $t("reportba.ac") }}</li>
                        <li>{{ $t("reportba.ad") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="step===1">
                <a-form-item>
                    <a-radio-group v-decorator="type">
                        <a-radio value="a">{{ $t("reportba.as") }}</a-radio>
                        <a-radio value="b">{{ $t("reportba.at") }}</a-radio>
                        <a-radio value="c">{{ $t("reportba.au") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('reportba.af')">
                    <a-input v-decorator="name" :placeholder="$t('reportba.af')" />
                </a-form-item>
                <a-form-item :label="$t('reportba.ag')">
                    <a-input v-decorator :placeholder="$t('reportba.ag')" />
                </a-form-item>
                <a-form-item :label="$t('reportba.ah')">
                    <a-range-picker v-decorator style="width:100%;" />
                </a-form-item>
                <a-form-item :label="$t('reportba.ai')">
                    <a-input v-decorator :placeholder="$t('reportba.ag')" />
                </a-form-item>
                <a-form-item :label="$t('reportba.aj')">
                    <a-input v-decorator :placeholder="$t('reportba.aj')" />
                </a-form-item>
                <a-form-item :label="$t('reportba.ak')">
                    <a-input v-decorator :placeholder="$t('reportba.ak')" />
                </a-form-item>
                <a-form-item :label="$t('reportba.al')">
                    <a-input v-decorator :placeholder="$t('reportba.al')" />
                </a-form-item>
            </div>
            <div v-show="step===2">
                <a-form-model-item :label="$t('enterprise.bl')">
                    <a-input></a-input>
                </a-form-model-item>
                <a-form-model-item :label="$t('enterprise.bm')">
                    <a-input></a-input>
                </a-form-model-item>
                <a-form-model-item :label="$t('enterprise.bn')">
                    <a-input></a-input>
                </a-form-model-item>
                <a-form-model-item :label="$t('enterprise.bo')">
                    <a-input></a-input>
                </a-form-model-item>
                <a-form-model-item :label="$t('enterprise.bp')">
                    <a-input></a-input>
                </a-form-model-item>
                <a-form-model-item :label="$t('enterprise.bq')">
                    <a-input></a-input>
                </a-form-model-item>
            </div>
            <div v-show="step===3">
                <a-form-item>
                    <div class="form-content">
                        <ul>
                            <li>{{ $t("reportba.bm") }}</li>
                        </ul>
                    </div>
                    <a-upload-dragger multiple v-decorator="files" action="/upload.do">
                        <p class="ant-upload-drag-icon">
                            <a-icon type="inbox" />
                        </p>
                        <p class="ant-upload-text">Click or drag file to this area to upload</p>
                        <p class="ant-upload-hint">Support for a single or bulk upload.</p>
                    </a-upload-dragger>
                </a-form-item>
            </div>
            <div v-show="step===4">
                <a-form-item :label="$t('reportba.bk')">
                    <a-textarea :auto-size="{ minRows: 3, maxRows: 5 }"/>
                </a-form-item>
            </div>
            <div v-show="step===5">
                <a-form-item>
                    <div>{{$t('reportba.bd')}}</div>
                    <a-radio-group>
                        <a-radio :value="true">{{
                            $t("reportba.bn")
                        }}</a-radio>
                        <a-radio :value="false">{{
                            $t("reportba.bo")
                        }}</a-radio>
                    </a-radio-group>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="step--" v-if="step >0">上一步</a-button>
                <a-button
                    type="primary"
                    style="margin-left:12px"
                    @click="step++"
                    v-if="step < 5"
                >下一步</a-button>
                <a-button
                    type="primary"
                    html-type="submit"
                    style="margin-left:12px"
                    v-if="step === 5"
                >提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import validate from "./validate";
export default {
    components: { },
    data() {
        return {
            step: 0,
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
        },
        //上傳的文件
        uploadChange(o) {
            console.log("輸出->", o);
            const key = o.keys;
            // const value = o.value.map(item => {
            //     return item.url;
            // });
            const value = o.value;
            this.$form.setFieldsValue({ [key]: value });
        },
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
