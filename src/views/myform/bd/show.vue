<template>
    <div>
        <a-form-item :label="$t('formbd.activeTime')">
            <a-range-picker class="full" />
        </a-form-item>
        <a-form-item :label="$t('formbd.ae')">
            <a-row :gutter="10">
                <a-col :span="11"><a-range-picker showTime style="margin-right:10px" /> </a-col>
                <a-col :span="11">
                    <a-input :placeholder="$t('formbd.es')" type="number" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="plus" class="cur" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="minus" class="cur" />
                </a-col>
            </a-row>
        </a-form-item>
        <a-form-item :label="$t('formbd.af')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.ag')">
            <a-input />
            <a-textarea :placeholder="$t('formbd.ew')" :autosize="{ minRows: 4 }" />
        </a-form-item>
        <a-form-item :label="$t('formbd.ah')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("formbd.di") }}</a-radio>
                <a-radio :value="2">{{ $t("formbd.dj") }}</a-radio>
                <a-radio :value="3">{{ $t("formbd.dl") }}</a-radio>
                <a-radio :value="4">{{ $t("util.other") }}({{ $t("formbd.dm") }})</a-radio>
            </a-radio-group>
            <a-input :placeholder="$t('formbd.dm')"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formbd.aj')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;" :placeholder="$t('formbd.ep')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.eq')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.er')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.ex')"></a-input>
            </div>
        </a-form-item>
        <a-form-item :label="$t('formbd.ai')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;" :placeholder="$t('formbd.ep')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.eq')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.er')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.ex')"></a-input>
            </div>
        </a-form-item>
        <a-form-item :label="$t('formbd.ak')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;" :placeholder="$t('formbd.ep')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.eq')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.er')"></a-input>
                <a-input style="width:24%;" :placeholder="$t('formbd.ex')"></a-input>
            </div>
        </a-form-item>

        <a-form-item :label="$t('formbd.al')">
            <a-input />
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
        return {};
    }
};
</script>

<style lang="less" scoped>
.cur {
    cursor: pointer;
}
.full {
    width: 100%;
}
</style>
