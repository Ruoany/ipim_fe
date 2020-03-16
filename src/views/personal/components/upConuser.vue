<template>
    <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
        <a-form-item :label="$t('util.name')">
            <a-input v-decorator="['nameZh', { rules: [{ required: true, message: 'Please input' }] }]" />
        </a-form-item>
        <a-form-item :label="$t('util.sex')">
            <a-radio-group v-decorator="['gender', { rules: [{ required: true, message: 'Please select' }] }]">
                <a-radio value="M">{{ $t("util.man") }}</a-radio>
                <a-radio value="F">{{ $t("util.woman") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('personal.e')">
            <a-input
                v-decorator="[
                    'titleNameZh',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('index.tel')">
            <a-input
                v-decorator="[
                    'tel',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('util.aphone')">
            <a-input
                v-decorator="[
                    'abroadPhone',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('util.bphone')">
            <a-input
                v-decorator="[
                    'phone',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('index.email')">
            <a-input
                v-decorator="[
                    'email',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('util.address')">
            <a-textarea
                v-decorator="[
                    'address',
                    {
                        rules: [{ required: true, message: 'Please input' }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('personal.f')">
            <a-radio-group
                v-decorator="[
                    'incumbency',
                    {
                        rules: [{ required: true, message: 'Please select' }]
                    }
                ]"
            >
                <a-radio :value="true">{{ $t("personal.g") }}</a-radio>
                <a-radio :value="false">{{ $t("personal.h") }}</a-radio>
            </a-radio-group>
        </a-form-item>
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
</template>

<script>
import Liaison from "@/apis/liaison";
export default {
    props: { id: [String, Number] },
    data() {
        return {
            form: this.$form.createForm(this, { name: "coordinated" })
        };
    },
    watch: {
        id: {
            immediate: true,
            handler(newValue) {
                this.getLision(newValue);
            }
        }
    },
    methods: {
        async getLision(id) {
            const data = await Liaison.one(id);
            if (data.code === 200) {
                this.form.setFieldsValue(data.data);
            } else {
                this.$message.error(data.message);
            }
        },
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
