<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">{{$t('general.basic')}}</div>
        <a-form-item
            :label="$t('form.communityTitle')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator="name" />
        </a-form-item>
        <a-form-item
            :label="$t('form.submit')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <div class="form-content">
                <ul>
                    <li>{{$t('general.file1')}}</li>
                    <li>{{$t('general.file2')}}</li>
                    <li>{{$t('general.file3')}}</li>
                </ul>
            </div>
            <a-upload-dragger v-decorator="files" name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>

        <div class="form-item-title">{{$t('general.contact')}}</div>
        <a-form-item
            :label="$t('form.name')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item
            :label="$t('form.position')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('form.tel')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('form.fax')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('form.email')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('form.address')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">{{$t('general.exhibition')}}</div>
        <a-form-item
            :label="$t('form.exhibitionName')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.exhibitionAddress')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.exhibitionDate')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item
            :label="$t('form.exhibitionIntroduction')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-textarea v-decorator :rows="4" />
            <div>{{$t('general.exhibitionIntroduction')}}</div>
        </a-form-item>
        <a-form-item
            :label="$t('form.exhibitionPurpose')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item
            :label="$t('form.exhibitionResult')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <div class="form-item-title">{{$t('general.application')}}</div>
        <a-form-item
            :label="$t('form.area')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.rent')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.cost')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('form.attach')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">{{$t('general.statement')}}</div>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('general.statement1')}}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('util.yes')}}</a-radio>
                <a-radio value="b">{{$t('util.no')}}</a-radio>
            </a-radio-group>
            <div>{{$t('general.statement3')}}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('general.statement2')}}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('util.yes')}}</a-radio>
                <a-radio value="b">{{$t('util.no')}}</a-radio>
            </a-radio-group>
            <div>{{$t('general.statement3')}}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
                <span>{{$t('general.statement4')}}</span>
            </a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <a-button size="large" type="primary" html-type="submit">提交</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import validate from "./validate";
export default {
    data() {
        return {
            formatLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 }
            },
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
            },
            form: this.$form.createForm(this),
            ...validate
        };
    },
    methods: {
        handleSubmit: function(e) {
            e.preventDefault();
            this.$form.validate((err, values) => {
                if (!err) {
                    console.log("--->", values);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.form {
    width: 100%;
    min-height: 400px;
    .form-item-title {
        color: #333;
        font-size: 16px;
        line-height: 50px;
    }
}
</style>