<template>
    <div class="flex center">
        <div class="width-1280">
            <h1 class="hei-100 flex-align-items-center">{{ $t("show.localOrOver") }}</h1>
            <a-tabs defaultActiveKey="true" @change="activeChange">
                <a-tab-pane :tab="$t('show.local')" key="true">
                    <show-list :listQuery="listQuery"></show-list>
                </a-tab-pane>
                <a-tab-pane :tab="$t('show.overseas')" key="false">
                    <show-list :listQuery="listQuery"></show-list>
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>
import showList from "./showList";

export default {
    components: { showList },
    data() {
        return {
            listQuery: {
                page: 0,
                pageSize: 9,
                local: "true",
                actType: "DEPUTATION"
            }
        };
    },
    methods: {
        async activeChange(key) {
            this.listQuery.local = key;
        }
    }
};
</script>

<style lang="less" scoped>
.hei-100 {
    height: 150px;
    padding-top: 50px;
}
.show {
    margin-right: 20px;
    padding-bottom: 60px;
    padding-top: 20px;
}
</style>
