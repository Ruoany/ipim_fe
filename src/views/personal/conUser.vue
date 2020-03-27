<template>
    <div class="container">
        <div class="flex-justify-content-space-between">
            <h1>{{ $t("personal.i") }}</h1>
            <a-button type="primary" icon="plus" @click="showDrawer('add')">{{ $t("personal.j") }}</a-button>
        </div>
        <a-list class="demo-loadmore-list" :loading="loading" itemLayout="horizontal" :dataSource="liaisonList">
            <!-- <div
                v-if="showLoadingMore"
                slot="loadMore"
                :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
            >
                <a-spin v-if="loadingMore" />
                <a-button v-else @click="onLoadMore">loading more</a-button>
            </div> -->
            <a-list-item slot="renderItem" slot-scope="item">
                <a-button slot="actions" @click="showDrawer('upData', item.id)">{{ $t("util.upData") }}</a-button>
                <a-list-item-meta>
                    <a slot="title" href="https://www.antdv.com/">{{ item.nameZh }}</a>
                </a-list-item-meta>
            </a-list-item>
        </a-list>
        <pagination
            :page.sync="page"
            :total="total"
            @handleChange="pages => (page = pages - 1)"
            :size="size"
            style="padding:50px 0 20px 0;"
        />
        <a-drawer
            :title="title === 'add' ? $t('personal.k') : $t('personal.l')"
            :visible="infoVisible"
            @ok="handleOk"
            @close="handleCancel"
            width="800px"
            destroyOnClose
        >
            <add-con-user
                @handleCancel="handleCancel"
                v-if="title === 'add'"
                :institutionId="institutionId"
            ></add-con-user>
            <up-con-user @handleCancel="handleCancel" v-if="title === 'upData'" :id="id"></up-con-user>
        </a-drawer>
    </div>
</template>

<script>
import addConUser from "./components/addConUser";
import upConUser from "./components/upConuser";
import Liaison from "@/apis/liaison";
import Pagination from "@/components/pagination";
export default {
    components: { addConUser, upConUser, Pagination },
    data() {
        return {
            infoVisible: false,
            confirmLoading: false,
            liaisonList: [],
            loading: false,
            title: "add",
            id: null,
            institutionId: null,
            page: 0,
            size: 10,
            total: 0
        };
    },
    watch: {
        page: function() {
            this.initData();
        }
    },

    methods: {
        handleCancel(e) {
            this.infoVisible = false;
            if (e === "add") {
                this.page = 0;
                this.initData();
            } else if (e === "upData") {
                this.initData();
            }
        },
        async initData() {
            this.loading = true;
            const data = await Liaison.get({ institutionId: this.institutionId, page: this.page, size: this.size });
            if (data.code === 200) {
                this.liaisonList = data.data.content;
                this.loading = false;
                this.total = data.data.totalElements;
            } else {
                this.$message.error(data.message);
            }
        },
        handleOk() {},
        //展示抽屜
        showDrawer(e, id) {
            this.title = e;
            this.id = id;
            this.infoVisible = true;
        }
    },
    mounted() {
        this.institutionId = this.$route.query.institutionId;
        this.initData();
    }
};
</script>

<style lang="less" scoped></style>
