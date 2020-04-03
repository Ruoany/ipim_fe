<template>
    <a-row ref="img" type="flex" :gutter="10" v-viewer>
        <a-col :span="4" v-for="item in images" :key="item">
            <img class="img" :src="item" @click="showImg" />
        </a-col>
    </a-row>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";

Vue.use(Viewer);

export default {
    props: { pictures: Array },
    computed: {
        images: function() {
            if (this.pictures) {
                return this.pictures.map(item => item.url);
            }
        }
    },
    methods: {
        showImg() {
            const viewer = this.$refs.img.$el.$viewer;
            viewer.show();
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
    width: 100%;
    flex-wrap: wrap;
}
</style>
