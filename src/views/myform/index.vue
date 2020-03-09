<template>
    <div class="form-wrapper">
        <a-tabs v-model="tabActive">
            <a-tab-pane :tab="$t('show.aa')" key="1" style="padding:30px 0;">
                <form-a v-if="form === 'a'"></form-a>
                <form-b v-if="form === 'b'"></form-b>
            </a-tab-pane>
            <a-tab-pane :tab="$t('show.ab')" key="2"></a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import FormA from "./a";
import FormB from "./b";
export default {
    components: { FormA, FormB },
    data() {
        return {
            form: "",
            tabActive: "1"
        };
    },
    mounted: function() {
        this.form = this.$route.query.form;
    }
};
</script>

<style lang="less" scoped>
.form-wrapper {
    width: 1226px;
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
    .list-content {
        min-height: 500px;
    }
}
</style>