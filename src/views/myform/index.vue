<template>
    <div class="form-wrapper">
        <a-tabs v-model="tabActive">
            <a-tab-pane :tab="$t('show.aa')" key="1" style="padding:30px 0;">
                <form-mission v-if="form === 'MISSION'"></form-mission>
                <form-participate v-if="form === 'PARTICIPATE'"></form-participate>
                <form-ba v-if="form === 'ba'"></form-ba>
                <form-bb v-if="form === 'bb'"></form-bb>
                <form-bc v-if="form === 'bc'"></form-bc>
                <form-bd v-if="form === 'bd'"></form-bd>
                <form-be v-if="form === 'be'"></form-be>
                <form-bf v-if="form === 'bf'"></form-bf>
                <form-miecf v-if="form === 'MIECF'"></form-miecf>
                <form-iiicf v-if="form === 'IIICF'"></form-iiicf>
                <form-mif v-if="form==='MIF'"></form-mif>
                <form-plpex v-if="form ==='PLPEX'"></form-plpex>
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
                    <a-button type="primary" size="large">{{ $t("util.download") }}</a-button>
                </div>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import FormMap from "@/common/map";
import FormMission from "./MISSION/index";
import FormParticipate from "./PARTICIPATE/index";
import FormBa from "./ba/index";
import FormBb from "./bb/index";
import FormBc from "./bc/index";
import FormBd from "./bd/index";
import FormBe from "./be/index";
import FormBf from "./bf/index";
import FormMiecf from "./MIECF/index";
import FormIiicf from "./IIICF/index";
import FormMif from "./MIF/index";
import FormPlpex from "./PLPEX/index";
import FormMfe from "./MFE/index";
import FormGmbpf from "./GMBPF/index";

export default {
    components: {
        FormMission,
        FormParticipate,
        FormBa,
        FormBb,
        FormBd,
        FormBc,
        FormBe,
        FormBf,
        FormMiecf,
        FormIiicf,
        FormMif,
        FormPlpex,
        FormMfe,
        FormGmbpf
    },
    data() {
        return {
            form: "",
            activityId: "",
            tabActive: "1"
        };
    },
    computed: {
        formTitle: function() {
            const first = sessionStorage.getItem("selectedItem");
            const last = FormMap[this.form];
            return `${this.$t(first)} - ${this.$t(last)}`;
        }
    },
    mounted: function() {
        this.form = this.$route.query.form;
        this.activityId = this.$route.query.activityId;
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
