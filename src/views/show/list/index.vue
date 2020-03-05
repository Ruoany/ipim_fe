<template>
    <div>
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
                actType: "SELF"
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
