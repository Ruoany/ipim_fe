<template>
    <div class="all">
        <header-top></header-top>
        <app-main></app-main>
        <bottom></bottom>
    </div>
</template>

<script>
import headerTop from "./heard";
import appMain from "./appMain";
import bottom from "./bottom";
export default {
    components: { headerTop, appMain, bottom }
};
</script>

<style lang="less" scoped>
.all {
    min-height: 100vh;
    // position: relative;
}
.bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
