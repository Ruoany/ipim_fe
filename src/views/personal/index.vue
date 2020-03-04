<template>
    <div class="flex center">
        <div class="width-1280 flex-justify-content-space-between">
            <a-menu :selectedKeys="[menuItem]" style="width: 206px;min-height:800px">
                <a-menu-item key="inIn" @click="menuChange('inIn')">{{ $t("menu.inIn") }}</a-menu-item>
                <a-menu-item key="exEr" @click="menuChange('exEr')">{{ $t("menu.exEr") }}</a-menu-item>
                <a-menu-item key="funding" @click="menuChange('funding')">{{ $t("menu.funding") }}</a-menu-item>
                <a-menu-item key="acSe" @click="menuChange('acSe')">{{ $t("menu.acSe") }}</a-menu-item>
                <a-menu-item key="perInfo" @click="menuChange('perInfo')">{{ $t("menu.perInfo") }}</a-menu-item>
            </a-menu>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    watch: {
        "$route.query.key": function(newValue) {
            this.menuItem = newValue;
        }
    },
    data() {
        return {
            menuItem: this.$route.query.key
        };
    },
    methods: {
        menuChange(key) {
            this.$router.push({ path: "/personal/index", query: { key } });
        }
    }
};
</script>

<style></style>
