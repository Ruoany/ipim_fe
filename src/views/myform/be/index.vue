<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">{{$t('formbe.aa')}}</div>
        <a-form-item
            :label="$t('formbe.ab')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.ac')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.ad')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.ae')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('formbe.af')}}</div>
        <a-form-item
            :label="$t('formbe.ag')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item
            :label="$t('formbe.ah')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator type="number" />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.ai')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.aj')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.ak')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('formbe.al')}}</div>
        <a-form-item
            :label="$t('formbe.am')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.an')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item
            :label="$t('formbe.ao')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('formbe.ap')}}</div>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbe.aq')}}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbe.ar')}}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbe.as')}}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbe.at')}}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbe.au')}}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbe.av')}}</div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbe.aw')}}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('util.agree')}}</a-radio>
                <a-radio value="b">{{$t('util.disagree')}}</a-radio>
            </a-radio-group>
            <a-input v-decorator :placeholder="$t('formbe.be')" />
            <ul>
                <li>{{$t('formbe.ax')}}</li>
                <li>{{$t('formbe.ay')}}</li>
            </ul>
        </a-form-item>
        <div class="form-item-title">{{$t('formbe.az')}}</div>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <ul>
                <li>{{$t('formbe.ba')}}</li>
                <li>{{$t('formbe.bb')}}</li>
                <li>{{$t('formbe.bc')}}</li>
                <li>{{$t('formbe.bd')}}</li>
            </ul>
        </a-form-item>
    </a-form>
</template>

<script>
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
            form: this.$form.createForm(this)
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
    .remark {
        width: 100%;
        display: inline-block;
    }
}
</style>