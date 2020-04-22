<template>
    <div class="container">
        <div class="flex-justify-content-space-between">
            <h1>{{ $t("personal.i") }}</h1>
            <a-button type="primary" icon="plus" @click="showDrawer('add', null)">{{ $t("personal.j") }}</a-button>
        </div>
        <a-list class="demo-loadmore-list" :loading="loading" itemLayout="horizontal" :dataSource="liaisonList">
            <a-list-item slot="renderItem" slot-scope="item">
                <a-list-item-meta>
                    <span slot="title">{{ item.nameZh }}</span>
                </a-list-item-meta>
                <div slot="actions">
                    <a-button type="link" @click="showDrawer('update', item.id)">{{ $t("util.upData") }}</a-button>
                    <a-popconfirm
                        title="Are you sure delete this?"
                        @confirm="handleDelete(item.id)"
                        okText="Yes"
                        cancelText="No"
                    >
                        <a style="color:#ccc;">{{ $t("personal.delete") }}</a>
                    </a-popconfirm>
                </div>
            </a-list-item>
        </a-list>
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
export default {
    components: { addConUser, Pagination },
    data() {
        return {
            infoVisible: false,
            confirmLoading: false,
            liaisonList: [],
            loading: false,
            type: "add",
            id: null,
            institutionId: null,
            page: 0,
            size: 10,
            total: 1,
        };
    },
    computed: {
        ...mapGetters(["currentInstitution"]),
    },
    watch: {
        page: function() {
            this.initData();
        },
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
                size: this.size,
            });
            if (data.code === 200) {
                this.liaisonList = data.data.content;
                this.loading = false;
                this.total = data.data.totalElements;
            } else {
                // this.$message.error(data.message);
            }
        },
        //展示抽屜
        showDrawer(type, id) {
            this.type = type;
            this.id = id;
            this.infoVisible = true;
        },
        async handleDelete(institutionId) {
            const { message } = await Liaison.delete(institutionId);
            this.$message.success(message);
            this.initData();
        },
    },
    mounted() {
        this.initData();
    },
};
</script>

<style lang="less" scoped>
.container {
    h4 {
        margin: 0;
    }
}
</style>
