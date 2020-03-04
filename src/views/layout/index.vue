<template>
    <div class="all">
        <header-top></header-top>
        <div class="main">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>
            <router-view v-else></router-view>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import headerTop from "./heard";
import bottom from "./bottom";
export default {
    components: { headerTop, bottom }
};
</script>

<style lang="less" scoped>
.all {
    min-height: 100vh;
    // position: relative;
    .main {
        padding-top: 50px;
        width: 100%;
        min-height: 100%;
    }
}
.bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
