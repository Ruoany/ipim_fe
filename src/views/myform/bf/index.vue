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
    <a-form-model class="form" ref="enterprise" :form="form" v-bind="formatLayout">
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
          <a-input :value="currentInstitution.street" disabled />
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
      </div>
      <div v-show="stepCurrent === 3">
        <a-form-item :label="$t('formbf.as')">
          <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.at')">
          <a-textarea v-decorator :rows="4" />
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 4">
        <a-form-item :label="$t('formbf.bu')"> </a-form-item>
        <a-form-item>
          <ul>
            <li>{{ $t('formbf.bu1') }}</li>
            <li>{{ $t('formbf.bu2') }}</li>
            <li>{{ $t('formbf.bu3') }}</li>
            <li>{{ $t('formbf.bu4') }}</li>
            <li>{{ $t('formbf.bu5') }}</li>
            <li>{{ $t('formbf.bu6') }}</li>
            <li>{{ $t('formbf.bu7') }}</li>
            <li>{{ $t('formbf.bu8') }}</li>
          </ul>
        </a-form-item>
        <a-form-item :label="$t('formbf.bd')">
          <upload />
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 5">
        <a-form-item :label="$t('formbf.ba')">
          <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bb')">
          <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.bc')">
          <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbe.bc1')">
          <a-input disabled />
        </a-form-item>
      </div>
      <div v-show="stepCurrent === 6">
        <a-form-item :wrapper-col="formatLayout.wrapperCol">
          <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
            <span>{{ $t('formbf.bh') }}</span>
          </a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="formatLayout.wrapperCol">
          <a-checkbox v-decorator="['agreement2', { valuePropName: 'checked' }]">
            <span>{{ $t('formbf.bi') }}</span>
          </a-checkbox>
        </a-form-item>
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
import B2C from "@/apis/encourageB2C";
import Upload from '@/components/upload';
export default {
  components: { Upload },
  computed: {
    ...mapGetters(['liaisonList', 'currentInstitution', 'timeNext', 'encourageDis']),
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
          institutionId: ""
      },
    };
  },
  methods: {
    initData: async function() {
      if (this.formId) {
        this.$store.dispatch('setChangeFalse');
        const { data } = await B2C.one(this.formId);
        this.form = data;
      } else {
        this.form.institutionId = this.currentInstitution.id;
      }
    },
    handleSubmit: function(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('--->', values);
        }
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
