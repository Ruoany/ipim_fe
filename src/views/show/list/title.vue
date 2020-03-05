<template>
    <div class="all flex-align-items-center">{{ text }}</div>
</template>

<script>
export default {
    props: { text: String }
};
</script>

<style lang="less" scoped>
.all {
    width: 100%;
    justify-content: center;
    height: 360px;
    background: #f1f1f1;
    color: #000000;
    font-size: 48px;
}
</style>
