<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('formbc.aa')" />
            <a-step :title="$t('formbc.aj')" />
            <a-step :title="$t('formbc.am')" />
            <a-step :title="$t('formbc.ar')" />
            <a-step :title="$t('formbc.ax')" />
            <a-step :title="$t('formbc.bi')" />
            <a-step :title="$t('formbc.bs')" />
        </a-steps>
        <a-form
            class="form"
            :form="form"
            @submit="handleSubmit"
            v-bind="formatLayout"
        >
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('formbc.ac')">
                    <a-radio-group v-decorator>
                        <a-radio value="a">{{ $t("formbc.ad") }}</a-radio>
                        <a-radio value="b">{{ $t("formbc.ae") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('formbc.af')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.ah')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.ai')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('formbc.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.al')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('formbc.an')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.ao')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.ap')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.aq')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('formbc.as')">
                    <div class="special">
                        <a-input v-decorator />
                        <a-button style="margin-left:10px;">{{
                            $t("formbc.br")
                        }}</a-button>
                    </div>
                </a-form-item>
                <a-form-item :label="$t('formbc.at')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.au')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('formbc.av')">
                    <a-range-picker v-decorator style="width:100%;" />
                </a-form-item>
                <a-form-item :label="$t('formbc.aw')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('formbc.az')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.ba')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.bb')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.bc')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.bd')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.be')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.bf')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.bg')">
                    <a-input v-decorator>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
                <a-form-item :label="$t('formbc.bh')">
                    <a-input v-decorator disabled>
                        <span slot="suffix">MOP</span>
                    </a-input>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item>
                    <div>
                        <span>1.</span>
                        {{ $t("formbc.bj") }}
                    </div>
                    <a-radio-group v-decorator>
                        <a-radio value="a">{{ $t("formbc.bk") }}</a-radio>
                        <a-radio value="b">{{ $t("formbc.bl") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item>
                    <div>
                        <span>2.</span>
                        {{ $t("formbc.bm") }}
                    </div>
                    <a-radio-group v-decorator>
                        <a-radio value="a">{{ $t("formbc.bn") }}</a-radio>
                        <a-radio value="b">{{ $t("formbc.bo") }}</a-radio>
                    </a-radio-group>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item>
                    <div>
                        <span>3.</span>
                        {{ $t("formbc.bp") }}
                    </div>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-item :label="$t('formbc.bt')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.bu')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.bv')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.bw')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.bx')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.by')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.bz')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.ca')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.cb')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.cc')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.cd')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.bt')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.ce')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.cf')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.cg')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.bw')"
                    ><upload-file
                /></a-form-item>
                <a-form-item :label="$t('formbc.ch')"
                    ><upload-file
                /></a-form-item>
            </div>
            <a-form-item>
                <a-button
                    v-show="stepCurrent > 0"
                    type="primary"
                    @click="stepCurrent--"
                    style="margin-right:12px"
                    >上一步</a-button
                >
                <a-button
                    v-show="stepCurrent < 6"
                    type="primary"
                    @click="stepCurrent++"
                    >下一步</a-button
                >
                <a-button
                    v-show="stepCurrent === 6"
                    type="primary"
                    html-type="submit"
                    >{{ $t("formbc.bq") }}</a-button
                >
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import validate from "./validate";
import UploadFile from "@/components/upload";
export default {
    components: { UploadFile },
    data() {
        return {
            ...validate,
            stepCurrent: 0,
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
            }
        };
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
    },
    created: function() {
        this.form = this.$form.createForm(this, { name: "FORMBC" });
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
