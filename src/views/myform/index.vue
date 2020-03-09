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
            <a-tab-pane :tab="$t('show.ab')" key="2">
                <div class="label-col">
                    <ul>
                        <li>{{$t('general.downloadStep1')}}</li>
                        <li>{{$t('general.downloadStep2')}}</li>
                        <li>{{$t('general.downloadStep3')}}</li>
                        <li>{{$t('general.downloadStep4')}}</li>
                        <li>{{$t('general.downloadStep5')}}</li>
                    </ul>
                    <a-button type="primary" size="large">{{$t('form.downloadDesc')}}</a-button>
                </div>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import FormAa from "./aa/index";
import FormAb from "./ab/index";
import FormBa from "./ba/index";
import FormBb from "./bb/index";
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
    .label-col {
        height: 500px;
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