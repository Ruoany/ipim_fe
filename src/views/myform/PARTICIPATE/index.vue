<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formab.aa')" />
            <a-step :title="$t('formab.ag')" />
            <a-step :title="$t('formab.am')" />
            <a-step :title="$t('formab.at')" />
            <a-step :title="$t('formab.ax')" />
            <a-step :title="$t('formab.bt')" />
        </a-steps>
        <a-form-model
            ref="PARTICIPATE"
            class="form"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <div v-show="stepCurrent === 0">
                <a-form-model-item :label="$t('formab.ac')">
                    <a-input disabled v-model="currentInstitution.nameZh" />
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.ad')">
                    <a-input
                        disabled
                        v-model="currentInstitution.siteRegistrationCode"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.ae')">
                    <a-input
                        disabled
                        v-model="currentInstitution.registrationNumber"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.af')">
                    <a-input v-model="form.exhibitionProduct" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-model-item prop="liaisonId" :label="$t('formab.ah')">
                    <a-select
                        showSearch
                        optionFilterProp="label"
                        :filterOption="true"
                        :notFoundContent="null"
                        class="full"
                        v-model="form.liaisonId"
                    >
                        <a-select-option
                            v-for="item in liaisonList"
                            :key="item.id"
                            :label="`${item.nameZh}${item.nameEnOrPt}`"
                            >{{ item.nameZh }}
                            {{ item.nameEnOrPt }}</a-select-option
                        >
                    </a-select>
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.ai')">
                    <a-input disabled v-model="selectedLiaison.abroadPhone" />
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.zz')">
                    <a-input disabled v-model="selectedLiaison.phone" />
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.aj')">
                    <a-input disabled v-model="selectedLiaison.fax" />
                </a-form-model-item>

                <a-form-model-item :label="$t('formab.ak')">
                    <a-input disabled v-model="selectedLiaison.email" />
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.al')">
                    <a-textarea disabled v-model="selectedLiaison.address" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-model-item :label="$t('formab.an')">
                    <upload
                        :value.sync="form.registrationOfBureauFiles"
                        decorator="registrationOfBureauFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.ao')">
                    <upload
                        :value.sync="form.macaoShareholderFiles"
                        decorator="macaoShareholderFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.ap')">
                    <upload
                        :value.sync="form.otherFiles"
                        decorator="otherFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.aq')">
                    <upload
                        :value.sync="form.taxpayerFiles"
                        decorator="taxpayerFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.ar')">
                    <upload
                        :value.sync="form.shareholderSamesFiles"
                        decorator="shareholderSamesFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.as')">
                    <upload
                        :value.sync="form.differentTaxpayerFiles"
                        decorator="differentTaxpayerFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-model-item :label="$t('formab.au')">
                    <upload
                        :value.sync="form.unitIntroductionFiles"
                        decorator="unitIntroductionFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('formab.aw')">
                    <upload
                        :value.sync="form.idcardFiles"
                        decorator="idcardFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-model-item>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.ay") }}</h3>
                        <li>{{ $t("formab.az") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.ba") }}</h3>
                        <li>{{ $t("formab.bb") }}</li>
                        <li>{{ $t("formab.bc") }}</li>
                        <li>{{ $t("formab.bd") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.be") }}</h3>
                        <li>{{ $t("formab.bf") }}</li>
                        <li>{{ $t("formab.bg") }}</li>
                        <li>{{ $t("formab.bh") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.bi") }}</h3>
                        <li>{{ $t("formab.bj") }}</li>
                        <li>{{ $t("formab.bk") }}</li>
                        <li>{{ $t("formab.bl") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.bm") }}</h3>
                        <li>{{ $t("formab.bn") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("formab.bo") }}</h3>
                        <li>{{ $t("formab.bp") }}</li>
                        <li>{{ $t("formab.bq") }}</li>
                        <li>{{ $t("formab.br") }}</li>
                        <li>{{ $t("formab.bs") }}</li>
                    </ul>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-model-item>
                    <div>{{ $t("formab.bu") }}</div>
                    <a-radio-group v-model="form.know">
                        <a-radio :value="true">{{ $t("formab.bv") }}</a-radio>
                        <a-radio :value="false">{{ $t("formab.bw") }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('formab.bx')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload
                        :value.sync="form.businessRegistrationFiles"
                        decorator="businessRegistrationFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('formab.by')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload
                        :value.sync="form.certificateBureauFiles"
                        decorator="certificateBureauFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('formab.bz')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload
                        :value.sync="form.salesTaxOpenFiles"
                        decorator="salesTaxOpenFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('formab.ca')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload
                        :value.sync="form.salesTaxFiles"
                        decorator="salesTaxFiles"
                        @handleChange="uploadChange"
                    ></upload>
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
                    v-show="stepCurrent < 5"
                    type="primary"
                    @click="stepCurrent++"
                    >下一步</a-button
                >
                <a-button
                    v-show="stepCurrent === 5"
                    type="primary"
                    @click="subForm"
                    >{{ $t("formaa.bt") }}</a-button
                >
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import Upload from "@/components/upload";
import validate from "./validate";
import PAA from "@/apis/participateAttendAbroad";
import { mapGetters } from "vuex";
export default {
    components: { Upload },
    data() {
        return {
            ...validate
        };
    },
    computed: {
        ...mapGetters([
            "currentForm",
            "liaisonList",
            "currentUser",
            "currentInstitution"
        ]),
        selectedLiaison: function() {
            if (!this.form.liaisonId)
                return {
                    abroadPhone: "",
                    phone: "",
                    fax: "",
                    email: "",
                    address: ""
                };
            const data = this.liaisonList.find(
                item => item.id === this.form.liaisonId
            );
            return data;
        }
    },
    methods: {
        initData: async function() {
            if (this.currentForm) {
                const { data } = await PAA.one(this.currentForm);
                this.form = data;
            }
        },
        onSuccess: function() {
            this.$message.success("申請成功");
            this.$router.back();
        },
        subForm() {
            this.$refs.PARTICIPATE.validate(async valid => {
                if (valid) {
                    const { data } = await PAA.create({
                        ...this.form,
                        institutionId: this.currentInstitution.id,
                        activityId: this.activityId,
                        applicantId: this.currentUser
                    });
                    data ? this.onSuccess() : "";
                }
            });
        },
        uploadChange(o) {
            this.form[o.item] = o.arr;
        }
    },
    mounted() {
        this.form.activityId = this.$route.query.activityId;
        this.initData();
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
</style>
