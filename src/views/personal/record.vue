<template>
    <a-spin :spinning="loading" class="container">
        <a-tabs v-model="status">
            <a-tab-pane
                :tab="$t('personal.undeal')"
                key="approving"
            ></a-tab-pane>
            <a-tab-pane
                :tab="$t('personal.deal')"
                key="unapproved"
            ></a-tab-pane>
        </a-tabs>
        <div class="list-content">
            <a-empty
                v-if="list.length === 0"
                :description="$t('util.nodata')"
                class="empty"
            ></a-empty>
            
            <cell
                v-for="item in list"
                :key="item.id"
                :scope="item.activity.scope"
                :status="item.status"
                :activity-status="item.activity.showStatus"
                :title="item.activity.nameZh"
                :address="item.activity.place"
                :date="`${item.activity.startTime} - ${item.activity.endTime}`"
                :code="item.code"
                @handleClick="
                    item.activity && $router.push(`/show/detail?id=${item.activity.id}`)
                "
            >
            <!-- 申请 -->
                <!-- <div v-if="item.applyfortype === 'APPLY'"> -->
                    <a-tag slot="status" :color="item.status | formatStatus">{{
                        item.status | statusTextFilter
                    }}</a-tag>
                    <div slot="action" class="button-wrapper" v-if="item.applyfortype === 'APPLY'">
                        <!-- <a-button
                            v-if="
                                (item.status === 'passed' || item.status === 'finish') && item.activity.showStatus === 'END'
                            "
                            type="link"
                            @click="
                                NavigateTo('/report/index', {
                                    id: item.id,
                                    reportType:'ba',
                                    reportId: item.report ? item.report.id : '',
                                })
                            "
                            >{{ $t("personal.report") }}</a-button
                        > -->
                        <!-- 修改申請表 || 查看  当前可显示-->
                        <a-button
                            type="link"
                            @click="
                                FormNavigate(item.type, {
                                    a: item.activityId,
                                    d: item.id
                                })
                            "
                            >{{
                                item.status === "rejected"
                                    ? $t("personal.update")
                                    : $t("personal.showForm")
                            }}</a-button
                        >
                        <!-- 查看問卷 当前返回的数据中 status 在item.activity.status-->
                        <a-button
                            v-if="
                                (item.status === 'passed' ||
                                    item.status === 'finish') &&
                                    item.activity.showStatus === 'END'
                            "
                            type="link"
                            @click="
                                NavigateTo('/personal/question', {
                                    participateId: item.id,
                                    activityId: item.activity.id,
                                    institutionId: item.institution.id,
                                    questionnaireAnswerId:
                                        item.questionnaireAnswerId,
                                    method: item.method
                                })
                            "
                            >{{
                                item.questionnaireAnswerId
                                    ? $t("personal.showQuestion")
                                    : $t("personal.writeQuestion")
                            }}</a-button
                        >
                        <!-- <a-button
                            v-if="
                                (item.status === 'passed' ||
                                    item.status === 'finish') &&
                                    item.activity.showStatus === 'END'
                            "
                            type="link"
                            :disabled="item.applyPictureStatus === 'approving'"
                            @click="
                                NavigateTo('/personal/picture', {
                                    participateId: item.id,
                                    activityId: item.activity.id,
                                    liaisonId: item.liaisonId,
                                    institutionId: item.institution.id,
                                    applyPictureId: item.applyPictureId
                                })
                            "
                            >{{
                                item.applyPictureStatus | pictureTextFilter
                            }}</a-button
                        > -->
                    </div>
                <!-- </div> -->
                
                <!-- 从这里区分APPLY和AID -->
                
                <!-- <a-tag slot="status" :color="item.status | formatStatus">{{
                    item.status | statusTextFilter
                }}</a-tag> -->
                <div slot="action" class="button-wrapper" v-if="item.applyfortype === 'AID'">
                    <a-button type="link" @click="ExportPDF(item.code, item.type)">下載資料</a-button>
                    <a-button
                        v-if="
                            item.activity && (item.status === 'passed' || item.status === 'finish') && item.activity.showStatus === 'END'
                        "
                        type="link"
                        @click="
                            NavigateTo('/report/index', {
                                id: item.id,
                                reportType: item.type,
                                reportId: item.report ? item.report.id : '',
                            })
                        "
                        >{{ $t("personal.report") }}</a-button
                    >
                    <a-button
                        type="link"
                        @click="
                            FormNavigateAID(item.type, {
                                d: item.id
                            })
                        "
                        >{{
                            item.status === "rejected"
                                ? $t("personal.update")
                                : $t("personal.showForm")
                        }}</a-button
                    >
                    <a-button
                        v-if="(item.status === 'passed' || item.status === 'finish') && 
                            (item.activity  ? item.activity.showStatus === 'END' : true)
                        "
                        type="link"
                        @click="
                            NavigateTo('/personal/question', {
                                participateId: item.id,
                                activityId: item.activity ? item.activity.id : '',
                                institutionId: item.institution.id,
                                questionnaireAnswerId:
                                    item.questionnaireAnswerId,
                                method: item.method,
                                type: item.type,
                                participateScope: item.activityScope
                            })
                        "
                        >{{
                            item.questionnaireAnswerId
                                ? $t("personal.showQuestion")
                                : $t("personal.writeQuestion")
                        }}</a-button
                    >
                    <a-button
                        v-if="(item.status === 'passed' || item.status === 'finish') && 
                            (item.activity  ? item.activity.showStatus === 'END' : true)
                        "
                        type="link"
                        :disabled="item.applyPictureStatus === 'approving'"
                        @click="
                            NavigateTo('/personal/picture', {
                                participateId: item.id,
                                activityId: item.activity ? item.activity.id : '',
                                liaisonId: item.liaisonId,
                                institutionId: item.institution.id,
                                applyPictureId: item.applyPictureId,
                                participateScope: item.activityScope
                            })
                        "
                        >{{
                            item.applyPictureStatus | pictureTextFilter
                        }}</a-button
                    >
                </div>
              
            </cell>
        </div>
        <pagination :page.sync="page" :size="size" :total="total" />
    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";
import Cell from "./components/cell";
import Pagination from "@/components/pagination";
import Participate from "@/apis/participate";
import i18n from "@/assets/i18n/index";
import PDFDown from "@/apis/PDFDown";
export default {
    components: { Cell, Pagination },
    data() {
        return {
            loading: false,
            status: "approving",
            page: 0,
            size: 5,
            total: 1,
            list: []
        };
    },
    computed: {
        ...mapGetters(["currentInstitution"])
    },
    watch: {
        status: function() {
            this.page = 0;
            this.initData();
        },
        page: function() {
            this.initData();
        }
    },
    filters: {
        formatStatus: function(value) {
            switch (value) {
                case "approving":
                    return "blue";
                case "passed":
                    return "green";
                case "rejected":
                    return "orange";
                case "withdraw":
                    return "red";
                case "finish":
                    return "green";
            }
        },
        statusTextFilter: function(value) {
            switch (value) {
                case "approving":
                    return i18n.t("personal.approving");
                case "passed":
                    return i18n.t("personal.passed");
                case "rejected":
                    return i18n.t("personal.rejected");
                case "withdraw":
                    return i18n.t("personal.withdraw");
                case "finish":
                    return i18n.t("personal.finish");
            }
        },
        pictureTextFilter: function(value) {
            switch (value) {
                case "approving":
                    return i18n.t("personal.uploading");
                case "passed":
                    return i18n.t("personal.showPic");
                default:
                    return i18n.t("personal.uploadPic");
            }
        }
    },
    methods: {
        initData: async function() {
            if (!this.currentInstitution) {
                return;
            }
            this.loading = true;
            const { data } = await Participate.get({
                institutionId: this.currentInstitution.id,
                page: this.page,
                size: this.size,
                approved: this.status === "unapproved"
            });
            
            this.list = data ? data.content.filter(obj => {
                return obj.activity !== null;
            }) : [];
            // let filterData = data.content.filter(obj => obj.activity != null);
            // this.$set(this.list,0, filterData);
            this.total = data ? data.totalElements : 0;
            this.loading = false;
            console.info(this.list);
            console.info(data);
        },
        Transform: function(o) {
            Object.keys(o).map(item => {
                if (o[item]) {
                    o[item] = escape(this.$crypto.encryption(o[item]));
                } else {
                    delete o[item];
                }
            });
            return o;
        },
        FormNavigate: function(form, o) {
            const query = {
                form,
                ...this.Transform(o)
            };
            this.$router.push({
                path: "/myform/index",
                query
            });
        },
        FormNavigateAID: function(form, o) {
            // 參數MISSION轉為bb
            form = form == "MISSION" ? "bb" : form;
            const query = {
                form,
                ...this.Transform(o)
            };
            this.$router.push({
                path: "/myform/special",
                query
            });
        },
        NavigateTo: function(path, o) {
            const query = this.Transform(o);
            this.$router.push({ path, query });
        },
        ExportPDF: async function(code, type) {
            // if('ENTERPRISE' != type && 'MISSION' != type && 'CONVENTION' != type && 'ATTEND' != type){
            //     alert("提示: 目前暂时支持031, 032, 033、034申请类型！");
            //     return;
            // }
        
            this.loading = true;
            const { data } = await PDFDown.get({
                applyCode: code,
                encourageType: type
            });
            this.pdfFileName = data ? data.pdfFileName : null;
            this.loading = false;
        
            if(null != this.pdfFileName)
                this.DownloadPDF(this.pdfFileName);
            else {
                alert('提示: 服务端数据不匹配！')
            }
        },
        DownloadPDF: function(pdfName){
            window.open('/api/export_pdf/' + pdfName);
        }
    },
    mounted: function() {
        this.initData();
    }
};
</script>

<style lang="less" scoped>
.container {
    /deep/.ant-tabs-bar {
        border-color: transparent;
    }
    /deep/.ant-tabs-nav .ant-tabs-tab {
        font-size: 18px;
    }
    /deep/.ant-btn-sm {
        font-size: 12px;
    }
    .list-content {
        min-height: 300px;
        padding-bottom: 30px;
    }
    .empty {
        min-height: 400px;
    }
}
</style>
