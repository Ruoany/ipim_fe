<template>
    <div class="wrapper">
        <a-carousel autoplay>
            <img
                class="img-100"
                src="http://api-exhibition.servier.iteratech.net/upload/2020/04/17/e32417009e844eb2877a95ff0f1ca25d.png"
                @click="go"
            />
            <img class="img-100" src="http://rrd.me/gnPsX" />
            <img class="img-100" src="http://u6.gg/sQ5AW" />
            <img class="img-100" src="http://u6.gg/sQ5Bt" />
        </a-carousel>
        <div class="flex center">
            <div class="width-1280">
                <h1 class="font-bold title">{{ $t("index.evCa") }}</h1>
                <calendar></calendar>
                <div class="flex-justify-content-space-between flex-align-items-center title">
                    <h1 class="font-bold">{{ $t("index.keAc") }}</h1>
                    <div class="flex-align-items-center" @click="$router.push('/show/all')" style="cursor:pointer;">
                        {{ $t("index.allAc") }}
                        <img src="../../assets/image/more.svg" style="margin-left:10px;" />
                    </div>
                </div>
                <div class="width-100 flex ">
                    <focus></focus>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import focus from "./focus";
import calendar from "./calendar";
export default {
    components: {
        focus,
        calendar
    },
    methods: {
        go() {
            window.open("https://q.divosurvey.com/#/s/5e8e773aa8eac57076241592");
        }
    }
};
</script>

<style lang="less" scoped>
.wrapper {
    width: 100%;
    min-width: 1226px;
    box-sizing: border-box;
    .go {
        cursor: pointer;
    }
    .img-100 {
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
    .title {
        padding: 50px 0;
    }
    /deep/ h1 {
        font-weight: bold;
        margin-bottom: 0;
        font-size: 36px;
        color: #333333;
        font-weight: bold;
    }
}
</style>
