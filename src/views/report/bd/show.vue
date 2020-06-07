<template>
    <div class="all">
        <a-form-model-item :label="$t('reportbd.actualParticipation')">
            <div class="flex-justify-content-space-between">
                <a-col :span="7"><a-input :placeholder="$t('reportbd.exhibitorsCount')"></a-input></a-col>
                <a-col :span="7"><a-input :placeholder="$t('reportbd.allParticipants')"></a-input></a-col>
                <a-col :span="7"><a-input :placeholder="$t('reportbd.overseasParticipants')"></a-input></a-col>
            </div>
            <upload
                type="image"
                :multiple="true"
                :value.sync="form.photoFiles"
                @handleChange="uploadChange"
            ></upload>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.aj')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;" :placeholder="$t('reportbd.ep')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.eq')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.er')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.ex')"></a-input>
            </div>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.ai')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;" :placeholder="$t('reportbd.ep')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.eq')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.er')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.ex')"></a-input>
            </div>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.ak')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;" :placeholder="$t('reportbd.ep')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.eq')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.er')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('reportbd.ex')"></a-input>
            </div>
        </a-form-model-item>
        <a-form-model-item>
            <a-button type="primary" @click="preClick" style="margin-right:12px">上一步</a-button>
            <a-button type="primary" @click="nextClick">下一步</a-button>
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    data() {
        return {
            form: { 
                photoFiles:[]
            },
            openTime: [
                {
                    time: null,
                    houser: null
                }
            ]
        };
    },
    methods: {
        addOpenTime() {
            this.openTime = this.openTime.concat({ time: null, houser: null });
        },
        removeOpenTime(index) {
            this.openTime.splice(index, 1);
        },
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.$emit('next', this.form)
        },
        //上傳的文件
        uploadChange(info) {
            const status = info.file.status;
            if (status === 'done') {
                let data = info.file.response;
                if (data.code === 200) {
                    this.$message.success(`${info.file.name} file uploaded successfully.`);
                    this.form.photoFiles.push({
                        oriname: info.file.name,
                        uid: info.file.uid,
                        url: data.data.url,
                    })
                    this.$emit('change', this.form);
                }
            } else if (status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        },
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
.cur {
    cursor: pointer;
}
</style>
