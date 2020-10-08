<template>
    <a-form-model ref="form" :model="form" :rules="rules" class="form">
        <div class="flex flex-justify-content-space-between">
            <a-form-model-item
                prop="nameZh"
                :label="$t('util.nameZh')"
                class="inline"
            >
                <a-input v-model="form.nameZh" />
            </a-form-model-item>
            <a-form-model-item
                prop="nameEnOrPt"
                :label="$t('util.nameEnAndPt')"
                class="inline"
            >
                <a-input v-model="form.nameEnOrPt" />
            </a-form-model-item>
        </div>
        <div class="flex flex-justify-content-space-between">
            <a-form-model-item
                prop="titleNameZh"
                :label="$t('personal.e')"
                class="inline"
            >
                <a-input v-model="form.titleNameZh" />
            </a-form-model-item>
            <a-form-model-item
                prop="titleNameEnOrPt"
                :label="$t('personal.ai')"
                class="inline"
            >
                <a-input v-model="form.titleNameEnOrPt" />
            </a-form-model-item>
        </div>
        <div class="flex  flex-justify-content-space-between">
            <a-form-model-item
                prop="gender"
                :label="$t('util.sex')"
                class="inline"
            >
                <a-radio-group v-model="form.gender">
                    <a-radio value="M">{{ $t("util.man") }}</a-radio>
                    <a-radio value="F">{{ $t("util.woman") }}</a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item
                prop="incumbency"
                :label="$t('personal.f')"
                class="inline"
            >
                <a-radio-group v-model="form.incumbency">
                    <a-radio :value="true">{{ $t("personal.g") }}</a-radio>
                    <a-radio :value="false">{{ $t("personal.h") }}</a-radio>
                </a-radio-group>
            </a-form-model-item>
        </div>
        <div class="flex  flex-justify-content-space-between">
            <a-form-model-item
                prop="tel"
                :label="$t('index.tel')"
                class="inline"
            >
                <a-input v-model="form.tel">
                    <a-select
                        v-model="form.telAreaCodeId"
                        slot="addonBefore"
                        showSearch
                        optionFilterProp="label"
                        optionLabelProp="code"
                        style="width:80px;"
                        :dropdownMatchSelectWidth="false"
                        placeholder="區號"
                    >
                        <a-select-option
                            v-for="item in codeList"
                            :key="item.id"
                            :value="item.id"
                            :label="`${item.nameZh}${item.nameEn}${item.code}`"
                            :code="item.code"
                            >{{
                                `${item.nameZh}--${item.nameEn}--${item.code}`
                            }}</a-select-option
                        >
                    </a-select>
                </a-input>
            </a-form-model-item>
            <a-form-model-item
                prop="phone"
                :label="$t('util.aphone')"
                class="inline"
            >
                <a-input v-model="form.phone">
                    <a-select
                        v-model="form.inAreaCodeId"
                        slot="addonBefore"
                        showSearch
                        optionFilterProp="label"
                        optionLabelProp="code"
                        style="width:80px;"
                        :dropdownMatchSelectWidth="false"
                        placeholder="區號"
                    >
                        <a-select-option
                            v-for="item in codeList"
                            :key="item.id"
                            :value="item.id"
                            :label="`${item.nameZh}${item.nameEn}${item.code}`"
                            :code="item.code"
                            >{{
                                `${item.nameZh}--${item.nameEn}--${item.code}`
                            }}</a-select-option
                        >
                    </a-select>
                </a-input>
            </a-form-model-item>
        </div>
        <div class="flex  flex-justify-content-space-between">
            <a-form-model-item
                prop="abroadPhone"
                :label="$t('util.bphone')"
                class="inline"
            >
                <a-input v-model="form.abroadPhone">
                    <a-select
                        v-model="form.abroadAreaCodeId"
                        slot="addonBefore"
                        showSearch
                        optionFilterProp="label"
                        optionLabelProp="code"
                        style="width:80px;"
                        :dropdownMatchSelectWidth="false"
                    >
                        <a-select-option
                            v-for="item in codeList"
                            :key="item.id"
                            :value="item.id"
                            :label="`${item.nameZh}${item.nameEn}${item.code}`"
                            :code="item.code"
                            >{{
                                `${item.nameZh}--${item.nameEn}--${item.code}`
                            }}</a-select-option
                        >
                    </a-select>
                </a-input>
            </a-form-model-item>
            <a-form-model-item
                prop="email"
                :label="$t('index.email')"
                class="inline"
            >
                <a-input v-model="form.email" />
            </a-form-model-item>
        </div>
        <div class="flex  flex-justify-content-space-between">
            <a-form-model-item
                prop="fax"
                :label="$t('index.fax')"
                class="inline"
            >
                <a-input v-model="form.fax" />
            </a-form-model-item>
            <a-form-model-item
                prop="address"
                :label="$t('util.address')"
                class="inline"
            >
                <a-input v-model="form.address" />
            </a-form-model-item>
        </div>
        <div
            :style="{
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff'
            }"
        >
            <a-button
                :style="{ marginRight: '8px' }"
                @click="$emit('update:visible', false)"
                >{{ $t("util.cancel") }}</a-button
            >
            <a-button type="primary" @click="handleSubmit">{{
                $t("util.save")
            }}</a-button>
        </div>
    </a-form-model>
</template>

<script>
import { mapGetters } from "vuex";

import Liaison from "@/apis/liaison";

export default {
    props: {
        selectedId: [Number, String],
        institutionId: [Number, String],
        visible: Boolean
    },
    data() {
        const config = { required: true, message: "Please Input" };
        return {
            loading: false,
            rules: {
                nameZh: [
                    {
                        validator: (rule, value, callback) => {
                            if (this.form.nameEnOrPt || value) {
                                callback();
                            }
                            callback("Fill in at least one of two items");
                        }
                    }
                ],
                nameEnOrPt: [
                    {
                        validator: (rule, value, callback) => {
                            if (this.form.nameZh || value) {
                                callback();
                            }
                            callback("Fill in at least one of two items");
                        }
                    }
                ],
                gender: [{ required: true }],
                titleNameZh: [
                    {
                        validator: (rule, value, callback) => {
                            if (this.form.titleNameEnOrPt || value) {
                                callback();
                            }
                            callback("Fill in at least one of two items");
                        }
                    }
                ],
                titleNameEnOrPt: [
                    {
                        validator: (rule, value, callback) => {
                            if (this.form.titleNameZh || value) {
                                callback();
                            }
                            callback("Fill in at least one of two items");
                        }
                    }
                ],
                tel: [config],
                phone: [config],
                email: [
                    config,
                    {
                        type: "email",
                        message: "Please input the correct email address"
                    }
                ],
                fax: [config],
                address: [config],
                incumbency: [config]
            },
            form: {
                nameZh: "",
                nameEnOrPt: "",
                gender: "M",
                titleNameZh: "",
                titleNameEnOrPt: "",
                tel: "",
                telAreaCodeId: 2,
                abroadPhone: "",
                abroadAreaCodeId: 2,
                phone: "",
                inAreaCodeId: 2,
                email: "",
                fax: "",
                address: "",
                incumbency: true
            }
        };
    },
    computed: {
        ...mapGetters(["codeList", "liaisonList"])
    },
    methods: {
        initData: async function() {
            if (this.selectedId) {
                this.loading = true;
                const { data } = await Liaison.one(this.selectedId);
                this.form = data;
                this.loading = false;
            }
        },
        handleSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    const { data, message, code } = await Liaison.create({
                        ...this.form,
                        institutionId: this.institutionId
                    });
                    if (code === 200) {
                        this.$message.success(
                            this.selectedId ? "修改成功" : "添加成功"
                        );
                        this.$emit(
                            "submit",
                            this.selectedId ? "update" : "add"
                        );
                        return;
                    }
                }
            });
        }
    },
    mounted: function() {
        this.initData();
    }
};
</script>

<style lang="less" scoped>
.form {
    width: 100%;
    .inline {
        width: 350px;
    }
}
</style>
