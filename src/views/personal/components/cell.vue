<template>
    <div class="cell-container">
        <div class="ad">
            <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg"
            />
        </div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.flex {
    display: flex;
}
.cell-container {
    width: 100%;
    .ad {
        width: 240px;
        height: 160px;
        padding: 20px;
        box-sizing: border-box;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .content {
        width: 100%;
    }
}
</style>
