<template>
    <div class="container">
        <div class="flex-justify-content-space-between">
            <h1>{{ $t("personal.ad") }}</h1>
            <a-button type="primary" icon="plus" @click="showModal('create')">{{
                $t("personal.ae")
            }}</a-button>
        </div>
        <a-table
            :dataSource="tableData"
            :pagination="false"
            :loading="tableLoading"
        >
            <a-table-column
                :title="$t('personal.name')"
                key="name"
                width="270px"
                dataIndex="name"
            />
            <a-table-column
                :title="$t('personal.userId')"
                key="email"
                width="480px"
                dataIndex="email"
            />
            <a-table-column :title="$t('personal.contal')" align="center">
                <template slot-scope="text, record">
                    <span>
                        <a-button
                            type="link"
                            @click="showModal('update', record.id)"
                            >{{ $t("util.upData") }}</a-button
                        >

                        <a-popconfirm
                            title="Are you sure delete this?"
                            @confirm="deleteSub(record.id)"
                            :okText="$t('util.yes')"
                            :cancelText="$t('util.no')"
                        >
                            <a style="color:#ccc;">{{
                                $t("personal.delete")
                            }}</a>
                        </a-popconfirm>
                    </span>
                </template>
            </a-table-column>
        </a-table>
        <pagination
            :page.sync="listQuery.page"
            :total="total"
            @handleChange="pages => (listQuery.page = pages - 1)"
        />
        <a-drawer
            :title="$t('personal.af')"
            :visible="modalVisible"
            @close="modalVisible = false"
            width="800px"
            destroyOnClose
        >
            <add-sub-account
                :visible.sync="modalVisible"
                ref="addSubAccount"
                :confirmLoading.sync="confirmLoading"
                :formType="formType"
                :initData="formData"
                @init="initTable"
            ></add-sub-account>
        </a-drawer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import addSubAccount from "./components/addSubAccount";
import UserSubaccount from "@/apis/userSubaccount";
import Pagination from "@/components/pagination";
export default {
    components: { addSubAccount, Pagination },
    data() {
        return {
            modalVisible: false,
            confirmLoading: false,
            listQuery: {
                page: 0,
                size: 10
            },
            total: 1,
            tableData: [],
            formType: "create",
            formData: {},
            modalLoading: false,
            tableLoading: false
        };
    },
    computed: {
        ...mapGetters(["currentInstitution"])
    },

    methods: {
        async initData() {
            this.tableLoading = true;
            const data = await UserSubaccount.get({
                ...this.listQuery,
                institutionId: this.currentInstitution.id
            });
            if (data.code === 200) {
                this.total = data.data.totalElements;
                this.tableData = data.data.content;
                this.tableLoading = false;
            } else {
                // this.$message.error(data.message);
            }
        },
        //新建之後刷新table
        initTable() {
            this.modalVisible = false;
            this.listQuery.page = 0;
            this.initData();
        },
        handleOk() {
            this.confirmLoading = true;
            this.$refs.addSubAccount.handleOk();
        },
        //刪除子賬號
        async deleteSub(id) {
            const { code, message } = await UserSubaccount.delete(id);
            if (code !== 200) {
                // this.$message.error(message);
            } else {
                this.$message.success("刪除成功");
                this.initData();
            }
        },
        //展示彈窗
        showModal(formType, id) {
            this.formType = formType;
            this.formData = {};
            this.modalVisible = true;
            if (formType === "update") {
                this.getFormData(id);
            }
        },
        async getFormData(id) {
            this.modalLoading = true;
            const data = await UserSubaccount.one(id);
            if (data.code !== 200) {
                this.$message.error(data.message);
                return;
            }
            this.formData = data.data;
            this.modalLoading = false;
        }
    },
    mounted() {
        this.initData();
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

