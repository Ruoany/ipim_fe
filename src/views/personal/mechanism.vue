<template>
    <div>
        <h1>{{ $t("personal.s") }}</h1>
        <a-form :form="form" @submit="handleSubmit" style="width:100%;" layout="vertical">
            <a-form-item :label="$t('personal.logo')">
                <a-upload
                    name="file"
                    listType="picture-card"
                    :showUploadList="false"
                    :action="upFiles"
                    :beforeUpload="beforeUpload"
                    @change="imgChange"
                    v-decorator="[
                        'logo',
                        {
                            rules: [{ required: true, message: 'Please upload' }]
                        }
                    ]"
                >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="img" />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                    </div>
                </a-upload>
            </a-form-item>
            <a-form-item :label="$t('personal.meNameZh')">
                <a-input
                    v-decorator="[
                        'nameZh',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.meNameEn')">
                <a-input
                    v-decorator="[
                        'nameEn',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.meNamePt')">
                <a-input
                    v-decorator="[
                        'namePt',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.w')">
                <a-input
                    v-decorator="[
                        'siteRegistrationCode',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.u')">
                <a-input
                    v-decorator="[
                        'registrationNumber',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.y')">
                <a-input
                    v-decorator="[
                        'taxpayerNo',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.ay')">
                <a-input
                    v-decorator="[
                        'taxpayerName',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-input>
            </a-form-item>
            <a-form-item :label="$t('personal.z')">
                <a-date-picker
                    @change="dateChange"
                    style="width:100%;"
                    v-decorator="[
                        'dateOfEstablishment',
                        {
                            rules: [{ required: true, message: 'Please select' }]
                        }
                    ]"
                />
            </a-form-item>
            <a-form-item :label="$t('personal.aa')">
                <a-textarea
                    v-decorator="[
                        'business',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-textarea>
            </a-form-item>
            <a-form-item :label="$t('personal.ab')">
                <a-radio-group
                    v-decorator="[
                        'deal',
                        {
                            rules: [{ required: true, message: 'Please select' }]
                        }
                    ]"
                >
                    <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                    <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item :label="$t('personal.ac')">
                <a-textarea
                    v-decorator="[
                        'shareholderComponents',
                        {
                            rules: [{ required: true, message: 'Please input' }]
                        }
                    ]"
                ></a-textarea>
            </a-form-item>
            <div v-if="Certification">
                <a-form-item :label="$t('personal.ar')">
                    <a-select
                        style="width: 100%"
                        @change="natureChange"
                        v-decorator="[
                            'nature',
                            {
                                rules: [{ required: true, message: 'Please select' }]
                            }
                        ]"
                    >
                        <a-select-option value="UNIVERSITY">{{ $t("personal.ax") }}</a-select-option>
                        <a-select-option value="GOVERNMENT_ORGANS">{{ $t("personal.at") }}</a-select-option>
                        <a-select-option value="ENTERPRISE">{{ $t("personal.au") }}</a-select-option>
                        <a-select-option value="BUSINESS_OR_ASSOCIATION">{{ $t("personal.av") }}</a-select-option>
                        <a-select-option value="OTHER">{{ $t("personal.aw") }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :label="$t('personal.aj')" v-if="nature === 'ENTERPRISE'">
                    <upload
                        v-decorator="[
                            'businessRegistrationFiles',
                            {
                                rules: [{ required: true, message: 'Please upload' }]
                            }
                        ]"
                        decorator="businessRegistrationFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('personal.ak')" v-if="nature === 'ENTERPRISE'">
                    <upload
                        v-decorator="[
                            'salesTaxOpenFiles',
                            {
                                rules: [{ required: true, message: 'Please upload' }]
                            }
                        ]"
                        decorator="salesTaxOpenFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('personal.al')" v-if="nature === 'ENTERPRISE'">
                    <upload
                        v-decorator="[
                            'salesTaxFiles',
                            {
                                rules: [{ required: true, message: 'Please upload' }]
                            }
                        ]"
                        decorator="salesTaxFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('personal.am')" v-if="nature === 'ENTERPRISE'">
                    <upload
                        v-decorator="[
                            'shareholderSamesFiles',
                            {
                                rules: [{ required: true, message: 'Please upload' }]
                            }
                        ]"
                        decorator="shareholderSamesFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('personal.an')" v-if="nature === 'BUSINESS_OR_ASSOCIATION'">
                    <upload
                        v-decorator="[
                            'groupEstablishmentFiles',
                            {
                                rules: [{ required: true, message: 'Please upload' }]
                            }
                        ]"
                        decorator="groupEstablishmentFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('personal.ao')" v-if="nature === 'BUSINESS_OR_ASSOCIATION'">
                    <upload
                        v-decorator="[
                            'identificationBureauFiles',
                            {
                                rules: [{ required: true, message: 'Please upload' }]
                            }
                        ]"
                        decorator="identificationBureauFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
                <a-form-item :label="$t('personal.ap')" v-if="nature === 'BUSINESS_OR_ASSOCIATION'">
                    <upload
                        v-decorator="[
                            'legalPersonFiles',
                            {
                                rules: [{ required: true, message: 'Please upload' }]
                            }
                        ]"
                        decorator="legalPersonFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" :style="{ marginRight: '8px' }" @click="Certification = !Certification">{{
                    !Certification ? $t("personal.ah") : $t("personal.aq")
                }}</a-button>
                <a-button :style="{ marginRight: '8px' }" @click="$router.back()">Cancel</a-button>
                <a-button type="primary" html-type="submit">ok</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import Liaison from "@/apis/liaison";
import { upFiles } from "@/apis/files";
import Upload from "@/components/upload";
import Institution from "@/apis/institution";
export default {
    components: { Upload },

    data() {
        return {
            form: this.$form.createForm(this, { name: "coordinated" }),
            loading: false,
            imageUrl: "",
            upFiles,
            current: 1,
            Certification: false,
            nature: null
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    console.log(values);

                    const data = await Institution.create({ ...values, logo: this.imageUrl });
                    if (data.code === 200) {
                        this.$message.success("操作成功");
                        this.$router.replace("/personal/info");
                    } else {
                        this.$message.error(data.message);
                    }
                }
            });
        },

        beforeUpload(file) {
            console.log("file==>", file);
            const isJPG = file.type === "image/jpeg";
            if (!isJPG) {
                this.$message.error("You can only upload JPG file!");
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error("Image must smaller than 2MB!");
            }
            if (isJPG && isLt2M) {
                this.loading = true;
            }
            return isJPG && isLt2M;
        },
        imgChange(info) {
            console.log("info=>", info);
            if (info.file.status === "done") {
                let data = info.file.response;
                if (data.code === 200) {
                    this.imageUrl = data.data.url;
                } else {
                    this.$message.error(data.message);
                }
                this.loading = false;
            }
        },

        uploadChange(file) {
            console.log("file==>sssssss", file);
            // let value = file.va;
            let keyK = file.keys;

            this.form.setFieldsValue({ [keyK]: file.value });
        },
        //機構性質
        natureChange(e) {
            console.log(e);
            this.form.setFieldsValue({ ["nature"]: e });
            this.nature = e;
        },
        //
        dateChange(e) {
            this.form.setFieldsValue({ dateOfEstablishment: e.format("YYYY-MM-DD") });
        }
    }
};
</script>

<style lang="less" scoped>
.img {
    width: 150px;
    height: 150px;
}
</style>
