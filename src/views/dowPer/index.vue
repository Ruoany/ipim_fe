<template>
    <div class="width-1280 container">
        <a-spin :spinning="loading" class="width-1280 content">
            <a-tabs v-model="listQuery.categoryId" @change="getDocumentList">
                <a-tab-pane
                    :tab="$t('downloadPersonal.all')"
                    :key="null"
                ></a-tab-pane>
                <a-tab-pane
                    v-for="item in tabList"
                    :key="item.id"
                    :tab="lanTab(item)"
                ></a-tab-pane>
            </a-tabs>
            <div class="list-content">
                <a-list itemLayout="horizontal" :dataSource="documentList">
                    <a-list-item slot="renderItem" slot-scope="item">
                        <a-list-item-meta>
                            <a slot="title">{{ item.name }}</a>
                        </a-list-item-meta>
                        <!-- <a :href="item.url" download> -->
                        <a-icon
                            type="download"
                            @click="down(item.url, item.name)"
                        />
                        <!-- </a> -->
                    </a-list-item>
                </a-list>
            </div>
            <pagination
                :page.sync="listQuery.page"
                :total="total"
                :size="listQuery.size"
            ></pagination>
        </a-spin>
    </div>
</template>

<script>
import Pagination from "@/components/pagination";
import CompanyDocument from "@/apis/companyDocument";
import CommonConfig from "@/apis/commonConfig";
import { mapGetters } from "vuex";
// import { saveAs } from "file-saver";

export default {
    components: { Pagination },
    computed: {
        ...mapGetters(["lan"])
    },
    data() {
        return {
            loading: false,
            documentList: [],
            tabList: [],
            listQuery: {
                page: 0,
                size: 20,
                categoryId: null,
                clientShow: true
            },
            total: 1
        };
    },

    methods: {
        async initData() {
            this.loading = true;
            await this.getTabList();
            await this.getDocumentList();
            this.loading = false;
        },
        //獲取分類tab
        async getTabList() {
            const { data, code, message } = await CommonConfig.getByName(
                "document"
            );
            if (code === 200) {
                this.tabList = data;
            }
        },
        async getDocumentList() {
            this.loading = true;
            const { data, code, message } = await CompanyDocument.get({
                ...this.listQuery
            });
            if (code === 200) {
                this.documentList = data.content;
                this.total = data.totalElements;
            }
            this.loading = false;
            console.log("1212",data);
        },
        lanTab(item) {
            let lan = this.lan;
            let name = null;
            switch (lan) {
                case "zh":
                    name = item.name;
                    break;
                case "en":
                    name = item.nameEn;
                    break;
                case "pt":
                    name = item.namePt;
            }
            return name;
        },
        down(url, name) {
            let x = new XMLHttpRequest();
            x.open("GET", url, true);
            x.responseType = "blob";
            x.onload = e => {
                let url = window.URL.createObjectURL(x.response);
                let a = document.createElement("a");
                a.href = url;
                a.download = name;
                a.click();
            };
            x.send();
        }
    },
    mounted() {
        this.initData();
    }
};
</script>
<style lang="less" scoped>
.container {
    margin: auto;
    .content {
        margin: auto;
        min-height: 750px;
        padding-top: 30px;
    }
    /deep/.ant-tabs-bar {
        border-color: transparent;
    }
    /deep/.ant-tabs-tab {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 0;
    }
    .list-content {
        min-height: 500px;
        padding-top: 40px;
    }
}
</style>
