<template>
    <div class="all">
        <a-carousel autoplay>
            <img class="img-100" src="http://watermark.lovepik.com/photo/50073/6074.jpg_wh1200.jpg" />
            <img class="img-100" src="http://watermark.lovepik.com/photo/50073/6074.jpg_wh1200.jpg" />
            <img class="img-100" src="http://watermark.lovepik.com/photo/50073/6074.jpg_wh1200.jpg" />
        </a-carousel>
        <div class="flex center">
            <div class="width-1280">
                <calendar></calendar>
                <div class="width-100 flex center">
                    <focus></focus>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import focus from "./focus";
import calendar from "./calendar";
export default {
    components: {
        focus,
        calendar
    }
};
</script>

<style lang="less" scoped>
.all {
    width: 100%;
    min-width: 1280px;
    box-sizing: border-box;
}
.carousel {
    height: 160px;
    overflow: hidden;
}
.img-100 {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>