<template>
    <div class="container width-1280">
        <detail-title
            :nameZh="activeData.nameZh"
            :nameEn="activeData.nameEn"
            :namePt="activeData.namePt"
            :place="activeData.place"
            :startTime="activeData.startTime"
            :endTime="activeData.endTime"
            :scope="activeData.scope"
            :website="activeData.website"
            actType="SELF"
        ></detail-title>
        <detail-Tab :card-data="activeData"></detail-Tab>
    </div>
</template>

<script>
import detailTitle from "./detailTitle";
import detailTab from "./detailTab";

import { getActiveById } from "@/apis/show";
export default {
    components: { detailTab, detailTitle },
    watch: {
        "$route.query": function(newValue) {
            this.getActiveById(newValue.id);
        }
    },
    data() {
        return {
            id: null,
            activeData: {}
        };
    },
    methods: {
        async getActiveById(id) {
            const data = await getActiveById(id);
            if (data.code === 200) {
                this.activeData = data.data;
            } else {
                this.$message.error(data.message);
            }
        }
    },
    mounted() {
        this.id = this.$route.query.id;
        this.getActiveById(this.id);
    }
};
</script>

<style lang="less" scoped>
.container {
    margin: auto !important;
}
</style>
