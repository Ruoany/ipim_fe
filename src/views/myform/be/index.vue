<template>
  <div class="form-container">
    <a-steps v-model="stepCurrent" direction="vertical" size="small">
      <a-step :title="$t('formbe.aa')" />
      <a-step :title="$t('formbe.ae')" />
      <a-step :title="$t('formbe.ak')" />
      <a-step :title="$t('formbe.ar')" />
      <a-step :title="$t('formbe.bt')" />
      <a-step :title="$t('formbe.az')" />
      <a-step :title="$t('formbe.be')" />
    </a-steps>
    <a-form-model class="form" ref="miecf" :rules="rules" :model="form" v-bind="formatLayout">
      <div v-show="stepCurrent === 0">
        <a-form-item>
          <ul>
            <li>{{ $t('formbe.ab') }}</li>
            <li>{{ $t('formbe.ac') }}</li>
            <li>{{ $t('formbe.ad') }}</li>
          </ul>
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 1">
        <a-form-item :label="$t('formbe.af')"></a-form-item>
        <a-form-item :label="$t('formbe.af1')">
          <a-input :value="currentInstitution.nameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.af2')">
          <a-input :value="currentInstitution.nameEn" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.af3')">
          <a-input :value="currentInstitution.namePt" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.aq')">
          <a-input :value="currentInstitution.streetZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.bw')">
          <a-input :value="currentInstitution.siteRegistrationCode" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.bx')">
          <a-input :value="currentInstitution.industryName" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.by')">
          <a-input :value="currentInstitution.taxpayerName" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.bz')">
          <a-input :value="currentInstitution.taxpayerNo" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.ca')">
          <a-input :value="currentInstitution.dateOfEstablishment" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.cb')">
          <a-input :value="currentInstitution.registrationNumber" disabled />
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 2">
        <a-form-model-item prop="liaisonId" :label="$t('formbe.al')">
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
        <a-form-item :label="$t('formbe.am')">
          <a-input :value="selectedLiaison.titleNameZh" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.an')">
          <a-input :value="selectedLiaison.phone" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.ao')">
          <a-input :value="selectedLiaison.fax" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.ap')">
          <a-input :value="selectedLiaison.email" disabled />
        </a-form-item>
        <a-form-item :label="$t('formbe.aq')">
          <a-input :value="selectedLiaison.address" disabled />
        </a-form-item>
        <a-form-model-item
          v-for="(room, index) in form.chiefShareHolders"
          :key="room.key"
          :label="index === 0 ? $t('formbe.cd') : ''"
          :prop="'chiefShareHolders.' + index + '.rooms'"
        >
          <a-row :gutter="10">
            <a-col :span="6">
              <a-input :model="room.name" :placeholder="$t('formbe.al')" />
            </a-col>
            <a-col :span="8">
              <a-input :model="room.taxCodeOrID" :placeholder="$t('formbe.ce')" />
            </a-col>
            <a-col :span="4">
              <a-input-number
                :min="0"
                v-model.number="room.holdingPercent"
                style="width:100%"
                :placeholder="$t('formbe.cf')"
              />
            </a-col>
            <a-col :span="4">
              <a-input v-model="room.jobTitle" :placeholder="$t('formbe.cg')" />
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

        <a-form-model-item :label="$t('formbe.cc')">
          <a-input-number v-model.number="form.macaoResiHoldPercent" :min="0" style="width:100%" />
        </a-form-model-item>
      </div>
      <div v-show="stepCurrent === 3">
        <a-form-model-item :label="$t('formbe.as')" prop="ecPlatformNmae">
          <a-input v-model="form.ecPlatformNmae" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.at')" prop="ecProductInfo">
          <a-textarea v-model="form.ecProductInfo" :rows="4" />
        </a-form-model-item>
      </div>
      <div v-show="stepCurrent === 4">
        <a-form-model-item :label="$t('formbe.bu1')">
          <upload :value.sync="form.registerFiles" :disabled="isCheck" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bu2')">
          <upload :value.sync="form.identityForms" :disabled="isCheck" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bu3')">
          <upload :value.sync="form.identityFiles" :disabled="isCheck" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bu4')">
          <upload :value.sync="form.taxationBills" :disabled="isCheck" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bu5')">
          <upload :value.sync="form.productInfoFiles" :disabled="isCheck" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bu6')">
          <upload :value.sync="form.certs" :disabled="isCheck" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bu7')">
          <upload :value.sync="form.companyProfileFiles" :disabled="isCheck" />
        </a-form-model-item>
        <a-form-item>
          {{ $t('formbe.bu8') }}
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 5">
        <a-form-model-item :label="$t('formbe.ba')" prop="costTechAnnual">
          <a-input-number v-model.number="form.costTechAnnual" :min="0" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bb')" prop="costVAS">
          <a-input-number v-model.number="form.costVAS" :min="0" style="width: 100%" />
        </a-form-model-item>
        <a-form-model-item :label="$t('formbe.bc1')">
          <a-input-number :value="totalAmount" disabled :min="0" style="width: 100%" />
        </a-form-model-item>
      </div>
      <div v-show="stepCurrent === 6">
        <a-form-model-item :wrapper-col="formatLayout.wrapperCol">
          <a-checkbox :model="form.agreement">
            <span>{{ $t('formbe.bh') }}</span>
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="formatLayout.wrapperCol">
          <a-checkbox v-model="form.agreement2">
            <span>{{ $t('formbe.bi') }}</span>
          </a-checkbox>
        </a-form-model-item>
      </div>
      <a-form-model-item>
        <a-button v-show="stepCurrent > 0" type="primary" @click="stepCurrent--" style="margin-right:12px"
          >上一步</a-button>
        <a-button v-show="stepCurrent < 6" type="primary" :disabled="timeNext > 0" @click="stepCurrent++">{{
          timeNext > 0 ? `(${timeNext}S)` : '下一步'
        }}</a-button>
        <a-button v-show="stepCurrent === 6" type="primary" :class="isSubmit ? 'none' : ''" @click="handleSubmit">{{
          $t('formbe.bv')
        }}</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import validate from './validate';
import B2C from '@/apis/encourageB2C';
import Upload from '@/components/upload';
export default {
  components: { Upload },
  data() {
    return {
      ...validate,
      stepCurrent: 0,
      formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      },
      specialLayout: {
        wrapperCol: { span: 16, offset: 4 },
      },
      form: {
        agreement: false,
        agreement2: false,
        costTechAnnual: '',
        costVAS: '',
        applicantId: '',
        institutionId: '',
        ecPlatformNmae: '',
        ecProductInfo: '',
        registerFiles: [],
        identityForms: [],
        identityFiles: [],
        taxationBills: [],
        productInfoFiles: [],
        companyProfileFiles: [],
        certs: [],
        chiefShareHolders: [{ key: Date.now(), name: '', taxCodeOrID: '', jobTitle: '', holdingPercent: '' }],
      },
    };
  },
  computed: {
    ...mapGetters(['liaisonList', 'currentInstitution', 'timeNext', 'encourageDis']),
    totalAmount() {
      return this.form.costTechAnnual + this.form.costVAS;
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
        const { data } = await B2C.one(this.formId);
        this.form = data;
      } else {
        this.form.applicantId = this.currentUser;
        this.form.institutionId = this.currentInstitution.id;
      }
    },
    handleSubmit: async function() {
      if (!this.form.agreement && !this.form.agreement2) {
        this.$message.error('請勾選以上申明條件');
        return;
      }
      this.$refs.miecf.validate(async (valid) => {
        if (valid) {
          let res;
          const form = { ...this.form, totalAmount: this.totalAmount };
          form.chiefShareHolders = form.chiefShareHolders.filter((i) => i.name != '');
          if (this.update) {
            res = await B2C.update(form);
          } else {
            res = await B2C.create(form);
          }
          if (res.code === 200) {
            this.$router.push('personal/funding');
          }
        }
      });
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
