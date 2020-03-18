<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('miecf.aa')" />
            <a-step :title="$t('miecf.af')" />
            <a-step :title="$t('miecf.an')" />
            <a-step :title="$t('miecf.bb')" />
            <a-step :title="$t('miecf.cf')" />
            <a-step :title="$t('miecf.ck')" />
            <a-step :title="$t('miecf.dc')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('miecf.ab')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ac')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ad')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ae')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('miecf.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ai')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.aj')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.al')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.am')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.an')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('miecf.ao')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("miecf.ap") }}</a-radio>
                        <a-radio :value="2">{{ $t("miecf.aq") }}</a-radio>
                        <a-radio :value="3">{{ $t("miecf.ar") }}</a-radio>
                        <a-radio :value="4">{{ $t("miecf.as") }}</a-radio>
                        <a-radio :value="5">{{ $t("miecf.at") }}</a-radio>
                        <a-radio :value="6">{{ $t("miecf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("miecf.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("miecf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item>
                    <span slot="label">
                        <span>{{ $t("miecf.ax") }}</span>
                        <span style="color:#ccc">({{ $t("miecf.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('miecf.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('miecf.ba')">
                    <a-date-picker class="full" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('miecf.bc')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('miecf.dl')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('miecf.dm')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('miecf.dn')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('miecf.do')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('miecf.dp')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('miecf.dq')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('miecf.dr')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('miecf.ds')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('miecf.dt')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('miecf.du')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('miecf.dv')}}</a-checkbox>
                        <a-checkbox :value="12">{{$t('miecf.dw')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('miecf.bj')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('miecf.bk')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('miecf.bl')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('miecf.bm')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('miecf.bn')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('miecf.bo')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('miecf.bp')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('miecf.br')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('miecf.bs')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('miecf.bt')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('miecf.bu')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('miecf.bv')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('miecf.bw')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('miecf.bx')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('miecf.by')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('miecf.bz')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('miecf.ca')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('miecf.cb')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('miecf.cc')}}</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('miecf.cd')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('miecf.cg')">
                    <div v-decorator="company">
                        <div class="company-item" v-for="(item,index) in companyArray" :key="index">
                            <company
                                :name.sync="item.name"
                                :liaison-name.sync="item.liaisonName"
                                :phone.sync="item.phone"
                                :email.sync="item.email"
                            />
                            <div class="button-wrapper">
                                <a-button
                                    v-if="index === 0"
                                    title="添加一項"
                                    type="primary"
                                    shape="circle"
                                    icon="plus"
                                    @click="operaCompany(true)"
                                ></a-button>
                                <a-button
                                    v-else
                                    title="減少一項"
                                    shape="circle"
                                    icon="minus"
                                    @click="operaCompany(false,index)"
                                ></a-button>
                            </div>
                        </div>
                    </div>
                </a-form-item>
                <a-form-item :label="$t('miecf.ch')">
                    <upload />
                </a-form-item>
                <a-form-item :label="$t('miecf.cj')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item :label="$t('miecf.ck')">
                    <ul>
                        <li>{{$t('miecf.cl')}}</li>
                        <li>{{$t('miecf.cm')}}</li>
                        <li>{{$t('miecf.cn')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('miecf.co')">
                    <ul>
                        <li>{{$t('miecf.cp')}}</li>
                        <li>{{$t('miecf.cq')}}</li>
                        <li>{{$t('miecf.cr')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('miecf.cs')">
                    <ul>
                        <li>{{$t('miecf.ct')}}</li>
                        <li>{{$t('miecf.cu')}}</li>
                        <li>{{$t('miecf.cv')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-item :label="$t('miecf.cw')">
                    <ul>
                        <li>{{$t('miecf.cx')}}</li>
                        <li>{{$t('miecf.cy')}}</li>
                        <li>{{$t('miecf.cz')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('miecf.da')">
                    <ul>
                        <li>{{$t('miecf.db')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('miecf.dc')">
                    <ul>
                        <li>{{$t('miecf.dd')}}</li>
                        <li>{{$t('miecf.de')}}</li>
                        <li>{{$t('miecf.df')}}</li>
                        <li>{{$t('miecf.dg')}}</li>
                        <li>{{$t('miecf.dh')}}</li>
                        <li>{{$t('miecf.di')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="stepCurrent--" style="margin-right:12px">上一步</a-button>
                <a-button v-if="stepCurrent < 6" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button v-else type="primary" html-type="submit">{{ $t("miecf.dk") }}</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import Upload from "@/components/upload";
import Company from "../components/company";
import validate from "./validate";
export default {
    components: { Upload, Company },
    data() {
        return {
            ...validate,
            stepCurrent: 6,
            formatLayout: {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 }
            },
            specialLayout: {
                wrapperCol: { span: 16, offset: 4 }
            },
            companyArray: []
        };
    },
    methods: {
        operaCompany: function(type, index) {
            if (type) {
                const body = {
                    name: "",
                    liaisonName: "",
                    phone: "",
                    email: ""
                };
                this.companyArray.push(body);
            } else {
                this.companyArray.splice(index, 1);
            }
        },
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
        this.form = this.$form.createForm(this, { name: "MIECF" });
    },
    mounted: function() {
        this.companyArray = this.form.getFieldValue("company");
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");

.remark {
    width: 100%;
    display: inline-block;
}
.company-item {
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button-wrapper {
        width: 80px;
        margin-left: 20px;
    }
}
/deep/ .ant-checkbox-wrapper {
    min-width: 150px;
    height: 40px;
    margin-left: 0;
}
</style>
