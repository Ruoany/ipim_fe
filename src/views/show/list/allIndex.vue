<template>
    <div class="container">
        <show-title :text="$t('index.allAc')"></show-title>
        <a-spin :spinning="loading" class="width-1280 content">
            <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
            <a-tabs v-model="status">
                <a-tab-pane :tab="$t('index.allAc')" :key="null"></a-tab-pane>
                <a-tab-pane :tab="$t('show.available')" key="2"></a-tab-pane>
                <a-tab-pane :tab="$t('show.processing')" key="3"></a-tab-pane>
                <a-tab-pane :tab="$t('show.over')" key="4"></a-tab-pane>
            </a-tabs>
            <show-list :list="list"></show-list>
            <pagination :page.sync="page" :total="total" :size="size"></pagination>
        </a-spin>
    </div>
</template>

<script>
import showList from "./showList";
import showTitle from "./title";
import Pagination from "@/components/pagination";
import { getActivePage } from "@/apis/show";

export default {
    components: { showList, showTitle, Pagination },
    data() {
        return {
            status: null,
            total: 0,
            page: 0,
            size: 6,
            list: [],
            loading: false
        };
    },
    watch: {
        status: {
            immediate: true,
            handler: function(newValue) {
                this.page = 0;
                this.getActivePage(newValue);
            }
        },
        page: {
            handler: function() {
                this.getActivePage(this.status);
            }
        }
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
.container {
    .content {
        margin: auto;
        min-height: 750px;
        padding: 30px 0;
    }
    /deep/.ant-tabs-bar {
        border-color: transparent;
    }
    /deep/.ant-tabs-tab {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 0;
    }
}
</style>
