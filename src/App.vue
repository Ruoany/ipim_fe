<template>
    <div id="app">
        <router-view />
        <a-back-top />
    </div>
</template>

<script>
export default {
    mounted: async function() {
        console.log("歡迎來到澳門貿促局");
    }
};
</script>

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
.empty {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.login-bg {
    background: -moz-linear-gradient(
        to bottom,
        #000000 49%,
        #ee1c24 1%,
        #ffffff 50%
    );
    background: -webkit-gradient(
        to bottom,
        #000000 49%,
        #ee1c24 1%,
        #ffffff 50%
    );
    background: -webkit-linear-gradient(
        to bottom,
        #000000 49%,
        #ee1c24 1%,
        #ffffff 50%
    );
    background: -o-linear-gradient(
        to bottom,
        #000000 49%,
        #ee1c24 1%,
        #ffffff 50%
    );
    background: -ms-linear-gradient(
        to bottom,
        #000000 49%,
        #ee1c24 1%,
        #ffffff 50%
    );
    background: linear-gradient(
        to bottom,
        #000000 49%,
        #ee1c24 1%,
        #ffffff 50%
    );
}
</style>
