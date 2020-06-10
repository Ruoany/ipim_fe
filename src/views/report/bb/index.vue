<template>
    <div class="form-container">
        <a-steps v-model="step" direction="vertical" size="small">
            <a-step :title="$t('reportbb.bg')" />
            <a-step :title="$t('reportbb.bp')" />
            <a-step :title="$t('reportba.am')" />
            <a-step :title="$t('reportbb.aw')" />
            <a-step :title="$t('reportbb.be')" />
            <a-step :title="$t('reportbb.bs')" />
            <a-step :title="$t('reportbb.bq')" />
        </a-steps>
        <a-form-model class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="step === 0">
                <a-form-item>
                    <ul>
                        <li>{{ $t("reportbb.ab") }}</li>
                        <li>{{ $t("reportbb.ac") }}</li>
                        <li>{{ $t("reportbb.ad") }}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="step === 1">
                <a-form-item :label="$t('reportbb.ae')">
                    <a-input :value="institutionName" disabled />
                </a-form-item>
               <a-form-item :label="$t('reportba.aj')">
                    <a-input :value="liaison.nameZh" disabled />
                </a-form-item>
                <a-form-item :label="$t('util.aphone')">
                    <a-input :value="liaison.phone" disabled />
                </a-form-item>
                <a-form-item :label="$t('index.email')">
                    <a-input :model="liaison.email" disabled />
                </a-form-item>
                <a-form-item :label="$t('reportbb.ag')">
                    <a-input :value="selectedActivity.activityName" disabled  />
                </a-form-item>
                <a-form-item :label="$t('reportbb.ah')">
                    <a-input :value="selectedActivity.activityPlace" disabled />
                </a-form-item>
                <a-form-item :label="$t('reportbb.ai')">
                    <a-input :value="selectedActivity.activityDate" disabled />
                </a-form-item>
            </div>
            <div v-show="step===2">
                <div>
                    {{ $t("reportba.an") }}
                    <a-form-model-item :label="$t('reportba.ao')" prop="exhibitRent" required>
                        <a-input-number v-model.number="form.exhibitRent" :min="0" style="width: 100%"/>
                        <a-radio-group name="radioGroup" :default-value="1">
                            <a-radio :value="1">{{$t('reportba.ap')}}</a-radio>
                            <a-radio :value="2">{{$t('reportba.aq')}}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                </div>
                <div>
                    {{ $t("reportba.ar") }}
                    <a-form-model-item :label="$t('reportba.ao')" prop="exhibitRent" required>
                        <a-input-number v-model.number="form.exhibitRent" :min="0" style="width: 100%"/>
                        <a-radio-group name="radioGroup" :default-value="1">
                            <a-radio :value="1">{{$t('reportba.ap')}}</a-radio>
                            <a-radio :value="2">{{$t('reportba.aq')}}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                </div>
            </div>
            <div v-show="step === 3">
                <a-form-model-item :label="$t('reportbb.ay')" prop="photoFiles" required >
                    <upload
                        type="WORD"
                        :value.sync="form.photoFiles"
                        @handleChange="uploadChange"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('reportbb.az')" prop="photoFiles" required >
                    <upload
                        type="WORD"
                        :value.sync="form.photoFiles"
                        @handleChange="uploadChange"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('reportbb.bd')" prop="photoFiles" required >
                    <upload
                        type="image"
                        :multiple="true"
                        :value.sync="form.photoFiles"
                        @handleChange="uploadChange"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('reportbb.bc')" prop="photoFiles" required >
                    <upload
                        type="image"
                        :multiple="true"
                        :value.sync="form.photoFiles"
                        @handleChange="uploadChange"
                    />
                </a-form-model-item>
            </div>
            <div v-show="step === 4">
                <a-form-model-item :label="$t('reportbb.be')">
                    <ul>
                        <li>{{ $t("reportbb.bh") }}</li>
                        <li>{{ $t("reportbb.bi") }}</li>
                    </ul>
                    <a-radio-group>
                        <a-radio :value="1">{{ $t("reportbb.bx") }}</a-radio>
                        <a-radio :value="2">{{ $t("reportbb.bt") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
            </div>
            <div v-show="step === 5">
                <a-form-model-item>
                    <p>{{$t('reportbb.bv')}}</p>
                    <a-radio-group>
                        <a-radio :value="1">{{$t("reportbb.bn")}} <a-input-number v-model.number="form.exhibitRent" :min="0" /> {{$t("reportbb.bw")}}</a-radio>
                        <a-radio :value="2">{{$t("reportbb.bo")}}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item>
                    <p>{{$t('reportbb.by')}}</p>
                    <a-radio-group>
                        <a-radio :value="1">{{$t("reportbb.cb")}}</a-radio>
                        <a-radio :value="2">{{$t("reportbb.cc")}}</a-radio>
                        <a-radio :value="3">{{$t("reportbb.cd")}}</a-radio>
                        <a-radio :value="4">{{$t("reportbb.ce")}}</a-radio>
                        <a-radio :value="5">{{$t("reportbb.cf")}}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item
                    v-for="(room, index) in form.meetingRooms"
                    :key="room.key"
                    :prop="'meetingRooms.' + index + '.rooms'"
                    >
                    <p v-if="index === 0">{{$t('reportbb.bz')}}</p>
                    <a-row :gutter="10">
                        <a-col :span="4">{{$t('reportbb.cj') + (index + 1)}}</a-col>
                        <a-col :span="12"><a-input v-model="form.exhibitRent" /></a-col>
                    </a-row>
                    <a-row :gutter="10">
                        <a-col :span="4">{{$t('reportbb.ck')}}</a-col>
                        <a-col :span="12">
                            <a-radio-group>
                                <a-radio :value="1">{{$t("reportbb.cl")}}</a-radio>
                                <a-radio :value="2">{{$t("reportbb.cm")}}</a-radio>
                                <a-radio :value="3">{{$t("reportbb.cn")}}</a-radio>
                                <a-radio :value="4">{{$t("reportbb.co")}}</a-radio>
                            </a-radio-group>
                        </a-col>
                    </a-row>
                    <a-row :gutter="10">
                        <a-col :span="4">{{$t('reportbb.cp')}}</a-col>
                        <a-col :span="12">
                            <a-radio-group>
                                <a-radio :value="1">{{$t("reportbb.cq")}}</a-radio>
                                <a-radio :value="2">{{$t("reportbb.cr")}}</a-radio>
                                <a-radio :value="3">{{$t("reportbb.cs")}}</a-radio>
                            </a-radio-group>
                        </a-col>
                    </a-row>
                    <a-row :gutter="10">
                        <a-col :span="4">{{$t('reportbb.ct')}}</a-col>
                        <a-col :span="12">
                            <a-input v-model="form.exhibitRent" />
                        </a-col>
                    </a-row>
                    <a-row :gutter="10">
                        <a-col :span="4">{{$t('reportbb.cu')}}</a-col>
                        <a-col :span="12">
                            <a-radio-group>
                                <a-radio :value="1">{{$t("reportbb.cv")}}</a-radio>
                                <a-radio :value="2">{{$t("reportbb.cw")}}</a-radio>
                                <a-radio :value="3">{{$t("reportbb.cx")}}</a-radio>
                                <a-radio :value="1">{{$t("reportbb.cy")}}</a-radio>
                                <a-radio :value="2">{{$t("reportbb.cz")}}</a-radio>
                                <a-radio :value="3">{{$t("reportbb.da")}}</a-radio>
                            </a-radio-group>
                        </a-col>
                    </a-row>
                </a-form-model-item>
                <a-row>
                    <a-button type="dashed" style="width: 40%;margin-right:20px" @click="removeGovSupports">
                        <a-icon type="minus" /> {{$t("reportbb.cj")}}
                    </a-button>
                    <a-button type="dashed" style="width: 40%" @click="addGovSupports">
                        <a-icon type="plus" /> {{$t("reportbb.cj")}}
                    </a-button>
                </a-row>
                <a-form-model-item>
                    <p>{{$t('reportbb.ca')}}</p>
                    <a-radio-group>
                        <a-radio :value="2">{{$t("reportbb.cg")}}</a-radio>
                        <a-radio :value="1">{{$t("reportbb.ch")}} <a-input v-model="form.exhibitRent" style="width:200px" /></a-radio>
                        <a-radio :value="2">{{$t("reportbb.ci")}} <a-input v-model="form.exhibitRent" style="width:200px" /></a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('reportbb.bf')">
                    <a-textarea></a-textarea>
                </a-form-model-item>
            </div>
            <div v-show="step === 6">
                <a-form-item :label="$t('reportbb.bj')">
                    <a-radio-group>
                        <a-radio :value="1">{{ $t("reportbb.db") }}</a-radio>
                        <a-radio :value="2">{{ $t("reportbb.dc") }}</a-radio>
                    </a-radio-group>
                    <a-input :placeholder="$t('reportbb.bm')"></a-input>
                </a-form-item>
                <a-form-item :label="$t('reportbb.bk')">
                    <a-radio-group>
                        <a-radio :value="1">{{ $t("reportbb.db") }}</a-radio>
                        <a-radio :value="2">{{ $t("reportbb.dc") }}</a-radio>
                    </a-radio-group>
                    <a-input :placeholder="$t('reportbb.bm')"></a-input>
                </a-form-item>
                <a-form-item :label="$t('reportbb.bl')"></a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="step--" v-if="step > 0">上一步</a-button>
                <a-button type="primary" style="margin-left:12px" @click="step++" v-if="step < 6">下一步</a-button>
                <a-button type="primary" html-type="submit" style="margin-left:12px" v-if="step === 6">提交</a-button>
            </a-form-item>
        </a-form-model>
    </div>
</template>

<script>
import Report from "@/apis/report";
import validate from "./validate";
import Upload from "@/components/upload";
export default {
    components: { Upload },
    data() {
        return {
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            step: 0,
            loading: false,
            reportId: '',
            institutionName: '',
            liaison: {},
            selectedActivity: {},
            form: {
                meetingRooms: [{key: Date.now(), value: ''}]
            },
            ...validate
        };
    },
    methods: {
        initData: async function(recordId, reportId) {
            this.loading = true;
            const { data, code } = await Report.getEncourageConventionById(recordId);
            if(code === 200) {
                this.institutionName = data.institution.nameZh
                this.selectedActivity = {
                    activityName: data.activity.nameZh,
                    activityDate: `${data.activity.startTime} - ${data.activity.endTime}`,
                    activityPlace: data.activity.place,
                    activityExpiry: data.activity.expiryTime
                };
                this.liaison = data.liaison
            }
            if(reportId) {
                const res = await Report.getEncourageConventionReportById(reportId);
                if(res.code === 200) {
                    this.form = res.data
                }
            }
            this.form.encourageConventionId = recordId;
            this.loading = false;
        },
        handleSubmit: function(e) {
            e.preventDefault();
            this.$form.validate((err, values) => {
                if (!err) {
                    console.log("--->", values);
                }
            });
        },
        removeGovSupports() {
            const len = this.form.meetingRooms.length
            if (len > 1) {
                this.form.meetingRooms.splice(len - 1, 1);
            }
        },
        addGovSupports() {
            this.form.meetingRooms.push({ key: Date.now(), value: '' });
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
    },
    mounted(){
        const recordId = this.$crypto.decryption(unescape(this.$route.query.id));
        const reportId = this.$route.query.reportId 
            ? this.$crypto.decryption(unescape(this.$route.query.reportId))
            : ''
        this.reportId = reportId
        this.initData(recordId, reportId)
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
