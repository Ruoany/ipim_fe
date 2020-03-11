<template>
    <a-form class="form" :form="form" @submit="handleSubmit">
        <div class="form-item-title">
            <p>{{ $t("formbf.ck") }}</p>
        </div>
        <ul>
            <li>{{ $t("formbf.aa") }}</li>
            <li>{{ $t("formbf.ab") }}</li>
            <li>{{ $t("formbf.ac") }}</li>
        </ul>
        <div class="form-item-title">
            <p>{{ $t("formbf.ad") }}</p>
        </div>
        <a-form-item :label="$t('formbf.ae')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.af')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ag')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.cl") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cm") }}</a-radio>
                <a-radio value="c">{{ $t("formbf.cn") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbf.ah')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ai')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aj')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item :label="$t('formbf.ak')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.al')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.am')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.an") }}</p>
        </div>
        <a-form-item :label="$t('formbf.ao')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formbf.ap')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aq')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ar')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.as')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.at')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formbf.ap')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aq')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ar')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.as')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.au") }}</p>
        </div>
        <a-form-item :label="$t('formbf.av')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aw')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.co") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cp") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbf.ax')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ay')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.cq") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cr") }}</a-radio>
            </a-radio-group>
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.az')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.ct") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cu") }}</a-radio>
                <a-radio value="c">{{ $t("formbf.cv") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbf.cs')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-checkbox-group v-decorator>
                <a-checkbox value="a">{{ $t("formbf.cw") }}</a-checkbox>
                <a-checkbox value="b">{{ $t("formbf.cx") }}</a-checkbox>
                <a-checkbox value="c">{{ $t("formbf.cy") }}</a-checkbox>
                <a-checkbox value="e">{{ $t("formbf.cz") }}</a-checkbox>
                <a-checkbox value="f">{{ $t("formbf.da") }}</a-checkbox>
                <a-checkbox value="g">{{ $t("formbf.db") }}</a-checkbox>
                <a-checkbox value="h">{{ $t("formbf.dc") }}</a-checkbox>
                <a-checkbox value="i">{{ $t("formbf.dd") }}</a-checkbox>
                <a-checkbox value="j">{{ $t("formbf.de") }}</a-checkbox>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item :label="$t('formbf.ba')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-date-picker v-decorator style="width:100%" />
        </a-form-item>
        <a-form-item :label="$t('formbf.df')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bb')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bc')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bd')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.be')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.bf") }}</p>
        </div>
        <a-form-item :label="$t('formbf.bg')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bh')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.bi") }}</p>
        </div>
        <a-form-item :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <ul>
                <li>{{ $t("formbf.bj") }}</li>
                <li>{{ $t("formbf.bk") }}</li>
                <li>{{ $t("formbf.bl") }}</li>
                <li>{{ $t("formbf.bm") }}</li>
            </ul>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.bn") }}</p>
        </div>
        <a-form-item :label="$t('formbf.bo')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <ul>
                <li>{{ $t("formbf.bp") }}</li>
                <li>{{ $t("formbf.bq") }}</li>
                <li>{{ $t("formbf.br") }}</li>
            </ul>
        </a-form-item>
        <a-form-item :label="$t('formbf.bs')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <ul>
                <li>{{ $t("formbf.bt") }}</li>
                <li>{{ $t("formbf.bu") }}</li>
                <li>{{ $t("formbf.bv") }}</li>
            </ul>
        </a-form-item>
        <a-form-item :label="$t('formbf.bw')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <ul>
                <li>{{ $t("formbf.bx") }}</li>
                <li>{{ $t("formbf.by") }}</li>
            </ul>
        </a-form-item>
        <a-form-item :label="$t('formbf.bz')" :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <ul>
                <li>{{ $t("formbf.ca") }}</li>
                <li>{{ $t("formbf.cb") }}</li>
                <li style="list-style:none;">
                    <ul>
                        <li>{{ $t("formbf.cc") }}</li>
                        <li>{{ $t("formbf.cd") }}</li>
                    </ul>
                </li>
            </ul>
        </a-form-item>
        <a-form-item :label-col="formatLayout.labelCol" :wrapper-col="formatLayout.wrapperCol">
            <div class="form-item-title">
                <p>{{ $t("formbf.cf") }}</p>
            </div>
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.cg") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.ch") }}</a-radio>
            </a-radio-group>
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
    </a-form>
</template>

<script>
export default {
    data() {
        return {
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
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
    width: 800px;
    min-height: 400px;
    .form-item-title {
        color: #333;
        padding: 20px 0;
        p {
            line-height: 50px;
            border-bottom: 1px solid #ee1c24;
            font-size: 18px;
            font-weight: bold;
        }
        span {
            display: block;
            margin-top: -20px;
            font-size: 14px;
            color: #999;
        }
    }
    .remark {
        width: 100%;
        display: inline-block;
    }
}
</style>
