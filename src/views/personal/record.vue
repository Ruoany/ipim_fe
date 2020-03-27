<template>
    <a-spin :spinning="loading" class="container">
        <a-tabs v-model="status">
            <a-tab-pane
                :tab="$t('personal.undeal')"
                key="approving"
            ></a-tab-pane>
            <a-tab-pane
                :tab="$t('personal.deal')"
                key="unapproved"
            ></a-tab-pane>
        </a-tabs>
        <div class="list-content">
            <a-empty v-if="list.length === 0" class="empty"></a-empty>
            <cell
                v-for="item in list"
                :key="item.id"
                :activity-id="item.activity.id"
                :scope="item.activity.scope"
                :form-id="item.id"
                :liaison-id="item.liaisonId"
                :institution-id="item.institution.id"
                :form="item.type"
                :status="item.status"
                :activity-status="item.activity.showStatus"
                :title="item.activity.nameZh"
                :address="item.activity.place"
                :date="`${item.activity.startTime} - ${item.activity.endTime}`"
            />
        </div>
        <pagination :page.sync="page" :size="size" :total="total" />
    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";
import Cell from "./components/cell";
import Pagination from "@/components/pagination";
import Participate from "@/apis/participate";
export default {
    components: { Cell, Pagination },
    data() {
        return {
            loading: false,
            status: "approving",
            page: 0,
            size: 5,
            total: 1,
            list: []
        };
    },
    computed: {
        ...mapGetters(["currentInstitution"])
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
        initData: async function() {
            this.loading = true;
            const {
                data: { content, totalElements }
            } = await Participate.get({
                institutionId: this.currentInstitution.id,
                page: this.page,
                size: this.size,
                approved: this.status === "unapproved"
            });
            this.list = content;
            this.total = totalElements;
            this.loading = false;
        }
    },
    mounted: function() {
        this.initData();
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
