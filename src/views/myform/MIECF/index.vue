<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('miecf.aa')" />
            <a-step :title="$t('miecf.af')" />
            <a-step :title="$t('miecf.an')" />
            <a-step :title="$t('miecf.bb')" />
            <a-step :title="$t('miecf.cf')" />
            <a-step :title="$t('miecf.ck')" />
            <a-step :title="$t('miecf.dc')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('miecf.ab')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ac')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ad')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ae')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('miecf.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ai')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.aj')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.al')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.am')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.an')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('miecf.ao')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("miecf.ap") }}</a-radio>
                        <a-radio :value="2">{{ $t("miecf.aq") }}</a-radio>
                        <a-radio :value="3">{{ $t("miecf.ar") }}</a-radio>
                        <a-radio :value="4">{{ $t("miecf.as") }}</a-radio>
                        <a-radio :value="5">{{ $t("miecf.at") }}</a-radio>
                        <a-radio :value="6">{{ $t("miecf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("miecf.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("miecf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item>
                    <span slot="label">
                        <span>{{ $t("miecf.ax") }}</span>
                        <span style="color:#ccc">({{ $t("miecf.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('miecf.ba')">
                    <a-date-picker class="full" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('miecf.ao')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("miecf.ap") }}</a-radio>
                        <a-radio :value="2">{{ $t("miecf.aq") }}</a-radio>
                        <a-radio :value="3">{{ $t("miecf.ar") }}</a-radio>
                        <a-radio :value="4">{{ $t("miecf.as") }}</a-radio>
                        <a-radio :value="5">{{ $t("miecf.at") }}</a-radio>
                        <a-radio :value="6">{{ $t("miecf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("miecf.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("miecf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item>
                    <span slot="label">
                        <span>{{ $t("miecf.ax") }}</span>
                        <span style="color:#ccc">({{ $t("miecf.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('miecf.ba')">
                    <a-date-picker class="full" />
                </a-form-item>
            </div>
            <a-form-item v-if="stepCurrent < 6">
                <a-button type="primary" @click="stepCurrent--">上一步</a-button>
                <a-button type="primary" style="margin-left:12px" @click="stepCurrent++">下一步</a-button>
            </a-form-item>
            <a-form-item v-else>
                <a-button type="primary">{{ $t("miecf.dk") }}</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stepCurrent: 0,
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
            this.form.validate((err, values) => {
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

.remark {
    width: 100%;
    display: inline-block;
}
</style>
