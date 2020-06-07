<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('formba.aa')" />
            <a-step :title="$t('reportba.ae')" />
            <a-step :title="$t('reportba.am')" />
            <a-step :title="$t('reportba.bj')" />
            <a-step :title="$t('reportba.bk')" />
            <a-step :title="$t('reportba.bl')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model :model="form" :rules="rules" ref="miecf" v-bind="formatLayout">
                <div v-show="step===0">
                    <a-form-model-item>
                        <ul>
                            <li>{{ $t("reportba.ab") }}</li>
                            <li>{{ $t("reportba.ac") }}</li>
                            <li>{{ $t("reportba.ad") }}</li>
                        </ul>
                    </a-form-model-item>
                </div>
                <div v-show="step===1">
                    <a-form-model-item :label="$t('reportba.bp')">
                        <a-radio-group :value="currentInstitution.institutionType" disabled>
                            <a-radio value="INDIVIDUAL_BUSINESS_OWNER">{{ $t("reportba.as") }}</a-radio>
                            <a-radio value="GROUP">{{ $t("reportba.at") }}</a-radio>
                            <a-radio value="LIMITED_COMPANY">{{ $t("reportba.au") }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportba.af')">
                        <a-input :value="currentInstitution.nameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportba.ag')">
                        <a-input :value="selectedActivity.activityName" disabled  />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportba.ah')">
                        <a-input :value="selectedActivity.activityDate" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportba.ai')">
                        <a-input :value="selectedActivity.activityPlace" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportba.aj')">
                        <a-input :value="liaison.nameZh" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportba.ak')">
                        <a-input :value="liaison.phone" disabled />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportba.al')">
                       <a-input />
                    </a-form-model-item>
                </div>
                <div v-show="step===2">
                    <a-form-model-item :label="$t('enterprise.bl')" prop="exhibitRent" required>
                        <a-input-number v-model.number="form.exhibitRent" :min="0" style="width: 100%"/>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bm')" prop="makeCost" required>
                        <a-input-number v-model.number="form.makeCost" :min="0" style="width: 100%" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bn')" prop="trafficCost" required>
                        <a-input-number v-model.number="form.trafficCost" :min="0" style="width: 100%" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bo')" prop="leafletCost" required>
                        <a-input-number v-model.number="form.leafletCost" :min="0" style="width: 100%" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bp')" prop="advertCost" required>
                        <a-input-number v-model.number="form.advertCost" :min="0" style="width: 100%" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('enterprise.bq')" prop="totalAmount" required>
                        <a-input-number v-model.number="form.totalAmount" :min="0" style="width: 100%" />
                    </a-form-model-item>
                </div>
                <div v-show="step===3">
                    <a-form-model-item :label="$t('reportba.bj')" required >
                        <div class="form-content">
                            <ul>
                                <li>{{ $t("reportba.bm") }}</li>
                            </ul>
                        </div>
                        <a-upload-dragger 
                            name="file" 
                            multiple  
                            :action="upFiles"
                            :beforeUpload="beforeUpload" 
                            @change="uploadChange"
                        >
                            <p class="ant-upload-drag-icon">
                                <a-icon type="inbox" />
                            </p>
                            <p class="ant-upload-text">Click or drag file to this area to upload</p>
                            <p class="ant-upload-hint">Support for a single or bulk upload.</p>
                        </a-upload-dragger>
                    </a-form-model-item>
                </div>
                <div v-show="step===4">
                    <a-form-model-item :label="$t('reportba.bk') + ' (可選填)'" prop="advice">
                        <a-textarea v-model="form.advice" :auto-size="{ minRows: 3, maxRows: 5 }"/>
                    </a-form-model-item>
                </div>
                <div v-show="step===5">
                    <a-form-model-item prop="stateAgree">
                        <div>{{$t('reportba.bd')}}</div>
                        <a-radio-group v-model="form.stateAgree">
                            <a-radio :value="true">{{
                                $t("reportba.bn")
                            }}</a-radio>
                            <a-radio :value="false">{{
                                $t("reportba.bo")
                            }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                </div>
                <a-form-model-item>
                    <a-button type="primary" @click="step--" v-if="step >0">上一步</a-button>
                    <a-button
                        type="primary"
                        style="margin-left:12px"
                        @click="step++"
                        v-if="step < 5"
                    >下一步</a-button>
                    <a-button
                        type="primary"
                        @click="handleSubmit"
                        style="margin-left:12px"
                        v-if="step === 5"
                    >提交</a-button>
                </a-form-model-item>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import validate from "./validate";
import Report from "@/apis/report";
import { upFiles } from "@/apis/files";
export default {
    components: { },
    data() {
        return {
            upFiles,
            step: 0,
            recordId: '',
            loading: false,
            liaison: {},
            selectedActivity: {},
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            form: {
                advertCost: 0,
                advice: "",
                encourageEnterpriseId: 0,
                exhibitRent: 0,
                leafletCost: 0,
                makeCost: 0,
                photoFiles: [],
                stateAgree: true,
                totalAmount: 0,
                trafficCost: 0,
            },
            ...validate
        };
    },
     computed: {
        ...mapGetters([
            "currentInstitution",
        ]),
    },
    methods: {
        initData: async function(recordId) {
            this.loading = true;
            try {
                const { data } = await Report.getEncourageEnterpriseById(recordId);
                this.form.encourageEnterpriseId = recordId;
                this.liaison = data.liaison
                this.selectedActivity = {
                    activityName: data.activity.nameZh,
                    activityDate: `${data.activity.startTime} - ${data.activity.endTime}`,
                    activityPlace: data.activity.place,
                    activityExpiry: data.activity.expiryTime
                };
                // const res = await Report.getEncourageEnterpriseReportById(recordId);
                // this.form = res.data
            } catch (error) {
                this.$message.error(error.message)
            } finally {
                this.loading = false;
            }
        },
        handleSubmit: async function() {
            if(this.form.photoFiles.length < 4){
                this.$message.error("請以附件形式提交至少4張展會及展位相片");
                return 
            }
            this.$refs.miecf.validate(async valid  => {
                 if (valid) {
                    await Report.addEncourageEnterpriseReport(this.form)
                } else {
                    this.$message.error("表單存在必填項為空或者不合法字符，請檢查");
                }
            });
        },
        beforeUpload(file) {
            const isJPG = file.type === "image/jpeg";
            if (!isJPG) {
                this.$message.error("You can only upload JPG file!");
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error("Image must smaller than 2MB!");
            }
            return isJPG && isLt2M;
        },
        //上傳的文件
        uploadChange(info) {
            console.log("輸出->", info);
            const status = info.file.status;
            if (status === 'done') {
                let data = info.file.response;
                if (data.code === 200) {
                    this.$message.success(`${info.file.name} file uploaded successfully.`);
                    this.form.photoFiles.push({ 
                        oriname: info.file.name,
                        uid: info.file.uid,
                        url: data.data.url
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
.form-container {
    /deep/ .ant-checkbox-wrapper {
        min-width: 150px;
        height: 40px;
        margin-left: 0;
    }
    /deep/.ant-form-item-control {
        line-height: 30px;
    }
}
</style>
