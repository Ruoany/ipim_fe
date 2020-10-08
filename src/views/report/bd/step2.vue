<template>
    <div class="all">
        <a-form-item :label="$t('reportbd.conPerson1')">
            <a-input :value="liaison.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.job')">
            <a-input :value="liaison.titleNameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.tel')">
            <a-input :value="liaison.tel" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.phone')">
            <a-input :value="liaison.phone" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.email')">
            <a-input :value="liaison.email" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.conPerson2')">
            <a-input :value="liaisonSub.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.job')">
            <a-input :value="liaisonSub.titleNameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.tel')">
            <a-input :value="liaisonSub.tel" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.phone')">
            <a-input :value="liaisonSub.phone" disabled />
        </a-form-item>
        <a-form-item :label="$t('reportbd.email')">
            <a-input :value="liaisonSub.email" disabled />
        </a-form-item>
    </div>
</template>

<script>
export default {
    props:['liaison', 'liaisonSub'],
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
</style>
