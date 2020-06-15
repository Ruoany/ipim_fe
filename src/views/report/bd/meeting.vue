<template>
    <div class="all"> 
         <a-form-model-item :label="$t('reportbd.personCount')" props="totalParticipants">
            <a-input-number v-model.number="form.totalParticipants" style="width: 100%" />
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.macaoPersionCount')" props="totalMacaoParticipants">
            <a-input-number v-model.number="form.totalMacaoParticipants" style="width: 100%" />
        </a-form-model-item>
         <a-form-model-item :label="$t('reportbd.overseasPersionCount')" props="totalOverseasParticipants">
            <a-input-number v-model.number="form.totalOverseasParticipants" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.parInformation')" props="participant">
            <upload
                type="image"
                :multiple="true"
                :value.sync="form.attachments"
                @handleChange="uploadChange"
            ></upload>
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
    props:['attachments'],
    data() {
        return {
            form: {
                totalParticipants: "",
                totalMacaoParticipants: "",
                totalOverseasParticipants: "",
                attachments: []
            }
        };
    },
    methods: {
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.form.attachments = this.form.attachments.map(i => ({...i, type: 'participant'}))
            this.$emit('next', this.form)
        },
        handleChange() {},
        // 更改上傳的文件
        uploadChange(info) {
            this.form.attachments = info
        },
    },
    mounted(){
        this.form.attachments = this.attachments.filter(i => i.type === 'participant')
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
</style>
