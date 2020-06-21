<template>
    <div class="cell-container flex">
        <div class="ad">
            <div class="tag" :class="activityStatus"></div>
            <img
                v-if="scope"
                style="cursor:pointer;border-radius:6px;object-fit: cover;"
                :src="scope"
                @click="$emit('handleClick')"
            />
            <div v-else class="default"/>
        </div>
        <div class="info">
            <div class="top flex">
                <div class="title" :title="title">{{ title }}</div>
                <slot name="status"></slot>
            </div>
            <div class="bottom flex">
                <div class="left">
                    <div :title="address">
                        <span>{{ $t("show.acAd") }}：</span>
                        <span>{{ address }}</span>
                    </div>
                    <div :title="date">
                        <span>{{ $t("show.acTime") }}：</span>
                        <span>{{ date }}</span>
                    </div>
                    <div :title="code">
                        <span>{{ $t("show.code") }}：</span>
                        <span>{{ code }}</span>
                    </div>
                </div>
                <div class="right">
                    <slot name="action"></slot>
                </div>
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
        date: { type: String, default: "1970-01-01" },
        code: { type: String, default: "無" }
    }
};
</script>

<style lang="less" scoped>
.default {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(../../../assets/image/logo.svg);
}
.flex {
    display: flex;
}
.cell-container {
    width: 100%;
    padding: 30px 0;
    border-bottom: 1px solid #e6e6e6;
    .ad {
        position: relative;
        width: 200px;
        height: 140px;
        box-sizing: border-box;
        border: 1px solid #eee;
        border-radius: 6px;
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
    .info {
        padding-left: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
            flex: 1;
            justify-content: space-between;
            .title {
                max-width: 600px;
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
            .ant-tag {
                margin-right: 0;
                font-size: 16px;
                height: 30px;
                padding: 4px 12px;
                width: 80px;
                text-align: center;
            }
        }
        .bottom {
            justify-content: space-between;
            align-items: flex-end;
            .left {
                max-width: 450px;
            }
            .right {
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
}
</style>
