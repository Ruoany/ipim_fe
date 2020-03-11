<template>
    <div class="container" v-html="info"></div>
</template>

<script>
export default {
    props: {
        info: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
}
</style>
