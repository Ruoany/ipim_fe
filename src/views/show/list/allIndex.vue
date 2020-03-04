<template>
    <div class="flex center">
        <div class="width-1280">
            <h1 class="hei-100 flex-align-items-center">{{ $t("index.allAc") }}</h1>
            <a-tabs :defaultActiveKey="null" @change="activeChange">
                <a-tab-pane :tab="$t('index.allAc')" :key="null">
                    <show-list :listQuery="listQuery"></show-list>
                </a-tab-pane>
                <a-tab-pane :tab="$t('show.available')" :key="2">
                    <show-list :listQuery="listQuery"></show-list>
                </a-tab-pane>
                <a-tab-pane :tab="$t('show.processing')" :key="3">
                    <show-list :listQuery="listQuery"></show-list>
                </a-tab-pane>
                <a-tab-pane :tab="$t('show.over')" :key="4">
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
                status: null,
                participate: null
            }
        };
    },
    methods: {
        async activeChange(key) {
            if (key === 2) {
                this.listQuery.participate = true;
                this.listQuery.status = null;
            } else {
                this.listQuery.participate = null;
                this.listQuery.status = key;
            }

            // this.getActivePage();
        }
    },
    mounted() {
        // this.getActivePage();
    }
};
</script>

<style lang="less" scoped>
.hei-100 {
    height: 150px;
    padding-top: 50px;
}
</style>
