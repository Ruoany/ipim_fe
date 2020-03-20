<template>
    <div class="container" v-html="info"></div>
</template>

<script>
export default {
    props: {
        info: String
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    /deep/ img {
        width: 100%;
    }
}
</style>
