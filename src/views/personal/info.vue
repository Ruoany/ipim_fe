<template>
    <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
        <a-form-item :label="$t('util.name')">
            <a-input
                v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
        </a-form-item>
        <a-form-item :label="$t('util.password')">
            <a-button type="primary">{{$t("util.upPassword")}}</a-button>
        </a-form-item>
        <a-form-item :label="$t('personal.a')">
            <a-checkbox-group @change="onChange">
                <a-checkbox value="A">{{$t('index.email')}}</a-checkbox>
                <a-checkbox value="B">{{$t('util.SMS')}}</a-checkbox>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item :label="$t('index.tel')">
            <a-input
                v-decorator="['tel', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
        </a-form-item>
        <a-form-item :label="$t('index.email')">
            <a-input
                v-decorator="['email', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit">{{$t("util.save")}}</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
export default {};
</script>

<style>
</style>