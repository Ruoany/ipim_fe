<template>
    <a-upload-dragger name="file" :action="upFiles" :remove="handleRemove" @change="handleChange">
        <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p
            class="ant-upload-hint"
        >Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
    </a-upload-dragger>
</template>

<script>
import { upFiles } from "@/apis/files";
export default {
    props: { decorator: String },
    data() {
        return { upFiles, list: [] };
    },
    methods: {
        handleChange(e) {
            const { file, fileList } = e;
            if (file.status === "done") {
                const value = fileList.map(item => item.response.data);
                this.list = value;
                this.$emit("handleChange", { keys: this.decorator, value });
            }
        },
        handleRemove(file) {
            const {
                response: { data }
            } = file;
            const value = this.list.filter(item => item.url !== data.url);
            this.$emit("handleChange", { keys: this.decorator, value });
        }
    }
};
</script>

