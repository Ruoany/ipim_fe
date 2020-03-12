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
            <a-row :gutter="10">
                <a-col :span="9">
                    <a-date-picker style="width:100%" :placeholder="$t('formbd.bb')" />
                </a-col>
                <a-col :span="15"><a-input :placeholder="$t('formbd.bc')"/></a-col>
                <a-col :span="9">
                    <a-date-picker style="width:100%" :placeholder="$t('formbd.bb')" />
                </a-col>
                <a-col :span="15"><a-input :placeholder="$t('formbd.bc')"/></a-col>
                <a-col :span="9">
                    <a-date-picker style="width:100%" :placeholder="$t('formbd.bb')" />
                </a-col>
                <a-col :span="15"><a-input :placeholder="$t('formbd.bc')"/></a-col>
                <a-col :span="9">
                    <a-date-picker style="width:100%" :placeholder="$t('formbd.bb')" />
                </a-col>
                <a-col :span="15"><a-input :placeholder="$t('formbd.bc')"/></a-col>
            </a-row>
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

            <a-input :placeholder="$t('formbd.cn')" />
            <a-input :placeholder="$t('formbd.co')" />
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
export default {
    data() {
        return {
            upLabel: { span: 16, offset: 4 }
        };
    }
};
</script>

<style lang="less" scoped>
.full {
    width: 100%;
}
</style>
