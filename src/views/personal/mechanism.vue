<template>
    <a-spin :spinning="spinning">
        <h1>{{ $t("personal.s") }}</h1>
        <a-form-model
            ref="form"
            :model="form"
            :rules="rules"
            style="width:100%;"
        >
            <a-form-model-item prop="logo" :label="$t('personal.logo')">
                <a-upload
                    name="file"
                    listType="picture-card"
                    :showUploadList="false"
                    :action="upFiles"
                    :beforeUpload="beforeUpload"
                    @change="imgChange"
                >
                    <img
                        v-if="form.logo"
                        :src="form.logo"
                        alt="avatar"
                        class="img"
                    />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                    </div>
                </a-upload>
            </a-form-model-item>
            <a-form-model-item prop="nameZh" :label="$t('personal.meNameZh')">
                <a-input v-model="form.nameZh"></a-input>
            </a-form-model-item>
            <a-form-model-item prop="nameEn" :label="$t('personal.meNameEn')">
                <a-input v-model="form.nameEn"></a-input>
            </a-form-model-item>
            <a-form-model-item prop="namePt" :label="$t('personal.meNamePt')">
                <a-input v-model="form.namePt"></a-input>
            </a-form-model-item>
            <a-form-model-item
                prop="siteRegistrationCode"
                :label="$t('personal.w')"
            >
                <a-input v-model="form.siteRegistrationCode"></a-input>
            </a-form-model-item>
            <a-form-model-item
                prop="registrationNumber"
                :label="$t('personal.u')"
            >
                <a-input v-model="form.registrationNumber"></a-input>
            </a-form-model-item>
            <a-form-model-item prop="taxpayerNo" :label="$t('personal.y')">
                <a-input v-model="form.taxpayerNo"></a-input>
            </a-form-model-item>
            <a-form-model-item prop="taxpayerName" :label="$t('personal.ay')">
                <a-input v-model="form.taxpayerName"></a-input>
            </a-form-model-item>
            <a-form-model-item
                prop="dateOfEstablishment"
                :label="$t('personal.z')"
            >
                <a-date-picker
                    v-model="form.dateOfEstablishment"
                    style="width:100%"
                />
            </a-form-model-item>
            <a-form-model-item prop="business" :label="$t('personal.aa')">
                <a-textarea v-model="form.business"></a-textarea>
            </a-form-model-item>
            <a-form-model-item prop="deal" :label="$t('personal.ab')">
                <a-radio-group v-model="form.deal">
                    <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                    <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item
                prop="shareholderComponents"
                :label="$t('personal.ac')"
            >
                <a-textarea v-model="form.shareholderComponents"></a-textarea>
            </a-form-model-item>
            <a-form-model-item>
                <a-button
                    :style="{ marginRight: '8px' }"
                    @click="$router.back()"
                    >Cancel</a-button
                >
                <a-button type="primary" @click="handleSubmit">ok</a-button>
            </a-form-model-item>
        </a-form-model>
    </a-spin>
</template>

<script>
import Liaison from "@/apis/liaison";
import { upFiles } from "@/apis/files";
import Upload from "@/components/upload";
import Institution from "@/apis/institution";
import User from "@/apis/user";
import { formatString } from "@/common/format";
export default {
    components: { Upload },

    data() {
        let config = { required: true, message: "Please input" };
        return {
            upFiles,
            rules: {
                logo: [config],
                nameZh: [config],
                nameEn: [config],
                namePt: [config],
                siteRegistrationCode: [config],
                registrationNumber: [config],
                taxpayerNo: [config],
                taxpayerName: [config],
                dateOfEstablishment: [config],
                business: [config],
                deal: [config],
                shareholderComponents: [config]
            },
            form: {
                adminId: this.$store.getters.currentUser,
                logo: "",
                nameZh: "",
                nameEn: "",
                namePt: "",
                siteRegistrationCode: "",
                registrationNumber: "",
                taxpayerNo: "",
                taxpayerName: "",
                dateOfEstablishment: null,
                business: "",
                deal: true,
                shareholderComponents: ""
            },
            loading: false,
            spinning: false,
            institutionId: undefined
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.spinning = true;
                    if (!this.institutionId) {
                        this.createInstitution();
                    } else {
                        this.putInstitution();
                    }
                }
            });
        },
        onSuccess: async function() {
            const { data } = await User.current();
            await this.$store.dispatch("setInfo", data);
            this.spinning = false;
            this.$message.success("操作成功");
            this.$router.replace("/personal/info");
        },
        beforeUpload(file) {
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
            if (info.file.status === "done") {
                let data = info.file.response;
                if (data.code === 200) {
                    this.form.logo = data.data.url;
                } else {
                    this.$message.error(data.message);
                }
                this.loading = false;
            }
        },
        async initData() {
            this.spinning = true;
            const data = await Institution.one(this.institutionId);
            if (data.code === 200) {
                this.form = data.data;
                this.form.dateOfEstablishment = this.$moment(
                    data.data.dateOfEstablishment
                );
                this.spinning = false;
            } else {
                this.$message.error(data.message);
            }
        },
        async createInstitution() {
            const { code, message } = await Institution.create(
                formatString(this.form)
            );
            if (code !== 200) {
                this.$message.error(message);
                return;
            }
            this.onSuccess();
        },
        async putInstitution() {
            const { code, message } = await Institution.update(
                formatString(this.form)
            );
            if (code !== 200) {
                this.$message.error(message);
                return;
            }
            await this.$store.dispatch("removeCurrentInstitution");
            this.onSuccess();
        }
    },
    mounted() {
        let institutionId = this.$route.query.institutionId;
        this.institutionId = institutionId;
        if (institutionId) {
            this.initData();
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
