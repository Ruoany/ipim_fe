<template>
  <div class="form-container">
    <a-steps v-model="stepCurrent" direction="vertical" size="small">
      <a-step :title="$t('formbf.aa')" />
      <a-step :title="$t('formbf.ae')" />
      <a-step :title="$t('formbf.ak')" />
      <a-step :title="$t('formbf.ar')" />
      <a-step :title="$t('formbf.bt')" />
      <a-step :title="$t('formbf.az')" />
      <a-step :title="$t('formbf.be')" />
    </a-steps>
    <a-form-model class="form" ref="miecf" :rules="rules" :model="form" v-bind="formatLayout">
      <div v-show="stepCurrent === 0">
        <a-form-item>
          <ul>
            <li>{{ $t('formbf.ab') }}</li>
            <li>{{ $t('formbf.ac') }}</li>
            <li>{{ $t('formbf.ad') }}</li>
          </ul>
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 1">
        <a-form-item :label="$t('formbf.af')"></a-form-item>
        <a-form-item :label="$t('formbf.af1')">
          <a-input :value="currentInstitution.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.af2')">
          <a-input :value="currentInstitution.nameEn" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.af3')">
          <a-input :value="currentInstitution.namePt" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.aq')">
          <a-input :value="currentInstitution.streetZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.bw')">
          <a-input :value="currentInstitution.siteRegistrationCode" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.bx')">
          <a-input :value="currentInstitution.industryName" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.by')">
          <a-input :value="currentInstitution.taxpayerName" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.bz')">
          <a-input :value="currentInstitution.taxpayerNo" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.ca')">
          <a-input :value="currentInstitution.dateOfEstablishment" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.cb')">
          <a-input :value="currentInstitution.registrationNumber" disabled />
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 2">
        <a-form-model-item prop="liaisonId" :label="$t('formbf.al')">
          <a-select v-model="form.liaisonId" :disabled="isCheck">
            <a-select-option
              v-for="item in liaisonList"
              :key="item.id"
              :value="item.id"
              :label="`${item.nameZh}${item.nameEnOrPt}`"
              >{{ item.nameZh }} {{ item.nameEnOrPt }}</a-select-option
            >
          </a-select>
        </a-form-model-item>
        <a-form-item :label="$t('formbf.am')">
          <a-input :value="selectedLiaison.titleNameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.an')">
          <a-input :value="selectedLiaison.phone" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.ao')">
          <a-input :value="selectedLiaison.fax" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.ap')">
          <a-input :value="selectedLiaison.email" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbf.aq')">
          <a-input :value="selectedLiaison.address" disabled />
        </a-form-item>

        <a-form-model-item
          v-for="(room, index) in form.chiefShareHolders"
          :key="room.key"
          :label="index === 0 ? $t('formbf.cd') : ''"
          :prop="'chiefShareHolders.' + index + '.rooms'"
        >
          <a-row :gutter="10">
            <a-col :span="6">
              <a-input v-model="room.name" :placeholder="$t('formbf.al')" />
            </a-col>
            <a-col :span="8">
              <a-input v-model="room.taxCodeOrID" :placeholder="$t('formbf.ce')" />
            </a-col>
            <a-col :span="4">
              <a-input-number
                :min="0"
                :max="100"
                v-model.number="room.holdingPercent"
                style="width:100%"
                :placeholder="$t('formbf.cf')"
              />
            </a-col>
            <a-col :span="4">
              <a-input v-model="room.jobTitle" :placeholder="$t('formbf.cg')" />
            </a-col>
            <a-col :span="1">
              <a-icon type="plus" class="cur" @click="addDomain()" />
            </a-col>
            <a-col :span="1">
              <a-icon
                type="minus"
                class="cur"
                v-if="form.chiefShareHolders.length > 1"
                :disabled="form.chiefShareHolders.length === 1"
                @click="removeDomain(room)"
              />
            </a-col>
          </a-row>
        </a-form-model-item>

        <a-form-model-item :label="$t('formbf.cc')">
          <a-input-number v-model.number="form.macaoResiHoldPercent" :min="0" :max="100" style="width:100%" />
        </a-form-model-item>
      </div>
      <div v-show="stepCurrent === 3">
        <a-form-model-item :label="$t('formbf.as')" prop="ecPlatformNmae">
          <a-input v-model="form.ecPlatformNmae" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.at')" prop="ecProductInfo">
          <a-textarea v-model="form.ecProductInfo" :rows="4" />
        </a-form-model-item>
      </div>
      <div v-show="stepCurrent === 4">
        <a-form-model-item :label="$t('formbf.bu1')">
          <upload :value.sync="form.registerFiles" :disabled="isCheck" @handleChange="v=>uploadChange(v, 'registerFiles')" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.bu2')">
          <upload :value.sync="form.identityForms" :disabled="isCheck" @handleChange="v=>uploadChange(v, 'identityForms')" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.bu3')">
          <upload :value.sync="form.identityFiles" :disabled="isCheck" @handleChange="v=>uploadChange(v, 'identityFiles')" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.bu4')">
          <upload :value.sync="form.taxationBills" :disabled="isCheck" @handleChange="v=>uploadChange(v, 'taxationBills')" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.bu6')">
          <upload :value.sync="form.certs" :disabled="isCheck" @handleChange="v=>uploadChange(v, 'certs')" />
        </a-form-model-item>
        <a-form-item>
          {{ $t('formbf.bu8') }}
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 5">
        <a-form-model-item :label="$t('formbf.ba')" prop="costMember">
          <a-input-number v-model.number="form.costMember" :min="0" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.bb')" prop="costVAS">
          <a-input-number v-model.number="form.costVAS" :min="0" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.bc')" prop="costSiteConstruction">
          <a-input-number v-model.number="form.costSiteConstruction" :min="0" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbf.bc1')">
          <a-input-number :value="totalAmount" disabled style="width: 100%" />
        </a-form-model-item>
      </div>
      <div v-show="stepCurrent === 6">
        <a-form-model-item :wrapper-col="formatLayout.wrapperCol">
          <a-checkbox v-model="form.stateKnow" :disabled="isSelect1" @click="isSelect2 = !isSelect2">
            <span>{{ $t('formbf.bh') }}</span>
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="formatLayout.wrapperCol">
          <a-checkbox v-model="form.stateAgree" :disabled="isSelect2" @click="isSelect1 = !isSelect1">
            <span>{{ $t('formbf.bi') }}</span>
          </a-checkbox>
        </a-form-model-item>
      </div>
      <a-form-item>
        <a-button v-show="stepCurrent > 0" type="primary" @click="stepCurrent--" style="margin-right:12px"
          >上一步</a-button
        >
        <a-button v-show="stepCurrent < 6" type="primary" :disabled="timeNext > 0" @click="stepCurrent++">{{
          timeNext > 0 ? `(${timeNext}S)` : '下一步'
        }}</a-button>
        <a-button v-show="stepCurrent === 6" type="primary" :class="isSubmit ? 'none' : ''" @click="handleSubmit">{{
          $t('formbf.bv')
        }}</a-button>
      </a-form-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import validate from './validate';
import B2B from '@/apis/encourageB2B';
import Upload from '@/components/upload';
export default {
  components: { Upload },
  data() {
    return {
      ...validate,
      isSelect1:false,
      isSelect2:false,
      stepCurrent: 0,
      formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      },
      specialLayout: {
        wrapperCol: { span: 16, offset: 4 },
      },
      form: {
        stateKnow: false,
        stateAgree: false,
        costMember: '',
        costVAS: '',
        costSiteConstruction: '',
        applicantId: '',
        institutionId: '',
        ecPlatformNmae: '',
        ecProductInfo: '',
        registerFiles: [],
        identityForms: [],
        identityFiles: [],
        taxationBills: [],
        certs: [],
        chiefShareHolders: [{ key: Date.now(), name: '', taxCodeOrID: '', jobTitle: '', holdingPercent: '' }],
      },
    };
  },
  computed: {
    ...mapGetters(['liaisonList', 'currentInstitution', 'timeNext', 'encourageDis']),
    totalAmount() {
      return this.form.costMember + this.form.costVAS + this.form.costSiteConstruction;
    },
    selectedLiaison: function() {
      if (this.form.liaisonId) {
        const data = this.liaisonList.find((item) => item.id === this.form.liaisonId);
        return data ? data : this.form.liaison;
      }
      return {
        titleNameZh: '',
        phone: '',
        email: '',
        address: '',
        fax: '',
      };
    },
    selectedActivity: function() {
      if (this.form.activityId) {
        const data = this.list.find((item) => item.id === this.form.activityId);
        return data ? data : this.form.activity;
      }
      return {
        startTime: '',
        endTime: '',
        place: '',
      };
    },
    isSubmit: function() {
      if (!this.form.status) {
        return false;
      } else {
        return this.form.status !== 'rejected';
      }
    },
    isCheck: function() {
      return this.form.status === 'passed' || this.form.status === 'withdraw' || this.form.status === 'approving';
    },
  },
  methods: {
    initData: async function() {
      if (this.formId) {
        this.$store.dispatch('setChangeFalse');
        const { data } = await B2B.one(this.formId);
        this.form = data;
      } else {
        this.form.applicantId = this.currentUser;
        this.form.institutionId = this.currentInstitution.id;
      }
    },
    handleSubmit: async function() {
      if (!this.form.stateKnow && !this.form.stateAgree) {
        this.$message.error('請勾選以上申明條件');
        return;
      }
      this.$refs.miecf.validate(async (valid) => {
        if (valid) {
          let res;
          const form = { ...this.form, totalAmount: this.totalAmount, liaison: this.selectedLiaison };
          form.chiefShareHolders = form.chiefShareHolders.filter((i) => i.name != '');
          if (this.update) {
            res = await B2B.update(form);
          } else {
            res = await B2B.create(form);
          }
          if (res.code === 200) {
            this.$router.replace('/index');
          }
        }
      });
    },
    //上傳的文件
    uploadChange(info, type) {
        this.form[type] = info
    },
    removeDomain(item) {
      let index = this.form.chiefShareHolders.indexOf(item);
      if (index !== -1) {
        this.form.chiefShareHolders.splice(index, 1);
      }
    },
    addDomain() {
      this.form.chiefShareHolders.push({
        key: Date.now(),
        name: '',
        taxCodeOrID: '',
        jobTitle: '',
        holdingPercent: '',
      });
    },
  },
  mounted: function() {
    this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
    if (!this.formId) this.$store.dispatch('setTimeNext');
    this.initData();
    this.$nextTick(() => {
      //判斷是否是未認證機構
      if (this.encourageDis) this.isCertified();
    });
  },
  destroyed: function() {
    this.$store.dispatch('setChangeTrue');
  },
};
</script>

<style lang="less" scoped>
@import url('../css/form.less');
</style>
