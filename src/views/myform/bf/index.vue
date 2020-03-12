<template>
    <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
        <div class="form-item-title">
            <p>{{ $t("formbf.ck") }}</p>
        </div>
        <a-form-item>
            <ul>
                <li>{{ $t("formbf.aa") }}</li>
                <li>{{ $t("formbf.ab") }}</li>
                <li>{{ $t("formbf.ac") }}</li>
            </ul>
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.ad") }}</p>
        </div>
        <a-form-item :label="$t('formbf.ae')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.af')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ag')">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.cl") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cm") }}</a-radio>
                <a-radio value="c">{{ $t("formbf.cn") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbf.ah')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ai')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aj')">
            <a-range-picker v-decorator style="width:100%;" />
        </a-form-item>
        <a-form-item :label="$t('formbf.ak')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.al')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.am')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.an") }}</p>
        </div>
        <a-form-item :label="$t('formbf.ao')">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formbf.ap')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aq')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ar')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.as')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.at')">
            <a-select v-decorator></a-select>
        </a-form-item>
        <a-form-item :label="$t('formbf.ap')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aq')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ar')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.as')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.au") }}</p>
        </div>
        <a-form-item :label="$t('formbf.av')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.aw')">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.co") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cp") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbf.ax')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.ay')">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.cq") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cr") }}</a-radio>
            </a-radio-group>
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.az')">
            <a-radio-group v-decorator>
                <a-radio value="a">{{ $t("formbf.ct") }}</a-radio>
                <a-radio value="b">{{ $t("formbf.cu") }}</a-radio>
                <a-radio value="c">{{ $t("formbf.cv") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('formbf.cs')">
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
        <a-form-item :label="$t('formbf.ba')">
            <a-date-picker v-decorator style="width:100%" />
        </a-form-item>
        <a-form-item :label="$t('formbf.df')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bb')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bc')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bd')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.be')">
            <a-input v-decorator />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.bf") }}</p>
        </div>
        <a-form-item :label="$t('formbf.bg')">
            <a-input v-decorator />
        </a-form-item>
        <a-form-item :label="$t('formbf.bh')">
            <a-textarea v-decorator :rows="4" />
        </a-form-item>
        <div class="form-item-title">
            <p>{{ $t("formbf.bi") }}</p>
        </div>
        <a-form-item>
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
        <a-form-item :label="$t('formbf.bo')">
            <ul>
                <li>{{ $t("formbf.bp") }}</li>
                <li>{{ $t("formbf.bq") }}</li>
                <li>{{ $t("formbf.br") }}</li>
            </ul>
        </a-form-item>
        <a-form-item :label="$t('formbf.bs')">
            <ul>
                <li>{{ $t("formbf.bt") }}</li>
                <li>{{ $t("formbf.bu") }}</li>
                <li>{{ $t("formbf.bv") }}</li>
            </ul>
        </a-form-item>
        <a-form-item :label="$t('formbf.bw')">
            <ul>
                <li>{{ $t("formbf.bx") }}</li>
                <li>{{ $t("formbf.by") }}</li>
            </ul>
        </a-form-item>
        <a-form-item :label="$t('formbf.bz')">
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
        <a-form-item>
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
@import url("../css/form.less");
.remark {
    width: 100%;
    display: inline-block;
}
</style>
