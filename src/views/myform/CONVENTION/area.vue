<template>
    <div class="all">
        <a-form-item :label="$t('convention.ax')">
            <div style="font-size:10px;">({{ $t("convention.ao") }})</div>
            <a-checkbox-group @change="onChange">
                <a-row>
                    <a-col :span="24">
                        <a-checkbox value="A">{{
                            $t("convention.ap")
                        }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="B">{{
                            $t("convention.aq")
                        }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="C">{{
                            $t("convention.as")
                        }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="D">{{
                            $t("convention.ay")
                        }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="E">{{
                            $t("convention.aw")
                        }}</a-checkbox>
                    </a-col>
                    <a-col :span="24">
                        <a-checkbox value="F">{{
                            $t("convention.av")
                        }}</a-checkbox>
                    </a-col>
                </a-row>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item :label="$t('convention.az')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.ba')">
            <a-row :gutter="10">
                <a-col :span="9">
                    <a-date-picker
                        style="width:100%"
                        :placeholder="$t('convention.bb')"
                    />
                </a-col>
                <a-col :span="13"
                    ><a-input :placeholder="$t('convention.bc')"
                /></a-col>
                <a-col :span="1">
                    <a-icon type="plus" class="cur" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="minus" class="cur" />
                </a-col>
            </a-row>
        </a-form-item>
        <a-form-item :label="$t('convention.bf')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.bk')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.bq')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.br')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.bt')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.bw')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.bs')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.by')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.bz')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.df')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.bw')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.cj')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('convention.dg')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>
        </a-form-item>

        <a-form-item :label="$t('convention.cl')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                <a-radio :value="2">{{ $t("util.no") }}</a-radio>
            </a-radio-group>

            <a-input :placeholder="$t('convention.cn')" />
            <a-input :placeholder="$t('convention.co')" />
        </a-form-item>
        <a-form-item :label="$t('convention.cq')">
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
        <a-form-item :label="$t('convention.dh')">
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
