<template>
    <div class="cell-container flex">
        <div class="ad">
            <div class="tag" :class="activityStatus"></div>
            <img
                style="cursor:pointer;border-radius:6px;"
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
                <div class="top">
                    <slot name="status"></slot>
                </div>
                <slot name="action"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Crypto from "@/common/crypto";
export default {
    props: {
        scope: { type: String, required: true },
        status: { type: String, required: true },
        activityStatus: { type: String, required: true },
        title: { type: String, default: "無題目" },
        address: { type: String, default: "無地址" },
        date: { type: String, default: "1970-01-01" }
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
            .top {
                line-height: 32px;
                height: 64px;
                font-size: 16px;
                .ant-tag {
                    margin-right: 0;
                    font-size: 16px;
                    padding: 4px 12px;
                    width: 80px;
                    text-align: center;
                }
            }
            .button-wrapper {
                width: 100%;
                .ant-btn {
                    padding: 0;
                    :before {
                        content: "|";
                        color: #d9d9d9;
                        padding: 0 8px;
                    }
                }
                button:nth-child(1),
                div:nth-child(1) {
                    :before {
                        content: "" !important;
                        color: #d9d9d9;
                        padding: 0 8px;
                    }
                }
            }
        }
    }
}
</style>
