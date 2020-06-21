<template>
  <a-upload-dragger
    name="file"
    :disabled="disabled"
    :multiple="multiple"
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
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
    </p>
  </a-upload-dragger>
</template>

<script>
import { upFiles } from '@/apis/files';
export default {
  props: { value: [Object, Array], type: String, disabled: Boolean, multiple: Boolean, name: String },
  data() {
    return { upFiles, tempFileList: {} };
  },
  computed: {
    list: {
      get: function() {
        if (!this.value) return [];
        return this.value.map((item) => {
          return {
            ...item,
            name: item.name || item.oriname,
          };
        });
      },
      set: function(value) {
        return value;
      },
    },
    fileType() {
      const str = this.type ? this.type.toUpperCase() : undefined;
      switch (str) {
        case 'WORD':
          return ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
        case 'EXCEL':
          return ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        case 'PDF':
          return ['application/pdf'];
        case 'IMAGE':
          return ['image/png', 'image/jpeg'];
        default:
          return [];
      }
    },
  },
  methods: {
    handleChange({ file, fileList }) {
      if (!file.status) {
        return false;
      }
      if (this.tempFileList[file.name]) {
        this.$message.error(`${file.name} 圖片已存在!`);
        return false;
      }

      const arr = fileList.map((item) => {
        if (item.status === 'done') {
          this.tempFileList[item.name] ? this.tempFileList[item.name]++ : (this.tempFileList[item.name] = 1);
          return {
            uid: item.uid,
            name: item.name || (item.response ? item.response.oriname : item.uid),
            ...item.response.data,
          };
        }
        return { ...item };
      });

      this.$emit('update:value', arr);
    },
    handleRemove({ uid }) {
      const arr = this.list.filter((item) => item.uid !== uid);
      this.$emit('handleChange', arr, this.name);
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
    },
  },
};
</script>
