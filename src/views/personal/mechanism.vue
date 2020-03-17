<template>
    <div>
        <h1>{{ $t("personal.s") }}</h1>
        <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
            <div
                :style="{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right'
                }"
            >
                <a-button :style="{ marginRight: '8px' }" @click="onClose">
                    Cancel
                </a-button>
                <a-button type="primary" html-type="submit">ok</a-button>
            </div>
        </a-form>
    </div>
</template>

<script>
import Liaison from "@/apis/liaison";
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
                    const data = await Liaison.create({ ...values, institutionId: 96 });
                    if (data.code === 200) {
                        this.$message.success("添加成功");
                        this.$emit("handleCancel", "add");
                    } else {
                        this.$message.error(data.message);
                    }
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
