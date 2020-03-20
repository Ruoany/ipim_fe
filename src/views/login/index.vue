<template>
    <div class="container">
        <a-button ghost icon="home"></a-button>
        <a-dropdown class="login-dropdown">
            <a class="ant-dropdown-link">語言</a>
            <a-menu slot="overlay">
                <a-menu-item key="zh" @click="lanChange('zh')">中文</a-menu-item>
                <a-menu-item key="en" @click="lanChange('en')">English</a-menu-item>
                <a-menu-item key="pt" @click="lanChange('pt')">Português</a-menu-item>
            </a-menu>
        </a-dropdown>
        <div class="content-wrapper"></div>
    </div>
</template>

<script>
export default {
    methods: {
        lanChange(key) {
            sessionStorage.setItem("language", key);
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: lightblue;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    /deep/.ant-btn {
        border-color: transparent;
        left: 60px;
    }
    /deep/.ant-btn-icon-only,
    .login-dropdown {
        position: absolute;
        font-size: 24px;
        color: #fff;
        top: 40px;
    }
    .login-dropdown {
        right: 60px;
    }
    .content-wrapper {
        width: 700px;
        height: 400px;
        background: #fff;
        border-radius: 6px;
    }
}
</style>
