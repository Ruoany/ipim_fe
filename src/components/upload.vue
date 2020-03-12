<template>
    <a-upload-dragger name="file" :action="upFiles" @change="handleChange">
        <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
        </p>
    </a-upload-dragger>
</template>

<script>
import { upFiles } from "@/apis/files";
export default {
    data() {
        return { upFiles };
    },
    props: {},
    methods: {
        handleChange(e) {
            console.log("e==>", e);
            let url = e.file.response.url;
            this.$emit("upload", url);
        }
    }
};
</script>

<style></style>
