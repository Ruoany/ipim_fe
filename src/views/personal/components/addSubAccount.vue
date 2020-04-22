<template>
    <a-form-model :model="formData" ref="myForm" :rules="rules" style="width:100%;" layout="vertical">
        <a-form-model-item :label="$t('util.name')" prop="name">
            <a-input v-model="formData.name" />
        </a-form-model-item>

        <a-form-model-item :label="$t('personal.userId')" prop="email">
            <a-input v-model="formData.email" :placeholder="$t('personal.ag')" />
        </a-form-model-item>
    </a-form-model>
</template>

<script>
import UserSubaccount from "@/apis/userSubaccount";
import { mapGetters } from "vuex";
export default {
    props: {
        formType: { type: String }, //create為新建，update為修改
        initData: { type: Object },
    },
    watch: {
        initData: function(newValue) {
            this.formData = newValue;
        },
    },
    data() {
        return {
            formData: {},
            rules: {
                name: [{ required: true, message: "Please input", trigger: "change" }],
                email: [{ required: true, message: "Please input", trigger: "change" }],
            },
        };
    },
    computed: {
        ...mapGetters(["currentInstitution", "currentUser"]),
    },
    methods: {
        handleOk() {
            if (this.formType === "create") {
                this.createSub();
            } else {
                this.updateSub();
            }
        },

        createSub() {
            this.$refs.myForm.validate(async (valid) => {
                if (valid) {
                    const { code, message } = await UserSubaccount.create({
                        ...this.formData,
                        institutionId: this.currentInstitution.id,
                        parentId: this.currentUser,
                    });
                    this.$emit("update:confirmLoading", false);
                    if (code !== 200) {
                        // this.$message.error(message);
                        return;
                    }
                    this.$message.success("創建成功");
                    this.$emit("initTable");
                }
            });
        },
        updateSub() {
            this.$refs.myForm.validate(async (valid) => {
                if (valid) {
                    const { code, message } = await UserSubaccount.update({
                        ...this.formData,
                    });
                    this.$emit("update:confirmLoading", false);
                    if (code !== 200) {
                        // this.$message.error(message);
                        return;
                    }
                    this.$message.success("修改成功");
                    this.$emit("initTable");
                }
            });
        },
    },
};
</script>

<style></style>
