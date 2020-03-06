<template>
    <div class="flex warp">
        <img class="img" :src="item.url" v-for="item in pictures" :key="item.id" />
    </div>
</template>

<script>
export default {
    props: { pictures: Array }
};
</script>

<style lang="less" scoped>
.img {
    width: 200px;
    height: 120px;
}
.warp {
    flex-wrap: wrap;
}
</style>