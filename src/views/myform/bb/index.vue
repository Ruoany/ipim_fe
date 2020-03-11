<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">{{$t('formbb.aa')}}</div>
        <ul>
            <li>{{$t('formbb.ab')}}</li>
            <li>{{$t('formbb.ac')}}</li>
            <li>{{$t('formbb.ad')}}</li>
        </ul>
        <div class="form-item-title">{{$t('formbb.ae')}}</div>
        <a-form-item
            :label="$t('formbb.af')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.ag')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <div class="form-content">
                <ul>
                    <li>{{$t('formbb.ah')}}</li>
                    <li>{{$t('formbb.ai')}}</li>
                    <li>{{$t('formbb.aj')}}</li>
                </ul>
            </div>
            <a-upload-dragger v-decorator name="files" action="/upload.do">
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Click or drag file to this area to upload</p>
                <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
        </a-form-item>
        <div class="form-item-title">{{$t('formbb.ak')}}</div>
        <a-form-item
            :label="$t('formbb.al')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.am')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.an')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.ao')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator type="number"></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.ap')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator></a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.aq')"
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
        <div class="form-item-title">{{$t('formbb.ar')}}</div>
        <a-form-item
            :label="$t('formbb.bj')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('formbb.bk')}}</a-radio>
                <a-radio value="b">{{$t('formbb.bl')}}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.aa')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <ul v-if="true">
                <li>{{$t('formbb.bm')}}</li>
            </ul>
            <ul v-else>
                <li>{{$t('formbb.bn')}}</li>
                <li>{{$t('formbb.bo')}}</li>
                <li>{{$t('formbb.bp')}}</li>
            </ul>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.as')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.at')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.au')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.av')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-textarea v-decorator :rows="4" />
            <div>{{$t('formbb.aw')}}</div>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.ax')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.ay')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <div class="form-item-title">{{$t('formbb.bt')}}</div>
        <a-form-item
            :label="$t('formbb.bu')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-button style="margin-left:20px">{{$t('formbb.bq')}}</a-button>
            <a-button style="margin-left:20px">{{$t('formbb.br')}}</a-button>
            <a-button style="margin-left:20px">{{$t('formbb.bs')}}</a-button>
        </a-form-item>
        <a-form-item
            :label="$t('formbb.bd')"
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
        <div class="form-item-title">{{$t('formbb.az')}}</div>
        <a-form-item
            :label="$t('formbb.ba')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.bb')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.bc')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbb.bd')"
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
        <div class="form-item-title">{{$t('formbb.be')}}</div>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbb.bf')}}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('util.yes')}}</a-radio>
                <a-radio value="b">{{$t('util.no')}}</a-radio>
            </a-radio-group>
            <div>{{$t('formbb.bi')}}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <div>{{$t('formbb.bg')}}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('util.yes')}}</a-radio>
                <a-radio value="b">{{$t('util.no')}}</a-radio>
            </a-radio-group>
            <div>{{$t('formbb.bi')}}</div>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
                <span>{{$t('formbb.bh')}}</span>
            </a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="specialLayout.wrapperCol">
            <a-button size="large" type="primary" html-type="submit">{{$t('formbb.bv')}}</a-button>
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
}
</style>