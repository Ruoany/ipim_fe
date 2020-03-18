<template>
    <div class="form-wrapper">
        <a-tabs v-model="tabActive">
            <a-tab-pane :tab="$t('report.aa')" key="1" style="padding:30px 0;">
                <report-ba v-if="reportType = 'ba'"></report-ba>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import reportBa from "./ba/index";
export default {
    components: { reportBa },
    data() {
        return {
            reportType: null,
            tabActive: "1"
        };
    },
    methods: {},
    mounted() {
        this.reportType = this.$route.query.reportType;
    }
};
</script>

<style lang="less" scoped>
@import url(./css/form.less);
.form-wrapper {
    width: 1100px;
    margin: auto;
    padding: 50px 0;
    /deep/.ant-tabs-bar {
        border: transparent;
    }
    /deep/.ant-tabs-tab {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 0;
    }
    /deep/ .ant-spin-container,
    .tabs {
        width: 100%;
    }
    .label-col {
        height: 700px;
    }
    ul {
        padding: 40px 20px;
        li {
            list-style: none;
            line-height: 50px;
        }
    }
}
</style>