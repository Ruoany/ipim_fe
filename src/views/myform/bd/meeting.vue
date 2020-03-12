<template>
    <div>
        <a-form-item :label="$t('formbd.activeTime')">
            <a-range-picker />
        </a-form-item>
        <a-form-item :label="$t('formbd.meetingAddress')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.meetingCycle')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("formbd.di") }}</a-radio>
                <a-radio :value="2">{{ $t("formbd.dj") }}</a-radio>
                <a-radio :value="3">{{ $t("formbd.dl") }}</a-radio>
                <a-radio :value="4">{{ $t("util.other") }}({{ $t("formbd.dm") }})</a-radio>
            </a-radio-group>
            <a-input :placeholder="$t('formbd.dm')"></a-input>
        </a-form-item>
        <a-form-item :label="$t('formbd.meetingTime')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.meetingAllDay')">
            <a-row :gutter="10">
                <a-col :span="6"><a-date-picker /></a-col>
                <a-col :span="9"><a-input></a-input></a-col>
                <a-col :span="9"><a-input></a-input></a-col>
            </a-row>
        </a-form-item>
        <a-form-item :label="$t('formbd.meetingArea')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("formbd.ed") }}</a-radio>
                <a-radio :value="2">{{ $t("formbd.ee") }}</a-radio>
                <a-radio :value="3">{{ $t("formbd.ef") }}</a-radio>
            </a-radio-group>
            <a-row>
                <a-col :span="6"> <a-date-picker /></a-col>
                <a-col :span="18"> <a-input /></a-col>
            </a-row>

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
        <a-form-item :label="$t('formbd.parInformation')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:32%;"></a-input>
                <a-input style="width:32%;"></a-input>
                <a-input style="width:32%;"></a-input>
            </div>
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

<style></style>
