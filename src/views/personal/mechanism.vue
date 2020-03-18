<template>
    <div>
        <h1>{{ $t("personal.s") }}</h1>
        <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
            <a-form-item :label="$t('personal.logo')">
                <a-upload
                    name="file"
                    listType="picture-card"
                    :showUploadList="false"
                    :action="upFiles"
                    :beforeUpload="beforeUpload"
                    @change="handleChange"
                >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="img" />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                    </div>
                </a-upload>
            </a-form-item>
            <a-form-item :label="$t('personal.meName')">
                <a-input></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.w')">
                <a-input></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.u')">
                <a-input></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.y')">
                <a-input></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.z')">
                <a-date-picker @change="onChange" style="width:100%;" />
            </a-form-item>
            <a-form-item :label="$t('personal.aa')">
                <a-textarea></a-textarea>
            </a-form-item>
            <a-form-item :label="$t('personal.ab')">
                <a-radio-group name="radioGroup" :defaultValue="1">
                    <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                    <a-radio :value="2">{{ $t("util.no") }}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('personal.ac')">
                <a-textarea></a-textarea>
            </a-form-item>
            <a-form-item>
                <a-button :style="{ marginRight: '8px' }" @click="$router.back()">
                    Cancel
                </a-button>
                <a-button type="primary" html-type="submit">ok</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import Liaison from "@/apis/liaison";
import { upFiles } from "@/apis/files";
export default {
    data() {
        return {
            form: this.$form.createForm(this, { name: "coordinated" }),
            loading: false,
            imageUrl: "",
            upFiles
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

        beforeUpload(file) {
            console.log("file==>", file);
            const isJPG = file.type === "image/jpeg";
            if (!isJPG) {
                this.$message.error("You can only upload JPG file!");
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error("Image must smaller than 2MB!");
            }
            if (isJPG && isLt2M) {
                this.loading = true;
            }
            return isJPG && isLt2M;
        },
        handleChange(info) {
            let data = info.file.response;
            if (data.code === 200) {
                this.imageUrl = data.data.url;
            } else {
                this.$message.error(data.message);
            }
            this.loading = false;
        }
    }
};
</script>

<style lang="less" scoped>
.img {
    width: 150px;
    height: 150px;
}
</style>
