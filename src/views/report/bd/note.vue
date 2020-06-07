<template>
    <div>
        <a-form-item>
            <div>{{ $t("reportbd.text1") }}</div>
            <div>{{ $t("reportbd.text2") }}</div>
            <div>
                {{ $t("reportbd.text3") }}
                <ul>
                    <li>{{ $t("reportbd.text4") }}</li>
                    <li>{{ $t("reportbd.tel") }}(853)28710300</li>
                    <li>{{ $t("reportbd.email") }}cesp@ipim.gov.mo</li>
                </ul>
            </div>

            <div>{{ $t("reportbd.text5") }}</div>
            <div>{{ $t("reportbd.text6") }}</div>
            <div>{{ $t("reportbd.text7") }}</div>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="handleClick">下一步</a-button>
        </a-form-item>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            this.$emit('next')
        }
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>