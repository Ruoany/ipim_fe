<template>
    <div class="center flex">
        <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
            <div class="form-title">{{$t("form.ai")}}</div>
            <div class="form-text">{{$t("form.aj")}}</div>
            <a-form-item :label="$t('form.a')">
                <a-input v-decorator="email" />
            </a-form-item>
            <a-form-item :label="$t('form.b')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.c')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.man')}}</a-radio>
                    <a-radio :value="2">{{$t('util.woman')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.d')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.e')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.f')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.g')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.f')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.h')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.f')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('form.i')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.j')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.f')">
                <a-date-picker />
            </a-form-item>
            <div class="form-title">{{$t('form.k')}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.ag')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('index.tel')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.l')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.m')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.n')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('index.fax')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('index.email')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.o')">
                <a-checkbox>{{$t("form.p")}}</a-checkbox>
            </a-form-item>
            <div class="form-title">{{$t('form.n')}}</div>
            <div class="form-text">{{$t('form.ah')}}</div>
            <a-form-item :label="$t('form.q')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.r')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.x')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.t')">
                <a-checkbox>{{$t("form.u")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('form.v')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.w')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.r')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.x')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('form.s')">
                <a-checkbox>{{$t("form.y")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('form.z')">
                <a-input v-decorator />
            </a-form-item>
            <div class="form-title">{{$t('form.aa')}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('form.ab')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.ad')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.af')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('form.s')">
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