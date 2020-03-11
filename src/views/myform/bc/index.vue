<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">{{$t('formbc.aa')}}</div>
        <div class="form-item-title">{{$t('formbc.ab')}}</div>
        <a-form-item
            :label="$t('formbc.ac')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('formbc.ad')}}</a-radio>
                <a-radio value="a">{{$t('formbc.ae')}}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.af')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.ag')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.ah')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.ai')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('formbc.aj')}}</div>
        <a-form-item
            :label="$t('formbc.ak')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.al')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('formbc.am')}}</div>
        <a-form-item
            :label="$t('formbc.an')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.ao')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.ap')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.aq')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('formbc.ar')}}</div>
        <a-form-item
            :label="$t('formbc.as')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.at')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.au')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.av')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item
            :label="$t('formbc.aw')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">{{$t('formbc.ax')}}</div>
        <div class="form-item-title">{{$t('formbc.ay')}}</div>
        <a-form-item
            :label="$t('formbc.az')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.ba')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.bb')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.bc')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.bd')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.be')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.bf')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.bg')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <a-form-item
            :label="$t('formbc.bh')"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <a-input v-decorator>
                <span slot="suffix">MOP</span>
            </a-input>
        </a-form-item>
        <div class="form-item-title">{{$t('formbc.bi')}}</div>
        <a-form-item
            label="1"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <div>{{$t('formbc.bj')}}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('formbc.bk')}}</a-radio>
                <a-radio value="b">{{$t('formbc.bl')}}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item
            label="2"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <div>{{$t('formbc.bm')}}</div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{$t('formbc.bn')}}</a-radio>
                <a-radio value="b">{{$t('formbc.bo')}}</a-radio>
            </a-radio-group>
            <a-input v-decorator />
        </a-form-item>
        <a-form-item
            label="3"
            :label-col="formatLayout.labelCol"
            :wrapper-col="formatLayout.wrapperCol"
        >
            <div>{{$t('formbc.bp')}}</div>
        </a-form-item>
        <a-form-item :label-col="specialLayout.labelCol" :wrapper-col="specialLayout.wrapperCol">
            <a-button type="primary" size="large">{{$t('formbc.bq')}}</a-button>
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