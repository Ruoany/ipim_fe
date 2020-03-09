<template>
    <div class="form-wrapper">
        <a-tabs v-model="tabActive">
            <a-tab-pane :tab="$t('show.aa')" key="1" style="padding:30px 0;">
                <form-aa v-if="form === 'aa'"></form-aa>
                <form-ab v-if="form === 'ab'"></form-ab>
                <form-ba v-if="form === 'ba'"></form-ba>
                <form-bb v-if="form === 'bb'"></form-bb>
                <form-bd v-if="form === 'bd'"></form-bd>
            </a-tab-pane>
            <a-tab-pane :tab="$t('show.ab')" key="2"></a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import FormAa from "./aa";
import FormAb from "./ab";
import FormBa from "./ba";
import FormBb from "./bb";
import FormBd from "./bd";
export default {
    components: { FormAa, FormAb, FormBa, FormBb, FormBd },
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