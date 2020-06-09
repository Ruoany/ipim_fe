<template>
    <div class="container">
        <div class="flex-justify-content-space-between">
            <h1>{{ $t("personal.i") }}</h1>
            <a-button
                type="primary"
                icon="plus"
                @click="showDrawer('add', null)"
                >{{ $t("personal.j") }}</a-button
            >
        </div>
        <a-table :dataSource="list" :pagination="false" :loading="loading">
            <a-table-column
                :title="$t('personal.name')"
                key="nameZh"
                width="270px"
                dataIndex="nameZh"
            />
            <a-table-column
                :title="$t('personal.userId')"
                key="email"
                dataIndex="email"
            />
            <a-table-column
                :title="$t('index.tel')"
                key="phone"
                dataIndex="phone"
            />
            <a-table-column :title="$t('personal.contal')" align="center">
                <template slot-scope="text, record">
                    <span>
                        <a-button
                            type="link"
                            @click="showDrawer('update', record.id)"
                            >{{ $t("util.upData") }}</a-button
                        >
                        <a-popconfirm
                            title="Are you sure delete this?"
                            @confirm="handleDelete(record.id)"
                            okText="Yes"
                            cancelText="No"
                        >
                            <a style="color:#ccc;">{{
                                $t("personal.delete")
                            }}</a>
                        </a-popconfirm>
                    </span>
                </template>
            </a-table-column>
        </a-table>
        <pagination :page.sync="page" :total="total" :size="size" />
        <a-drawer
            :title="type === 'add' ? $t('personal.k') : $t('personal.l')"
            :visible="infoVisible"
            @close="infoVisible = false"
            width="800px"
            destroyOnClose
        >
            <add-con-user
                :visible.sync="infoVisible"
                :selected-id="id"
                :institution-id="currentInstitution.id"
                @submit="onSuccess"
            ></add-con-user>
        </a-drawer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import addConUser from "./components/addConUser";
import Liaison from "@/apis/liaison";
import Pagination from "@/components/pagination";
import AC from "@/apis/areaCode";

export default {
    components: { addConUser, Pagination },
    data() {
        return {
            infoVisible: false,
            confirmLoading: false,
            list: [],
            loading: false,
            type: "add",
            id: null,
            institutionId: null,
            page: 0,
            size: 10,
            total: 1
        };
    },
    computed: {
        ...mapGetters(["currentInstitution", "codeList", "liaisonList"])
    },
    watch: {
        page: function() {
            this.initData();
        }
    },
    methods: {
        onSuccess(e) {
            this.infoVisible = false;
            if (e === "add") {
                this.page = 0;
            }
            this.initData();
        },
        async initData() {
            this.loading = true;
            const data = await Liaison.get({
                institutionId: this.currentInstitution.id,
                page: this.page,
                size: this.size
            });
            if (data.code === 200) {
                this.list = data.data.content;
                this.total = data.data.totalElements;
            }
            this.loading = false;
        },
        async getCodeList() {
            if (this.codeList.length === 0) {
                const { data } = await AC.all();
                this.$store.dispatch("setCodeList", data);
            }
        },
        showDrawer(type, id) {
            this.type = type;
            this.id = id;
            this.infoVisible = true;
        },
        async handleDelete(liaisonId) {
            await Liaison.delete(liaisonId);
            this.initData();
        }
    },
    mounted() {
        this.initData();
        this.getCodeList();
    }
};
</script>

<style lang="less" scoped>
.container {
    h4 {
        margin: 0;
    }
    .flex-justify-content-space-between {
        align-items: center;
        margin-bottom: 20px;
        h1 {
            margin: 0;
        }
    }
}
</style>
