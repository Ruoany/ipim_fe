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
                <note v-show="step === 0" ></note>
                <step1 v-show="step === 1" :institution="institution"></step1>
                <step2 v-show="step === 2" :liaison="liaison" :liaisonSub="liaisonSub"></step2>
                <step3 v-show="step === 3" :activity="activity" :editData="form"></step3>
                <meeting-form v-show="step === 4" :editData="form"></meeting-form>
                <show-form v-show="step === 5" :editData="form"></show-form>
                <area-form v-show="step === 6" :editData="form"></area-form>
                <area-display v-show="step === 7" :editData="form"></area-display>
                <service v-show="step === 8" :editData="form"></service>
                <div v-show="step === 9">
                    <a-form-model-item>
                        {{$t('reportbd.gn')}}
                    </a-form-model-item>
                </div>
                <a-form-model-item>
                    <a-button type="primary" @click="step--" v-if="step >0">上一步</a-button>
                    <a-button
                        type="primary"
                        style="margin-left:12px"
                        @click="step++"
                        v-if="step < 9"
                    >下一步</a-button>
                    <a-button
                        type="primary"
                        @click="handleSubmit"
                        style="margin-left:12px"
                        v-if="step === 9"
                    >提交</a-button>
                </a-form-model-item>
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
            liaisonSub: {},
            activity: {},
            update: false,
            form: {
                attachments_activeSummary: [],
                attachments_participant: [],
                attachments_exParticipation: [],
                attachments_meetingRooms: [],
                attachments_invoicesFiles: [],
                attachments_checklistFiles: [],
                attachments_operatingFiles: [],
                attachments_profiles: [],
                attachments_plans: [],
                attachments_certifies: [],
                attachments_guestlList: [],
                attachments_delegations: [],
                attachments_activities: [],
                attachments_materials: [],
                attachments_others: [],
                conventionDinings: [{ attendees: "", averagePrice: "", date: "", totalPrice: "", venue: "" }],
                meetingRooms: [{ key: Date.now(), date: "", rooms: "" }],
                totalSpeakers: "",
                speakers: [
                    { region: "GUANGDONG", total: "", totalRoomings: "", totalTransportations: "" },
                    { region: "ASIAN", total: "", totalRoomings: "", totalTransportations: "" },
                    { region: "OTHER", total: "", totalRoomings: "", totalTransportations: "" }
                ],
                headsOfDelegations: [
                    { region: "GUANGDONG", total: "", totalRoomings: "", totalTransportations: ""},
                    { region: "ASIAN", total: "", totalRoomings: "", totalTransportations: ""},
                    { region: "OTHER", total: "", totalRoomings: "", totalTransportations: ""}
                ],
                totalDelegations: "",
                totalNoDelegations: "",
                totalHeadsOfDelegation: "",
                promotionMarketingCost: "",
                translationCost: "",
                transportationCost: "",
                pcocost: "",
                openingCeremonyCost: "",
                venueRental: "",
                greenChannelCost: "",
                welcomeActivitiesCost: "",
                totalExhibitors: "",
                totalMacaoParticipants: "",
                totalOverseasParticipants: "",
                exTotalExhibitors: "",
                exTotalMacaoParticipants: "",
                exTotalOverseasParticipants: "",
                activityJoins: [
                    { type: "MACAO", exhibitorsBooth: "", exhibitors: "", professionalBuyer: "", watchingThePublic: "" },
                    { type: "OVERSEAS", exhibitorsBooth: "", exhibitors: "", professionalBuyer: "", watchingThePublic: "" },
                    { type: "TOTAL", exhibitorsBooth: "", exhibitors: "", professionalBuyer: "", watchingThePublic: "" }
                ],
                exVenueRental: "",
                exSpaceRented: "",
                exMeetingRooms: [{ key: Date.now(), date: "", rooms: "" }],
                exMeetingHotels: [
                    {level: "STAR5",rooms: "",specify: "" },
                    {level: "STAR4",rooms: "",specify: "" },
                    {level: "STAR3",rooms: "",specify: "" },
                    {level: "OTHER",rooms: "",specify: "" }
                ],
                totalQualifiedBuyers: "",
                qualifiedBuyers: [
                    {region: "GUANGDONG",total: "",totalRoomings: "",totalTransportations: "" },
                    {region: "ASIAN",total: "",totalRoomings: "",totalTransportations: "" },
                    {region: "OTHER",total: "",totalRoomings: "",totalTransportations: "" }
                ],
                exTotalRooms: "",
                hardwareCost: "",
                exPromotionMarketingCost: "",
                exTranslationCost: "",
                exTransportationCost: "",
                logisticsCost: "",
                exOpeningCeremonyCost: "",
                exGreenChannelCost: "",
                exWelcomeActivitiesCost: "",
                serviceProviders: [{ key: Date.now(), description: "", amount: "" }],
                govSupports: [],
                invoicesFiles: [],
                checklistFiles: [],
                operatingFiles: [],
                profiles: [],
                plans: [],
                certifies: [],
                guestlList: [],
                delegations: [],
                activities: [],
                materials: [],
                others: []
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
                    address: data.address,
                    city: data.city,
                    country: data.country,
                    email: data.email,
                    fax: data.fax,
                    phone: data.phone,
                    website: data.web,
                    relatedFiles: data.relatedFiles,
                    applicantType: data.applicantType,
                    applicantTypeDescription: data.applicantTypeDescription,
                }
                this.liaison = data.liaison
                this.liaisonSub = data.liaisonSub
                this.activity = {
                    ...data.activity,
                    conventionType: data.conventionType,
                    date: `${data.activity.startTime} - ${data.activity.endTime}`,
                };
            }
            const res = await Report.getEncourageConventionReportById(recordId);
            if(res.code === 200 && res.data) {
                const from = res.data
                if(from.attachments && !!from.attachments.length) {
                    from.attachments.forEach(i => {
                        from[i.type] ? from[i.type].push(i) : (from[i.type] = [i])
                    })
                    from.attachments = []
                }
                this.form = from
                this.update = true
            }
            this.form.encourageConventionId = recordId;
            this.loading = false;
        },
        async  handleSubmit() {
            const form = this.form
            form.meetingRooms = form.meetingRooms.map(i => ({ ...i, date: i.date.valueOf() }))
            form.exMeetingRooms = form.exMeetingRooms.map(i => ({ ...i, date: i.date.valueOf() }))
            form.conventionDinings = form.conventionDinings.map(i => ({ ...i, date: i.date.valueOf() }))
            form.attachments = []
            const fileKeys = Object.keys(form).filter(i => i.startsWith('attachments_'))
            fileKeys.forEach(i => {
                form[i] = form[i].map(j => ({...j, type: i}))
                form.attachments.push(...form[i])
                delete form[i]
            })
            this.loading = true
            let res
            if(this.update) {
                res = await Report.updateEncourageConventionReport(form)
            } else {
                res = await Report.addEncourageConventionReport(form)
            }
            
            this.loading = false
            if(res.code === 200) {
                this.$router.go(-1)
            }
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
