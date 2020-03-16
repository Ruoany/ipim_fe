<template>
    <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
        <a-form-item :label="$t('personal.b')">
            <a-input v-decorator="['name', { rules: [{ required: true, message: 'Please input' }] }]" />
        </a-form-item>
        <a-form-item :label="$t('personal.c')">
            <a-input v-decorator="['password', { rules: [{ required: true, message: 'Please input' }] }]" />
        </a-form-item>
        <a-form-item :label="$t('personal.d')">
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
        handleSubmit() {}
    }
};
</script>

<style></style>
