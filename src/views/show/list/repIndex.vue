<template>
    <div class="all">
        <show-title :text="$t('show.localOrOver')"></show-title>

        <div class="flex center padding-100">
            <div class="width-1280">
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
.all {
    .padding-100 {
        padding-top: 100px;
    }
    .show {
        margin-right: 20px;
        padding-bottom: 60px;
        padding-top: 20px;
    }
    /deep/.ant-tabs-bar {
        border: transparent;
    }
    /deep/.ant-tabs-tab {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 0;
    }
}
</style>
