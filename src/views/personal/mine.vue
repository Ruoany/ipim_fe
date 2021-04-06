<template>
    <div class="container">
        <a-form-model
            ref="info"
            :model="info"
            :rules="rules"
            style="width:100%;"
        >
            <a-form-model-item prop="pic" :label="$t('util.pic')">
                <a-upload
                    name="file"
                    listType="picture-card"
                    :showUploadList="false"
                    :action="upFiles"
                    :beforeUpload="beforeUpload"
                    @change="imgChange"
                >
                    <img
                        v-if="info.pic"
                        :src="info.pic"
                        alt="avatar"
                        class="img"
                    />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                    </div>
                </a-upload>
            </a-form-model-item>

            <a-form-model-item prop="name" :label="$t('util.name')">
                <a-input v-model="info.name" />
            </a-form-model-item>
            <a-form-model-item :label="$t('util.password')">
                <a-button type="primary" @click="upPasswordVisible = true">{{
                    $t("util.upPassword")
                }}</a-button>
            </a-form-model-item>
            <a-form-model-item prop="phone" :label="$t('index.tel')">
                <a-input v-model="info.phone" />
            </a-form-model-item>
            <a-form-model-item prop="email" :label="$t('index.email')">
                <a-input v-model="info.email" />
            </a-form-model-item>
            <a-form-model-item prop="receives" :label="$t('personal.a')">
                <a-checkbox-group v-model="info.receives">
                    <a-checkbox value="EMAIL">{{
                        $t("index.email")
                    }}</a-checkbox>
                    <a-checkbox value="SMS">{{ $t("util.SMS") }}</a-checkbox>
                </a-checkbox-group>
            </a-form-model-item>
            <a-form-model-item>
                <a-button type="primary" @click="handleSubmit">{{
                    $t("util.save")
                }}</a-button>
            </a-form-model-item>
        </a-form-model>
        <a-modal
            :title="$t('util.upPassword')"
            :visible="upPasswordVisible"
            @ok="handleUpdatePwd"
            :confirmLoading="confirmLoading"
            @cancel="upPasswordVisible = false"
            :okText="$t('util.save')"
            :cancelText="$t('util.cancel')"
            destroyOnClose
        >
            <up-password ref="up"></up-password>
        </a-modal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import upPassword from "./components/upPassword";
import { upFiles } from "@/apis/files";
import User from "@/apis/user";
export default {
    components: { upPassword },
    data() {
        return {
            upPasswordVisible: false,
            confirmLoading: false,
            upFiles,
            loading: false,
            rules: {
                email: [
                    {
                        required: true,
                        message: "Please input the email address",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "Email address is incorrect",
                        trigger: "blur"
                    }
                ],
                pwd: [
                    {
                        required: true,
                        message: "Please input the password",
                        trigger: "blur"
                    },
                    {
                        pattern: /\w{6,20}/,
                        message: "Password format is incorrect",
                        trigger: "blur"
                    }
                ],
                confirm: [
                    {
                        validator: (rule, value, callback) => {
                            if (value !== this.form.pwd) {
                                callback(
                                    "Confirm that the password does not match the password"
                                );
                            } else {
                                callback();
                            }
                        },
                        trigger: "blur"
                    }
                ],
                name: [
                    {
                        required: true,
                        message: "Please input your name",
                        trigger: "blur"
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: "Please input your phone number",
                        trigger: "blur"
                    },
                    {
                        pattern: /\d/,
                        message: "Phone number format is incorrect",
                        trigger: "blur"
                    }
                ],
                receives: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value || value.length === 0) {
                                callback("Please check at least one");
                            } else {
                                callback();
                            }
                        }
                    }
                ]
            }
        };
    },
    computed: {
        ...mapGetters(["info"])
    },
    methods: {
        onSuccess: function(tips) {
            this.$message.success(tips);
        },
        handleSubmit() {
            this.$refs.info.validate(async valid => {
                if (valid) {
                    const { data, message } = await User.update(this.info);
                    if (!data) {
                        // this.$message.error(message);
                        return;
                    }
                    const { data: current } = await User.current();
                    this.$store.dispatch("setInfo", current);
                    this.onSuccess("修改成功");
                }
            });
        },
        handleUpdatePwd() {
            const { form, $refs } = this.$refs.up;
            $refs.pwd.validate(async valid => {
                if (valid) {
                    delete form.confirm;
                    const { success, message } = await User.updatePwd(form);
                    if (success) {
                        this.upPasswordVisible = false;
                        this.onSuccess(message);
                    }
                }
            });
        },
        beforeUpload(file) {
            const isJPG =
                file.type === "image/jpeg" || file.type === "image/png";
            if (!isJPG) {
                this.$message.error("You can only upload JPG and PNG file!");
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
                    this.info.pic = data.data.url;
                } else {
                    // this.$message.error(data.message);
                }
                this.loading = false;
            }
        },
    }
};
</script>

<style lang="less" scoped>

.img {
    width: 80px;
    max-height: 80px;
}
</style>
