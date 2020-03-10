<template>
    <div>
        <a-form-item :label="$t('form.activeTime')">
            <a-range-picker />
        </a-form-item>
        <a-form-item :label="$t('form.meetingAddress')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('form.meetingCycle')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('form.meetingTime')">
            <a-input />
            <a-textarea />
        </a-form-item>
        <a-form-item :label="$t('form.meetingAllDay')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('form.meetingArea')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('form.parInformation')" :wrapperCol="upLabel">
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
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
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

<style>
</style>