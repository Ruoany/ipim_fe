<template>
    <div class="container">
        <show-title></show-title>
        <a-spin :spinning="loading" class="content flex center width-1280">
            <div class="list-content">
                <show-list :list="list"></show-list>
            </div>
            <pagination :page.sync="page" :size="size" :total="total" />
        </a-spin>
    </div>
</template>

<script>
import showList from "../components/showList";
import showTitle from "../components/title";
import Pagination from "@/components/pagination";
import Activity from "@/apis/activity";
import FromMap from "@/common/map";

export default {
    components: { showList, showTitle, Pagination },
    data() {
        return {
            FromMap,
            list: [],
            loading: false,
            activityScope: "LOCAL",
            page: 0,
            size: 6,
            total: 0
        };
    },
    watch: {
        page: function() {
            this.initData();
        }
    },
    methods: {
        initData: async function() {
            this.loading = true;
            const { data } = await Activity.get({
                page: this.page,
                size: this.size,
                activityScope: this.activityScope
            });
            this.setList(data.content, data.totalElements);
            this.loading = false;
        },
        setList: function(array, total) {
            this.list = new Array().concat(array);
            this.total = total;
        }
    },
    mounted: function() {
        this.initData();
        setTimeout(() => {
            this.loading = false;
        }, 5000);
    }
};
</script>

<style lang="less" scoped>
.container {
    .content {
        padding-top: 30px;
        margin: auto;
        /deep/.ant-tabs-bar {
            border: transparent;
        }
        /deep/.ant-tabs-tab {
            font-size: 20px;
            font-weight: bold;
            padding: 12px 0;
        }
        /deep/ .ant-spin-container,
        .tabs {
            width: 100%;
        }
        .list-content {
            min-height: 500px;
        }
    }
}
</style>
