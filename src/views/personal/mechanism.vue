<template>
    <a-spin v-if="form.status !== 'passed' && role" :spinning="spinning">
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
            <a-form-model-item :label="$t('personal.y')">
                <a-input v-model="form.taxpayerNo"></a-input>
            </a-form-model-item>
            <a-form-model-item :label="$t('personal.ay')">
                <a-input v-model="form.taxpayerName"></a-input>
            </a-form-model-item>
            <a-form-model-item :label="$t('personal.z')">
                <a-month-picker
                    v-model="form.dateOfEstablishment"
                    style="width:100%"
                />
            </a-form-model-item>
            <a-form-model-item :label="$t('personal.aa')">
                <a-textarea v-model="form.business"></a-textarea>
            </a-form-model-item>
            <a-form-model-item :label="$t('personal.ab')">
                <a-radio-group v-model="form.deal">
                    <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                    <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item
                prop="institutionShareholderVOS"
                :label="$t('personal.ac')"
            >
                <div
                    v-for="(item, index) in form.institutionShareholders"
                    :key="index"
                    class="shareholder-wrapper"
                >
                    <a-input
                        v-model="item.name"
                        :placeholder="$t('personal.shareName')"
                    ></a-input>
                    <a-input
                        v-model="item.percent"
                        :placeholder="$t('personal.sharePer')"
                    ></a-input>
                    <a-button
                        v-if="index == 0"
                        shape="circle"
                        icon="plus"
                        type="primary"
                        @click="
                            form.institutionShareholders.push({
                                name: '',
                                percent: ''
                            })
                        "
                    ></a-button>
                    <a-button
                        v-else
                        shape="circle"
                        icon="minus"
                        @click="form.institutionShareholders.splice(index, 1)"
                    ></a-button>
                </div>
            </a-form-model-item>
            <a-form-model-item>
                <a-button
                    :style="{ marginRight: '8px' }"
                    @click="$router.back()"
                    >{{ $t("util.cancel") }}</a-button
                >
                <a-button type="primary" @click="handleSubmit">{{
                    $t("util.save")
                }}</a-button>
            </a-form-model-item>
        </a-form-model>
    </a-spin>
    <a-descriptions v-else :title="$t('personal.m')" :column="1">
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
</template>

<script>
import { mapGetters } from "vuex";
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
                institutionShareholders: [config]
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
                institutionShareholders: [{ name: "", percent: "" }]
            },
            loading: false,
            spinning: false
        };
    },
    computed: {
        ...mapGetters(["currentInstitution", "currentUser"]),
        role() {
            return (
                this.$route.query.type === "new" ||
                this.currentInstitution.adminId === this.currentUser
            );
        }
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
                    // this.$message.error(data.message);
                }
                this.loading = false;
            }
        },
        async onSuccess() {
            const { data } = await User.current();
            await this.$store.dispatch("setInfo", data);
            this.spinning = false;
            this.$message.success("操作成功");
            this.$router.replace("/personal/info");
        },
        async handleSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.spinning = true;
                    const { code, message } = await Institution.create(
                        formatString(this.form)
                    );
                    if (code !== 200) {
                        this.$message.error(message);
                        return;
                    }
                    if (!this.$route.query.type) {
                        await this.$store.dispatch("removeCurrentInstitution");
                    }
                    this.onSuccess();
                }
            });
        },
        async initData() {
            this.spinning = true;
            const { data } = await Institution.one(this.currentInstitution.id);
            this.form = data;
            if (this.form.institutionShareholders.length === 0) {
                this.form.institutionShareholders.push({
                    name: "",
                    percent: ""
                });
            }
            if (
                this.form.status !== "passed" &&
                this.form.dateOfEstablishment
            ) {
                this.form.dateOfEstablishment = this.$moment(
                    data.dateOfEstablishment
                );
            }
            this.spinning = false;
        }
    },
    mounted() {
        if (!this.$route.query.type) {
            this.initData();
        }
    }
};
</script>

<style lang="less" scoped>
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
.shareholder-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    input {
        width: 46%;
    }
}
</style>
