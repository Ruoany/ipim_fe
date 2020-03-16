<template>
    <div class="flex">
        <a-card hoverable class="card">
            <a-icon type="bars" style="font-size:40px;" />
            <a-card-meta :description="$t('personal.m')" />
        </a-card>

        <a-card hoverable @click="$router.push('/personal/con_user')" class="card">
            <a-icon type="team" style="font-size:40px;" />
            <a-card-meta :description="$t('personal.n')" />
        </a-card>

        <a-card hoverable class="card">
            <a-icon type="solution" style="font-size:40px;" />
            <a-card-meta :description="$t('personal.x')" />
        </a-card>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card {
    width: 120px;
    margin-right: 20px;
    text-align: center;
    line-height: 30px;
}
</style>
