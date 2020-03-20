<template>
    <div class="flex warp" v-viewer ref="img">
        <a-row type="flex" :gutter="10">
            <a-col :span="4" v-for="item in pictures" :key="item">
                <img class="img" :src="item" @click="showImg" />
            </a-col>
        </a-row>
    </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
Vue.use(Viewer);
export default {
    // props: { pictures: Array },
    data() {
        return {
            pictures: [
                "http://api-exhibition.servier.iteratech.net/upload/2020/03/20/4fbbe2a852e048d5a0dc5e85ed51dd53.jpeg",
                "http://api-exhibition.servier.iteratech.net/upload/2020/03/20/c4dfa422ee4e4e8f8a00ee4a0f35eb14.jpeg",
                // "http://api-exhibition.servier.iteratech.net/upload/2020/03/20/c4dfa422ee4e4e8f8a00ee4a0f35eb14.jpeg",
                "http://api-exhibition.servier.iteratech.net/upload/2020/03/20/920c2ac0f48a46ca8dfdfc5e65f47ab8.jpeg",
                "http://api-exhibition.servier.iteratech.net/upload/2020/03/20/fd4665d493e54effb053d96e80e6b8ce.jpeg",
                "http://api-exhibition.servier.iteratech.net/upload/2020/03/20/8be8dc5f38694226a4709e451d16a4bd.png",
                "http://api-exhibition.servier.iteratech.net/upload/2020/03/20/49254644df34430bb1a77939d8e6d94c.jpeg"
            ]
        };
    },

    methods: {
        showImg() {
            const viewer = this.$refs.img.$el.$viewer;
            console.log("vie==>", this.$refs.img);
            // viewer.show();
        }
    }
};
</script>

<style lang="less" scoped>
.img {
    width: 100%;
    height: 120px;
    cursor: pointer;
    margin-bottom: 10px;
}
.warp {
    flex-wrap: wrap;
}
</style>
