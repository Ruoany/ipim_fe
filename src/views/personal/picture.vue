<template>
    <div class="container">
        <div class="title">{{ $t("personal.upload") }}</div>
        <div class="sub-title">{{ $t("personal.tips1") }}</div>
        <div class="picture-list-content">
            <a-upload
                :multiple="true"
                listType="picture-card"
                :fileList="fileList"
                :customRequest="customRequest"
                :remove="handleRemove"
                @preview="handlePreview"
            >
                <div v-if="fileList.length < 4">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Upload</div>
                </div>
            </a-upload>
        </div>
        <div class="button-wrapper">
            <a-button type="primary" size="large" @click="handleSubmit">{{ $t("personal.submit") }}</a-button>
        </div>
        <a-modal :visible="modal" title="Prewview" :footer="null" @cancel="modal = false">
            <img alt="example" style="width: 100%" :src="selectedUrl" />
        </a-modal>
    </div>
</template>

<script>
import { upload } from "@/apis/files";
export default {
    data() {
        return {
            fileList: [],
            selectedUrl: "",
            modal: false
        };
    },
    methods: {
        beforeUpload: function(file) {
            const isJPG = file.type === "image/jpeg" || file.type === "image/png";
            if (!isJPG) {
                this.$message.error("You can only upload JPG or JPEG file!");
            }
            const isLt5M = file.size / 1024 / 1024 < 5;
            if (!isLt5M) {
                this.$message.error("Image must smaller than 5MB!");
            }
            return Promise.resolve(isJPG && isLt5M);
        },
        customRequest: async function(e) {
            console.log("上傳", e);
            const { file } = e;
            const beforeUpload = await this.beforeUpload(file);
            if (beforeUpload) {
                let formData = new FormData();
                formData.append("file", file);
                const result = await upload(formData);
                const body = {
                    ...result,
                    uid: result.oriname,
                    thumbUrl: result.url
                };
                e.onSuccess();
                this.fileList.push(body);
            }
        },
        handleRemove: function({ oriname }) {
            this.fileList = this.fileList.filter(item => item.oriname !== oriname);
        },
        handlePreview: function({ url }) {
            this.modal = true;
            this.selectedUrl = url;
        },
        handleSubmit: function() {
            console.log("提交圖片");
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    .title {
        font-size: 36px;
        font-weight: bold;
    }
    .picture-list-content {
        width: 100%;
        padding: 40px 0;
        & > span {
            display: inline-block;
        }
    }
    /deep/.ant-upload.ant-upload-select-picture-card,
    /deep/ .ant-upload-list-picture-card .ant-upload-list-item {
        width: 200px;
        height: 200px;
    }
}
</style>
