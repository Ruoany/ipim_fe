<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formbb.aa')" />
            <a-step :title="$t('formbb.ae')" />
            <a-step :title="$t('formbb.ak')" />
            <a-step :title="$t('formbb.ar')" />
            <a-step :title="$t('formbb.bt')" />
            <a-step :title="$t('formbb.az')" />
            <a-step :title="$t('formbb.be')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item>
                    <ul>
                        <li>{{ $t("formbb.ab") }}</li>
                        <li>{{ $t("formbb.ac") }}</li>
                        <li>{{ $t("formbb.ad") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('formbb.af')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbb.ag')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
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
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
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
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('formbb.bu')">
                    <a-button style="margin-left:20px">{{ $t("formbb.bq") }}</a-button>
                    <a-button style="margin-left:20px">{{ $t("formbb.br") }}</a-button>
                    <a-button style="margin-left:20px">{{ $t("formbb.bs") }}</a-button>
                </a-form-item>
                <a-form-item :label="$t('formbb.bd')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
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
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
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
            </div>
            <a-form-item>
                <a-button
                    v-show="stepCurrent > 0"
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                >上一步</a-button>
                <a-button v-show="stepCurrent < 6" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button
                    v-show="stepCurrent === 6"
                    type="primary"
                    html-type="submit"
                >{{ $t("formbb.bv") }}</a-button>
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
            ...validate,
            stepCurrent: 0,
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
            }
        };
    },
    methods: {
        handleSubmit: function(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("--->", values);
                }
            });
        }
    },
    created: function() {
        this.form = this.$form.createForm(this, { name: "FORMECB2C" });
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
