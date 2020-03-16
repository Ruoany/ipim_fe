<template>
    <div class="container flex">
        <div class="logo" @click="$router.push('/')"></div>
        <a-menu :selectedKeys="[menuItem]" mode="horizontal" class="menu-wrapper">
            <a-sub-menu key="show">
                <span slot="title" class="flex center">
                    <span>{{ $t("menu.signUp") }}</span>
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item @click="handleNavigate('SELF', '011', 'menu.signUp')">{{ $t("menu.aa") }}</a-menu-item>
                <a-menu-item @click="handleNavigate('SELF', '012', 'menu.signUp')">{{ $t("menu.ab") }}</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="dep">
                <span slot="title" class="flex center">
                    {{ $t("menu.delegation") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item @click="handleNavigate('DEPUTATION', '022', 'menu.delegation')">{{
                    $t("menu.ba")
                }}</a-menu-item>
                <a-menu-item @click="handleNavigate('DEPUTATION', '021', 'menu.delegation')">{{
                    $t("menu.bb")
                }}</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="finEnc">
                <span slot="title" class="flex center">
                    {{ $t("menu.finEnc") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item>{{ $t("menu.ca") }}</a-menu-item>
                <a-menu-item>{{ $t("menu.cb") }}</a-menu-item>
                <a-menu-item>{{ $t("menu.cc") }}</a-menu-item>
                <a-menu-item @click="$router.push({ path: '/myform/index', query: { form: 'bd' } })">
                    {{ $t("menu.cd") }}
                </a-menu-item>
                <a-menu-item>{{ $t("menu.ce") }}</a-menu-item>
                <a-menu-item>{{ $t("menu.cf") }}</a-menu-item>
            </a-sub-menu>
            <a-sub-menu style="float:right;" key="lan">
                <span slot="title">{{ $t("menu.lan") }}</span>
                <a-menu-item key="zh" @click="lanChange('zh')">中文</a-menu-item>
                <a-menu-item key="en" @click="lanChange('en')">English</a-menu-item>
                <a-menu-item key="pt" @click="lanChange('pt')">Português</a-menu-item>
            </a-sub-menu>
            <a-sub-menu style="float:right;" key="personal">
                <span slot="title" class="flex center">
                    {{ $t("menu.personal") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item key="inIn" @click="personalNavigate('/info')">{{ $t("menu.inIn") }}</a-menu-item>
                <a-menu-item key="exEr" @click="personalNavigate('/record')">{{ $t("menu.exEr") }}</a-menu-item>
                <a-menu-item key="funding" @click="personalNavigate('/funding')">{{ $t("menu.funding") }}</a-menu-item>
                <a-menu-item key="acSe" @click="personalNavigate('/setting')">{{ $t("menu.acSe") }}</a-menu-item>
                <a-menu-item key="perInfo" @click="personalNavigate('/mine')">{{ $t("menu.perInfo") }}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: null,
            showList: [],
            depList: [],
            menuItem: "null"
        };
    },
    methods: {
        lanChange(key) {
            sessionStorage.setItem("language", key);
        },
        menuChange(key) {
            this.$router.push({ path: "/personal/index", query: { key } });
        },
        handleNavigate: function(query, order, selected) {
            sessionStorage.setItem("selectedItem", selected);
            this.$router.push(`/show/index?part=${query}&order=${order}`);
        },
        personalNavigate: function(target) {
            const url = `/personal${target}`;
            this.$router.push(url);
        }
    },
    mounted() {
        if (!sessionStorage.getItem("language")) {
            sessionStorage.setItem("language", "zh");
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    min-width: 1226px;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    z-index: 999;
    justify-content: center;
    border-bottom: 1px solid #e6e6e6;
    left: 0;
    top: 0;
    /deep/ .ant-menu {
        background: none;
    }
    /deep/.ant-menu-horizontal {
        border-bottom: transparent !important;
    }
    .logo {
        margin-right: 30px;
        width: 40px;
        height: 50px;
        zoom: 1;
        background-image: url(../../assets/image/logo.svg);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .menu-wrapper {
        width: calc(~"1226px - 40px");
        height: 50px;
        line-height: 50px;
    }
}
</style>
