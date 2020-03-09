<template>
    <div>
        <show-title :text="$t('show.localOrOver')"></show-title>

        <div class="flex center padding-100">
            <a-spin :spinning="loading" class="width-1280">
                <a-tabs defaultActiveKey="true" @change="activeChange">
                    <a-tab-pane :tab="$t('show.local')" key="true"> </a-tab-pane>
                    <a-tab-pane :tab="$t('show.overseas')" key="false"> </a-tab-pane>
                </a-tabs>
                <show-list :listQuery="listQuery"></show-list>
                <pagination :page.sync="page" :total="total" :size="size"></pagination>
            </a-spin>
        </div>
    </div>
</template>

<script>
import showList from "./showList";
import showTitle from "./title";
import Pagination from "@/components/pagination";

export default {
    components: { showList, showTitle, Pagination },
    data() {
        return {
            listQuery: {
                page: 0,
                size: 6,
                local: "true",
                actType: "SELF",
                loading: false
            }
        };
    },
    methods: {
        async getActivePage(status) {
            this.loading = true;
            const body = { size: this.size, page: this.page, status };
            const { data } = await getActivePage(body);
            this.list = data.content;
            this.total = data.totalElements;
            this.loading = false;
        }
    }
};
</script>

<style lang="less" scoped>
.padding-100 {
    padding-top: 100px;
}
/deep/.ant-tabs-bar {
    border: transparent;
}
/deep/.ant-tabs-tab {
    font-size: 20px;
    font-weight: bold;
    padding: 12px 0;
}
</style>
