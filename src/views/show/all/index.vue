<template>
    <div class="container">
        <show-title></show-title>
        <a-spin :spinning="loading" class="width-1280 content">
            <a-tabs v-model="status">
                <a-tab-pane :tab="$t('index.allAc')" :key="null"></a-tab-pane>
                <a-tab-pane :tab="$t('show.available')" :key="1"></a-tab-pane>
                <a-tab-pane
                    :tab="$t('show.processing')"
                    key="PROGRESS"
                ></a-tab-pane>
                <a-tab-pane :tab="$t('show.over')" key="END"></a-tab-pane>
            </a-tabs>
            <div class="list-content">
                <show-list :list="list"></show-list>
            </div>
            <pagination
                :page.sync="page"
                :total="total"
                :size="size"
            ></pagination>
        </a-spin>
    </div>
</template>

<script>
import showList from "../components/showList";
import showTitle from "../components/title";
import Pagination from "@/components/pagination";
import Activity from "@/apis/activity";

export default {
    components: { showList, showTitle, Pagination },
    data() {
        return {
            status: null,
            total: 1,
            page: 0,
            size: 6,
            list: [],
            loading: false,
            participate: null
        };
    },
    watch: {
        status: {
            immediate: true,
            handler: function(newValue) {
                this.page = 0;
                if (newValue === 1) {
                    this.participate = true;
                    this.getActivePage(null);
                } else {
                    this.participate = null;
                    this.getActivePage(newValue);
                }
            }
        },
        page: function() {
            this.getActivePage(this.status);
        }
    },
    methods: {
        async getActivePage(status) {
            status =
                status === null
                    ? ["NOTSTART", "PROGRESS", "END", "CANCEL"]
                    : status;
            this.loading = true;
            const body = {
                size: this.size,
                page: this.page,
                manyStatus: status,
                participate: this.participate
            };
            const { data } = await Activity.get(body);
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
        padding-top: 30px;
    }
    /deep/.ant-tabs-bar {
        border-color: transparent;
    }
    /deep/.ant-tabs-tab {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 0;
    }
    .list-content {
        min-height: 500px;
        padding-top: 40px;
    }
}
</style>
