<template>
    <div class="container login-bg">
        <router-link to="/" replace class="login-dropdown-wrapper home">
            <a-icon theme="filled" type="home"></a-icon>
        </router-link>
        <a-dropdown class="login-dropdown-wrapper login-dropdown">
            <a class="ant-dropdown-link">語言</a>
            <a-menu slot="overlay">
                <a-menu-item key="zh" @click="lanChange('zh')"
                    >中文</a-menu-item
                >
                <a-menu-item key="en" @click="lanChange('en')"
                    >English</a-menu-item
                >
                <a-menu-item key="pt" @click="lanChange('pt')"
                    >Português</a-menu-item
                >
            </a-menu>
        </a-dropdown>
        <div class="content-wrapper">
            <div class="title">{{ $t("login.register") }}</div>
            <a-form-model
                ref="register"
                class="form"
                :model="form"
                :rules="rules"
            >
                <a-form-model-item prop="account">
                    <a-input
                        v-model="form.account"
                        size="large"
                        :placeholder="$t('login.account')"
                    >
                        <a-icon slot="prefix" type="user" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="pwd">
                    <a-input
                        v-model.trim="form.pwd"
                        type="password"
                        size="large"
                        :placeholder="$t('login.password')"
                    >
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="confirm">
                    <a-input
                        v-model.trim="form.confirm"
                        type="password"
                        size="large"
                        :placeholder="$t('login.confirm')"
                    >
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="name">
                    <a-input
                        v-model="form.name"
                        size="large"
                        :placeholder="$t('login.name')"
                    >
                        <a-icon slot="prefix" type="solution" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="phone">
                    <a-input
                        v-model.number="form.phone"
                        size="large"
                        :placeholder="$t('login.phone')"
                    >
                        <a-icon slot="prefix" type="phone" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="receive" :label="$t('login.checkbox')">
                    <a-checkbox-group v-model="form.receives">
                        <a-checkbox value="EMAIL">{{
                            $t("login.email")
                        }}</a-checkbox>
                        <a-checkbox value="SMS">{{
                            $t("login.message")
                        }}</a-checkbox>
                    </a-checkbox-group>
                </a-form-model-item>
                <a-form-model-item prop="agree" class="item">
                    <a-checkbox
                        :checked="agree"
                        @change="e => (agree = e.target.checked)"
                        >{{ $t("login.tips") }}</a-checkbox
                    >
                </a-form-model-item>
                <a-form-model-item>
                    <a-button
                        block
                        type="primary"
                        size="large"
                        :disabled="!agree"
                        @click="handleSubmit"
                        >{{ $t("login.register") }}</a-button
                    >
                    <div class="register-wrapper">
                        <span href="#">
                            {{ $t("login.have") }}
                            <router-link to="/login" replace>{{
                                $t("login.login")
                            }}</router-link>
                        </span>
                    </div>
                </a-form-model-item>
            </a-form-model>
        </div>
    </div>
</template>

<script>
import User from "@/apis/user";

export default {
    data() {
        return {
            rules: {
                account: [
                    {
                        required: true,
                        message: "Please input the email address",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "Email address is incorrect",
                        trigger: "blur"
                    }
                ],
                pwd: [
                    {
                        required: true,
                        message: "Please input the password",
                        trigger: "blur"
                    },
                    {
                        pattern: /\w{6,20}/,
                        message: "Password format is incorrect",
                        trigger: "blur"
                    }
                ],
                confirm: [
                    {
                        validator: (rule, value, callback) => {
                            if (value !== this.form.pwd) {
                                callback(
                                    "Confirm that the password does not match the password"
                                );
                            } else {
                                callback();
                            }
                        },
                        trigger: "blur"
                    }
                ],
                name: [
                    {
                        required: true,
                        message: "Please input your name",
                        trigger: "blur"
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: "Please input your phone number",
                        trigger: "blur"
                    },
                    {
                        pattern: /\d/,
                        message: "Phone number format is incorrect",
                        trigger: "blur"
                    }
                ],
                receives: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value || value.length === 0) {
                                callback("Please check at least one");
                            } else {
                                callback();
                            }
                        }
                    }
                ]
            },
            form: {
                account: "",
                pwd: "",
                confirm: "",
                name: "",
                phone: "",
                type: "GENERAL",
                receive: []
            },
            agree: false
        };
    },
    methods: {
        lanChange(key) {
            sessionStorage.setItem("language", key);
        },
        onSuccess: function() {
            this.$message.success("註冊成功，請登錄");
            this.$router.replace("/login");
        },
        handleSubmit: function() {
            this.$refs.register.validate(async valid => {
                if (valid) {
                    const { message, data } = await User.register(this.form);
                    if (!data) {
                        this.$message.error(message);
                        return;
                    }
                    this.onSuccess();
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-dropdown-wrapper {
        position: absolute;
        font-size: 24px;
        color: #fff;
        top: 40px;
    }
    .home {
        border-color: transparent;
        left: 60px;
    }
    .login-dropdown {
        right: 60px;
    }
    .content-wrapper {
        width: 700px;
        background: #fff;
        border-radius: 6px;
        padding: 50px 0;
        box-sizing: border-box;
        max-height: 90vh;
        overflow: scroll;
        border: 1px solid #e6e6e6;
        .title {
            padding-bottom: 30px;
            text-align: center;
            font-size: 32px;
            font-weight: bold;
        }
        .form {
            padding: 0 150px;
            .register-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .item {
                /deep/.ant-form-item-control {
                    line-height: 20px;
                }
            }
        }
    }
}
</style>
