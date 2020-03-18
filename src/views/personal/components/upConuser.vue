<template>
    <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
        <a-form-item :label="$t('util.name')">
            <a-input v-decorator="['nameZh', { rules: [{validator:nameVal }] }]" />
        </a-form-item>
        <a-form-item :label="$t('util.nameEnAndPt')">
            <a-input v-decorator="['nameEnOrPt', { rules: [{validator:nameVal }] }]" />
        </a-form-item>
        <a-form-item :label="$t('util.sex')">
            <a-radio-group
                v-decorator="['gender', { rules: [{ required: true, message: 'Please select' }] }]"
            >
                <a-radio value="M">{{ $t("util.man") }}</a-radio>
                <a-radio value="F">{{ $t("util.woman") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('personal.e')">
            <a-input
                v-decorator="[
                    'titleNameZh',
                    {
                        rules: [{validator:titleNameVal }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item :label="$t('personal.ai')">
            <a-input
                v-decorator="[
                    'titleNameEnOrPt',
                    {
                        rules: [{validator:titleNameVal }]
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
            <a-button :style="{ marginRight: '8px' }" @click="onClose">Cancel</a-button>
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
            form: this.$form.createForm(this, { name: "coordinated" }),
            listData: {}
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
        titleNameVal(rule, value, callback) {
            let titleNameZh =
                this.form.getFieldValue("titleNameZh") == ""
                    ? null
                    : this.form.getFieldValue("titleNameZh");
            let titleNameEnOrPt =
                this.form.getFieldValue("titleNameEnOrPt") == ""
                    ? null
                    : this.form.getFieldValue("titleNameEnOrPt");
            if (titleNameEnOrPt == null && titleNameZh == null) {
                callback("Fill in at least one of two items");
            } else {
                callback();
            }
        },
        nameVal(rule, value, callback) {
            let nameZh =
                this.form.getFieldValue("nameZh") == ""
                    ? null
                    : this.form.getFieldValue("nameZh");
            let nameEnOrPt =
                this.form.getFieldValue("nameEnOrPt") == ""
                    ? null
                    : this.form.getFieldValue("nameEnOrPt");
            if (nameEnOrPt == null && nameZh == null) {
                callback("Fill in at least one of two items");
            } else {
                callback();
            }
        },
        async getLision(id) {
            const data = await Liaison.one(id);
            if (data.code === 200) {
                this.form.setFieldsValue(data.data);
                this.listData = data.data;
            } else {
                this.$message.error(data.message);
            }
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    const data = await Liaison.update({
                        ...this.listData,
                        ...values
                    });
                    if (data.code === 200) {
                        this.$message.success("修改成功");
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
