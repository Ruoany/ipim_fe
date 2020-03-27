<template>
    <div class="container">
        <h1>{{ $t("personal.az") }}</h1>
        <a-form-model :rules="rules" :model="formData">
            <a-form-model-item :label="$t('personal.ar')" prop="nature">
                <a-select style="width: 100%" v-model="formData.nature">
                    <a-select-option value="UNIVERSITY">{{
                        $t("personal.ax")
                    }}</a-select-option>
                    <a-select-option value="GOVERNMENT_ORGANS">{{
                        $t("personal.at")
                    }}</a-select-option>
                    <a-select-option value="ENTERPRISE">{{
                        $t("personal.au")
                    }}</a-select-option>
                    <a-select-option value="BUSINESS_OR_ASSOCIATION">{{
                        $t("personal.av")
                    }}</a-select-option>
                    <a-select-option value="OTHER">{{
                        $t("personal.aw")
                    }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.aj')"
                v-if="formData.nature === 'ENTERPRISE'"
                prop="businessRegistrationFiles"
            >
                <upload
                    v-model="formData.businessRegistrationFiles"
                    decorator="businessRegistrationFiles"
                    @handleChange="uploadChange"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.ak')"
                v-if="formData.nature === 'ENTERPRISE'"
                prop="salesTaxOpenFiles"
            >
                <upload
                    v-model="formData.salesTaxOpenFiles"
                    decorator="salesTaxOpenFiles"
                    @handleChange="uploadChange"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.al')"
                v-if="formData.nature === 'ENTERPRISE'"
                prop="salesTaxFiles"
            >
                <upload
                    v-model="formData.salesTaxFiles"
                    decorator="salesTaxFiles"
                    @handleChange="uploadChange"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.am')"
                v-if="formData.nature === 'ENTERPRISE'"
                prop="shareholderSamesFiles"
            >
                <upload
                    v-model="formData.shareholderSamesFiles"
                    decorator="shareholderSamesFiles"
                    @handleChange="uploadChange"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.an')"
                v-if="formData.nature === 'BUSINESS_OR_ASSOCIATION'"
                prop="groupEstablishmentFiles"
            >
                <upload
                    v-model="formData.groupEstablishmentFiles"
                    decorator="groupEstablishmentFiles"
                    @handleChange="uploadChange"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.ao')"
                v-if="formData.nature === 'BUSINESS_OR_ASSOCIATION'"
                prop="identificationBureauFiles"
            >
                <upload
                    v-model="formData.identificationBureauFiles"
                    decorator="identificationBureauFiles"
                    @handleChange="uploadChange"
                ></upload>
            </a-form-model-item>
            <a-form-model-item
                :label="$t('personal.ap')"
                v-if="formData.nature === 'BUSINESS_OR_ASSOCIATION'"
                prop="legalPersonFiles"
            >
                <upload
                    v-model="formData.legalPersonFiles"
                    decorator="legalPersonFiles"
                    @handleChange="uploadChange"
                ></upload>
            </a-form-model-item>
            <a-form-model-item :model="formData">
                <a-button
                    :style="{ marginRight: '8px' }"
                    @click="$router.back()"
                    >Cancel</a-button
                >
                <a-button type="primary" @click="certified">ok</a-button>
            </a-form-model-item>
        </a-form-model>
        <a-descriptions bordered :title="$t('personal.m')" :column="1">
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
                form.shareholderComponents
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('personal.ab')">
                {{ form.deal === true ? $t("util.yes") : $t("util.no") }}
            </a-descriptions-item>
        </a-descriptions>
    </div>
</template>

<script>
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
            nature: null,
            formData: {
                nature: "",
                businessRegistrationFiles: [],
                salesTaxOpenFiles: [],
                salesTaxFiles: [],
                shareholderSamesFiles: [],
                groupEstablishmentFiles: [],
                identificationBureauFiles: [],
                legalPersonFiles: []
            },
            form: {},
            id: null,
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
    methods: {
        uploadChange(file) {
            console.log("file==>sssssss", file);
            // let value = file.va;
            // let keyK = file.keys;
            // this.formData[keyK] = file.value;

            // this.formData.setFieldsValue({ [keyK]: file.value });
        },
        async initData() {
            const data = await Institution.one(this.id);
            if (data.code === 200) {
                this.form = data.data;
            } else {
                this.$message.error(data.message);
            }
        },
        async certified() {
            const data = await Institution.certified({
                id: this.id,
                ...this.formData
            });
            if (data.code !== 200) {
                this.$message.error(data.message);
            } else {
                this.$router.replace("/personal/info");
            }
        }
    },
    mounted() {
        this.id = this.$route.query.institutionId;
        this.initData();
    }
};
</script>

<style lang="less" scoped>
.img {
    width: 150px;
    height: 150px;
}
/deep/.ant-descriptions-item-label {
    white-space: pre-wrap !important;
    width: 300px;
}
</style>
