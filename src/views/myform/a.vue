<template>
    <div class="center flex">
        <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
            <div class="form-title">{{$t("general.personal")}}</div>
            <div class="form-text">{{$t("general.tips")}}</div>
            <a-form-item :label="$t('form.nameZh')">
                <a-input v-decorator="email" />
            </a-form-item>
            <a-form-item :label="$t('form.nameEn')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.sex')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.man')}}</a-radio>
                    <a-radio :value="2">{{$t('util.woman')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.birth')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.idCard')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.valPeriod')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.HMRP')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.HMRPPeriod')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.passport')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.pPeriod')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.othersName')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.othersNum')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.othersPeriod')">
                <a-date-picker />
            </a-form-item>
            <div class="form-title">{{$t('general.contact')}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.name')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.tel')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.localPhone')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.domesticPhone')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.fax')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.email')">
                <a-input v-decorator />
            </a-form-item>
            <div class="form-title">{{$t('general.name')}}</div>
            <div class="form-text">{{$t('general.more')}}</div>
            <a-form-item :label="$t('form.association')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.associationName')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.position')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.company')">
                <a-checkbox>{{$t("general.company")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('form.companyName')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.companyAddress')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.position')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.category')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.others')">
                <a-checkbox>{{$t("general.others")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('form.title')">
                <a-input v-decorator />
            </a-form-item>
            <div class="form-title">{{$t('general.traffic')}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.go')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.back')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.arranged')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.others')">
                <a-input v-decorator />
            </a-form-item>
        </a-form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 10 }
            }
        };
    }
};
</script>

<style>
</style>