<template>
    <div>
        <a-form-item :label="$t('formbd.ax')">
            <div>{{ $t("formbd.ao") }}</div>
            <a-checkbox-group @change="onChange">
                <a-row>
                    <a-col :span="24">
                        <a-checkbox value="A">{{ $t("formbd.ap") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="B">{{ $t("formbd.aq") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="C">{{ $t("formbd.as") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="D">{{ $t("formbd.ay") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="E">{{ $t("formbd.aw") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="E">{{ $t("formbd.av") }}</a-checkbox>
                    </a-col>
                </a-row>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.az')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.ba')">
            <div>{{ $t("formbd.bb") }} <a-date-picker /></div>
            <div>{{ $t("formbd.bc") }} <a-input style="width:500px" /></div>
            <div>{{ $t("formbd.bb") }} <a-date-picker /></div>
            <div>{{ $t("formbd.bc") }} <a-input style="width:500px" /></div>
            <div>{{ $t("formbd.bb") }} <a-date-picker /></div>
            <div>{{ $t("formbd.bc") }} <a-input style="width:500px" /></div>
            <div>{{ $t("formbd.bb") }} <a-date-picker /></div>
            <div>{{ $t("formbd.bc") }} <a-input style="width:500px" /></div>
            <div>{{ $t("formbd.bb") }} <a-date-picker /></div>
            <div>{{ $t("formbd.bc") }} <a-input style="width:500px" /></div>
        </a-form-item>
        <a-form-item :label="$t('formbd.bf')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.bk')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.bq')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.br')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.bt')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.bw')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.bs')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.by')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.bz')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.df')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.bw')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.cj')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.dg')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbd.cl')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
            <div>{{ $t("formbd.cn") }}<a-input style="width:500px" /></div>
            <div>{{ $t("formbd.co") }} <a-input style="width:500px" /></div>
        </a-form-item>
        <a-form-item :label="$t('formbd.cq')">
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label="$t('formbd.dh')">
            <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </a-upload-dragger>
        </a-form-item>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
