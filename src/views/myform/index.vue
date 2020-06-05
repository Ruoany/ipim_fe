<template>
    <a-spin :spinning="loading" class="form-wrapper">
        <a-tabs v-model="tabActive">
            <a-tab-pane :tab="$t('show.aa')" key="1" style="padding:30px 0;">
                <form-mission v-if="form === 'MISSION'"></form-mission>
                <form-participate
                    v-if="form === 'PARTICIPATE'"
                ></form-participate>
                <form-miecf v-if="form === 'MIECF'"></form-miecf>
                <form-iiicf v-if="form === 'IIICF'"></form-iiicf>
                <form-mif v-if="form === 'MIF'"></form-mif>
                <form-plpex v-if="form === 'PLPEX'"></form-plpex>
                <form-mfe v-if="form === 'MFE'"></form-mfe>
                <form-gmbpf v-if="form === 'GMBPF'"></form-gmbpf>
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
                        >{{ $t("util.download") }}</a-button
                    >
                </div>
            </a-tab-pane>
        </a-tabs>
    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";
import Liaison from "@/apis/liaison";
import FormMap from "@/common/map";
import FormMission from "./MISSION/index";
import FormParticipate from "./PARTICIPATE/index";
import FormMiecf from "./MIECF/index";
import FormIiicf from "./IIICF/index";
import FormMif from "./MIF/index";
import FormPlpex from "./PLPEX/index";
import FormMfe from "./MFE/index";
import FormGmbpf from "./GMBPF/index";
import PM from "@/apis/participateMiecf";
import PI from "@/apis/participateIiicf";
import PMF from "@/apis/participateMfe";
import PG from "@/apis/participateGmbpf";
import PMI from "@/apis/participateMif";
import PP from "@/apis/participatePlpex";
import PD from "@/apis/participateDelegation";
import PAA from "@/apis/participateAttendAbroad";

export default {
    components: {
        FormMission,
        FormParticipate,
        FormMiecf,
        FormIiicf,
        FormMif,
        FormPlpex,
        FormMfe,
        FormGmbpf
    },
    computed: {
        ...mapGetters(["liaisonList", "currentInstitution"])
    },
    data() {
        return {
            form: "",
            tabActive: "1",
            loading: false
        };
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
        downloadExcel: async function() {
            let result = {};
            switch (this.form) {
                case "MIECF":
                    result = await PM.download();
                    break;
                case "IIICF":
                    result = await PI.download();
                    break;
                case "MFE":
                    result = await PMF.download();
                    break;
                case "GMBPF":
                    result = await PG.download();
                    break;
                case "MIF":
                    result = await PMI.download();
                    break;
                case "PLPEX":
                    result = await PP.download();
                    break;
                case "PARTICIPATE":
                    result = await PAA.download();
                    break;
                case "MISSION":
                    result = await PD.download();
                    break;
            }
            const blob = new Blob([result], {
                type:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            });
            const a = document.createElement("a");
            a.download = this.form;
            a.target = "blank";
            a.href = URL.createObjectURL(blob);
            a.click();
        }
    },
    mounted: function() {
        this.form = this.$route.query.form;
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
