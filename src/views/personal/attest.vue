<template>
    <div class="container">
        <a-button
            class="update"
            type="primary"
            @click="$router.push('/personal/mechanism')"
            >修改機構信息</a-button
        >
        <a-descriptions :title="$t('personal.m')" :column="1">
            <a-descriptions-item :label="$t('personal.logo')"
                ><img :src="form.logo" class="img"
            /></a-descriptions-item>
            <a-descriptions-item :label="$t('personal.meNameZh')">{{
                form.nameZh
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.meNameEn')">{{
                form.nameEn
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.meNamePt')">{{
                form.namePt
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.w')">{{
                form.siteRegistrationCode
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.u')">{{
                form.registrationNumber
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.y')">{{
                form.taxpayerNo
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.ay')">{{
                form.taxpayerName
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.z')">{{
                form.dateOfEstablishment
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.aa')">{{
                form.business
            }}</a-descriptions-item>

            <a-descriptions-item :label="$t('personal.ac')">{{
                form.institutionShareholders | formatShareholders
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.ab')">
                {{ form.deal === true ? $t("util.yes") : $t("util.no") }}
            </a-descriptions-item>
        </a-descriptions>
        <h1>{{ $t("personal.az") }}</h1>
        <a-form-model :rules="rules" :model="form">
            <a-form-model-item :label="$t('personal.ar')" prop="nature" >
                <a-select style="width: 100%" v-model="form.nature">
                    <a-select-option value="ENTERPRISE">{{
                        $t("personal.au")
                    }}</a-select-option>
                    <a-select-option value="BUSINESS_OR_ASSOCIATION">{{
                        $t("personal.av")
                    }}</a-select-option>
                    <a-select-option value="GOVERNMENT_ORGANS">{{
                        $t("personal.at")
                    }}</a-select-option>
                    <a-select-option value="UNIVERSITY">{{
                        $t("personal.ax")
                    }}</a-select-option>
                    <a-select-option value="OTHER">{{
                        $t("personal.aw")
                    }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.an')"
                v-if="form.nature === 'ENTERPRISE'"
                prop="salesTaxOpenFiles"
            >
                <upload
                    
                    :multiple="true"
                    :value.sync="form.salesTaxOpenFiles"
                    decorator="salesTaxOpenFiles"
                    @handleChange="v=>uploadChange(v, 'salesTaxOpenFiles')"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.ao')"
                v-if="form.nature === 'ENTERPRISE'"
                prop="salesTaxFiles"
            >
                <upload
                    :multiple="true"
                    :value.sync="form.salesTaxFiles"
                    decorator="salesTaxFiles"
                    @handleChange="v=>uploadChange(v, 'salesTaxFiles')"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.ap')"
                v-if="form.nature === 'ENTERPRISE'"
                prop="businessRegistrationFiles"
            >
                <upload
                    :multiple="true"
                    :value.sync="form.businessRegistrationFiles"
                    decorator="businessRegistrationFiles"
                    @handleChange="v=>uploadChange(v, 'businessRegistrationFiles')"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.aj')"
                v-if="form.nature === 'ENTERPRISE'"
                prop="shareholderSamesFiles"
            >
                <upload
                    :multiple="true"
                    :value.sync="form.shareholderSamesFiles"
                    decorator="shareholderSamesFiles"
                   @handleChange="v=>uploadChange(v, 'shareholderSamesFiles')"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.ak')"
                v-if="form.nature === 'BUSINESS_OR_ASSOCIATION'"
                prop="groupEstablishmentFiles"
            >
                <upload
                    :value.sync="form.groupEstablishmentFiles"
                    decorator="groupEstablishmentFiles"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.al')"
                v-if="form.nature === 'BUSINESS_OR_ASSOCIATION'"
                prop="identificationBureauFiles"
            >
                <upload
                    :value.sync="form.identificationBureauFiles"
                    decorator="identificationBureauFiles"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.am')"
                v-if="form.nature === 'BUSINESS_OR_ASSOCIATION'"
                prop="legalPersonFiles"
            >
                <upload
                    :value.sync="form.legalPersonFiles"
                    decorator="legalPersonFiles"
                ></upload>
            </a-form-model-item>
            <a-form-model-item :model="form">
                <a-button
                    :style="{ marginRight: '8px' }"
                    @click="$router.back()"
                    >{{ $t("util.cancel") }}</a-button
                >
                <a-button type="primary" @click="certified">{{
                    $t("util.submit")
                }}</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import User from "@/apis/user";
import Upload from "@/components/upload";
import Institution from "@/apis/institution";
export default {
    components: { Upload },
    data() {
        const config = {
            required: true,
            message: "please select",
            trigger: "blur"
        };
        return {
            // nature: null,
            // formData: {
            //     nature: [],
            //     businessRegistrationFiles: [],
            //     salesTaxOpenFiles: [],
            //     salesTaxFiles: [],
            //     shareholderSamesFiles: [],
            //     groupEstablishmentFiles: [],
            //     identificationBureauFiles: [],
            //     legalPersonFiles: []
            // },
            form: {
                nature: [],
                businessRegistrationFiles: [],
                salesTaxOpenFiles: [],
                salesTaxFiles: [],
                shareholderSamesFiles: [],
                groupEstablishmentFiles: [],
                identificationBureauFiles: [],
                legalPersonFiles: []
            },
            rules: {
                nature: [config],
                businessRegistrationFiles: [config],
                salesTaxOpenFiles: [config],
                salesTaxFiles: [config],
                shareholderSamesFiles: [config],
                groupEstablishmentFiles: [config],
                identificationBureauFiles: [config],
                legalPersonFiles: [config]
            }
        };
    },
    computed: {
        ...mapGetters(["currentInstitution"])
    },
    filters: {
        formatShareholders(value) {
            return value
                ? value
                      .map(item => {
                          return `${item.name}:${item.percent}%`;
                      })
                      .join(";")
                : "尚未設定";
        }
    },
    methods: {
        async initData() {
            const { data } = await Institution.one(this.currentInstitution.id);
            this.form = data ? data : {};
        },
        async certified() {
            const { data, code } = await Institution.certified({
                id: this.currentInstitution.id,
                ...this.form
            });
            if (code !== 200) {
                // this.$message.error(data.message);
                return;
            }
            await this.$store.dispatch("removeCurrentInstitution");
            const { data: user } = await User.current();
            await this.$store.dispatch("setInfo", user);
            this.$message.success("操作成功");
            this.$router.replace("/personal/info");
        },
        //上傳的文件
        uploadChange(info, type) {
            this.form[type] = info
        },
    },
    mounted() {
        this.$store.dispatch("setChangeFalse");
        this.initData();
    },
    destroyed() {
        this.$store.dispatch("setChangeTrue");
    }
};
</script>

<style lang="less" scoped>
.container {
    position: relative;
    .update {
        position: absolute;
        right: 0;
    }
    .img {
        width: 80px;
        max-height: 80px;
    }
    /deep/ .ant-descriptions-item > .ant-descriptions-item-label {
        width: 250px;
        text-align: right;
        white-space: pre-wrap;
        color: #aaa;
    }
    /deep/.ant-descriptions-item > .ant-descriptions-item-content {
        color: #000;
        padding-left: 20px;
        max-width: 700px;
    }
}
</style>
