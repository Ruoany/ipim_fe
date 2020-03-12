<template>
    <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
        <div class="form-item-title">
            <p>{{ $t("formbc.aa") }}</p>
            <span>{{ $t("formbc.ab") }}</span>
        </div>
        <a-form-item :label="$t('formbc.ac')">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbc.ad") }}</a-radio>
                <a-radio value="a">{{ $t("formbc.ae") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbc.af')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.ag')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.ah')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.ai')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbc.aj") }}</p>
        </div>
        <a-form-item :label="$t('formbc.ak')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.al')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbc.am") }}</p>
        </div>
        <a-form-item :label="$t('formbc.an')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.ao')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.ap')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.aq')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbc.ar") }}</p>
        </div>
        <a-form-item :label="$t('formbc.as')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.at')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.au')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbc.av')">
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item :label="$t('formbc.aw')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbc.ax") }}</p>
            <span>{{ $t("formbc.ay") }}</span>
        </div>
        <a-form-item :label="$t('formbc.az')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.ba')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.bb')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.bc')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.bd')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.be')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.bf')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.bg')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item :label="$t('formbc.bh')">
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbc.bi") }}</p>
        </div>
        <a-form-item>
            <div><span>1.</span>{{ $t("formbc.bj") }}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbc.bk") }}</a-radio>
                <a-radio value="b">{{ $t("formbc.bl") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item>
            <div><span>2.</span>{{ $t("formbc.bm") }}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbc.bn") }}</a-radio>
                <a-radio value="b">{{ $t("formbc.bo") }}</a-radio>
            </a-radio-group>
            <a-input v-decorator />
        </a-form-item>
        <a-form-item>
            <div><span>3.</span>{{ $t("formbc.bp") }}</div>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" size="large">{{ $t("formbc.bq") }}</a-button>
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
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
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
</style>
