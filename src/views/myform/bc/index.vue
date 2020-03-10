<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">{{$t('general.apUnIn')}}</div>
        <a-form-item
            :label="$t('form.comType')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('general.personal')}}</a-radio>
                <a-radio value="a">{{$t('general.personal')}}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item
            :label="$t('form.plReCode')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.coMoCode')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.taxpayer')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.taxpayerCode')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('general.np')}}</div>
        <a-form-item
            :label="$t('form.rIdCard')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.cName')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('general.contact')}}</div>
        <a-form-item
            :label="$t('form.contactPerson')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.phone')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.email')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.address')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('general.info')}}</div>
        <a-form-item
            :label="$t('form.showName')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.hold')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.showPlace')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.showDate')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item
            :label="$t('form.showProduction')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('general.apPjIn')}}</div>
    </a-form>
</template>

<script>
export default {
    data() {
        return {
            formatLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 }
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
.form {
    width: 100%;
    min-height: 400px;
    .form-item-title {
        color: #333;
        font-size: 16px;
        line-height: 50px;
    }
}
</style>