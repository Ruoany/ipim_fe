<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('participate.aa')" />
            <a-step :title="$t('participate.ag')" />
            <a-step :title="$t('participate.am')" />
            <a-step :title="$t('participate.at')" />
            <a-step :title="$t('participate.ax')" />
            <a-step :title="$t('participate.bt')" />
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
                <a-form-model-item :label="$t('participate.ac')">
                    <a-input disabled v-model="currentInstitution.nameZh" />
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.ad')">
                    <a-input
                        disabled
                        v-model="currentInstitution.siteRegistrationCode"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.ae')">
                    <a-input
                        disabled
                        v-model="currentInstitution.registrationNumber"
                    />
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.af')">
                    <a-input v-model="form.exhibitionProduct" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-model-item
                    prop="liaisonId"
                    :label="$t('participate.ah')"
                >
                    <a-select
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
                            >{{ item.nameZh }}
                            {{ item.nameEnOrPt }}</a-select-option
                        >
                    </a-select>
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.ai')">
                    <a-input disabled v-model="selectedLiaison.abroadPhone" />
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.zz')">
                    <a-input disabled v-model="selectedLiaison.phone" />
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.aj')">
                    <a-input disabled v-model="selectedLiaison.fax" />
                </a-form-model-item>

                <a-form-model-item :label="$t('participate.ak')">
                    <a-input disabled v-model="selectedLiaison.email" />
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.al')">
                    <a-textarea disabled v-model="selectedLiaison.address" />
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-model-item :label="$t('participate.an')">
                    <upload
                        :value.sync="form.registrationOfBureauFiles"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.ao')">
                    <upload :value.sync="form.macaoShareholderFiles"></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.ap')">
                    <upload :value.sync="form.otherFiles"></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.aq')">
                    <upload :value.sync="form.taxpayerFiles"></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.ar')">
                    <upload :value.sync="form.shareholderSamesFiles"></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.as')">
                    <upload :value.sync="form.differentTaxpayerFiles"></upload>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-model-item :label="$t('participate.au')">
                    <upload :value.sync="form.unitIntroductionFiles"></upload>
                </a-form-model-item>
                <a-form-model-item :label="$t('participate.aw')">
                    <upload :value.sync="form.idcardFiles"></upload>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-model-item>
                    <ul>
                        <h3 class="font-bold">{{ $t("participate.ay") }}</h3>
                        <li>{{ $t("participate.az") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("participate.ba") }}</h3>
                        <li>{{ $t("participate.bb") }}</li>
                        <li>{{ $t("participate.bc") }}</li>
                        <li>{{ $t("participate.bd") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("participate.be") }}</h3>
                        <li>{{ $t("participate.bf") }}</li>
                        <li>{{ $t("participate.bg") }}</li>
                        <li>{{ $t("participate.bh") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("participate.bi") }}</h3>
                        <li>{{ $t("participate.bj") }}</li>
                        <li>{{ $t("participate.bk") }}</li>
                        <li>{{ $t("participate.bl") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("participate.bm") }}</h3>
                        <li>{{ $t("participate.bn") }}</li>
                    </ul>
                    <ul>
                        <h3 class="font-bold">{{ $t("participate.bo") }}</h3>
                        <li>{{ $t("participate.bp") }}</li>
                        <li>{{ $t("participate.bq") }}</li>
                        <li>{{ $t("participate.br") }}</li>
                        <li>{{ $t("participate.bs") }}</li>
                    </ul>
                </a-form-model-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-model-item>
                    <div>{{ $t("participate.bu") }}</div>
                    <a-radio-group v-model="form.know">
                        <a-radio :value="true">{{
                            $t("participate.bv")
                        }}</a-radio>
                        <a-radio :value="false">{{
                            $t("participate.bw")
                        }}</a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('participate.bx')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload
                        :value.sync="form.businessRegistrationFiles"
                    ></upload>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('participate.by')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload :value.sync="form.certificateBureauFiles"></upload>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('participate.bz')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload :value.sync="form.salesTaxOpenFiles"></upload>
                </a-form-model-item>
                <a-form-model-item
                    :label="$t('participate.ca')"
                    :rules="{
                        required: !form.know,
                        message: 'please upload file',
                        tigger: 'blur'
                    }"
                >
                    <upload :value.sync="form.salesTaxFiles"></upload>
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
                    :class="isSubmit ? 'none' : ''"
                    type="primary"
                    @click="subForm"
                    >{{ $t("participate.cb") }}</a-button
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
            ...validate,
            formId: undefined,
            form: {
                activityId: null,
                businessRegistrationFiles: [],
                certificateBureauFiles: [],
                certs: [],
                differentTaxpayerFiles: [],
                exhibitionProduct: "",
                idcardFiles: [],
                institutionId: 0,
                know: true,
                liaisonId: null,
                macaoShareholderFiles: [],
                otherFiles: [],
                registrationOfBureauFiles: [],
                salesTaxFiles: [],
                salesTaxOpenFiles: [],
                shareholderSamesFiles: [],
                taxpayerFiles: [],
                unitIntroductionFiles: []
            }
        };
    },
    computed: {
        ...mapGetters(["liaisonList", "currentUser", "currentInstitution"]),
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
        },
        isSubmit: function() {
            if (!this.form.status) {
                return false;
            } else {
                return this.form.status !== "rejected";
            }
        }
    },
    methods: {
        initData: async function() {
            if (this.formId) {
                const { data } = await PAA.one(this.formId);
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
                    if (!this.formId)
                        this.form = {
                            ...this.form,
                            institutionId: this.currentInstitution.id,
                            applicantId: this.currentUser
                        };
                    const { data } = await PAA.create(this.form);
                    data ? this.onSuccess() : "";
                }
            });
        }
    },
    mounted() {
        this.form.activityId = this.$crypto.decryption(
            unescape(this.$route.query.a)
        );
        this.formId = this.$crypto.decryption(unescape(this.$route.query.d));
        this.initData();
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.none {
    display: none;
}
</style>
