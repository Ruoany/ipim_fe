<template>
    <a-config-provider id="app" :locale="locale">
        <router-view v-if="Authorization" />
        <a-back-top />
    </a-config-provider>
</template>

<script>
import { mapGetters } from "vuex";

import User from "@/apis/user";
export default {
    provide: function() {
        return {
            reload: () => {
                this.Authorization = false;
                this.$nextTick(() => {
                    this.Authorization = true;
                });
            }
        };
    },
    data() {
        return {
            Authorization: false
        };
    },
    computed: {
        ...mapGetters(["locale"])
    },
    mounted: function() {
        this.$nextTick(async () => {
            const isLogin = sessionStorage.getItem("login");
            if (isLogin) {
                const { data } = await User.current();
                if (data) {
                    this.$store.dispatch("setInfo", data);
                }
            }
            this.Authorization = true;
        });
    }
};
</script>

<style lang="less">
@import "./assets/css/util.css";
::-webkit-scrollbar {
    display: none;
}
body {
    font-family: "Microsoft JhengHei", "Microsoft Yahei", Helvetica Neue,
        Verdana, Arial, LiHei Pro Medium, Helvetica, sans-serif;
    // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    //     "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica,
    //     Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    //     "Segoe UI Symbol";
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
