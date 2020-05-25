<template>
    <div class="wrapper">
        <a-carousel autoplay>
            <img
                class="img-100"
                v-for="img in imgs"
                :key="img.id"
                :class="img.url ? 'cursor' : ''"
                :src="img.pic"
                :alt="img.title"
                @click="handleClick(img.url)"
            />
        </a-carousel>
        <div class="flex center">
            <div class="width-1280">
                <h1 class="font-bold title">{{ $t("index.evCa") }}</h1>
                <calendar></calendar>
                <div
                    class="flex-justify-content-space-between flex-align-items-center title"
                >
                    <h1 class="font-bold">{{ $t("index.keAc") }}</h1>
                    <div
                        class="flex-align-items-center"
                        @click="$router.push('/show/all')"
                        style="cursor:pointer;"
                    >
                        {{ $t("index.allAc") }}
                        <img
                            src="../../assets/image/more.svg"
                            style="margin-left:10px;"
                        />
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
import request from "@/apis/request";
export default {
    components: {
        focus,
        calendar
    },
    data() {
        return {
            imgs: []
        };
    },
    methods: {
        async initData() {
            const { data } = await request.get("/banner");
            this.imgs = data.content;
        },
        handleClick(url) {
            if (!url) {
                return;
            }
            window.open(url);
        }
    },
    async mounted() {
        this.initData();
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
    .cursor {
        cursor: pointer;
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
