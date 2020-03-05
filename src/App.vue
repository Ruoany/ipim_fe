<template>
    <div id="app">
        <router-view />
        <a-back-top />
    </div>
</template>

<style lang="less">
@import "./assets/css/util.css";
::-webkit-scrollbar {
    display: none;
}
html,
body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    color: #333;
}
#app {
    width: 100%;
    min-height: 100%;
}
.sp {
    &:nth-last-child(1) {
        margin-right: 418px;
    }
}
</style>
