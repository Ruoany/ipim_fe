<template>
    <a-spin :spinning="loading" class="container">
        <a-tabs v-model="status">
             <!-- $t : 国际化 -->
            <!-- 待審核 -->
            <a-tab-pane
                :tab="$t('personal.undeal')"
                key="approving"
            ></a-tab-pane>
            <!-- 已審核 -->
            <a-tab-pane
                :tab="$t('personal.deal')"
                key="unapproved"
            ></a-tab-pane>
        </a-tabs>
        <div class="list-content">
            <!-- nodata: "暫無數據", -->
            <a-empty
                v-if="list.length === 0"
                :description="$t('util.nodata')"
                class="empty"
            ></a-empty>
            <cell
                v-for="item in list"
                :key="item.id"
                :scope="item.activity ? item.activity.scope : ''"
                :status="item.status"
                :activity-status="item.activity ? item.activity.showStatus : 'PROGRESS'"
                :title="item.activity ? item.activity.nameZh : item.type === 'ECB2B'? '電子商務推廣鼓勵措施申請表格':'電子商務推廣（應用 B2C 平台）鼓勵措施'"
                :address="item.activity ? item.activity.place : '無地址'"
                :date="item.activity ? `${item.activity.startTime} - ${item.activity.endTime}` : item.applyTime"
                :code="item.code"
                @handleClick="
                    item.activity && $router.push(`/show/detail?id=${item.activity.id}`)
                "
            >
                <a-tag slot="status" :color="item.status | formatStatus">{{
                    item.status | statusTextFilter
                }}</a-tag>
                <div slot="action" class="button-wrapper">
                    <a-button
                        type="link"
                        v-if="item.status === 'approving' && item.activity && item.type === 'ENTERPRISE' && item.tasks.length == 1"
                        @click="cancel(item.id)"
                        >{{  
                            $t("personal.cancel")    
                        }}</a-button>

                    <a-modal v-model="visible" title="提示" @ok="handleOk" @cancel="handCancel">
                        <p>確定要取消申請嗎</p>
                    </a-modal>

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
                        v-if="item.status != 'rejected'"
                        @click="
                            FormNavigate(item.type, {
                                d: item.id
                            })
                        "
                        >{{
                            item.status === 'supplementinfo'
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
        <div>
        <pagination :page.sync="page" :size="size" :total="total" />
        </div>
    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";

import Cell from "./components/cell";
import Pagination from "@/components/pagination";
import Encourage from "@/apis/encourage";
import Institution  from "@/apis/institution";
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
            list: [],
            visible: false
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
                case "supplementinfo":
                    return "orange";
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
                case "supplementinfo":
                    return i18n.t("personal.supplementinfo");
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
            const { data } = await Encourage.get({
                institutionId: this.currentInstitution.id,
                page: this.page,
                size: this.size,
                approved: this.status === "unapproved"
            });
            this.list = data ? data.content : [];
            this.total = data ? data.totalElements : 0;
            this.loading = false;
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
        

        cancel(o) {
            this.visible = true;
            sessionStorage.setItem("exhibitionId",o)
        },

       async handleOk(){
           this.visible = false;
           const o = sessionStorage.getItem("exhibitionId");
           const { data } = await Institution.cancel(o);
             location.reload();
        },
        handCancel(){
           this.visible = false;
        },


        FormNavigate: function(form, o) {
            // 參數MISSION轉為bb
           form = form == "EN_MISSION" ? "bb" : form;
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
