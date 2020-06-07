<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('reportbd.note')" />
            <a-step :title="$t('reportbd.aa')" />
            <a-step :title="$t('reportbd.contact')" />
            <a-step :title="$t('reportbd.ab')" />
            <a-step :title="$t('reportbd.ac')" />
            <a-step :title="$t('reportbd.ad')" />
            <a-step :title="$t('reportbd.am')" />
            <a-step :title="$t('reportbd.ar')" />
            <a-step :title="$t('reportbd.gd')" />
            <a-step :title="$t('reportbd.gg')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                :form="form"
                @submit="handleSubmit"
                v-bind="formItemLayout"
            >
                <note v-show="step === 0" @next="step++"></note>
                <step1 v-show="step === 1" @pre="step--" @next="handleNext"></step1>
                <step2 v-show="step === 2" @pre="step--" @next="handleNext"></step2>
                <step3 v-show="step === 3" @pre="step--" @next="handleNext"></step3>
                <meeting-form v-show="step === 4" @pre="step--" @next="handleNext"></meeting-form>
                <show-form v-show="step === 5" @pre="step--" @next="handleNext"></show-form>
                <area-form v-show="step === 6" @pre="step--" @next="handleNext"></area-form>
                <area-display v-show="step === 7" @pre="step--" @next="handleNext"></area-display>
                <service v-show="step === 8" @pre="step--" @next="handleNext"></service>
                <div v-show="step === 9">
                    <a-form-model-item>
                        {{$t('reportbd.gl')}}
                        <a-input style="width:100px" :placeholder="$t('reportbd.gm')"/>
                        {{$t('reportbd.gn')}}
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary" @click="step--" style="margin-right:12px">上一步</a-button>
                        <a-button type="primary">{{
                            $t("reportbd.submit")
                        }}</a-button>
                    </a-form-model-item>
                </div>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import meetingForm from "./meeting";
import areaForm from "./area";
import showForm from "./show";
import note from "./note";
import validate from "./validate";
import step1 from "./step1";
import step2 from "./step2";
import step3 from "./step3";
import areaDisplay from "./areaDisplay";
import service from "./service";
export default {
    props: { list: Array },
    components: { meetingForm, showForm, areaForm, areaDisplay, note, step1, step2, step3, service },
    data() {
        return {
            ...validate,
            formId: undefined,
            form: {
                activeSummary: [],
                liaisonId1: "",
                liaisonId2: ""
            }
        };
    },
    methods: {
        handleSubmit() {},
        handleChangeForm(subForm) {
            this.form = {...this.form, ...subForm}
        },
        handleNext(subForm){
            this.step ++
            if(subForm) {
                this.form = {...this.form, ...subForm}
            }
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
</style>
