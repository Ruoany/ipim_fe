<template>
    <div class="cell-container flex">
        <div class="ad">
            <div class="tag" :class="activityStatus"></div>
            <img
                style="cursor:pointer;"
                :src="scope"
                @click="$router.push(`/show/detail?id=${activityId}`)"
            />
        </div>
        <div class="content flex">
            <div class="info">
                <div class="title" :title="title">{{ title }}</div>
                <div class="address" :title="address">
                    <span>{{ $t("show.acAd") }}：</span>
                    <span>{{ address }}</span>
                </div>
                <div class="date" :title="date">
                    <span>{{ $t("show.acTime") }}：</span>
                    <span>{{ date }}</span>
                </div>
            </div>
            <div class="status">
                <div class="top" :class="status">{{ $t(formatStatus) }}</div>
                <div class="button-wrapper">
                    <a-button type="primary" @click="FormNavigate">{{
                        status === "rejected"
                            ? $t("personal.update")
                            : $t("personal.showForm")
                    }}</a-button>
                    <a-button
                        v-if="status === 'passed' && activityStatus === 'END'"
                        type="primary"
                        @click="QuestionNavigate"
                        >{{
                            questionnaireAnswerId
                                ? $t("personal.showQuestion")
                                : $t("personal.question")
                        }}</a-button
                    >
                    <a-button
                        v-if="status === 'passed' && activityStatus === 'END'"
                        type="primary"
                        :disabled="applyPictureStatus === 'approving'"
                        @click="PictureNavigate"
                        >{{ $t(formatPictrue) }}</a-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crypto from "@/common/crypto";
export default {
    props: {
        activityId: { type: [String, Number], required: true },
        scope: { type: String, required: true },
        formId: { type: [String, Number], required: true },
        status: { type: String, required: true },
        activityStatus: { type: String, required: true },
        form: { type: String, required: true },
        liaisonId: { type: Number, required: true },
        institutionId: { type: Number, required: true },
        title: { type: String, default: "無題目" },
        address: { type: String, default: "無地址" },
        date: { type: String, default: "1970-01-01" },
        applyPictureId: { type: [Number, Object] },
        applyPictureStatus: { type: [String, Object] },
        questionnaireAnswerId: { type: [Number, Object] }
    },
    computed: {
        formatStatus: function() {
            switch (this.status) {
                case "approving":
                    return "personal.approving";
                    break;
                case "passed":
                    return "personal.passed";
                    break;
                case "rejected":
                    return "personal.rejected";
                    break;
                case "finish":
                    return "personal.finish";
                    break;
            }
        },
        formatPictrue: function() {
            switch (this.applyPictureStatus) {
                case "approving":
                    return "personal.uploading";
                    break;
                case "passed":
                    return "personal.showPic";
                    break;
                default:
                    return "personal.uploadPic";
                    break;
            }
        }
    },
    methods: {
        FormNavigate: function() {
            const query = {
                form: this.form,
                a: escape(this.$crypto.encryption(this.activityId)),
                d: escape(this.$crypto.encryption(this.formId))
            };
            this.$router.push({ path: "/myform/index", query });
        },
        PictureNavigate: function() {
            const query = {
                participateId: this.formId,
                activityId: this.activityId,
                liaisonId: this.liaisonId,
                institutionId: this.institutionId
            };
            this.$router.push({
                path: "/personal/picture",
                query: this.applyPictureId
                    ? { ...query, applyPictureId: this.applyPictureId }
                    : query
            });
        },
        QuestionNavigate: function() {
            const query = {
                formId: this.formId,
                activityId: this.activityId,
                institutionId: this.institutionId
            };
            this.$router.push({ path: "/personal/question", query });
        }
    }
};
</script>

<style lang="less" scoped>
.flex {
    display: flex;
}
.cell-container {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
    .ad {
        position: relative;
        width: 200px;
        height: 120px;
        box-sizing: border-box;
        .UNPUBLISH {
            background-image: url(../../../assets/image/unopen.svg);
        }
        .NOTSTART {
            background-image: url(../../../assets/image/unopen.svg);
        }
        .PROGRESS {
            background-image: url(../../../assets/image/ing.svg);
        }
        .END {
            background-image: url(../../../assets/image/over.svg);
        }
        .CANCEL {
            background-image: url(../../../assets/image/over.svg);
        }
        .tag {
            position: absolute;
            width: 60px;
            height: 60px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .content {
        flex: 1;
        height: 120px;
        justify-content: space-between;
        .info {
            padding-left: 20px;
            height: 100%;
            max-width: 65%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
                line-height: 32px;
                height: 64px;
                font-size: 24px;
                font-weight: bold;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                word-break: break-all;
            }
        }
        .status {
            height: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: right;
            .approving {
                color: #666;
            }
            .passed {
                color: #1fa211;
            }
            .rejected {
                color: #db0f0f;
            }
            .top {
                line-height: 32px;
                height: 64px;
                font-size: 16px;
            }
            .button-wrapper {
                width: 100%;
                button {
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
