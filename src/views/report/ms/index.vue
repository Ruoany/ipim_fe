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
        <a-spin :spinning="loading" class="form">
            <a-form-model ref="miecf" :model="form"  v-bind="formatLayout">
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
                        <a-input :value="liaison.email" disabled />
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
                    <a-form-model-item :label="$t('formbb.ba')">
                        <a-input disabled/>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbb.bb')">
                        <a-checkbox disabled :checked="missionData.haveAirTicket" ref="haveAirTicket" @change="onCheckboxChange('haveAirTicket')">
                            {{ $t('formbb.bx') }}
                        </a-checkbox>
                        <a-checkbox disabled :checked="missionData.haveBoatTicket" ref="haveBoatTicket" @change="onCheckboxChange('haveBoatTicket')">
                            {{ $t('formbb.by') }}
                        </a-checkbox>
                        <a-checkbox disabled :checked="missionData.haveRailTicket" ref="haveRailTicket" @change="onCheckboxChange('haveRailTicket')">
                            {{ $t('formbb.bz') }}
                        </a-checkbox>
                        <a-checkbox disabled :checked="missionData.haveTranOther" ref="haveTranOther" @change="onCheckboxChange('haveTranOther')">
                            {{ $t('formbb.ca') }}
                        </a-checkbox>
                        <a-input v-model="missionData.tranOtherNote" style="width: 30%" disabled/>
                    </a-form-model-item>
                    
                    <a-row  v-if="missionData.haveAirTicket" type="flex">
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.bx')+$t('formbb.cc')">
                                <a-input v-model="missionData.airTicketNum" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.bx')+$t('formbb.cd')">
                                <a-input v-model="missionData.airTicketFee" disabled/>
                            </a-form-model-item>
                        </a-col>
                    </a-row>
                    
                    <a-row v-if="missionData.haveBoatTicket" type="flex">
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.by')+$t('formbb.cc')">
                                <a-input v-model="missionData.boatTicketNum" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.by')+$t('formbb.cd')">
                                <a-input v-model="missionData.boatTicketFee" disabled/>
                            </a-form-model-item>
                        </a-col>
                    </a-row>
                    
                    <a-row v-if="missionData.haveRailTicket" type="flex">
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.bz')+$t('formbb.cc')">
                                <a-input v-model="missionData.railTicketNum" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.bz')+$t('formbb.cd')">
                                <a-input v-model="missionData.railTicketFee" disabled/>
                            </a-form-model-item>
                        </a-col>
                    </a-row>
                    
                    <a-row v-if="missionData.haveTranOther" type="flex">
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.ca')+$t('formbb.cc')">
                                <a-input v-model="missionData.tranOtherNum" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-model-item :label="$t('formbb.ca')+$t('formbb.cd')">
                                <a-input v-model="missionData.tranOtherFee" disabled/>
                            </a-form-model-item>
                        </a-col>
                    </a-row>
                    
                    <a-row type="flex">
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.cf')+$t('formbb.cl')">
                                <a-input v-model="missionData.hotelName1" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.cf')+$t('formbb.cc')">
                                <a-input v-model="missionData.hotelNum1" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.cf')+$t('formbb.cd')">
                                <a-input v-model="missionData.hotelFee1" disabled/>
                            </a-form-model-item>
                        </a-col>
                    </a-row>
                    <a-row type="flex">
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.cg')+$t('formbb.cl')+$t('formbb.cm')">
                                <a-input v-model="missionData.hotelName2" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.cg')+$t('formbb.cc')+$t('formbb.cm')">
                                <a-input v-model="missionData.hotelNum2" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.cg')+$t('formbb.cd')+$t('formbb.cm')">
                                <a-input v-model="missionData.hotelFee2" disabled/>
                            </a-form-model-item>
                        </a-col>
                    </a-row>
                    <a-row type="flex">
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.ch')+$t('formbb.cl')+$t('formbb.cm')">
                                <a-input v-model="missionData.hotelName3" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.ch')+$t('formbb.cc')+$t('formbb.cm')">
                                <a-input v-model="missionData.hotelNum3" disabled/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-model-item :label="$t('formbb.ch')+$t('formbb.cd')+$t('formbb.cm')">
                                <a-input v-model="missionData.hotelFee3" disabled/>
                            </a-form-model-item>
                        </a-col>
                    </a-row>
                    <a-form-model-item >
                        <a-checkbox disabled :checked="missionData.haveTransportationCost" ref="haveTransportationCost" @change="onCheckboxChange('haveTransportationCost')">
                            {{ $t('formbb.cn') + $t('formbb.cj') }}
                        </a-checkbox>
                    </a-form-model-item>
                    <a-form-model-item >
                        <a-checkbox disabled  :checked="missionData.haveAccommodationCost" ref="haveAccommodationCost" @change="onCheckboxChange('haveAccommodationCost')">
                            {{ $t('formbb.cn') + $t('formbb.cj') }}
                        </a-checkbox>
                    </a-form-model-item>
                </div>
                <div v-show="step === 3">
                    <a-form-model-item :label="$t('reportbb.ay')" prop="summaryFiles" required >
                        <upload
                            type="WORD"
                            :value.sync="form.summaryFiles"
                            @handleChange="v=>uploadChange(v, 'summaryFiles')"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbb.az')" prop="accountFiles" required >
                        <upload
                            type="WORD"
                            :value.sync="form.accountFiles"
                            @handleChange="v=>uploadChange(v, 'accountFiles')"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbb.dg')" prop="scheduleFiles" required >
                        <upload
                            :value.sync="form.scheduleFiles"
                            @handleChange="v=>uploadChange(v, 'scheduleFiles')"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbb.dh')" prop="nameListFiles" required >
                        <upload
                            :value.sync="form.nameListFiles"
                            @handleChange="v=>uploadChange(v, 'nameListFiles')"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbb.bd')" prop="cardFiles" required >
                        <upload
                            type="image"
                            :multiple="true"
                            :value.sync="form.cardFiles"
                            @handleChange="v=>uploadChange(v, 'cardFiles')"
                        />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbb.bc')" prop="photoFiles" required >
                        <upload
                            type="image"
                            :multiple="true"
                            :value.sync="form.photoFiles"
                            @handleChange="v=>uploadChange(v, 'photoFiles')"
                        />
                    </a-form-model-item>
                </div>
                <div v-show="step === 4">
                    <a-form-model-item :label="$t('reportbb.be')" prop="receive" required>
                        <ul>
                            <li>{{ $t("reportbb.bh") }}</li>
                            <li>{{ $t("reportbb.bi") }}</li>
                        </ul>
                        <a-radio-group v-model="form.receive">
                            <a-radio value="CHEQUE">{{ $t("reportbb.bx") }}</a-radio>
                            <a-radio value="TRANSFER">{{ $t("reportbb.bt") }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                </div>
                <div v-show="step === 5">
                    <a-form-model-item>
                        <p>{{$t('reportbb.bv')}}</p>
                        <div>{{$t("reportbb.bn")}}<a-input-number v-model.number="form.totalCustomers" :min="0" />{{$t("reportbb.bw")}}</div>
                        <div>{{$t("reportbb.bo")}}</div>
                    </a-form-model-item>
                    <a-form-model-item
                        v-for="(room, index) in form.customers"
                        :key="room.key"
                        :prop="'customers.' + index + '.rooms'"
                        >
                        <p v-if="index === 0">{{$t('reportbb.by')}}</p>
                        <a-row :gutter="10">
                            <a-col :span="4">{{$t('reportbb.cj') + (index + 1)}}</a-col>
                            <a-col :span="12"><a-input v-model="room.name" /></a-col>
                        </a-row>
                        <a-row :gutter="10">
                            <a-col :span="4">{{$t('reportbb.ck')}}</a-col>
                            <a-col :span="12">
                                <a-radio-group v-model="room.region">
                                    <a-radio value="CHINA">{{$t("reportbb.cl")}}</a-radio>
                                    <a-radio value="HONGKONG">{{$t("reportbb.cm")}}</a-radio>
                                    <a-radio value="PORTUGUESE">{{$t("reportbb.cn")}}</a-radio>
                                    <a-radio value="OTHER">{{$t("reportbb.co")}}</a-radio>
                                </a-radio-group>
                            </a-col>
                        </a-row>
                        <a-row :gutter="10">
                            <a-col :span="4">{{$t('reportbb.cp')}}</a-col>
                            <a-col :span="12">
                                <a-radio-group v-model="room.status">
                                    <a-radio value="DISCUSSION">{{$t("reportbb.cq")}}</a-radio>
                                    <a-radio value="INTENTION">{{$t("reportbb.cr")}}</a-radio>
                                    <a-radio value="READY_SIGN">{{$t("reportbb.cs")}}</a-radio>
                                </a-radio-group>
                            </a-col>
                        </a-row>
                        <a-row :gutter="10">
                            <a-col :span="4">{{$t('reportbb.ct')}}</a-col>
                            <a-col :span="12"><a-input v-model="room.cooperationWay" /></a-col>
                        </a-row>
                        <a-row :gutter="10">
                            <a-col :span="4">{{$t('reportbb.cu')}}</a-col>
                            <a-col :span="12"><a-input v-model="room.amount" /></a-col>
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
                        <p>{{$t('reportbb.bz')}}</p>
                        <a-textarea v-model="form.opinion" />
                    </a-form-model-item>
                    <a-form-model-item prop="againMission">
                        <p>{{$t('reportbb.ca')}}</p>
                        <a-input v-model="form.againMission" />
                    </a-form-model-item>
                </div>
                <div v-show="step === 6">
                    <a-form-model-item :label="$t('reportbb.bj')" prop="otherSupport">
                        <a-input :placeholder="$t('reportbb.bm')" v-model="form.otherSupport"></a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('reportbb.bk')" prop="chargeExplain">
                        <a-input :placeholder="$t('reportbb.bm')" v-model="form.chargeExplain"></a-input>
                    </a-form-model-item>
                    <a-form-item :label="$t('reportbb.bl')">
                        <a-radio-group v-model="form.stateAgree">
                            <a-radio :value="true">{{ $t("reportbb.de") }}</a-radio>
                            <a-radio :value="false">{{ $t("reportbb.df") }}</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </div>
                <a-form-model-item>
                    <a-button type="primary" @click="step--" v-if="step >0">上一步</a-button>
                    <a-button
                        type="primary"
                        style="margin-left:12px"
                        @click="step++"
                        v-if="step < 6"
                    >下一步</a-button>
                    <a-button
                        type="primary"
                        @click="handleSubmit"
                        style="margin-left:12px"
                        v-if="step === 6"
                    >提交</a-button>
                </a-form-model-item>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import Report from "@/apis/report";
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
            institutionName: '',
            liaison: {},
            selectedActivity: {},
            update: false,
            missionData: {},
            form: {
                customers: [{key: Date.now(), amount: '', cooperationWay: '', name: '', region: '', status: ''}],
                summaryFiles: [],
                accountFiles: [],
                cardFiles: [],
                photoFiles: [],
                opinion: "",
                totalCustomers: 0,
                againMission: "",
                exhibitRent: 0,
                exhibitRentFiles: [],
                makeCost: 0,
                makeCostFiles: [],
                stateAgree: false,
                receive: ''
            },
        };
    },
    methods: {
        initData: async function(recordId) {
            this.loading = true;
            const { data, code } = await Report.getEncourageMissionById(recordId);
            if(code === 200) {
                this.institutionName = data.institution.nameZh
                this.selectedActivity = {
                    activityName: data.activity.nameZh,
                    activityDate: `${data.activity.startTime} - ${data.activity.endTime}`,
                    activityPlace: data.activity.place,
                    activityExpiry: data.activity.expiryTime
                };
                this.liaison = data.liaison
                this.missionData = data;
            }
            const res = await Report.getEncourageMissionReportById(recordId);
            if(res.code === 200 && res.data) {
                this.form = res.data
                this.update = true
            }
            this.form.encourageMissionId = recordId;
            this.loading = false;
        },
        handleSubmit: async function() {
            // const { cardFiles, photoFiles } = this.form
            // if(cardFiles.length < 5 || photoFiles < 5){
            //     this.$message.error("表單存在必填項為空或者不合法字符，請檢查");
            //     return 
            // }
            this.$refs.miecf.validate(async valid  => {
                if (valid) {
                    this.loading = true
                    let res
                    const form = this.form
                    if(form.customers.length === 1 && !form.customers[0].region){
                        form.customers = []
                    }
                    if(this.update) {
                        res = await Report.updateEncourageMissionReport(form)
                    } else {
                        res = await Report.addEncourageMissionReport(form)
                    }
                    this.loading = false
                    if(res.code === 200) {
                        this.$router.go(-1)
                    }
                } else {
                    this.$message.error("表單存在必填項為空或者不合法字符，請檢查");
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
        uploadChange(info, type) {
            this.form[type] = info
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
