<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formbc.aa')" />
            <!-- <a-step :title="$t('formbc.aj')" /> -->
            <a-step :title="$t('formbc.am')" />
            <a-step :title="$t('formbc.ar')" />
            <a-step :title="$t('formbc.ax')" />
            <a-step :title="$t('formbc.bi')" />
            <a-step :title="$t('formbc.bs')" />
        </a-steps>
        <a-spin :spinning="loading" class="form">
            <a-form-model
                class="form"
                :rules="rules"
                :form="form"
                v-bind="formatLayout"
            >
                <div v-show="stepCurrent === 0">
                    <a-form-model-item :label="$t('formbc.ac')">
                        <a-radio-group>
                            <a-radio value="a">{{ $t("formbc.ad") }}</a-radio>
                            <a-radio value="b">{{ $t("formbc.ae") }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.af')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ag')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ah')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ai')">
                        <a-input />
                    </a-form-model-item>
                </div>
                <!-- <div v-show="stepCurrent === 1">
                <a-form-model-item :label="$t('formbc.ak')">
                    <a-input />
                </a-form-model-item>
                <a-form-model-item :label="$t('formbc.al')">
                    <a-input />
                </a-form-model-item>
            </div> -->
                <div v-show="stepCurrent === 1">
                    <a-form-model-item :label="$t('formbc.an')">
                        <a-select
                            v-model="form.liaisonId"
                            showSearch
                            optionFilterProp="label"
                            :filterOption="true"
                        >
                            <a-select-option
                                v-for="item in liaisonList"
                                :key="item.id"
                                :value="item.id"
                                :label="`${item.nameZh}${item.nameEnOrPt}`"
                                >{{ item.nameZh }}
                                {{ item.nameEnOrPt }}</a-select-option
                            >
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ao')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ap')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.aq')">
                        <a-input />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 2">
                    <a-form-model-item :label="$t('formbc.as')">
                        <div class="special">
                            <a-select v-model="form.activityId">
                                <a-option
                                    v-for="item in list"
                                    :key="item.id"
                                    :value="item.id"
                                    :label="item.name"
                                    >{{ item.name }}</a-option
                                >
                            </a-select>
                            <a-button style="margin-left:10px;">{{
                                $t("formbc.br")
                            }}</a-button>
                        </div>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.at')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.au')">
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.av')">
                        <a-range-picker style="width:100%;" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.aw')">
                        <a-input />
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 3">
                    <a-form-model-item :label="$t('formbc.az')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ba')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bb')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bc')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bd')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.be')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bf')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bg')">
                        <a-input>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bh')">
                        <a-input disabled>
                            <span slot="suffix">MOP</span>
                        </a-input>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 4">
                    <a-form-model-item>
                        <div>
                            <span>1.</span>
                            {{ $t("formbc.bj") }}
                        </div>
                        <a-radio-group>
                            <a-radio value="a">{{ $t("formbc.bk") }}</a-radio>
                            <a-radio value="b">{{ $t("formbc.bl") }}</a-radio>
                        </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item>
                        <div>
                            <span>2.</span>
                            {{ $t("formbc.bm") }}
                        </div>
                        <a-radio-group>
                            <a-radio value="a">{{ $t("formbc.bn") }}</a-radio>
                            <a-radio value="b">{{ $t("formbc.bo") }}</a-radio>
                        </a-radio-group>
                        <a-input />
                    </a-form-model-item>
                    <a-form-model-item>
                        <div>
                            <span>3.</span>
                            {{ $t("formbc.bp") }}
                        </div>
                    </a-form-model-item>
                </div>
                <div v-show="stepCurrent === 5">
                    <a-form-model-item :label="$t('formbc.bt')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bu')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bv')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bw')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bx')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.by')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bz')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ca')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.cb')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.cc')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.cd')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bt')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ce')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.cf')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.cg')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.bw')"
                        ><upload-file
                    /></a-form-model-item>
                    <a-form-model-item :label="$t('formbc.ch')"
                        ><upload-file
                    /></a-form-model-item>
                </div>
                <a-form-model-item>
                    <a-button
                        v-show="stepCurrent > 0"
                        type="primary"
                        @click="stepCurrent--"
                        style="margin-right:12px"
                        >上一步</a-button
                    >
                    <a-button
                        v-show="stepCurrent < 5"
                        type="primary"
                        @click="stepCurrent++"
                        >下一步</a-button
                    >
                    <a-button
                        v-show="stepCurrent === 5"
                        type="primary"
                        html-type="submit"
                        >{{ $t("formbc.bq") }}</a-button
                    >
                </a-form-model-item>
            </a-form-model>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import validate from "./validate";
import UploadFile from "@/components/upload";
export default {
    props: { list: Array },
    components: { UploadFile },
    data() {
        return {
            ...validate,
            formId: undefined,
            form: {
                liaisonId: "",
                activityId: ""
            }
        };
    },
    computed: {
        ...mapGetters(["liaisonList"])
    },
    methods: {
        handleSubmit: function(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
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
.special {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
