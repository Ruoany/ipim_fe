<template>
    <a-upload-dragger
        name="file"
        :disabled="disabled"
        :beforeUpload="beforeUpload"
        :fileList="list"
        :action="upFiles"
        :remove="handleRemove"
        @change="handleChange"
    >
        <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
        </p>
    </a-upload-dragger>
</template>

<script>
import { upFiles } from "@/apis/files";
export default {
    props: { value: [Object, Array], type: String, disabled: Boolean },
    data() {
        return { upFiles };
    },
    computed: {
        list: {
            get: function() {
                if (!this.value) return [];
                return this.value.map(item => {
                    return {
                        ...item,
                        name: item.oriname
                    };
                });
            },
            set: function(value) {
                return value;
            }
        },
        fileType() {
            const str = this.type ? this.type.toUpperCase() : undefined;
            switch (str) {
                case "WORD":
                    return [
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        "application/msword"
                    ];
                    break;
                case "EXCEL":
                    return [
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "application/vnd.ms-excel"
                    ];
                    break;
                case "PDF":
                    return ["application/pdf"];
                    break;
                case "IMAGE":
                    return ["image/png", "image/jpeg"];
                    break;
                default:
                    return [];
                    break;
            }
        }
    },
    methods: {
        handleChange({ file, fileList }) {
            if (!file.status) {
                return false;
            }
            const arr = fileList.map(item => {
                if (item.status === "done") {
                    return {
                        uid: item.uid,
                        name: item.response ? item.response.oriname : item.uid,
                        ...item.response.data
                    };
                }
                return {
                    ...item,
                    url:
                        "http://api-exhibition.servier.iteratech.net/upload/2020/03/31/a04816b91d2d45bfb7e3f4a1771b9fb8.xlw"
                };
            });
            this.$emit("update:value", arr);
        },
        handleRemove({ uid }) {
            const arr = this.list.filter(item => item.uid !== uid);
            this.$emit("handleChange", arr);
        },
        beforeUpload(file) {
            if (!this.type) {
                return true;
            }
            const isType = this.fileType.includes(file.type);
            if (!isType) {
                this.$message.error(`You can only upload ${this.type} file!`);
            }
            return isType;
        }
    }
};
</script>
