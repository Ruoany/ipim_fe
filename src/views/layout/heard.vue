<template>
    <div class="container flex">
        <div class="logo" @click="$router.push('/')"></div>
        <a-menu :selectedKeys="[menuItem]" mode="horizontal" class="all">
            <a-sub-menu key="show">
                <span slot="title" class="flex center" @click="$router.push('/show/index')">
                    <span>{{ $t("menu.signUp") }}</span>
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item
                    v-for="item in showList"
                    :key="`s${item.id}`"
                    @click="
                        $router.push({
                            path: '/show/detail',
                            query: { id: item.id }
                        })
                    "
                >{{ item.name }}</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="dep">
                <span slot="title" class="flex center" @click="$router.push('/show/rep_index')">
                    {{ $t("menu.delegation") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item
                    v-for="item in depList"
                    :key="`d${item.id}`"
                    @click="
                        $router.push({
                            path: '/show/rep_detail',
                            query: { id: item.id }
                        })
                    "
                >{{ item.name }}</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="finEnc">{{ $t("menu.finEnc") }}</a-menu-item>
            <a-menu-item key="plan">{{ $t("menu.plan") }}</a-menu-item>
            <a-sub-menu style="float:right;" key="lan">
                <span slot="title">{{ $t("menu.lan") }}</span>
                <a-menu-item key="zh" @click="lanChange('zh')">中文</a-menu-item>
                <a-menu-item key="en" @click="lanChange('en')">English</a-menu-item>
                <a-menu-item key="pt" @click="lanChange('pt')">Português</a-menu-item>
            </a-sub-menu>
            <a-sub-menu style="float:right;" key="personal">
                <span slot="title" class="flex center" @click="$router.push('/personal/index')">
                    {{ $t("menu.personal") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </span>
                <a-menu-item key="inIn" @click="menuChange('inIn')">{{ $t("menu.inIn") }}</a-menu-item>
                <a-menu-item key="exEr" @click="menuChange('exEr')">{{ $t("menu.exEr") }}</a-menu-item>
                <a-menu-item key="funding" @click="menuChange('funding')">{{ $t("menu.funding") }}</a-menu-item>
                <a-menu-item key="acSe" @click="menuChange('acSe')">{{ $t("menu.acSe") }}</a-menu-item>
                <a-menu-item key="perInfo" @click="menuChange('perInfo')">{{ $t("menu.perInfo") }}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
import { getReActivePage } from "@/apis/show";
export default {
    data() {
        return {
            current: null,
            showList: [],
            depList: [],
            menuItem: "null"
        };
    },
    watch: {
        // "$route.query.key": function(newValue) {
        //     if (newValue !== undefined) {
        //         this.menuItem = newValue;
        //     }
        // }
    },

    methods: {
        lanChange(key) {
            sessionStorage.setItem("language", key);
        },
        async getReActivePage() {
            const data = await getReActivePage({
                language: sessionStorage.getItem("language")
            });
            if (data.code === 200) {
                this.showList = data.data.self;
                this.depList = data.data.deputation;
            } else {
                this.$message.error(data.message);
            }
        },
        menuChange(key) {
            this.$router.push({ path: "/personal/index", query: { key } });
        }
    },
    mounted() {
        if (!sessionStorage.getItem("language")) {
            sessionStorage.setItem("language", "zh");
        }
        this.getReActivePage();
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    z-index: 999;
    justify-content: center;
    border-bottom: 1px solid #e6e6e6;
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
        background-image: url(../../assets/image/logo.svg);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .all {
        width: 1240px;
        height: 50px;
        line-height: 50px;
    }
}
</style>
