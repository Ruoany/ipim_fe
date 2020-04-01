<template>
    <div class="container">
        <show-title></show-title>
        <a-spin :spinning="loading" class="content flex center width-1280">
            <a-tabs v-model="active" class="tabs" @change="reflash">
                <a-tab-pane key="PARTICIPATE" :tab="$t('menu.ba')"></a-tab-pane>
                <a-tab-pane key="MISSION" :tab="$t('menu.bb')"></a-tab-pane>
            </a-tabs>
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
            active: "",
            actType: "",
            order: null,
            page: 0,
            size: 6,
            total: 1
        };
    },
    watch: {
        active: function(newValue) {
            this.page = 0;
            this.initData(newValue);
        },
        page: function() {
            this.initData(this.active);
        },
        "$route.query": function(newValue) {
            this.actType = newValue.part;
            this.active = newValue.order;
        }
    },
    methods: {
        initData: async function(query) {
            this.loading = true;
            const {
                data: { content, totalElements }
            } = await Activity.get({
                page: this.page,
                size: this.size,
                actType: this.actType,
                types: [query],
                manyStatus: ["NOTSTART", "PROGRESS", "END", "CANCEL"]
            });
            this.list = content;
            this.total = totalElements;
            this.loading = false;
        },
        reflash: function(value) {
            this.$router.push(`/show/overseas?order=${value}`);
        }
    },
    mounted: function() {
        this.actType = this.$route.query.part;
        this.active = this.$route.query.order;
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
