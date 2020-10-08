<template>
    <div class="all">
        <a-form-item :label="$t('convention.activeTime')">
            <a-range-picker class="full" />
        </a-form-item>
        <a-form-item :label="$t('convention.meetingAddress')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('convention.meetingCycle')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("convention.di") }}</a-radio>
                <a-radio :value="2">{{ $t("convention.dj") }}</a-radio>
                <a-radio :value="3">{{ $t("convention.dl") }}</a-radio>
                <a-radio :value="4"
                    >{{ $t("util.other") }}({{ $t("convention.dm") }})</a-radio
                >
            </a-radio-group>
            <a-input :placeholder="$t('convention.dm')"></a-input>
        </a-form-item>
        <a-form-item :label="$t('convention.meetingTime')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('convention.meetingAllDay')">
            <a-row :gutter="10">
                <a-col :span="10"><a-date-picker class="full"/></a-col>
                <a-col :span="14"
                    ><a-input :placeholder="$t('convention.ee')"></a-input
                ></a-col>
            </a-row>
        </a-form-item>
        <a-form-item :label="$t('convention.ed')">
            <a-row :gutter="10">
                <a-col :span="10"><a-date-picker class="full"/></a-col>
                <a-col :span="14"
                    ><a-input :placeholder="$t('convention.ee')"></a-input
                ></a-col>
            </a-row>
        </a-form-item>
        <a-form-item :label="$t('convention.meetingArea')">
            <a-radio-group name="radioGroup">
                <a-radio :value="1">{{ $t("convention.eg") }}</a-radio>
                <a-radio :value="2">{{ $t("convention.eh") }}</a-radio>
                <a-radio :value="3">{{ $t("convention.ei") }}</a-radio>
            </a-radio-group>
            <a-row :gutter="10">
                <a-col :span="6"> <a-date-picker class="full"/></a-col>
                <a-col :span="18"> <a-input /></a-col>
            </a-row>

            <a-upload-dragger name="file" :multiple="true">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">
                    Click or drag file to this area to upload
                </p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                </p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label="$t('convention.parInformation')">
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
                <p class="ant-upload-text">
                    Click or drag file to this area to upload
                </p>
                <p class="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
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
@import url("../css/form.less");
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
</style>
