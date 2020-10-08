<template>
    <div class="all">
        <a-form-model-item
            v-for="(room, index) in editData.meetingRooms"
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
                    <a-date-picker format="YYYY-MM-DD" style="width:100%" v-model="room.date" :placeholder="$t('reportbd.bb')" />
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
                        v-if="editData.meetingRooms.length > 1"
                        :disabled="editData.meetingRooms.length === 1"
                        @click="removeDomain(room)"
                    />
                </a-col>
            </a-row>
        </a-form-model-item>
        <a-form-model-item props="attachments_meetingRooms">
            <upload
                type="image"
                :multiple="true"
                :value.sync="editData.attachments_meetingRooms"
                @handleChange="uploadChange"
            ></upload>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.be')" props="conventionDinings">
            <a-row>
                <a-col :span="5" >
                    {{ $t("reportbd.et") }}
                </a-col>
                <a-col :span="19">
                    <a-date-picker format="YYYY-MM-DD" v-model="editData.conventionDinings[0].date" style="width:100%" :placeholder="$t('reportbd.bb')" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.eu") }}
                </a-col>
                <a-col :span="19">
                    <a-input-number :min="0" style="width:100%" v-model.number="editData.conventionDinings[0].attendees" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.ey") }}
                </a-col>
                <a-col :span="19">
                    <a-input-number :min="0" style="width:100%" v-model.number="editData.conventionDinings[0].totalPrice" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.ez") }}
                </a-col>
                <a-col :span="19">
                    <a-input-number :min="0" style="width:100%" v-model.number="editData.conventionDinings[0].averagePrice" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="5">
                    {{ $t("reportbd.ev") }}
                </a-col>
                <a-col :span="19">
                    <a-input v-model="editData.conventionDinings[0].venue" />
                </a-col>
            </a-row>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.az')" props="totalSpeakers">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.totalSpeakers" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fa')" props="speakers">
            <a-row 
                v-for="(speaker, index) in editData.speakers"
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
            <a-input-number :min="0" style="width:100%" v-model.number="editData.totalDelegations"  />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.ff')" props="totalNoDelegations">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.totalNoDelegations" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fg')" props="totalHeadsOfDelegation">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.totalHeadsOfDelegation" />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.fh')" props="headsOfDelegations">
            <a-row 
                v-for="(speaker, index) in editData.headsOfDelegations"
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
            <a-input-number :min="0" style="width:100%" v-model.number="editData.promotionMarketingCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fj')" props="translationCost">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.translationCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fk')" props="transportationCost">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.transportationCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fl')" props="pcocost">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.pcocost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fm')" props="openingCeremonyCost">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.openingCeremonyCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fn')" props="venueRental">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.venueRental" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fo')" props="greenChannelCost">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.greenChannelCost" />
        </a-form-model-item>
        
        <a-form-model-item :label="$t('reportbd.fp')" props="welcomeActivitiesCost">
            <a-input-number :min="0" style="width:100%" v-model.number="editData.welcomeActivitiesCost" />
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    props:['editData'],
    methods:{
        removeDomain(item) {
            let index = this.editData.meetingRooms.indexOf(item);
            if (index !== -1) {
                this.editData.meetingRooms.splice(index, 1);
            }
        },
        addDomain() {
            this.editData.meetingRooms.push({ key: Date.now(), date: '', rooms: '' });
        },
        // 更改上傳的文件
        uploadChange(info) {
            this.editData.attachments = info
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
