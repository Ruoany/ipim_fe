<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formbe.aa')" />
            <a-step :title="$t('formbe.ae')" />
            <a-step :title="$t('formbe.ak')" />
            <a-step :title="$t('formbe.ar')" />
            <a-step :title="$t('formbe.bt')" />
            <a-step :title="$t('formbe.az')" />
            <a-step :title="$t('formbe.be')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item>
                    <ul>
                        <li>{{ $t("formbe.ab") }}</li>
                        <li>{{ $t("formbe.ac") }}</li>
                        <li>{{ $t("formbe.ad") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('formbe.af')">
                </a-form-item>
                <a-form-item :label="$t('formbe.af1')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbe.af2')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbe.af3')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('formbe.al')">
                    <a-select v-decorator></a-select>
                </a-form-item>
                <a-form-item :label="$t('formbe.am')">
                    <a-input v-decorator></a-input>
                </a-form-item>
                <a-form-item :label="$t('formbe.an')">
                    <a-input v-decorator type="number"></a-input>
                </a-form-item>
                <a-form-item :label="$t('formbe.ao')">
                    <a-input v-decorator type="number"></a-input>
                </a-form-item>
                <a-form-item :label="$t('formbe.ap')">
                    <a-input v-decorator></a-input>
                </a-form-item>
                <a-form-item :label="$t('formbe.aq')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('formbe.as')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbe.at')">
                    <a-textarea v-decorator :rows="4" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('formbe.bu')">
                </a-form-item>
                <a-form-item>
                    <ul>
                        <li>{{ $t("formbe.bu1") }}</li>
                        <li>{{ $t("formbe.bu2") }}</li>
                        <li>{{ $t("formbe.bu3") }}</li>
                        <li>{{ $t("formbe.bu4") }}</li>
                        <li>{{ $t("formbe.bu5") }}</li>
                        <li>{{ $t("formbe.bu6") }}</li>
                        <li>{{ $t("formbe.bu7") }}</li>
                        <li>{{ $t("formbe.bu8") }}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('formbe.bd')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item :label="$t('formbe.ba')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbe.bb')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-item :wrapper-col="formatLayout.wrapperCol">
                    <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
                        <span>{{ $t("formbe.bh") }}</span>
                    </a-checkbox>
                </a-form-item>
                <a-form-item :wrapper-col="formatLayout.wrapperCol">
                    <a-checkbox v-decorator="['agreement2', { valuePropName: 'checked' }]">
                        <span>{{ $t("formbe.bi") }}</span>
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
                >{{ $t("formbe.bv") }}</a-button>
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
        this.form = this.$form.createForm(this, { name: "FORMBE" });
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
