<template>
    <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
        <a-form-item :label="$t('util.nameZh')">
            <a-input v-decorator="['nameZh', { rules: [{ required: true, message: 'Please input' }] }]" />
        </a-form-item>
        <a-form-item :label="$t('util.sex')">
            <a-radio-group
                name="radioGroup"
                defaultValue="M"
                v-decorator="['gender', { rules: [{ required: true, message: 'Please input' }] }]"
            >
                <a-radio value="M">{{ $t("util.man") }}</a-radio>
                <a-radio value="F">{{ $t("util.woman") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('personal.e')">
            <a-input
                v-decorator="[
                    'rePassword',
                    {
                        rules: [
                            { required: true, message: 'Please input' },
                            {
                                validator: rePasswordVal
                            }
                        ]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('index.tel')">
            <a-input
                v-decorator="[
                    'rePassword',
                    {
                        rules: [
                            { required: true, message: 'Please input' },
                            {
                                validator: rePasswordVal
                            }
                        ]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('util.aphone')">
            <a-input
                v-decorator="[
                    'rePassword',
                    {
                        rules: [
                            { required: true, message: 'Please input' },
                            {
                                validator: rePasswordVal
                            }
                        ]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('util.bphone')">
            <a-input
                v-decorator="[
                    'rePassword',
                    {
                        rules: [
                            { required: true, message: 'Please input' },
                            {
                                validator: rePasswordVal
                            }
                        ]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('index.email')">
            <a-input
                v-decorator="[
                    'rePassword',
                    {
                        rules: [
                            { required: true, message: 'Please input' },
                            {
                                validator: rePasswordVal
                            }
                        ]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('util.address')">
            <a-input
                v-decorator="[
                    'rePassword',
                    {
                        rules: [
                            { required: true, message: 'Please input' },
                            {
                                validator: rePasswordVal
                            }
                        ]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('personal.f')">
            <a-radio-group
                name="radioGroup"
                v-decorator="[
                    'incumbency',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
                :defaultValue="1"
            >
                <a-radio :value="1">{{ $t("personal.g") }}</a-radio>
                <a-radio :value="0">{{ $t("personal.h") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <div
            :style="{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right'
            }"
        >
            <a-button :style="{ marginRight: '8px' }" @click="onClose">
                Cancel
            </a-button>
            <a-button @click="onClose" type="primary">ok</a-button>
        </div>
    </a-form>
</template>

<script>
export default {
    data() {
        return {
            form: this.$form.createForm(this, { name: "coordinated" })
        };
    },
    methods: {
        rePasswordVal(rule, value, callback) {
            const form = this.form;
            if (value && value !== form.getFieldValue("password")) {
                callback("Two passwords that you enter is inconsistent!");
            } else {
                callback();
            }
        },
        handleSubmit() {},
        onClose() {
            this.$emit("handleCancel");
        }
    }
};
</script>

<style></style>
