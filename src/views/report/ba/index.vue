<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('formba.aa')" />
            <a-step :title="$t('reportba.bf')" />
            <a-step :title="$t('reportba.af')" />
            <a-step :title="$t('reportba.aj')" />
            <a-step :title="$t('reportba.ap')" />
            <a-step :title="$t('reportba.au')" />
            <a-step :title="$t('reportba.ba')" />
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
                <a-form-item :label="$t('reportba.ae')">
                    <a-input v-decorator="name" />
                </a-form-item>
            </div>

            <div v-show="step===2">
                <a-form-item :label="$t('formba.al')">
                    <a-select v-decorator></a-select>
                </a-form-item>
                <a-form-item :label="$t('util.aphone')">
                    <a-input v-decorator></a-input>
                </a-form-item>
                <a-form-item :label="$t('util.bphone')">
                    <a-input v-decorator></a-input>
                </a-form-item>
                <a-form-item :label="$t('index.email')">
                    <a-input v-decorator type="number"></a-input>
                </a-form-item>
                <!-- <a-form-item :label="$t('formba.ao')">
                    <a-input v-decorator type="number"></a-input>
                </a-form-item>
                <a-form-item :label="$t('formba.ap')">
                    <a-input v-decorator></a-input>
                </a-form-item>-->
                <!-- <a-form-item :label="$t('formba.aq')">
                    <a-upload-dragger v-decorator name="files" action="/upload.do">
                        <p class="ant-upload-drag-icon">
                            <a-icon type="inbox" />
                        </p>
                        <p class="ant-upload-text">Click or drag file to this area to upload</p>
                        <p class="ant-upload-hint">Support for a single or bulk upload.</p>
                    </a-upload-dragger>
                </a-form-item>-->
            </div>
            <div v-show="step===3">
                <a-form-item :label="$t('reportba.ak')">
                    <a-input v-decorator :placeholder="$t('reportba.al')" />
                </a-form-item>
                <a-form-item :label="$t('reportba.ao')">
                    <a-input v-decorator :placeholder="$t('reportba.al')" />
                </a-form-item>
            </div>
            <div v-show="step===4">
                <a-form-item :label="$t('reportba.aq')"></a-form-item>
                <a-form-item :label="$t('reportba.ar')"></a-form-item>
                <a-form-item :label="$t('reportba.ax')"></a-form-item>
                <a-form-item :label="$t('reportba.at')"></a-form-item>
            </div>
            <div v-show="step===5">
                <a-form-item :label="$t('reportba.au')">
                    <a-radio-group v-decorator>
                        <a-radio value="a">{{ $t("reportba.av") }}</a-radio>
                        <a-radio value="b">{{ $t("reportba.aw") }}</a-radio>
                    </a-radio-group>
                    <div>{{$t('reportba.bg')}}</div>
                    <ul>
                        <li>{{$t('reportba.as')}}</li>
                        <li>{{$t('reportba.ay')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="step===6">
                <a-form-item :label="$t('reportba.bb')">
                    <a-radio-group>
                        <a-radio :value="1">{{$t('reportba.bh')}}</a-radio>
                        <a-radio :value="2">{{$t('reportba.bi')}}</a-radio>
                    </a-radio-group>
                    <a-input :placeholder="$t('reportba.be')"></a-input>
                </a-form-item>
                <a-form-item :label="$t('reportba.bc')">
                    <a-radio-group>
                        <a-radio :value="1">{{$t('reportba.bh')}}</a-radio>
                        <a-radio :value="2">{{$t('reportba.bi')}}</a-radio>
                    </a-radio-group>
                    <a-input :placeholder="$t('reportba.be')"></a-input>
                </a-form-item>
                <a-form-item :label="$t('reportba.bd')"></a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="step--" v-if="step >0">上一步</a-button>
                <a-button
                    type="primary"
                    style="margin-left:12px"
                    @click="step++"
                    v-if="step < 6"
                >下一步</a-button>
                <a-button
                    type="primary"
                    html-type="submit"
                    style="margin-left:12px"
                    v-if="step === 6"
                >提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import validate from "./validate";
export default {
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
        }
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
