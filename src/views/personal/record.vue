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
                    $router.push(`/show/detail?id=${item.activity.id}`)
                "
            >
                <a-tag slot="status" :color="item.status | formatStatus">{{
                    item.status | statusTextFilter
                }}</a-tag>
                <div slot="action" class="button-wrapper">
                    <!-- <a-button
                        v-if="
                            (item.status === 'passed' || item.status === 'finish') && item.activity.showStatus === 'END'
                        "
                        type="link"
                        >{{ $t("personal.report") }}</a-button
                    > -->
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
                                method: 'GENERAL_EXHIBITION'
                            })
                        "
                        >{{
                            item.questionnaireAnswerId
                                ? $t("personal.showQuestion")
                                : $t("personal.writeQuestion")
                        }}</a-button
                    >
                    <a-button
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
                    break;
                case "passed":
                    return "green";
                    break;
                case "rejected":
                    return "orange";
                    break;
                case "withdraw":
                    return "red";
                    break;
                case "finish":
                    return "green";
                    break;
            }
        },
        statusTextFilter: function(value) {
            switch (value) {
                case "approving":
                    return i18n.t("personal.approving");
                    break;
                case "passed":
                    return i18n.t("personal.passed");
                    break;
                case "rejected":
                    return i18n.t("personal.rejected");
                    break;
                case "withdraw":
                    return i18n.t("personal.withdraw");
                    break;
                case "finish":
                    return i18n.t("personal.finish");
                    break;
            }
        },
        pictureTextFilter: function(value) {
            switch (value) {
                case "approving":
                    return i18n.t("personal.uploading");
                    break;
                case "passed":
                    return i18n.t("personal.showPic");
                    break;
                default:
                    return i18n.t("personal.uploadPic");
                    break;
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
        NavigateTo: function(path, o) {
            const query = this.Transform(o);
            this.$router.push({ path, query });
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
