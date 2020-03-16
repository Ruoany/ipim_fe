<template>
    <div class="cell-container flex">
        <div class="ad">
            <div class="tag" :class="status"></div>
            <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg"
            />
        </div>
        <div class="content flex">
            <div class="info">
                <div class="title" :title="title">
                    {{ title }}
                </div>
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
                <div class="top" :class="isAllow ? 'allow' : 'noallow'">
                    {{ isAllow ? $t("personal.allow") : $t("personal.noAllow") }}
                </div>
                <div class="button-wrapper">
                    <a-button v-if="isOver" type="primary">{{ $t("personal.update") }}</a-button>
                    <a-button v-if="!isOver" type="primary">{{ $t("personal.foQuestion") }}</a-button>
                    <a-button v-if="isPut" type="primary">{{ $t("personal.lfQuestion") }}</a-button>
                    <a-button v-if="!isPut" type="primary">{{ $t("personal.showPic") }}</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, default: "這是題目" },
        address: { type: String, default: "這是地址" },
        date: { type: String, default: "2020-03-16" },
        status: { type: String, default: "default" },
        isAllow: { type: Boolean, default: false }
    },
    data() {
        return {
            isBeing: false,
            isOver: true,
            isPut: false
        };
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
            .allow {
                color: #1fa211;
            }
            .noallow {
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
