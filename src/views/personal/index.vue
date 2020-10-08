<template>
    <div class="personal-container">
        <a-menu :selectedKeys="[menuItem]" class="menu" mode="inline">
            <a-menu-item key="mine" @click="navigateTo('/mine')">{{
                $t("menu.perInfo")
            }}</a-menu-item>
            <a-menu-item key="info" @click="navigateTo('/info')">{{
                $t("menu.inIn")
            }}</a-menu-item>

            <a-menu-item key="record" @click="navigateTo('/record')">{{
                $t("menu.exEr")
            }}</a-menu-item>
            <a-menu-item key="register" @click="navigateTo('/register')">{{
                $t("menu.acRe")
                }}</a-menu-item>



            <!-- <a-menu-item key="funding" @click="navigateTo('/funding')">{{
                $t("menu.funding")
            }}</a-menu-item> -->
            <!-- <a-menu-item key="setting" @click="navigateTo('/setting')">{{ $t("menu.acSe") }}</a-menu-item> -->
        </a-menu>
        <div class="personal-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Info from "./info";
export default {
    components: { Info },
    watch: {
        $route: {
            immediate: true,
            handler: function(newValue) {
                 this.menuItem = newValue.meta.key;
            }
        }
    },
    data() {
        return {
            menuItem: null
        };
    },
    methods: {
        navigateTo(target) {
            const url = `/personal${target}`;
            this.$router.push(url);
        }
    }
};
</script>

<style lang="less" scoped>
.personal-container {
    width: 1226px;

    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .menu {
        width: 206px;
    }
    .personal-content {
        padding: 20px 40px;
        min-height: calc(~"100vh - 242px");
        width: 100%;
        border-left: 1px solid #e6e6e6;
    }
    /deep/.ant-menu-inline,
    .ant-menu-vertical,
    .ant-menu-vertical-left {
        border-color: transparent;
    }
}
</style>
