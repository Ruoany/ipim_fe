<template>
    <div>
        <a-form-item :label="$t('formbd.activeTime')">
            <a-range-picker />
        </a-form-item>
        <a-form-item :label="$t('formbd.ae')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.af')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.ag')">
            <a-input />
            <a-textarea />
        </a-form-item>
        <a-form-item :label="$t('formbd.ah')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('formbd.aj')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
            </div>
        </a-form-item>
        <a-form-item :label="$t('formbd.ai')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
            </div>
        </a-form-item>
        <a-form-item :label="$t('formbd.ak')">
            <div class="flex-justify-content-space-between">
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
                <a-input style="width:24%;"></a-input>
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

<style></style>
