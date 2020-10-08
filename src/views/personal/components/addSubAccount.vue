<template>
    <a-form-model
        :model="formData"
        ref="myForm"
        :rules="rules"
        style="width:100%;"
        layout="vertical"
    >
        <a-form-model-item :label="$t('util.name')" prop="name">
            <a-input v-model="formData.name" />
        </a-form-model-item>
        <a-form-model-item :label="$t('personal.userId')" prop="email">
            <a-input
                v-model="formData.email"
                :placeholder="$t('personal.ag')"
            />
        </a-form-model-item>
        <a-form-model-item>
            <a-button
                :style="{ marginRight: '8px' }"
                @click="$emit('update:visible', false)"
                >{{ $t("util.cancel") }}</a-button
            >
            <a-button type="primary" @click="handleOk">{{
                $t("util.save")
            }}</a-button>
        </a-form-model-item>
    </a-form-model>
</template>

<script>
import { mapGetters } from "vuex";

import UserSubaccount from "@/apis/userSubaccount";

export default {
    props: {
        visible: { type: Boolean },
        formType: { type: String }, //create為新建，update為修改
        initData: { type: Object }
    },
    watch: {
        initData: function(newValue) {
            this.formData = newValue;
        }
    },
    data() {
        return {
            formData: {},
            rules: {
                name: [
                    {
                        required: true,
                        message: "Please input",
                        trigger: "change"
                    }
                ],
                email: [
                    {
                        required: true,
                        message: "Please input",
                        trigger: "change"
                    }
                ]
            }
        };
    },
    computed: {
        ...mapGetters(["currentInstitution", "currentUser"])
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
            this.$refs.myForm.validate(async valid => {
                if (valid) {
                    const { code, message } = await UserSubaccount.create({
                        ...this.formData,
                        institutionId: this.currentInstitution.id,
                        parentId: this.currentUser
                    });
                    this.$emit("update:confirmLoading", false);
                    if (code !== 200) {
                        // this.$message.error(message);
                        return;
                    }
                    this.$message.success("綁定成功");
                    this.$emit("init");
                }
            });
        },
        updateSub() {
            this.$refs.myForm.validate(async valid => {
                if (valid) {
                    const { code, message } = await UserSubaccount.update({
                        ...this.formData
                    });
                    this.$emit("update:confirmLoading", false);
                    if (code !== 200) {
                        // this.$message.error(message);
                        return;
                    }
                    this.$message.success("修改成功");
                    this.$emit("init");
                }
            });
        }
    }
};
</script>

<style></style>
