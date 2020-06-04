<template>
    <a-spin :spinning="loading" class="form-wrapper">
        <a-tabs v-model="tabActive">
            <a-tab-pane :tab="$t('show.aa')" key="1" style="padding:30px 0;">
                <form-ba v-if="form === 'ba'" :list="activityList"></form-ba>
                <form-bb v-if="form === 'bb'" :list="activityList"></form-bb>
                <form-enterprise
                    v-if="form === 'ENTERPRISE'"
                    :list="activityList"
                ></form-enterprise>
                <form-bd v-if="form === 'bd'" :list="activityList"></form-bd>
                <form-be v-if="form === 'be'" :list="activityList"></form-be>
                <form-bf v-if="form === 'bf'" :list="activityList"></form-bf>
            </a-tab-pane>
            <a-tab-pane :tab="$t('show.ab')" key="2">
                <div class="label-col">
                    <ul>
                        <li>{{ $t("util.step1") }}</li>
                        <li>{{ $t("util.step2") }}</li>
                        <li>{{ $t("util.step3") }}</li>
                        <li>{{ $t("util.step4") }}</li>
                        <li>{{ $t("util.step5") }}</li>
                    </ul>
                    <a-button type="primary" size="large">{{
                        $t("util.download")
                    }}</a-button>
                </div>
            </a-tab-pane>
        </a-tabs>
    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";
import Liaison from "@/apis/liaison";
import Activity from "@/apis/activity";
import FormBa from "./ba/index";
import FormBb from "./bb/index";
import FormEnterprise from "./ENTERPRISE/index";
import FormBd from "./bd/index";
import FormBe from "./be/index";
import FormBf from "./bf/index";

export default {
    components: {
        FormBa,
        FormBb,
        FormBd,
        FormEnterprise,
        FormBe,
        FormBf
    },
    computed: {
        ...mapGetters(["liaisonList", "currentInstitution"])
    },
    data() {
        return {
            form: "",
            tabActive: "1",
            loading: false,
            activityList: []
        };
    },
    watch: {
        "$route.query"(newValue) {
            this.form = newValue.form;
        }
    },
    methods: {
        initData: async function() {
            this.loading = true;
            const { data } = await Liaison.get({
                size: 1000,
                institutionId: this.currentInstitution.id
            });
            await this.$store.dispatch("setLiaisons", data.content);
            this.loading = false;
        },
        GetActivityList: async function() {
            const { data } = await Activity.all({ activityScope: "ENCOURAGE" });
            this.activityList = data ? data : [];
        }
    },
    mounted: function() {
        this.form = this.$route.query.form;
        this.GetActivityList();
        if (this.liaisonList.length === 0) this.initData();
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
