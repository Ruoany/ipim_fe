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
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg"
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
