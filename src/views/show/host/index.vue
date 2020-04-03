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
            types: "",
            page: 0,
            size: 6,
            total: 1
        };
    },
    watch: {
        "$route.query": function(newValue) {
            this.types = newValue.order;
            this.initData();
        },
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
                types: this.types,
                manyStatus: ["NOTSTART", "PROGRESS", "END", "CANCEL"]
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
        this.types = this.$route.query.order;
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
        padding-top: 70px;
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
