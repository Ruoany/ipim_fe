<template>
    <div>
        <div class="flex center  h-back ">
            <div class="width-1280 ">
                <div class="flex-justify-content-space-between flex-align-items-center">
                    <div class="font-24">
                        <div class="flex-align-items-center">
                            <img :src="logoImg" class="img" />
                            <div>
                                <div class="font-36">澳門會展網</div>
                                <div class="font-16">http://www.mice.gov.mo/tc/</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="flex-align-items-center p-20">
                            <div class="width-30"><i class="iconfont icondizhi"></i></div>
                            <div class="font-16">{{ $t("index.address") }}：澳門殺殺殺</div>
                        </div>
                        <div class="flex-align-items-center p-20">
                            <div class="width-30"><i class="iconfont iconyouxiang"></i></div>
                            <div class="font-16">{{ $t("index.email") }}：澳門殺殺殺</div>
                        </div>
                        <div class="flex-align-items-center p-20">
                            <div class="width-30"><i class="iconfont icondianhua"></i></div>
                            <div class="font-16">{{ $t("index.tel") }}：澳門殺殺殺</div>
                        </div>
                        <div class="flex-align-items-center p-20">
                            <div class="width-30"><i class="iconfont iconchuanzhen"></i></div>
                            <div class="font-16">{{ $t("index.fax") }}：(853) 2859 0309</div>
                        </div>
                    </div>
                </div>
                <div class="font-16" style="padding:0;padding-top:45px;">
                    © copyright 2016IPIM. All rights reserved. (聲明)
                </div>
            </div>
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
    height: 312px;
    align-items: center;
    color: #ffffff;
    .font-24 {
        // font-size: 24px;
        padding-left: 31px;
        // font-weight: bold;
    }
    .icon {
        font-size: 29px;
        color: red;
    }
    .font-16 {
        font-size: 16px;
        padding: 0 0 0 10px;
        font-weight: lighter;
    }
    .p-20 {
        // padding: 5px 0;
        line-height: 40px;
    }
    .font-36 {
        font-size: 36px;
        font-weight: bold;
        padding: 0 0 0 10px;
    }
}
.img {
    width: 60px;
    height: 60px;
}
// .b-back {
//     background: #3e3e3e;
//     height: 100px;
//     color: #ffffff;
//     .font-center {
//         text-align: center;
//     }
// }
.width-30 {
    width: 20px;
    text-align: center;
}
</style>
