<template>
    <div class="form-container">
        <a-steps :current="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('mission.bn')" />
            <a-step :title="$t('mission.aa')" />
            <a-step :title="$t('mission.an')" />
            <a-step :title="$t('mission.au')" />
            <a-step :title="$t('mission.bh')" />
        </a-steps>
        <a-form-model
            class="form"
            ref="MISSION"
            :model="form"
            :rules="rules"
            v-bind="formItemLayout"
        >
            <div v-show="stepCurrent === 0">
                <a-form-model-item>
                    {{ $t("mission.bn") }}
                    <ul>
                        <li>{{ $t("mission.bo") }}</li>
                        <li>{{ $t("mission.bp") }}</li>
                        <li>{{ $t("mission.bq") }}</li>
                        <li>{{ $t("mission.cb") }}</li>
                    </ul>
                    <div>{{ $t("mission.br") }}</div>
                    <!-- <div>{{ $t("mission.bs") }}</div> -->
                </a-form-model-item>
            </div>



            <div v-show="stepCurrent === 1">

             <div
                v-for="(item, index) in form.participateDelegationUsers"
                :key="index"
                class="shareholder-wrapper"
                >
                   <a-button
                        v-if="index == 0"
                        shape="circle"
                        icon="plus"
                        type="primary"
                        @click="
                            form.participateDelegationUsers.push({
                                nameZh: '',
                                nameEn: '',
                                birthDate: null,
                                gender: 'M',
                                inboundId: undefined,
                                idCard: '',
                                idCardValidityDate: null,
                                inboundFiles: [],
                                inboundIdExhibition: undefined,
                                idCardExhibition: '',
                                idCardValidityDateExhibition: null,
                                inboundFilesExhibition: []
                            })"
                    ></a-button>
                    <a-button
                        v-else
                        shape="circle"
                        icon="minus"
                        @click="form.participateDelegationUsers.splice(index, 1)"
                     ></a-button>
                <a-form-model-item :prop="'participateDelegationUsers.'+index+'.nameZh'" :rules="rules.nameZh"  :label="$t('mission.ac')" style="width:50%">
                    <a-input v-model="item.nameZh" :disabled="isCheck" style="" />
                </a-form-model-item>
                 <a-form-model-item :prop="'participateDelegationUsers.'+index+'.nameEn'" :rules="rules.nameEn" :label="$t('mission.ca')" style="width:50%;float:right;position:relative;">
                    <a-input v-model="item.nameEn" :disabled="isCheck" />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ad')" style="width:50%">
                    <a-radio-group v-model="item.gender" :disabled="isCheck">
                        <a-radio value="M">{{ $t("mission.ae") }}</a-radio>
                        <a-radio value="F">{{ $t("mission.af") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item  :label="$t('mission.ag')" style="width:50%">
                    <a-date-picker
                        valueFormat="YYYY-MM-DD"
                        v-model="item.birthDate"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.bx')" style="width:100%">
                          <a-select v-model="item.inboundId" placeholder="請選擇證件名稱">
                                <a-select-option value="澳門居民身份證">
                                澳門居民身份證
                                </a-select-option>
                                <a-select-option value="來往港澳通行證">
                                來往港澳通行證
                                </a-select-option>
                                <a-select-option value="香港居民身份證">
                                香港居民身份證
                                </a-select-option>
                                <a-select-option value="護照及其他旅遊證件">
                                護照及其他旅遊證件
                                </a-select-option>
                          </a-select>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.am')" style="width:50%">
                    <a-input v-model="item.idCard" :disabled="isCheck" />
                </a-form-model-item>
                <!-- <a-form-model-item :label="$t('mission.ah')">
                    <a-input v-model="form.idCard" :disabled="isCheck" />
                </a-form-model-item> -->
                <a-form-model-item :label="$t('mission.ai')">
                    <a-date-picker
                     style="width:100%" 
                     valueFormat="YYYY-MM-DD"
                     v-model="item.idCardValidityDate"                    
                     :disabled="isCheck"
                    />
                </a-form-model-item>

                <a-form-model-item :label="$t('mission.by')" style="width:100%">


        <div class="picture-list-content">
            <a-upload
                :action="upFiles"
                listType="picture-card"
                :showUploadList="{showPreviewIcon: false,showRemoveIcon: true}"
                :beforeUpload="beforeUpload"
                :remove="value => removeUploadFile(value,item)"
                @change="value => handleChange(value,item)"
            >
            <div v-if="item.inboundFiles.length < 2">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Upload</div>
            </div>
            </a-upload>
        </div>




                </a-form-model-item>
                <a-form-model-item :label="$t('mission.bz')" style="width:100%">
                          <a-select v-model="item.inboundIdExhibition" placeholder="請選擇證件名稱">
                                <a-select-option value="澳門居民身份證">
                                港澳居民來往內地通行證
                                </a-select-option>
                                <a-select-option value="來往港澳通行證">
                                內地居民身份證
                                </a-select-option>
                                <a-select-option value="香港居民身份證">
                                香港居民身份證
                                </a-select-option>
                                <a-select-option value="護照及其他旅遊證件">
                                護照及其他旅遊證件
                                </a-select-option>
                          </a-select>
                </a-form-model-item>

                <a-form-model-item :label="$t('mission.am')" style="width:50%">
                    <a-input v-model="item.idCardExhibition" :disabled="isCheck" />
                </a-form-model-item>

                <a-form-model-item :label="$t('mission.ai')" >
                    <a-date-picker
                     style="width:100%"                       
                        :disabled="isCheck"
                        valueFormat="YYYY-MM-DD"
                        v-model="item.idCardValidityDateExhibition"
                    />
                </a-form-model-item>

                <a-form-model-item :label="$t('mission.by')">
                  
        <div class="picture-list-content">

            <a-upload
                :action="upFiles"
                listType="picture-card"
                :showUploadList="{showPreviewIcon: false, showRemoveIcon: true}"
                :beforeUpload="beforeUpload"
                :remove="value => removeUploadFile1(value,item)"
                @change="value => handleChange1(value,item)"
            >
            <div v-if="item.inboundFilesExhibition.length < 2">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Upload</div>
            </div>
            </a-upload>
        </div>


                </a-form-model-item>
             </div>

            </div>




            <div v-show="stepCurrent === 2">
                <p>{{ $t("mission.an") }}</p>
                <a-form-model-item prop="liaisonId" :label="$t('mission.ac')" style="width:100%">
                    <a-input
                        v-if="isCheck"
                        v-model="selectedLiaison.nameZh"
                        disabled
                    ></a-input>
                    <a-select
                        v-else
                        v-model="form.liaisonId"
                        showSearch
                        optionFilterProp="label"
                        :filterOption="true"
                    >
                        <a-select-option
                            v-for="item in liaisonList"
                            :key="item.id"
                            :value="item.id"
                            :label="`${item.nameZh}${item.nameEnOrPt}`"
                        >
                            {{ item.nameZh }}
                            {{ item.nameEnOrPt }}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ap')" style="width:100%">
                    <a-input v-model="selectedLiaison.tel" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.aq')" style="width:100%">
                    <a-input v-model="selectedLiaison.phone" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.ar')" style="width:100%">
                    <a-input v-model="selectedLiaison.abroadPhone" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.as')" style="width:100%">
                    <a-input v-model="selectedLiaison.fax" disabled />
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.at')" style="width:100%">
                    <a-input v-model="selectedLiaison.email" disabled />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('mission.aw')" style="width:100%">
                    <a-checkbox
                        :checked="form.isAssociation"
                        @change="e => (form.isAssociation = e.target.checked)"
                        :disabled="isCheck"
                        >{{ $t("mission.bu") }}</a-checkbox
                    >
                </a-form-item>
                <a-form-item :label="$t('mission.ax')" style="width:100%">
                    <a-input
                        v-model="form.associationName"
                        :disabled="isCheck"
                    />
                </a-form-item>
                <a-form-item :label="$t('mission.ay')" style="width:100%">
                    <a-input
                        v-model="form.associationPosition"
                        :disabled="isCheck"
                    />
                </a-form-item>
                <a-divider />
                <!-- <a-form-item :label="$t('mission.az')">
                    <a-input
                        v-model="form.associateIndustry"
                        :disabled="isCheck"
                    />
                </a-form-item> -->
                <a-form-item :label="$t('mission.ba')" style="width:100%">
                    <a-checkbox
                        :checked="form.isCompany"
                        @change="e => (form.isCompany = e.target.checked)"
                        :disabled="isCheck"
                        >{{ $t("mission.bb") }}</a-checkbox
                    >
                </a-form-item>
                <a-form-item :label="$t('mission.bc')" style="width:100%">
                    <a-input v-model="form.companyName" :disabled="isCheck" />
                </a-form-item>
                <a-form-item :label="$t('mission.bd')" style="width:100%">
                    <a-input
                        v-model="form.companyAddress"
                        :disabled="isCheck"
                    />
                </a-form-item>
                <a-form-item :label="$t('mission.ay')" style="width:100%">
                    <a-input
                        v-model="form.companyPosition"
                        :disabled="isCheck"
                    />
                </a-form-item>
                <a-form-item :label="$t('mission.az')" style="width:100%">
                    <a-input
                        v-model="form.companyIndustry"
                        :disabled="isCheck"
                    />
                </a-form-item>
                <a-divider />
                <a-form-item :label="$t('mission.bv')" style="width:100%">
                    <a-checkbox
                        :checked="form.isOtherWay"
                        @change="e => (form.isOtherWay = e.target.checked)"
                        :disabled="isCheck"
                        >{{ $t("mission.bf") }}</a-checkbox
                    >
                </a-form-item>
                <a-form-item :label="$t('mission.bw')" style="width:100%"></a-form-item>
                <a-form-item style="width:100%">
                    <a-input v-model="form.otherWayName" :disabled="isCheck" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-model-item :label="$t('mission.bi')" style="width:100%">
                    <a-radio-group
                        v-model="form.goWithGroup"
                        :disabled="isCheck"
                    >
                        <a-radio :value="true">{{ $t("mission.bj") }}</a-radio>
                        <a-radio :value="false">{{ $t("mission.bk") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.bl')" style="width:100%">
                    <a-radio-group
                        v-model="form.backWithGroup"
                        :disabled="isCheck"
                    >
                        <a-radio :value="true">{{ $t("mission.bj") }}</a-radio>
                        <a-radio :value="false">{{ $t("mission.bk") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.bm')" style="width:100%">
                    <a-radio-group
                        v-model="form.arrangement"
                        :disabled="isCheck"
                    >
                        <a-radio :value="true">{{ $t("mission.bj") }}</a-radio>
                        <a-radio :value="false">{{ $t("mission.bk") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item :label="$t('mission.be')" style="width:100%">
                    <a-input
                        v-model="form.otherArrangement"
                        :disabled="isCheck"
                    />
                </a-form-model-item>
            </div>
            <a-form-model-item>
                <a-button
                    v-show="stepCurrent > 0"
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                    >上一步</a-button
                >
                <a-button
                    v-show="stepCurrent < 4"
                    type="primary"
                    :disabled="timeNext > 0"
                    @click="stepCurrent++"
                    >{{ timeNext > 0 ? `(${timeNext}S)` : "下一步" }}</a-button
                >
                <a-button
                    v-show="stepCurrent === 4"
                    :class="isSubmit ? 'none' : ''"
                    type="primary"
                    @click="handleSubmit"
                    >{{ $t("mission.bt") }}</a-button
                >
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import { formatMoment, formatString } from "@/common/format";
import validate from "./validate";
import PD from "@/apis/participateDelegation";
import { upFiles } from "@/apis/files";
import { mapGetters } from "vuex";
import ApplyPicture from "@/apis/applyPicture";
export default {
    data() {
        return {
            ...validate,
            loading: false,
            formId: undefined,
            upFiles,
            form: {
                images:[],
                activityId: "",
                institutionId: "",
                applicantId: "",
                liaisonId: "",
                certs: [],
                participateDelegationUsers: [
                   {
                    nameZh: "",
                    nameEn: "",
                    gender: "M",
                    birthDate: null,
                    inboundId: undefined,
                    idCard: '',
                    idCardValidityDate: null,
                    inboundFiles: [],
                    inboundIdExhibition: undefined,
                    idCardExhibition: '',
                    idCardValidityDateExhibition: null,
                    inboundFilesExhibition: [],
                    }
                ],
                exitNumber: "",
                exitValidityDate: null,
                passportNumber: "",
                passportValidityDate: null,
                otherCertificateName: "",
                otherIDNumber: "",
                otherValidityDate: null,
                isAssociation: false,
                associationName: "",
                associationPosition: "",
                associateIndustry: "",
                isCompany: false,
                companyName: "",
                companyAddress: "",
                companyPosition: "",
                companyIndustry: "",
                isOtherWay: false,
                otherWayName: "",
                goWithGroup: true,
                backWithGroup: true,
                arrangement: true,
                otherArrangement: "",
                idCard: "",
                idCardValidityDate: null
            }
        };
    },
    computed: {
        ...mapGetters([
            "liaisonList",
            "currentUser",
            "currentInstitution",
            "timeNext"
        ]),
        selectedLiaison: function() {
            if (this.form.liaisonId) {
                const data = this.liaisonList.find(
                    item => item.id === this.form.liaisonId
                );
                return data ? data : this.form.liaison;
            }
            return {
                nameZh: "",
                nameEn: "",
                abroadPhone: "",
                phone: "",
                fax: "",
                email: "",
                address: ""
            };
        },
        isSubmit: function() {
            if (!this.form.status) {
                return false;
            } else {
                return this.form.status !== "rejected";
            }
        },
        isCheck: function() {
            return (
                this.form.status === "passed" ||
                this.form.status === "withdraw" ||
                this.form.status === "approving"
            );
        }
    },
    methods: {

        initData: async function() {
            if (this.formId) {
                this.$store.dispatch("setChangeFalse");
                const { data } = await PD.one(this.formId);
                this.form = formatMoment(data);
            } else {
                this.form.activityId = this.$crypto.decryption(
                    unescape(this.$route.query.a)
                );
            }
        },



        beforeUpload: function(file) {
            const isJPG =
                file.type === "image/jpeg" || file.type === "image/png";
            if (!isJPG) {
                this.$message.error("You can only upload JPG or JPEG file!");
            }
            const isLt5M = file.size / 1024 / 1024 < 5;
            if (!isLt5M) {
                this.$message.error("Image must smaller than 5MB!");
            }
            return isJPG && isLt5M;
        },
        handleChange: function(value,item) {
            
        if (value.file.status === "done") {
                let data = value.file.response;
                if (data.code === 200) {
                item.inboundFiles.push(data.data)
                
            }
          }
        },

        removeUploadFile: function(file,item) {
          item.inboundFiles.splice(item.index,1)
            
        },


        handleChange1: function(value,item) {
            if (value.file.status === "done") {
                let data = value.file.response;
                if (data.code === 200) {
                item.inboundFilesExhibition.push(data.data)
            }
          }
        },

        removeUploadFile1: function(file,item) {
          item.inboundFiles.splice(item.index,1)
            
        },



        handleLiaisonChange: function(value) {
            const o = this.liaisons.find(item => item.id === value);
            this.selectedLiaison = { ...o };
        },
        success: function() {
            this.$message.success("申請成功");
            this.$router.back();
        },
        handleSubmit: function() {
            this.form = formatString(this.form);
            this.$refs.MISSION.validate(async valid => {
                if (valid) {
                    if (!this.formId)
                        this.form = formatString({
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        });
                        console.log("8080",this.form)
                    const { data } = await PD.create(this.form);
                    data ? this.success() : "";
                } else {
                    this.$message.error("表單存在不符合情況，請檢查");
                }
            });

        }
    },
    mounted: function() {
        this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
        if (!this.formId) this.$store.dispatch("setTimeNext");
        this.initData();
    },
    destroyed: function() {
        this.$store.dispatch("setChangeTrue");
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.none {
    display: none;
}
.ant-divider-horizontal{
   min-width: 90%;
   width: 90%;
    margin-left: 3rem;
}
.ant-upload-picture-card-wrapper{
    width: 20%;
}
.ant-btn-circle, .ant-btn-circle-outline{
    margin-left: 60rem;
}
.form-container {
    width: 100%;
    .picture-list-content {
        width: 100%;
        padding: 0;
        & > span {
            display: inline-block;
        }
    }
}
.ant-upload-picture-card-wrapper[data-v-7247222a]{
    width: 100%;
}
.form-container /deep/ .ant-row{
    display: inline-block;
}

.form-container /deep/ .ant-upload-picture-card-wrapper{
    display: block;
}
</style>
