<template>
    <div class="center flex">
        <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
            <div class="form-title">{{$t("formaa.aa")}}</div>
            <div class="form-text">{{$t("formaa.ab")}}</div>
            <a-form-item :label="$t('formaa.ac')">
                <a-input v-decorator="email" />
            </a-form-item>
            <a-form-item :label="$t('formaa.ad')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('formaa.ae')}}</a-radio>
                    <a-radio :value="2">{{$t('formaa.af')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('formaa.ag')">
                <a-date-picker style="width:100%;" />
            </a-form-item>
            <a-form-item :label="$t('formaa.ah')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ai')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('formaa.aj')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ai')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('formaa.ak')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ai')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('formaa.al')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.am')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ai')">
                <a-date-picker />
            </a-form-item>
            <div class="form-title">{{$t('formaa.an')}}</div>
            <a-form-item :label="$t('formaa.ac')">
                <a-select v-decorator></a-select>
                <a-checkbox>{{$t('formaa.ao')}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('formaa.ap')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.aq')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ar')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.as')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.at')">
                <a-input v-decorator />
            </a-form-item>
            <div class="form-title">{{$t('formaa.au')}}</div>
            <div class="form-text">{{$t('formaa.av')}}</div>
            <a-form-item :label="$t('formaa.aw')">
                <a-checkbox>{{$t("formaa.bu")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('formaa.ax')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ay')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.az')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ba')">
                <a-checkbox>{{$t("formaa.bb")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('formaa.bc')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.bd')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.ay')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.az')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('formaa.be')">
                <a-checkbox>{{$t("formaa.bf")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('formaa.bg')">
                <a-input v-decorator />
            </a-form-item>
            <div class="form-title">{{$t('formaa.bh')}}</div>
            <a-form-item :label="$t('formaa.bi')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('formaa.bj')}}</a-radio>
                    <a-radio :value="2">{{$t('formaa.bk')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('formaa.bl')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('formaa.bj')}}</a-radio>
                    <a-radio :value="2">{{$t('formaa.bk')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('formaa.bm')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('formaa.bj')}}</a-radio>
                    <a-radio :value="2">{{$t('formaa.bk')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('formaa.be')">
                <a-input v-decorator />
            </a-form-item>
            <div class="form-title">{{$t('formaa.bn')}}</div>
            <ul>
                <li>{{$t('formaa.bo')}}</li>
                <li>{{$t('formaa.bp')}}</li>
                <li>{{$t('formaa.bq')}}</li>
            </ul>
            <div>{{$t('formaa.br')}}</div>
            <div>{{$t('formaa.bs')}}</div>
            <a-form-item>
                <a-button type="primary" size="large">{{$t('formaa.bt')}}</a-button>
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