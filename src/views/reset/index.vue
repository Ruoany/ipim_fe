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
            <div class="title">{{ $t("login.reset") }}</div>
            <a-form-model ref="reset" class="form" :model="form" :rules="rules">
                <a-form-model-item prop="account">
                    <a-input
                        v-model="form.account"
                        :placeholder="$t('login.account')"
                        size="large"
                    >
                        <a-icon slot="prefix" type="user" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="captcha">
                    <a-row>
                        <a-col :span="14">
                            <a-input
                                v-model="form.captcha"
                                :placeholder="$t('login.code')"
                                size="large"
                            >
                                <a-icon slot="prefix" type="code" />
                            </a-input>
                        </a-col>
                        <a-col :span="8" :offset="2">
                            <a-button
                                block
                                @click="getCode"
                                size="large"
                                :disabled="buttonDisabled"
                                >{{ buttonText }}</a-button
                            >
                        </a-col>
                    </a-row>
                </a-form-model-item>
                <a-form-model-item prop="pwd">
                    <a-input
                        v-model="form.pwd"
                        type="password"
                        size="large"
                        :placeholder="$t('login.newPwd')"
                    >
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="confirm">
                    <a-input
                        v-model="form.confirm"
                        type="password"
                        size="large"
                        :placeholder="$t('login.confirm')"
                    >
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item>
                    <a-button
                        block
                        type="primary"
                        size="large"
                        @click="handleSubmit"
                        >{{ $t("login.set") }}</a-button
                    >
                    <div class="register-wrapper">
                        <span>
                            {{ $t("login.return") }}
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
            buttonText: this.$t("login.getCode"),
            buttonDisabled: false,
            rules: {
                account: [
                    {
                        required: true,
                        message: "Please input the email address",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "Email format is incorrect",
                        trigger: "blur"
                    }
                ],
                captcha: [
                    {
                        required: true,
                        message: "Please input the code",
                        trigger: "blur"
                    },
                    {
                        pattern: /\d{6}/,
                        message: "Please enter 6 digits",
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
                        pattern: /^\w{6,20}$/,
                        message:
                            "Please enter 6-20 digits without Chinese and special characters",
                        trigger: "blur"
                    },
                    {
                        validator: (rule, value, callback) => {
                            if (value === this.form.account) {
                                callback(
                                    "Password cannot be the same as account"
                                );
                            }
                            callback();
                        },
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
                ]
            },
            form: {
                account: "",
                captcha: "",
                pwd: "",
                confirm: ""
            }
        };
    },
    methods: {
        Interval() {
            let s = 30;
            const inter = setInterval(() => {
                s--;
                this.buttonDisabled = true;
                this.buttonText = `${s} s`;
                if (s === 0) {
                    clearInterval(inter);
                    this.buttonDisabled = false;
                    this.buttonText = this.$t("login.getCode");
                }
            }, 1000);
        },
        lanChange(key) {
            sessionStorage.setItem("language", key);
        },
        getCode: function() {
            this.$refs.reset.validateField(["account"], async valid => {
                if (!valid) {
                    this.Interval();
                    const { success, message } = await User.send(
                        this.form.account
                    );
                    if (success) {
                        this.$message.success(message);
                    }
                }
            });
        },
        handleSubmit: function() {
            this.$refs.reset.validate(async valid => {
                if (valid) {
                    delete this.form.confirm;
                    const { success, message } = await User.resetPwd(this.form);
                    if (success) {
                        this.$message.success(message);
                        this.$router.push("/login");
                    }
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
    overflow: auto;
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
        }
    }
}
</style>
