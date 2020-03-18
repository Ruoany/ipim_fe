<template>
    <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
        <a-form-item :label="$t('util.name')">
            <a-input v-decorator="['nameZh', { rules: [{ required: true, message: 'Please input' }] }]" />
        </a-form-item>

        <a-form-item :label="$t('personal.userId')">
            <a-input
                v-decorator="[
                    'titleNameZh',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
                :placeholder="$t('personal.ag')"
            />
        </a-form-item>
    </a-form>
</template>

<script>
export default {
    data() {
        return {
            form: this.$form.createForm(this, { name: "coordinated" })
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields(async (err, values) => {
                if (!err) {
                }
            });
        },
        onClose() {
            this.$emit("handleCancel");
        }
    }
};
</script>

<style></style>
