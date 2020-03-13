<template>
    <div class="all flex-align-items-center"></div>
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
    background: url("http://www.mice.gov.mo/current/images/about_banner.jpg") no-repeat;
    background-size: cover;
    color: #000000;
    font-size: 48px;
}
</style>
