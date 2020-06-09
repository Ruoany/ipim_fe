<template>
    <div class="all">
        <a-form-model-item
            :label="$t('reportbd.fq')"
            prop="exSpace"
            :rules="{
                required: true,
                message: 'please input',
                trigger: 'blur',
            }"
            >
            <a-row :gutter="10">
                <a-col :span="9">
                    <a-input-number style="width:100%" :min="0" v-model.number="form.exVenueRental" :placeholder="$t('reportbd.fr')" />
                </a-col>
                <a-col :span="13" >
                    <a-input-number style="width:100%" :min="0" v-model.number="form.exSpaceRented" :placeholder="$t('reportbd.fs')" />
                </a-col>
            </a-row>
        </a-form-model-item>
        <a-form-model-item
            v-for="(room, index) in form.exMeetingRooms"
            :key="room.key"
            :label="index === 0 ? $t('reportbd.ba') : ''"
            :prop="'exMeetingRooms.' + index + '.rooms'"
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
                        v-if="form.exMeetingRooms.length > 1"
                        :disabled="form.exMeetingRooms.length === 1"
                        @click="removeDomain(room)"
                    />
                </a-col>
            </a-row>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fh')" props="exMeetingHotels">
            <a-row 
                v-for="(hotel, index) in form.exMeetingHotels"
                :gutter="10" 
                :key="hotel.level"
            >
                <a-col :span="2">
                    {{index === 0 ? $t('reportbd.fu') : 
                    index === 1 ? $t('reportbd.fv') :  
                    index === 2 ? $t('reportbd.fw') : $t('reportbd.fx')}}
                </a-col>
                 <a-col :span="3">
                    <a-input-number :min="0" v-model.number="hotel.rooms" />
                </a-col>
                <a-col :span="19">
                    <a-input v-model="hotel.specify" :placeholder="$t('reportbd.fy')" />
                </a-col>
            </a-row>
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.bd')" props="exTotalRooms">
            <a-input-number :min="0" style="width:100%" v-model.number="form.exTotalRooms" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.ga')" props="totalQualifiedBuyers">
            <a-input-number :min="0" style="width:100%" v-model.number="form.totalQualifiedBuyers" />
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.gb')" props="qualifiedBuyers">
            <a-row 
                v-for="(speaker, index) in form.qualifiedBuyers"
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
        
        <a-form-model-item :label="$t('reportbd.fz')" props="hardwareCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.hardwareCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fm')" props="exOpeningCeremonyCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.exOpeningCeremonyCost" />
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.fi')" props="exPromotionMarketingCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.exPromotionMarketingCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fj')" props="exTranslationCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.exTranslationCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fk')" props="exTransportationCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.exTransportationCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.gc')" props="logisticsCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.logisticsCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fo')" props="exGreenChannelCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.exGreenChannelCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fp')" props="exWelcomeActivitiesCost">
            <a-input-number :min="0" style="width:100%" v-model.number="form.exWelcomeActivitiesCost" />
        </a-form-model-item>

        <a-form-model-item>
            <a-button type="primary" @click="preClick" style="margin-right:12px">上一步</a-button>
            <a-button type="primary" @click="nextClick">下一步</a-button>
        </a-form-model-item>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                exVenueRental: "",
                exSpaceRented: "",
                exMeetingRooms: [{ key: Date.now(), date: "", rooms: "" }],
                exMeetingHotels: [{
                    level: "STAR5",
                    rooms: "",
                    specify: ""
                },{
                    level: "STAR4",
                    rooms: "",
                    specify: ""
                },{
                    level: "STAR3",
                    rooms: "",
                    specify: ""
                },{
                    level: "OTHER",
                    rooms: "",
                    specify: ""
                }],
                totalQualifiedBuyers: "",
                qualifiedBuyers: [{
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
                exTotalRooms: "",
                hardwareCost: "",
                exPromotionMarketingCost: "",
                exTranslationCost: "",
                exTransportationCost: "",
                logisticsCost: "",
                exOpeningCeremonyCost: "",
                exGreenChannelCost: "",
                exWelcomeActivitiesCost: "",
            },
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
            let index = this.form.exMeetingRooms.indexOf(item);
            if (index !== -1) {
                this.form.exMeetingRooms.splice(index, 1);
            }
        },
        addDomain() {
            this.form.exMeetingRooms.push({ key: Date.now(), date: '', rooms: '' });
        },
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
