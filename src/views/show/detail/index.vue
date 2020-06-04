<template>
    <a-spin :spinning="loading" class="container width-1280">
        <detail-title
            :activity-id="activeData.id"
            :name-zh="activeData.nameZh"
            :name-en="activeData.nameEn"
            :name-pt="activeData.namePt"
            :place="activeData.place"
            :start-time="activeData.startTime"
            :end-time="activeData.endTime"
            :scope="activeData.scope"
            :website="activeData.website"
            :types="activeData.types"
            :participate="activeData.participate"
            actType="SELF"
        ></detail-title>
        <detail-Tab :card-data="activeData"></detail-Tab>
    </a-spin>
</template>

<script>
import detailTitle from "./detailTitle";
import detailTab from "./detailTab";
import Activity from "@/apis/activity";

export default {
    components: { detailTab, detailTitle },
    watch: {
        "$route.query": function(newValue) {
            this.getActiveById(newValue.id);
        },
    },
    data() {
        return {
            id: null,
            loading: false,
            activeData: {},
        };
    },
    methods: {
        async getActiveById(id) {
            this.loading = true;
            const data = await Activity.one(id);
            if (data.code === 200) {
                this.activeData = data.data;
            } else {
                // this.$message.error(data.message);
            }
            this.loading = false;
        },
    },
    mounted() {
        this.id = this.$route.query.id;
        this.getActiveById(this.id);
    },
};
</script>

<style lang="less" scoped>
.container {
    margin: auto !important;
}
</style>
