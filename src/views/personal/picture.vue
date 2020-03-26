<template>
    <div class="container">
        <div class="title">{{ $t("personal.upload") }}</div>
        <div class="sub-title">{{ $t("personal.tips1") }}</div>
        <div class="picture-list-content">
            <a-upload
                :action="upFiles"
                listType="picture-card"
                :fileList="images"
                :beforeUpload="beforeUpload"
                @preview="handlePreview"
                @change="handleChange"
            >
                <div v-if="images.length < 4">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Upload</div>
                </div>
            </a-upload>
        </div>
        <div class="button-wrapper">
            <a-button type="primary" size="large" @click="handleSubmit">{{
                $t("personal.submit")
            }}</a-button>
        </div>
        <a-modal
            :visible="modal"
            title="Prewview"
            :footer="null"
            @cancel="modal = false"
        >
            <img alt="example" style="width: 100%" :src="selectedUrl" />
        </a-modal>
    </div>
</template>

<script>
import { upFiles } from "@/apis/files";
import ApproveImage from "@/apis/approveImage";
import ApplyPicture from "@/apis/applyPicture";
export default {
    data() {
        return {
            upFiles,
            query: {},
            images: [],
            selectedUrl: "",
            modal: false
        };
    },
    methods: {
        initData: async function() {
            const { data } = await ApproveImage.get(this.query);
            this.images = data.content;
        },
        beforeUpload: function(file) {
            const isJPG =
                file.type === "image/jpeg" || file.type === "image/png";
            if (!isJPG) {
                this.$message.error("You can only upload JPG or JPEG file!");
            }
            const isLt5M = file.size / 1024 / 1024 < 5;
            if (!isLt5M) {
                this.$message.error("Image must smaller than 5MB!");
            }
            return isJPG && isLt5M;
        },
        handleChange: function({ fileList }) {
            this.images = fileList;
        },
        handlePreview: function({ url, thumbUrl }) {
            this.modal = true;
            this.selectedUrl = url || thumbUrl;
        },
        handleSubmit: async function() {
            const body = {
                ...this.query,
                applicantId: 1,
                images: this.images.map(item => {
                    return {
                        uid: item.uid,
                        ...item.response.data
                    };
                })
            };
            const { data } = await ApplyPicture.create(body);
            data.id ? this.onSuccess() : "";
        },
        onSuccess: function() {
            this.$message.success("申請已經提交，請耐心等待！");
            this.$router.back();
        }
    },
    mounted: function() {
        this.query = this.$route.query;
        this.initData();
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
    /deep/ .ant-upload-list-picture-card .ant-upload-list-item,
    /deep/.ant-upload-list-picture-card-container {
        width: 200px;
        height: 200px;
    }
}
</style>
