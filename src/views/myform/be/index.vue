<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formbe.aa')" />
            <a-step :title="$t('formbe.af')" />
            <a-step :title="$t('formbe.al')" />
            <a-step :title="$t('formbe.ap')" />
            <a-step :title="$t('formbe.az')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
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
            </div>
            <div v-show="stepCurrent === 1">
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
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('formbe.am')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbe.an')">
                    <a-range-picker v-decorator style="width:100%;" />
                </a-form-item>
                <a-form-item :label="$t('formbe.ao')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item>
                    <div>{{ $t("formbe.aq") }}</div>
                    <upload />
                </a-form-item>
                <a-form-item>
                    <div>{{ $t("formbe.ar") }}</div>
                    <upload />
                </a-form-item>
                <a-form-item>
                    <div>{{ $t("formbe.as") }}</div>
                    <upload />
                </a-form-item>
                <a-form-item>
                    <div>{{ $t("formbe.at") }}</div>
                    <upload />
                </a-form-item>
                <a-form-item>
                    <div>{{ $t("formbe.au") }}</div>
                    <upload />
                </a-form-item>
                <a-form-item>
                    <div>{{ $t("formbe.av") }}</div>
                    <upload />
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
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item>
                    <ul>
                        <li>{{ $t("formbe.ba") }}</li>
                        <li>{{ $t("formbe.bb") }}</li>
                        <li>{{ $t("formbe.bc") }}</li>
                        <li>{{ $t("formbe.bd") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button
                    v-show="stepCurrent > 0"
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                >上一步</a-button>
                <a-button v-show="stepCurrent < 4" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button
                    v-show="stepCurrent === 4"
                    type="primary"
                    html-type="submit"
                >{{ $t("formbc.bq") }}</a-button>
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
.remark {
    width: 100%;
    display: inline-block;
}
</style>
