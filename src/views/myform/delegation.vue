<template>
    <div class="center flex">
        <a-form :form="form" @submit="handleSubmit" class="width-1280" v-bind="formItemLayout">
            <div class="form-title">個人資料</div>
            <div class="form-text">按澳門居民身份證、通行證、護照或其他有關證件填寫</div>
            <a-form-item :label="$t('from.a')">
                <a-input v-decorator="email" />
            </a-form-item>
            <a-form-item :label="$t('from.b')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.c')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.man')}}</a-radio>
                    <a-radio :value="2">{{$t('util.woman')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('from.d')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('from.e')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.f')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('from.g')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.f')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('from.h')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.f')">
                <a-date-picker />
            </a-form-item>
            <a-form-item :label="$t('from.i')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.j')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.f')">
                <a-date-picker />
            </a-form-item>
            <div class="form-title">{{$t('from.k')}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('from.ag')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('index.tel')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.l')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.m')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.n')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('index.fax')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('index.email')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.o')">
                <a-checkbox>{{$t("from.p")}}</a-checkbox>
            </a-form-item>
            <div class="form-title">{{$t('from.n')}}</div>
            <div class="form-text">{{$t('from.ah')}}</div>
            <a-form-item :label="$t('from.q')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.r')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.x')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.t')">
                <a-checkbox>{{$t("from.u")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('from.v')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.w')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.r')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.x')">
                <a-input v-decorator />
            </a-form-item>
            <a-form-item :label="$t('from.s')">
                <a-checkbox>{{$t("from.y")}}</a-checkbox>
            </a-form-item>
            <a-form-item :label="$t('from.z')">
                <a-input v-decorator />
            </a-form-item>
            <div class="form-title">{{$t('from.aa')}}</div>
            <div class="form-text"></div>
            <a-form-item :label="$t('from.ab')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('from.ad')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('from.af')">
                <a-radio-group @change="onChange" v-model="value">
                    <a-radio :value="1">{{$t('util.yes')}}</a-radio>
                    <a-radio :value="2">{{$t('util.no')}}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('from.s')">
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