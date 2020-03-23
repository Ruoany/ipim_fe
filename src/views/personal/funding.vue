<template>
    <a-spin :spinning="loading" class="container">
        <a-tabs v-model="status">
            <a-tab-pane :tab="$t('personal.undeal')" key="nodeal"></a-tab-pane>
            <a-tab-pane :tab="$t('personal.deal')" key="deal"></a-tab-pane>
        </a-tabs>
        <div class="list-content">
            <a-empty v-if="list.length === 0" class="empty"></a-empty>
            <cell v-for="item in list" :key="item.id" />
        </div>
        <pagination :page.sync="page" :size="size" :total="total" />
    </a-spin>
</template>

<script>
import Cell from "./components/cell";
import Pagination from "@/components/pagination";
export default {
    components: { Cell, Pagination },
    data() {
        return {
            loading: false,
            status: "nodeal",
            page: 0,
            size: 6,
            total: 1,
            list: []
        };
    },
    watch: {
        status: function() {
            this.page = 0;
            this.initData();
        },
        page: function() {
            this.initData();
        }
    },
    methods: {
        initData: function() {
            this.loading = true;
            const body = {
                page: this.page,
                size: this.size,
                status: this.status
            };
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    /deep/.ant-tabs-bar {
        border-color: transparent;
    }
    /deep/.ant-tabs-nav .ant-tabs-tab {
        font-size: 18px;
    }
    .list-content {
        min-height: 300px;
        padding-bottom: 30px;
    }
    .empty {
        min-height: 400px;
    }
}
</style>
