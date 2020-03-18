<template>
    <div>
        <div class="title flex">
            <img class="img" />
            <div class="name">
                <h1>澳门来来超市</h1>
                <h3>ssssdjflsfljl1</h3>
            </div>
        </div>
        <div class="flex">
            <a-card hoverable @click="$router.push('/personal/mechanism')" class="card">
                <a-icon type="bars" style="font-size:40px;" />
                <a-card-meta :description="$t('personal.s')" />
            </a-card>

            <a-card hoverable @click="$router.push('/personal/con_user')" class="card">
                <a-icon type="team" style="font-size:40px;" />
                <a-card-meta :description="$t('personal.n')" />
            </a-card>

            <a-card hoverable class="card" @click="$router.push('/personal/sub_account')">
                <a-icon type="solution" style="font-size:40px;" />
                <a-card-meta :description="$t('personal.x')" />
            </a-card>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card {
    width: 140px;
    margin-right: 20px;
    text-align: center;
    line-height: 30px;
}
.title {
    height: 300px;
    background: #f9f9f9;
    margin-bottom: 40px;
    padding: 40px;
    .img {
        width: 300px;
        height: 200px;
    }
    .name {
        padding-left: 20px;
    }
}
</style>
