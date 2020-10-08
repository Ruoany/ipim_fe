<template>
    <a-form-model ref="pwd" :model="form" :rules="rules" style="width:100%;">
        <a-form-model-item prop="old" :label="$t('personal.b')">
            <a-input type="password" v-model="form.old" />
        </a-form-model-item>
        <a-form-model-item prop="pwd" :label="$t('personal.c')">
            <a-input type="password" v-model="form.pwd" />
        </a-form-model-item>
        <a-form-model-item prop="confirm" :label="$t('personal.d')">
            <a-input type="password" v-model="form.confirm" />
        </a-form-model-item>
    </a-form-model>
</template>

<script>
export default {
    data() {
        const confirmValid = (rule, value, callback) => {
            if (value && value !== this.form.pwd) {
                callback("Two passwords that you enter is inconsistent!");
                return;
            }
            callback();
        };
        return {
            rules: {
                old: [{ required: true, message: "Please input" }],
                pwd: [
                    {
                        required: true,
                        message: "Please input the password",
                        trigger: "blur"
                    },
                    {
                        pattern: /^\w{6,20}$/,
                        message:
                            "Please enter 6-20 digits without Chinese and special characters",
                        trigger: "blur"
                    }
                ],
                confirm: [
                    { required: true, validator: confirmValid, trigger: "blur" }
                ]
            },
            form: {
                id: this.$store.getters.currentUser,
                old: "",
                pwd: "",
                confirm: ""
            }
        };
    }
};
</script>

<style></style>
