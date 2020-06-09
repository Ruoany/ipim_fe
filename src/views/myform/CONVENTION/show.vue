<template>
    <div class="all">
        <a-form-item :label="$t('convention.activeTime')">
            <a-range-picker class="full" />
        </a-form-item>
        <a-form-item :label="$t('convention.ae')">
            <a-row :gutter="10" v-for="(item, index) in openTime" :key="index">
                <a-col :span="11"
                    ><a-range-picker showTime class="full" />
                </a-col>
                <a-col :span="11">
                    <a-input :placeholder="$t('convention.es')" type="number" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="plus" class="cur" @click="addOpenTime" />
                </a-col>
                <a-col :span="1">
                    <a-icon
                        type="minus"
                        class="cur"
                        @click="removeOpenTime(index)"
                        v-if="openTime.length > 1"
                    />
                </a-col>
            </a-row>
        </a-form-item>
        <a-form-item :label="$t('convention.af')">
            <a-input />
        </a-form-item>
        <a-form-item :label="$t('convention.ag')">
            <a-input />
            <a-textarea
                :placeholder="$t('convention.ew')"
                :autosize="{ minRows: 4 }"
            />
        </a-form-item>
        <a-form-item :label="$t('convention.ah')">
            <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">{{ $t("convention.di") }}</a-radio>
                <a-radio :value="2">{{ $t("convention.dj") }}</a-radio>
                <a-radio :value="3">{{ $t("convention.dl") }}</a-radio>
                <a-radio :value="4"
                    >{{ $t("util.other") }}({{ $t("convention.dm") }})</a-radio
                >
            </a-radio-group>
            <a-input :placeholder="$t('convention.dm')"></a-input>
        </a-form-item>
        <a-form-item :label="$t('convention.aj')">
            <div class="flex-justify-content-space-between">
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.ep')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.eq')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.er')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.ex')"
                ></a-input>
            </div>
        </a-form-item>
        <a-form-item :label="$t('convention.ai')">
            <div class="flex-justify-content-space-between">
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.ep')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.eq')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.er')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.ex')"
                ></a-input>
            </div>
        </a-form-item>
        <a-form-item :label="$t('convention.ak')">
            <div class="flex-justify-content-space-between">
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.ep')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.eq')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.er')"
                ></a-input>
                <a-input
                    style="width:24%;"
                    :placeholder="$t('convention.ex')"
                ></a-input>
            </div>
        </a-form-item>

        <a-form-item :label="$t('convention.al')">
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
            openTime: [
                {
                    time: null,
                    houser: null
                }
            ]
        };
    },
    methods: {
        addOpenTime() {
            this.openTime = this.openTime.concat({ time: null, houser: null });
        },
        removeOpenTime(index) {
            this.openTime.splice(index, 1);
        }
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
.cur {
    cursor: pointer;
}
</style>
