<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('reportbb.bg')" />
            <a-step :title="$t('reportbb.bp')" />
            <a-step :title="$t('reportbb.af')" />
            <a-step :title="$t('reportbb.br')" />
            <a-step :title="$t('reportbb.aj')" />
            <a-step :title="$t('reportbb.aw')" />
            <a-step :title="$t('reportbb.be')" />
            <a-step :title="$t('reportbb.bf')" />
            <a-step :title="$t('reportbb.bq')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="step === 0">
                <a-form-item>
                    <ul>
                        <li>{{ $t("reportbb.ab") }}</li>
                        <li>{{ $t("reportbb.ac") }}</li>
                        <li>{{ $t("reportbb.ad") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="step === 1">
                <a-form-item :label="$t('reportbb.ae')">
                    <a-input v-decorator="name" />
                </a-form-item>
            </div>

            <div v-show="step === 2">
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
            <div v-show="step === 3">
                <a-form-item :label="$t('reportbb.ae')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('reportbb.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('reportbb.ah')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('reportbb.ai')">
                    <a-date-picker style="width:100%;" />
                </a-form-item>
            </div>
            <div v-show="step === 4">
                <a-form-item :label="$t('reportbb.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('reportbb.al')">
                    <div>
                        {{ $t("reportbb.am") }}
                        <a-input class="input" :placeholder="$t('reportbb.aq')"></a-input>
                        <a-input class="input" :placeholder="$t('reportbb.ar')"></a-input>
                    </div>
                    <div>
                        {{ $t("reportbb.an") }}
                        <a-input class="input" :placeholder="$t('reportbb.aq')"></a-input>
                        <a-input class="input" :placeholder="$t('reportbb.ar')"></a-input>
                    </div>
                    <div>
                        {{ $t("reportbb.ao") }}
                        <a-input class="input" :placeholder="$t('reportbb.aq')"></a-input>
                        <a-input class="input" :placeholder="$t('reportbb.ar')"></a-input>
                    </div>
                    <div>
                        {{ $t("reportbb.ap") }}
                        <a-input class="input" :placeholder="$t('reportbb.aq')"></a-input>
                        <a-input class="input" :placeholder="$t('reportbb.ar')"></a-input>
                    </div>
                    <div>
                        {{ $t("reportbb.ap") }}
                        <upload></upload>
                    </div>
                    <div>
                        {{ $t("reportbb.at") }}
                        <upload></upload>
                    </div>
                    <div>
                        {{ $t("reportbb.au") }}
                        <upload></upload>
                    </div>
                    <div>
                        {{ $t("reportbb.av") }}
                        <upload></upload>
                    </div>
                </a-form-item>
                <a-form-item :label="$t('reportbb.ax')">
                    <a-input class="input" :placeholder="$t('reportbb.bu')"></a-input>
                    <a-input class="input" :placeholder="$t('reportbb.aq')"></a-input>
                    <a-input class="input" :placeholder="$t('reportbb.ar')"></a-input>
                </a-form-item>
            </div>
            <div v-show="step === 5">
                <a-form-item :label="$t('reportbb.ay')">
                    <upload></upload>
                </a-form-item>
                <a-form-item :label="$t('reportbb.az')">
                    <upload></upload>
                </a-form-item>
                <a-form-item :label="$t('reportbb.ba')">
                    <upload></upload>
                </a-form-item>
                <a-form-item :label="$t('reportbb.bb')">
                    <upload></upload>
                </a-form-item>
                <a-form-item :label="$t('reportbb.bc')">
                    <upload></upload>
                </a-form-item>
                <a-form-item :label="$t('reportbb.bd')">
                    <upload></upload>
                </a-form-item>
            </div>
            <div v-show="step === 6">
                <a-form-item :label="$t('reportbb.be')">
                    <a-radio-group>
                        <a-radio :value="1">{{ $t("reportbb.bx") }}</a-radio>
                        <a-radio :value="2">{{ $t("reportbb.bt") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
            </div>
            <div v-show="step === 7">
                <a-form-item :label="$t('reportbb.be')">
                    <a-textarea></a-textarea>
                </a-form-item>
            </div>
            <div v-show="step === 8">
                <a-form-item :label="$t('reportbb.bj')">
                    <a-radio-group>
                        <a-radio :value="1">{{ $t("reportbb.bn") }}</a-radio>
                        <a-radio :value="2">{{ $t("reportbb.bo") }}</a-radio>
                    </a-radio-group>
                    <a-input :placeholder="$t('reportbb.bm')"></a-input>
                </a-form-item>
                <a-form-item :label="$t('reportbb.bk')">
                    <a-radio-group>
                        <a-radio :value="1">{{ $t("reportbb.bn") }}</a-radio>
                        <a-radio :value="2">{{ $t("reportbb.bo") }}</a-radio>
                    </a-radio-group>
                    <a-input :placeholder="$t('reportbb.bm')"></a-input>
                </a-form-item>
                <a-form-item :label="$t('reportbb.bl')"></a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="step--" v-if="step > 0">上一步</a-button>
                <a-button type="primary" style="margin-left:12px" @click="step++" v-if="step < 8">下一步</a-button>
                <a-button type="primary" html-type="submit" style="margin-left:12px" v-if="step === 8">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import validate from "./validate";
import Upload from "@/components/upload";
export default {
    components: { Upload },
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
