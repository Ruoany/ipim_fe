<template>
    <a-spin :spinning="loading" class="form-wrapper">
        <a-tabs v-model="tabActive">
            <a-tab-pane :tab="$t('show.aa')" key="1" style="padding:30px 0;">
                <form-attend v-if="form === 'ATTEND'" :list="activityList"></form-attend>
                <form-bb v-if="form === 'bb'" :list="activityList"></form-bb>
                <form-enterprise v-if="form === 'ENTERPRISE'" :list="activityList"></form-enterprise>
                <form-convention v-if="form === 'CONVENTION'" :list="activityList"></form-convention>
                <form-be v-if="form === 'ECB2C'" :list="activityList"></form-be>
                <form-bf v-if="form === 'ECB2B'" :list="activityList"></form-bf>
                <form-ecb2c v-if="form === 'ecb2c'" :list="activityList"></form-ecb2c>
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
                    <a-button
                        type="primary"
                        size="large"
                        @click="downloadExcel"
                        :loading="download"
                    >{{ $t("util.download") }}</a-button>
                </div>
            </a-tab-pane>
        </a-tabs>
    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";

import Liaison from "@/apis/liaison";
import Activity from "@/apis/activity";
import FormAttend from "./ATTEND/index";
import FormBb from "./bb/index";
import FormEnterprise from "./ENTERPRISE/index";
import FormConvention from "./CONVENTION/index";
import FormBe from "./be/index";
import FormECB2C from "./ecb2c/index";
import FormBf from "./bf/index";
import EA from "@/apis/encourageAttend";
import EE from "@/apis/encourageEnterprise";
import EC from "@/apis/encourageConvention";

export default {
    components: {
        FormAttend,
        FormBb,
        FormConvention,
        FormEnterprise,
        FormECB2C,
        FormBe,
        FormBf
    },
    computed: {
        ...mapGetters(["currentInstitution"])
    },
    data() {
        return {
            form: "",
            tabActive: "1",
            loading: false,
            download: false,
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
            const { data } = await Liaison.all({
                institutionId: this.currentInstitution.id
            });
            await this.$store.dispatch("setLiaisons", data);
            this.loading = false;
        },
        GetActivityList: async function() {
            const { data } = await Activity.all({
                activityScope: "ENCOURAGE",
                status: "PUBLISH"
            });
            this.activityList = data ? data : [];
        },
        downloadExcel: async function() {
            this.download = true;
            let result = {};
            let type = "";
            switch (this.form) {
                case "ATTEND": {
                    result = await EA.download();
                    type =
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                    break;
                }
                case "ENTERPRISE": {
                    result = await EE.download();
                    type =
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                    break;
                }
                case "CONVENTION": {
                    result = await EC.download();
                    type = "application/pdf";
                    break;
                }
            }
            const blob = new Blob([result], { type });
            const a = document.createElement("a");
            a.download = this.form;
            a.target = "blank";
            a.href = URL.createObjectURL(blob);
            a.click();
            this.download = false;
        }
    },
    mounted: function() {
        this.form = this.$route.query.form;
        this.GetActivityList();
        this.initData();
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
