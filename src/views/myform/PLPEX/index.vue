<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('plpex.aa')" />
            <a-step :title="$t('plpex.af')" />
            <a-step :title="$t('plpex.an')" />
            <a-step :title="$t('plpex.bb')" />
            <a-step :title="$t('plpex.cf')" />
            <a-step :title="$t('plpex.ck')" />
            <a-step :title="$t('plpex.dc')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('plpex.ab')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.ac')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.ad')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.ae')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('plpex.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.ai')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.aj')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.al')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.am')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.an')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('plpex.ao')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("plpex.ap") }}</a-radio>
                        <a-radio :value="2">{{ $t("plpex.aq") }}</a-radio>

                        <a-radio :value="6">{{ $t("plpex.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("plpex.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("plpex.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item>
                    <span slot="label">
                        <span>{{ $t("plpex.ax") }}</span>
                        <span style="color:#ccc">({{ $t("plpex.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('plpex.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('plpex.ba')">
                    <a-date-picker class="full" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('plpex.bc')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('plpex.dl')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('plpex.dm')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('plpex.dn')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('plpex.do')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('plpex.dp')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('plpex.dq')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('plpex.dr')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('plpex.ds')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('plpex.dt')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('plpex.du')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('plpex.dv')}}</a-checkbox>
                        <a-checkbox :value="12">{{$t('plpex.dw')}}</a-checkbox>
                        <a-checkbox :value="13">{{$t('plpex.dy')}}</a-checkbox>
                        <a-checkbox :value="14">{{$t('plpex.dz')}}</a-checkbox>
                        <a-checkbox :value="15">{{$t('plpex.ea')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('plpex.bj')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('plpex.bk')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('plpex.bl')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('plpex.bm')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('plpex.bn')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('plpex.bo')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('plpex.bp')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('plpex.br')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('plpex.bs')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('plpex.bt')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('plpex.bu')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('plpex.bv')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('plpex.bw')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('plpex.bx')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('plpex.by')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('plpex.bz')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('plpex.ca')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('plpex.cb')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('plpex.cc')}}</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('plpex.cd')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('plpex.cg')">
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
                <a-form-item :label="$t('plpex.ch')">
                    <upload />
                </a-form-item>
                <a-form-item :label="$t('plpex.cj')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item :label="$t('plpex.ck')">
                    <ul>
                        <li>{{$t('plpex.cl')}}</li>
                        <li>{{$t('plpex.cm')}}</li>
                        <li>{{$t('plpex.cn')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('plpex.co')">
                    <ul>
                        <li>{{$t('plpex.cp')}}</li>
                        <li>{{$t('plpex.cq')}}</li>
                        <li>{{$t('plpex.cr')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('plpex.cs')">
                    <ul>
                        <li>{{$t('plpex.ct')}}</li>
                        <li>{{$t('plpex.cu')}}</li>
                        <li>{{$t('plpex.cv')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-item :label="$t('plpex.cw')">
                    <ul>
                        <li>{{$t('plpex.cx')}}</li>
                        <li>{{$t('plpex.cy')}}</li>
                        <li>{{$t('plpex.cz')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('plpex.da')">
                    <ul>
                        <li>{{$t('plpex.db')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('plpex.dc')">
                    <ul>
                        <li>{{$t('plpex.dd')}}</li>
                        <li>{{$t('plpex.de')}}</li>
                        <li>{{$t('plpex.df')}}</li>
                        <li>{{$t('plpex.dg')}}</li>
                        <li>{{$t('plpex.dh')}}</li>
                        <li>{{$t('plpex.di')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="stepCurrent--" style="margin-right:12px">上一步</a-button>
                <a-button v-if="stepCurrent < 6" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button v-else type="primary" html-type="submit">{{ $t("plpex.dk") }}</a-button>
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
            stepCurrent: 0,
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
        this.form = this.$form.createForm(this, { name: "plpex" });
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
