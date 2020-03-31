<template>
    <a-upload-dragger
        name="file"
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
    props: { value: [Object, Array] },
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
        }
    },
    methods: {
        handleChange({ fileList }) {
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
        }
    }
};
</script>
