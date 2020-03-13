<template>
    <div class="container">
        <show-title :text="$t(`${info.title}`)"></show-title>
        <a-spin :spinning="loading" class="content flex center width-1280">
            <a-tabs v-model="active" class="tabs" @change="reflash">
                <a-tab-pane v-for="item in info.tabs" :key="item" :tab="$t(`${FromMap[item]}`)"></a-tab-pane>
            </a-tabs>
            <div class="list-content">
                <show-list :list="list"></show-list>
            </div>
        </a-spin>
    </div>
</template>

<script>
import showList from "./showList";
import showTitle from "./title";
import Activity from "@/apis/activity";
import FromMap from "@/common/map";

export default {
    components: { showList, showTitle },
    data() {
        return {
            list: [],
            loading: false,
            active: "",
            actType: "",
            order: null,
            page: 0,
            size: 6,
            total: 0,
            FromMap
        };
    },
    computed: {
        info: {
            get: function() {
                const params = this.$route.query.part;
                let o = {};
                switch (params) {
                    case "SELF":
                        o = {
                            title: "menu.signUp",
                            tabs: ["011", "012"]
                        };
                        break;
                    case "DEPUTATION":
                        o = {
                            title: "menu.delegation",
                            tabs: ["022", "021"]
                        };
                        break;
                }
                return o;
            }
        }
    },
    watch: {
        active: function(newValue) {
            console.log("新的值->>>>", newValue);
            this.page = 0;
            this.initData(newValue);
        },
        "$route.query": function(newValue) {
            this.actType = newValue.part;
            this.active = newValue.order;
        }
    },
    methods: {
        initData: async function(query) {
            this.loading = true;
            const { data } = await Activity.get({
                page: this.page,
                size: this.size,
                actType: this.actType,
                types: [query]
            });
            this.setList(data.content, data.totalElements);
            this.loading = false;
        },
        setList: function(array, total) {
            this.list = new Array().concat(array);
            this.total = total;
        },
        reflash: function(value) {
            const idx = this.info.tabs.find(item => item === value);
            this.$router.push(`/show/index?part=${this.actType}&order=${idx}`);
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
        padding-top: 100px;
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
