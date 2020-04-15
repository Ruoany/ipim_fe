<template>
    <div class="container">
        <div class="title">{{ $t("personal.upload") }}</div>
        <div class="sub-title">{{ $t("personal.tips1") }}</div>
        <div v-show="status === 'rejected'" class="error-title">
            {{ $t("personal.upErr") }}
        </div>
        <div class="picture-list-content">
            <a-upload
                :action="upFiles"
                listType="picture-card"
                :fileList="images"
                :beforeUpload="beforeUpload"
                @preview="handlePreview"
                @change="handleChange"
            >
                <div v-if="status !== 'passed' && images.length < 4">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Upload</div>
                </div>
            </a-upload>
        </div>
        <div v-if="status !== 'passed'" class="button-wrapper">
            <a-button
                type="primary"
                size="large"
                :disabled="images.length === 0"
                @click="handleSubmit"
                >{{ $t("personal.submit") }}</a-button
            >
        </div>
        <a-modal
            width="900px"
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
import { mapGetters } from "vuex";
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
            modal: false,
            status: ""
        };
    },
    computed: {
        ...mapGetters(["currentUser"])
    },
    methods: {
        Transform: function(o) {
            const obj = JSON.parse(JSON.stringify(o));
            Object.keys(obj).map(item => {
                obj[item] = this.$crypto.decryption(unescape(obj[item]));
            });
            return obj;
        },
        initData: async function() {
            const { data } = await ApplyPicture.one(this.query.applyPictureId);
            this.status = data ? data.status : null;
            if (this.status === "passed") {
                this.images = data.images.map((item, index) => {
                    return {
                        uid: item.id,
                        name: `A${index}`,
                        url: item.url
                    };
                });
            }
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
                applicantId: this.currentUser,
                images: this.images.map(item => {
                    return {
                        url: item.response ? item.response.data.url : item.url
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
        this.$store.dispatch("setChangeFalse");
        this.query = this.Transform(this.$route.query);
        if (this.query.applyPictureId) this.initData();
    },
    destroyed: function() {
        this.$store.dispatch("setChangeTrue");
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
    .error-title {
        color: #db0f0f;
    }
    /deep/.ant-upload.ant-upload-select-picture-card,
    /deep/ .ant-upload-list-picture-card .ant-upload-list-item,
    /deep/.ant-upload-list-picture-card-container {
        width: 200px;
        height: 200px;
    }
    .empty {
        height: 500px;
    }
}
</style>
