<template>
    <div class="flex warp">
        <img class="img" :src="item" v-for="item in cardData" :key="item" />
    </div>
</template>

<script>
export default {};
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