<template>
    <div class="all">
        <a-form-item :label="$t('reportbd.ax')">
            <div style="font-size:10px;">({{ $t("reportbd.ao") }})</div>
            <a-checkbox-group @change="onChange">
                <a-row>
                    <a-col :span="24">
                        <a-checkbox value="A">{{ $t("reportbd.ap") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="B">{{ $t("reportbd.aq") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="C">{{ $t("reportbd.as") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="D">{{ $t("reportbd.ay") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="E">{{ $t("reportbd.aw") }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="F">{{ $t("reportbd.av") }}</a-checkbox>
                    </a-col>
                </a-row>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.az')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.ba')">
            <a-row :gutter="10">
                <a-col :span="9">
                    <a-date-picker
                        style="width:100%"
                        :placeholder="$t('reportbd.bb')"
                    />
                </a-col>
                <a-col :span="13"
                    ><a-input :placeholder="$t('reportbd.bc')"
                /></a-col>
                <a-col :span="1">
                    <a-icon type="plus" class="cur" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="minus" class="cur" />
                </a-col>
            </a-row>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bf')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bk')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bq')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.br')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bt')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bw')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bs')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.by')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bz')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.df')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.bw')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.cj')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('reportbd.dg')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>

        <a-form-item :label="$t('reportbd.cl')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>

            <a-input :placeholder="$t('reportbd.cn')" />
            <a-input :placeholder="$t('reportbd.co')" />
        </a-form-item>
        <a-form-item :label="$t('reportbd.cq')">
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
        <a-form-item :label="$t('reportbd.dh')">
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
        return {
            upLabel: { span: 16, offset: 4 }
        };
    },
    methods:{
        onChange() {},
        handleChange() {}
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.cur {
    cursor: pointer;
}
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
</style>
