<template>
    <div class="flex center">
        <a-menu :selectedKeys="[menuItem]" mode="horizontal" class="all">
            <a-sub-menu key="show">
                <span
                    slot="title"
                    class="submenu-title-wrapper"
                    @click="$router.push('/show/index')"
                >{{ $t("menu.signUp") }}</span>

                <a-menu-item
                    v-for="item in showList"
                    :key="`s${item.id}`"
                    @click="$router.push({
                        path: '/show/detail',
                        query: { id: item.id }
                    })"
                >{{item.name}}</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="dep">
                <span
                    slot="title"
                    class="submenu-title-wrapper"
                    @click="$router.push('/show/rep_index')"
                >
                    {{
                    $t("menu.delegation")
                    }}
                </span>
                <a-menu-item
                    v-for="item in depList"
                    :key="`d${item.id}`"
                    @click="$router.push({
                        path: '/show/rep_detail',
                        query: { id: item.id }
                    })"
                >{{item.name}}</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="finEnc">{{ $t("menu.finEnc") }}</a-menu-item>
            <a-menu-item key="plan">{{ $t("menu.plan") }}</a-menu-item>

            <a-sub-menu style="float:right;" key="lan">
                <span slot="title" class="submenu-title-wrapper">{{ $t("menu.lan") }}</span>
                <a-menu-item key="zh" @click="lanChange('zh')">中文</a-menu-item>
                <a-menu-item key="en" @click="lanChange('en')">English</a-menu-item>
                <a-menu-item key="pt" @click="lanChange('pt')">Português</a-menu-item>
            </a-sub-menu>

            <a-sub-menu style="float:right;" key="personal">
                <span
                    slot="title"
                    class="submenu-title-wrapper"
                    @click="$router.push('/personal/index')"
                >{{ $t("menu.personal") }}</span>
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
.all {
    width: 1280px;
    height: 50px;
    line-height: 50px;
    // font-size:
}
.center {
    width: 100%;
    justify-content: center;
}
</style>
