<template>
    <div class="form-container">
        <a-steps :current="step" direction="vertical" size="small">
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
            <a-form-model class="form" ref="miecf" :form="form" v-bind="formItemLayout">
                <note v-show="step === 0" @next="step++"></note>
                <step1 v-show="step === 1" @pre="step--" @next="handleNext" @upload="uploadChange" :attachments="form.attachments" :institution="institution"></step1>
                <step2 v-show="step === 2" @pre="step--" @next="handleNext" :liaison="liaison"></step2>
                <step3 v-show="step === 3" @pre="step--" @next="handleNext" :attachments="form.attachments" :activity="activity"></step3>
                <meeting-form v-show="step === 4" @pre="step--" @next="handleNext" :attachments="form.attachments" @upload="uploadChange"></meeting-form>
                <show-form v-show="step === 5" @pre="step--" @next="handleNext" :attachments="form.attachments"></show-form>
                <area-form v-show="step === 6" @pre="step--" @next="handleNext" :attachments="form.attachments"></area-form>
                <area-display v-show="step === 7" @pre="step--" @next="handleNext"></area-display>
                <service v-show="step === 8" @pre="step--" @next="handleNext" :attachments="form.attachments"></service>
                <div v-show="step === 9">
                    <a-form-model-item>
                        {{$t('reportbd.gl')}}
                        <a-input style="width:100px" :placeholder="$t('reportbd.gm')"/>
                        {{$t('reportbd.gn')}}
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary" @click="step--" style="margin-right:12px">上一步</a-button>
                        <a-button type="primary" @click="handleSubmit">{{$t("reportbd.submit")}}</a-button>
                    </a-form-model-item>
                </div>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import Report from "@/apis/report";
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
            loading: false,
            step: 0,
            institution: {},
            liaison: {},
            activity: {},
            update: false,
            form: {
                attachments: [],
            }
        };
    },
    methods: {
        initData: async function(recordId) {
            this.loading = true;
            const { data, code } = await Report.getEncourageConventionById(recordId);
            if(code === 200) {
                this.institution = {
                    ...data.institution, 
                    applicantType: data.applicantType,
                    applicantTypeDescription: data.applicantTypeDescription,
                }
                this.liaison = data.liaison
                this.activity = {
                    ...data.activity,
                    date: `${data.activity.startTime} - ${data.activity.endTime}`,
                };
            }
            const res = await Report.getEncourageConventionReportById(recordId);
            if(res.code === 200 && !!res.data.id) {
                this.form = res.data
                this.update = true
            }
            this.form.encourageConventionId = recordId;
            this.loading = false;
        },
        async  handleSubmit() {
            // this.$refs.miecf.validate(async valid  => {
                
                // if (valid) {
                    this.loading = true
                    let res
                    if(this.update) {
                        res = await Report.updateEncourageConventionReport(this.form)
                    } else {
                        res = await Report.addEncourageConventionReport(this.form)
                    }
                    console.log(111, this.form);
                    
                    this.loading = false
                    if(res.code === 200) {
                        this.$router.go(-1)
                    }
            //     } else {
            //         this.$message.error("表單存在必填項為空或者不合法字符，請檢查");
            //     }
            // });
        },
        handleNext(subForm){
            this.step ++
            if(subForm) {
                const { attachments, ...others } = subForm
                this.form = {...this.form,  ...others}
                if(attachments) {
                    this.form.attachments.push(...attachments)
                }
            }
        },
        //上傳的文件
        uploadChange(info, type) {
            const status = info.file.status;
            if (status === 'done') {
                let data = info.file.response;
                if (data.code === 200) {
                    this.$message.success(`${info.file.name} file uploaded successfully.`);
                    this.form.attachments.push({
                        oriname: info.file.name,
                        uid: info.file.uid,
                        url: data.data.url,
                        type
                    })
                }
            } else if (status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        },
    },
    mounted(){
        const recordId = this.$crypto.decryption(unescape(this.$route.query.id));
        this.initData(recordId)
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
