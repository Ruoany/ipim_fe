<template>
    <div>
        <div @click="$router.push({path:'/show/detail',query:{id}})">
            <img class="img" :src="imgUrl" />
            <img class="left-img" />
        </div>
        <div class="font-24">{{ name }}</div>
        <div
            class="font-red"
        >{{ $moment(startTime).format("YYYY.MM.DD") }}-{{ $moment(endTime).format("YYYY.MM.DD") }}</div>
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: { type: String, default: null },
        name: { type: String, default: null },
        startTime: { type: String, default: null },
        endTime: { type: String, default: null },
        id: { type: [String, Number], default: null }
    }
};
</script>

<style lang="less" scoped>
.left-img {
    position: absolute;
    top: 0;
    left: 0;
}
.img {
    width: 380px;
    height: 200px;
    cursor: pointer;
}
.font-24 {
    font-size: 24px;
    line-height: 60px;
}
.font-red {
    color: red;
}
</style>
