<template>
    <div class="h-back">
        <div class="h-back-content">
            <div class="h-back-left">
                <img :src="logoImg" class="img" />
                <div>
                    <div class="font-36">澳門貿易投資促進局</div>
                    <div>活動項目網上申請系統</div>
                    <div class="font-16">https://www.ipim.gov.mo</div>
                </div>
            </div>
            <div class="h-back-right">
                <div>
                    <i class="iconfont icondizhi"></i>
                    <span
                        >{{
                            $t("index.address")
                        }}：澳門友誼大馬路918號世貿中心一至四樓</span
                    >
                </div>
                <div>
                    <i class="iconfont iconyouxiang" style="font-size:18px"></i>
                    <span>{{ $t("index.email") }}：ipim@ipim.gov.mo</span>
                </div>
                <div>
                    <i class="iconfont icondianhua"></i>
                    <span>{{ $t("index.tel") }}：(853) 2871 0300</span>
                </div>
                <div>
                    <i class="iconfont iconchuanzhen"></i>
                    <span>{{ $t("index.fax") }}：(853) 2859 0309</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            © copyright 2020 IPIM. All rights reserved. （聲明）
        </div>
    </div>
</template>

<script>
import logoImg from "@/assets/image/logo.png";
export default {
    data() {
        return {
            logoImg
        };
    }
};
</script>

<style lang="less" scoped>
.h-back {
    background: #000000;
    width: 100%;
    align-items: center;
    color: #ffffff;
    .h-back-content {
        padding: 20px 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .h-back-left {
            display: flex;
            align-items: center;
        }
        .h-back-right {
            font-weight: bold;
            i {
                font-size: 20px;
            }
            & > div {
                width: 350px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                i {
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                span {
                    width: 310px;
                }
            }
        }
    }
    .footer-bottom {
        width: 100%;
        min-width: 1226px;
        text-align: center;
        font-size: 12px;
    }
    .img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }
    .font-36 {
        font-size: 28px;
        line-height: 30px;
    }
    .font-16 {
        font-size: 16px;
    }
}
</style>
