<template>
    <div class="container">
        <div class="flex-justify-content-space-between">
            <h1>{{ $t("personal.ad") }}</h1>
            <a-button type="primary" icon="plus" @click="modalVisible = true">{{ $t("personal.ae") }}</a-button>
        </div>
        <a-table :columns="columns"> </a-table>
        <a-modal
            :title="$t('personal.af')"
            :visible="modalVisible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
        >
            <add-sub-account></add-sub-account>
        </a-modal>

        <!-- <a-drawer
            :title="title === 'add' ? $t('personal.k') : $t('personal.l')"
            :visible="infoVisible"
            @ok="handleOk"
            @close="handleCancel"
            width="800px"
            destroyOnClose
        >
            <add-con-user @handleCancel="handleCancel" v-if="title === 'add'"></add-con-user>
            <up-con-user @handleCancel="handleCancel" v-if="title === 'upData'" :id="id"></up-con-user>
        </a-drawer> -->
    </div>
</template>

<script>
import addSubAccount from "./components/addSubAccount";
export default {
    components: { addSubAccount },
    data() {
        return {
            modalVisible: false,
            confirmLoading: false
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
            this.modalVisible = false;
        },
        async initData() {},
        handleOk() {},
        //展示抽屜
        showDrawer(e, id) {}
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
