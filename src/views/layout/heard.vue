<template>
    <div class="container flex">
        <div class="logo" @click="$router.push('/')"></div>
        <a-menu :selectedKeys="menuItem" mode="horizontal" class="menu-wrapper">
            <a-menu-item key="host" @click="handleNavigate('/show/host')">{{ $t("menu.signUp") }}</a-menu-item>
            <a-sub-menu>
                <span slot="title" class="flex center">
                    {{ $t("menu.delegation") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item
                    key="overseas1"
                    @click="handleNavigate('/show/overseas','PARTICIPATE')"
                >
                    {{
                    $t("menu.ba")
                    }}
                </a-menu-item>
                <a-menu-item key="overseas2" @click="handleNavigate('/show/overseas','MISSION')">
                    {{
                    $t("menu.bb")
                    }}
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="show7">
                <span slot="title" class="flex center">
                    {{ $t("menu.finEnc") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item key="show8">{{ $t("menu.ca") }}</a-menu-item>
                <a-menu-item key="show9">{{ $t("menu.cb") }}</a-menu-item>
                <a-menu-item key="show10">{{ $t("menu.cc") }}</a-menu-item>
                <a-menu-item
                    @click="$router.push({ path: '/myform/index', query: { form: 'bd' } })"
                >{{ $t("menu.cd") }}</a-menu-item>
                <a-menu-item key="show11">{{ $t("menu.ce") }}</a-menu-item>
                <a-menu-item key="show12">{{ $t("menu.cf") }}</a-menu-item>
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
                <a-menu-item key="mine" @click="personalNavigate('/mine')">{{ $t("menu.perInfo") }}</a-menu-item>
                <a-menu-item key="record" @click="personalNavigate('/record')">{{ $t("menu.exEr") }}</a-menu-item>
                <a-menu-item
                    key="funding"
                    @click="personalNavigate('/funding')"
                >{{ $t("menu.funding") }}</a-menu-item>
                <a-menu-item key="info" @click="personalNavigate('/info')">{{ $t("menu.inIn") }}</a-menu-item>
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
            menuItem: []
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler: function(newValue) {
                const { query } = newValue;
                if (query.order === "PARTICIPATE") {
                    this.menuItem = ["overseas1"];
                    return;
                }
                if (query.order === "MISSION") {
                    this.menuItem = ["overseas2"];
                    return;
                }
                this.menuItem = [newValue.meta.key];
            }
        }
    },
    methods: {
        lanChange(key) {
            sessionStorage.setItem("language", key);
        },
        menuChange(key) {
            this.$router.push({ path: "/personal/index", query: { key } });
        },
        handleNavigate: function(url, order) {
            if (order) {
                this.$router.push(`${url}?order=${order}`);
            } else {
                this.$router.push(url);
            }
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
