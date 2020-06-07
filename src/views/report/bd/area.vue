<template>
    <a-form-model
        ref="areaform"
        :model="form"
        class="all"
    >
        <a-form-model-item
            v-for="(room, index) in form.meetingRooms"
            :key="room.key"
            :label="index === 0 ? $t('reportbd.ba') : ''"
            :prop="'meetingRooms.' + index + '.rooms'"
            :rules="{
                required: true,
                message: 'room can not be null',
                trigger: 'blur',
            }"
            >
            <a-row :gutter="10">
                <a-col :span="9">
                    <a-date-picker style="width:100%" v-model="room.date" :placeholder="$t('reportbd.bb')" />
                </a-col>
                <a-col :span="13" >
                    <a-input-number :min="0" v-model.number="room.rooms" style="width:100%" :placeholder="$t('reportbd.bc')" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="plus" class="cur" @click="addDomain()" />
                </a-col>
                <a-col :span="1">
                    <a-icon 
                        type="minus"
                        class="cur"
                        v-if="form.meetingRooms.length > 1"
                        :disabled="form.meetingRooms.length === 1"
                        @click="removeDomain(room)"
                    />
                </a-col>
            </a-row>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.be')" props="conventionDining">
            <a-row>
                <a-col :span="5" >
                    {{ $t("reportbd.et") }}
                </a-col>
                <a-col :span="19">
                    <a-date-picker :model="form.conventionDining.date" style="width:100%" :placeholder="$t('reportbd.bb')" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.eu") }}
                </a-col>
                <a-col :span="19">
                    <a-input-number :min="0" style="width:100%" v-model.number="form.conventionDining.attendees" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.ey") }}
                </a-col>
                <a-col :span="19">
                    <a-input-number :min="0" style="width:100%" v-model.number="form.conventionDining.totalPrice" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.ez") }}
                </a-col>
                <a-col :span="19">
                    <a-input-number :min="0" style="width:100%" v-model.number="form.conventionDining.averagePrice" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.ev") }}
                </a-col>
                <a-col :span="19">
                    <a-input v-model="form.conventionDining.venue" />
                </a-col>
            </a-row>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.az')" props="totalSpeakers">
            <a-input-number :min="0" style="width:100%" v-model.number="form.totalSpeakers" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fa')" props="speakers">
            <a-row 
                v-for="(speaker, index) in form.speakers"
                :gutter="10" 
                :key="speaker.region"
            >
                <a-col :span="7">{{index === 0 ? $t('reportbd.fb') : index === 1 ? $t('reportbd.fc') :  $t('reportbd.fd')}}</a-col>
                <a-col :span="17">
                    共 <a-input-number :min="0" v-model.number="speaker.total" /> 人; 具入住證明: 共 
                    <a-input-number :min="0" v-model.number="speaker.totalRoomings" /> 人; 具交通證明: 共 
                    <a-input-number :min="0" v-model.number="speaker.totalTransportations" /> 人;
                </a-col>
            </a-row>
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.fe')" props="totalDelegations">
            <a-input-number :min="0" style="width:100%" v-model.number="form.totalDelegations" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.ff')" props="totalNoDelegations">
            <a-input-number :min="0" style="width:100%" v-model.number="form.totalNoDelegations" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fg')" props="totalHeadsOfDelegation">
            <a-input-number :min="0" style="width:100%" v-model.number="form.totalHeadsOfDelegation" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fh')" props="headsOfDelegations">
            <a-row 
                v-for="(speaker, index) in form.headsOfDelegations"
                :gutter="10" 
                :key="speaker.region"
            >
                <a-col :span="7">{{index === 0 ? $t('reportbd.fb') : index === 1 ? $t('reportbd.fc') :  $t('reportbd.fd')}}</a-col>
                <a-col :span="17">
                    共 <a-input-number :min="0" v-model.number="speaker.total" /> 人; 具入住證明: 共 
                    <a-input-number :min="0" v-model.number="speaker.totalRoomings" /> 人; 具交通證明: 共 
                    <a-input-number :min="0" v-model.number="speaker.totalTransportations" /> 人;
                </a-col>
            </a-row>
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.fi')" props="promotionMarketingCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.promotionMarketingCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fj')" props="translationCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.translationCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fk')" props="transportationCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.transportationCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fl')" props="pcocost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.pcocost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fm')" props="openingCeremonyCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.openingCeremonyCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fn')" props="venueRental">
            <a-input-number :min="0" style="width:100%" v-model.number="form.venueRental" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fo')" props="greenChannelCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.greenChannelCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fp')" props="welcomeActivitiesCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.welcomeActivitiesCost" />
        </a-form-model-item>

        <a-form-model-item>
            <a-button type="primary" @click="preClick" style="margin-right:12px">上一步</a-button>
            <a-button type="primary" @click="nextClick">下一步</a-button>
        </a-form-model-item>
    </a-form-model>
</template>

<script>
export default {
    data() {
        return {
            form: {
                conventionDining: {
                    attendees: "",
                    averagePrice: "",
                    date: "",
                    totalPrice: "",
                    venue: ""
                },
                meetingRooms: [{ key: Date.now(), date: "", rooms: "" }],
                totalSpeakers: "",
                speakers: [{
                    region: "GUANGDONG",
                    total: "",
                    totalRoomings: "",
                    totalTransportations: ""
                },{
                    region: "ASIAN",
                    total: "",
                    totalRoomings: "",
                    totalTransportations: ""
                },{
                    region: "OTHER",
                    total: "",
                    totalRoomings: "",
                    totalTransportations: ""
                }],
                headsOfDelegations: [{
                    region: "GUANGDONG",
                    total: "",
                    totalRoomings: "",
                    totalTransportations: ""
                },{
                    region: "ASIAN",
                    total: "",
                    totalRoomings: "",
                    totalTransportations: ""
                },{
                    region: "OTHER",
                    total: "",
                    totalRoomings: "",
                    totalTransportations: ""
                }],
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
            },
            upLabel: { span: 16, offset: 4 }
        };
    },
    methods:{
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.$emit('next', this.form)
        },
        removeDomain(item) {
            let index = this.form.meetingRooms.indexOf(item);
            if (index !== -1) {
                this.form.meetingRooms.splice(index, 1);
            }
        },
        addDomain() {
            this.form.meetingRooms.push({ key: Date.now(), date: '', rooms: '' });
        },
        handleChange() {}
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.cur {
    cursor: pointer;
}
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
</style>
