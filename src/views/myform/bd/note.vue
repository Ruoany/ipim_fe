<template>
    <a-form-item>
        <div>{{ $t("formbd.text1") }}</div>
        <div>{{ $t("formbd.text2") }}</div>
        <div>
            {{ $t("formbd.text3") }}
            <ul>
                <li>{{ $t("formbd.text4") }}</li>
                <li>{{ $t("formbd.tel") }}(853)8798 9292</li>
                <li>{{ $t("formbd.email") }}cesp@ipim.gov.mo</li>
            </ul>
        </div>

        <div>{{ $t("formbd.text5") }}</div>
        <div>{{ $t("formbd.text6") }}</div>
        <div>{{ $t("formbd.text7") }}</div>
    </a-form-item>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>