<template>
    <a-card hoverable class="all" @click="$router.push({ path: '/show/detail', query: { id } })">
        <div style=" position: relative;" slot="cover">
            <img class="img" :src="imgUrl" />
            <img class="left-img" v-if="statusImg !== null" :src="statusImg" />
        </div>
        <div class="padding-13 flex-justify-content-space-between">
            <div class="font-24">{{ name }}</div>
            <div class="font-red">
                {{ $moment(startTime).format("YYYY.MM.DD") }}-{{ $moment(endTime).format("YYYY.MM.DD") }}
            </div>
        </div>
    </a-card>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        imgUrl: { type: String, default: null },
        name: { type: String, default: null },
        startTime: { type: String, default: null },
        endTime: { type: String, default: null },
        id: { type: [String, Number], default: null },
        statusImg: { type: [String, Number], default: null }
    }
};
</script>

<style lang="less" scoped>
.all {
    margin-bottom: 30px;
    width: 390px;
    background: #fafafa;
    border-radius: 6px;
    .left-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 86px;
        height: 86px;
    }
    .img {
        width: 100%;
        height: 240px;
        cursor: pointer;
        border-radius: 6px 6px 0px 0px;
        object-fit: cover;
    }
    .font-24 {
        font-size: 24px;
        // line-height: 60px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; //行数
        -webkit-box-orient: vertical;
    }
    .font-red {
        color: red;
    }

    .padding-13 {
        // padding: 13px 0px;
        border-radius: 0 0 6px 6px;
        height: 100px;
        box-sizing: border-box;
        flex-direction: column;

        width: 100%;
    }
}
</style>
