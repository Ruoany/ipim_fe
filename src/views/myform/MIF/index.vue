<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('mif.aa')" />
            <a-step :title="$t('mif.af')" />
            <a-step :title="$t('mif.an')" />
            <a-step :title="$t('mif.bb')" />
            <a-step :title="$t('mif.cf')" />
            <a-step :title="$t('mif.ck')" />
            <a-step :title="$t('mif.dc')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('mif.ab')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.ac')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.ad')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.ae')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('mif.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.ai')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.aj')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.al')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.am')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.an')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('mif.ao')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("mif.ap") }}</a-radio>
                        <a-radio :value="2">{{ $t("mif.aq") }}</a-radio>
                        <a-radio :value="3">{{ $t("mif.ar") }}</a-radio>
                        <a-radio :value="4">{{ $t("mif.as") }}</a-radio>

                        <a-radio :value="5">{{ $t("mif.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("mif.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("mif.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item>
                    <span slot="label">
                        <span>{{ $t("mif.ax") }}</span>
                        <span style="color:#ccc">({{ $t("mif.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('mif.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('mif.ba')">
                    <a-date-picker class="full" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('mif.bc')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('mif.dl')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('mif.dm')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('mif.dn')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('mif.do')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('mif.dp')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('mif.dq')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('mif.dr')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('mif.ds')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('mif.dt')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('mif.du')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('mif.dv')}}</a-checkbox>
                        <a-checkbox :value="12">{{$t('mif.dw')}}</a-checkbox>
                        <a-checkbox :value="13">{{$t('mif.dy')}}</a-checkbox>
                        <a-checkbox :value="14">{{$t('mif.dz')}}</a-checkbox>
                        <a-checkbox :value="15">{{$t('mif.ea')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('mif.bj')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('mif.bk')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('mif.bl')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('mif.bm')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('mif.bn')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('mif.bo')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('mif.bp')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('mif.br')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('mif.bs')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('mif.bt')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('mif.bu')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('mif.bv')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('mif.bw')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('mif.bx')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('mif.by')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('mif.bz')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('mif.ca')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('mif.cb')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('mif.cc')}}</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('mif.cd')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('mif.cg')">
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
                <a-form-item :label="$t('mif.ch')">
                    <upload />
                </a-form-item>
                <a-form-item :label="$t('mif.cj')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item :label="$t('mif.ck')">
                    <ul>
                        <li>{{$t('mif.cl')}}</li>
                        <li>{{$t('mif.cm')}}</li>
                        <li>{{$t('mif.cn')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('mif.co')">
                    <ul>
                        <li>{{$t('mif.cp')}}</li>
                        <li>{{$t('mif.cq')}}</li>
                        <li>{{$t('mif.cr')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('mif.cs')">
                    <ul>
                        <li>{{$t('mif.ct')}}</li>
                        <li>{{$t('mif.cu')}}</li>
                        <li>{{$t('mif.cv')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-item :label="$t('mif.cw')">
                    <ul>
                        <li>{{$t('mif.cx')}}</li>
                        <li>{{$t('mif.cy')}}</li>
                        <li>{{$t('mif.cz')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('mif.da')">
                    <ul>
                        <li>{{$t('mif.db')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('mif.dc')">
                    <ul>
                        <li>{{$t('mif.dd')}}</li>
                        <li>{{$t('mif.de')}}</li>
                        <li>{{$t('mif.df')}}</li>
                        <li>{{$t('mif.dg')}}</li>
                        <li>{{$t('mif.dh')}}</li>
                        <li>{{$t('mif.di')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="stepCurrent--" style="margin-right:12px">上一步</a-button>
                <a-button v-if="stepCurrent < 6" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button v-else type="primary" html-type="submit">{{ $t("mif.dk") }}</a-button>
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
        this.form = this.$form.createForm(this, { name: "mif" });
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
