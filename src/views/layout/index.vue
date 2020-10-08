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
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .main {
        padding-top: 50px;
        width: 100%;
        min-width: 1226px;
        min-height: 100%;
    }
}
</style>
