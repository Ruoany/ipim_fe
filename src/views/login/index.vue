<template>
    <div class="container login-bg">
        <router-link to="/" replace class="login-dropdown-wrapper home">
            <a-icon theme="filled" type="home"></a-icon>
        </router-link>
        <a-dropdown class="login-dropdown-wrapper login-dropdown">
            <a class="ant-dropdown-link">語言</a>
            <a-menu slot="overlay">
                <a-menu-item key="zh" @click="lanChange('zh')">中文</a-menu-item>
                <a-menu-item key="en" @click="lanChange('en')">English</a-menu-item>
                <a-menu-item key="pt" @click="lanChange('pt')">Português</a-menu-item>
            </a-menu>
        </a-dropdown>
        <div class="content-wrapper">
            <div class="title">{{ $t("login.title") }}</div>
            <a-form-model ref="login" class="form" :model="form" :rules="rules">
                <a-form-model-item prop="username">
                    <a-input v-model="form.username" size="large" :placeholder="$t('login.account')">
                        <a-icon slot="prefix" type="user" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item prop="password">
                    <a-input v-model="form.password" type="password" size="large" :placeholder="$t('login.password')">
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item>
                    <a-button block :loading="loading" type="primary" size="large" @click="handleSubmit">{{
                        $t("login.login")
                    }}</a-button>
                    <div class="register-wrapper">
                        <span>
                            {{ $t("login.nohave") }}
                            <router-link to="/register" replace>{{ $t("login.register") }}</router-link>
                        </span>
                        <router-link to="/reset" replace>{{ $t("login.forget") }}</router-link>
                    </div>
                </a-form-model-item>
            </a-form-model>
        </div>
    </div>
</template>

<script>
import { Login } from "@/apis/login";
import User from "@/apis/user";
export default {
    data() {
        return {
            loading: false,
            rules: {
                username: [
                    {
                        required: true,
                        message: "Please input the email address",
                    },
                    {
                        type: "email",
                        message: "Email format is incorrect",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "Please input the passwrod",
                    },
                ],
            },
            form: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        lanChange(key) {
            sessionStorage.setItem("language", key);
        },
        getUserInfo: async function() {
            const { data } = await User.current();
            await this.$store.dispatch("setInfo", data);
            this.$router.push("/");
        },
        handleSubmit: function() {
            this.$refs.login.validate(async (valid) => {
                if (valid) {
                    this.loading = true;
                    const result = await Login(this.form);
                    const { code, message, data } = JSON.parse(result);
                    if (code !== 200) {
                        this.loading = false;
                        // this.$message.error(message);
                        return;
                    }
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("current", data.id);
                    sessionStorage.setItem("login", true);
                    this.getUserInfo();
                }
            });
        },
    },
    mounted: function() {
        sessionStorage.clear();
        this.$store.dispatch("clear");
    },
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
    .login-dropdown {
        right: 60px;
    }
    .home {
        left: 60px;
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
