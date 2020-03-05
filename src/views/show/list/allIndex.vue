<template>
    <div>
        <show-title :text="$t('index.allAc')"></show-title>

        <div class="flex center padding-100">
            <div class="width-1280">
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
    </div>
</template>

<script>
import showList from "./showList";
import showTitle from "./title";
export default {
    components: { showList, showTitle },
    data() {
        return {
            listQuery: {
                page: 0,
                size: 6,
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
.padding-100 {
    padding-top: 100px;
}
/deep/.ant-tabs-bar {
    border: 0;
}
/deep/.ant-tabs-tab {
    font-size: 20px;
    font-weight: bold;
    padding: 12px 0;
}
</style>
