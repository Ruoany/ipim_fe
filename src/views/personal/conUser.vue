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
        <a-drawer
            :title="title === 'add' ? $t('personal.k') : $t('personal.l')"
            :visible="infoVisible"
            @ok="handleOk"
            @close="handleCancel"
            width="800px"
            destroyOnClose
        >
            <add-con-user @handleCancel="handleCancel" v-if="title === 'add'"></add-con-user>
            <up-con-user @handleCancel="handleCancel" v-if="title === 'upData'" :id="id"></up-con-user>
        </a-drawer>
    </div>
</template>

<script>
import addConUser from "./components/addConUser";
import upConUser from "./components/upConuser";
import Liaison from "@/apis/liaison";
export default {
    components: { addConUser, upConUser },
    data() {
        return {
            infoVisible: false,
            confirmLoading: false,
            liaisonList: [],
            loading: false,
            title: "add",
            id: null
        };
    },
    computed: {
        company() {
            // return JSON.parse(sessionStorage.getItem("company"));
            return {
                id: 97,
                createAt: null,
                updateAt: null,
                name: null,
                nameZh: "機构測試123",
                nameEn: "test123",
                namePt: "Ensaio Institucional",
                logo: null,
                dateOfEstablishment: "1901-03",
                startTime: null,
                endTime: null,
                natureId: 4,
                natureName: "未開始",
                country: null,
                province: null,
                city: null,
                street: null,
                countryZh: "1",
                provinceZh: "110000000000",
                cityZh: "110100000000",
                streetZh: "測試",
                countryEnOrPt: null,
                provinceEnOrPt: null,
                cityEnOrPt: null,
                streetEnOrPt: null,
                email: null,
                tel: null,
                fax: "020-333",
                institutionShareholderVOS: null,
                m1Number: null,
                registrationNumber: null,
                taxpayerName: null,
                taxpayerNo: null,
                business: null,
                registeredCapital: 20000,
                currency: "CNY",
                institutionIndustryVOS: null,
                chargeName: null,
                status: null,
                shareholderComponents: null,
                deal: null,
                idnumber: null
            };
        }
    },

    methods: {
        handleCancel(e) {
            this.infoVisible = false;
            if (e === "add") {
                this.initData();
            }
        },
        async initData() {
            this.loading = true;
            const data = await Liaison.get({ institutionId: this.company.id });
            if (data.code === 200) {
                this.liaisonList = data.data.content;
                this.loading = false;
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
        this.initData();
    }
};
</script>

<style lang="less" scoped>
.a {
}
</style>
