<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('gmbpf.aa')" />
            <a-step :title="$t('gmbpf.af')" />
            <a-step :title="$t('gmbpf.an')" />
            <a-step :title="$t('gmbpf.bb')" />
            <a-step :title="$t('gmbpf.cf')" />
            <a-step :title="$t('gmbpf.ck')" />
            <a-step :title="$t('gmbpf.dc')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('gmbpf.ab')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.ac')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.ad')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.ae')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('gmbpf.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.ai')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.aj')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.al')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.am')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.an')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('gmbpf.ao')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("gmbpf.ap") }}</a-radio>
                        <a-radio :value="2">{{ $t("gmbpf.aq") }}</a-radio>
                        <a-radio :value="3">{{ $t("gmbpf.ar") }}</a-radio>
                        <a-radio :value="4">{{ $t("gmbpf.as") }}</a-radio>
                        <a-radio :value="5">{{ $t("gmbpf.at") }}</a-radio>
                        <a-radio :value="6">{{ $t("gmbpf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("gmbpf.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("gmbpf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item>
                    <span slot="label">
                        <span>{{ $t("gmbpf.ax") }}</span>
                        <span style="color:#ccc">({{ $t("gmbpf.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.ba')">
                    <a-date-picker class="full" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('gmbpf.bc')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('gmbpf.dl')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('gmbpf.dm')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('gmbpf.dn')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('gmbpf.do')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('gmbpf.dp')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('gmbpf.dq')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.bj')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('gmbpf.bk')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('gmbpf.bl')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('gmbpf.bm')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('gmbpf.bn')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('gmbpf.bo')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('gmbpf.bp')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.br')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('gmbpf.bs')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('gmbpf.bt')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('gmbpf.bu')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('gmbpf.bv')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('gmbpf.bw')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('gmbpf.bx')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('gmbpf.by')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('gmbpf.bz')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('gmbpf.ca')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('gmbpf.cb')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('gmbpf.cc')}}</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.cd')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('gmbpf.cg')">
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
                <a-form-item :label="$t('gmbpf.ch')">
                    <upload />
                </a-form-item>
                <a-form-item :label="$t('gmbpf.cj')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item :label="$t('gmbpf.ck')">
                    <ul>
                        <li>{{$t('gmbpf.cl')}}</li>
                        <li>{{$t('gmbpf.cm')}}</li>
                        <li>{{$t('gmbpf.cn')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.co')">
                    <ul>
                        <li>{{$t('gmbpf.cp')}}</li>
                        <li>{{$t('gmbpf.cq')}}</li>
                        <li>{{$t('gmbpf.cr')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.cs')">
                    <ul>
                        <li>{{$t('gmbpf.ct')}}</li>
                        <li>{{$t('gmbpf.cu')}}</li>
                        <li>{{$t('gmbpf.cv')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-item :label="$t('gmbpf.cw')">
                    <ul>
                        <li>{{$t('gmbpf.cx')}}</li>
                        <li>{{$t('gmbpf.cy')}}</li>
                        <li>{{$t('gmbpf.cz')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.da')">
                    <ul>
                        <li>{{$t('gmbpf.db')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('gmbpf.dc')">
                    <ul>
                        <li>{{$t('gmbpf.dd')}}</li>
                        <li>{{$t('gmbpf.de')}}</li>
                        <li>{{$t('gmbpf.df')}}</li>
                        <li>{{$t('gmbpf.dg')}}</li>
                        <li>{{$t('gmbpf.dh')}}</li>
                        <li>{{$t('gmbpf.di')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="stepCurrent--" style="margin-right:12px">上一步</a-button>
                <a-button v-if="stepCurrent < 6" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button v-else type="primary" html-type="submit">{{ $t("gmbpf.dk") }}</a-button>
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
        this.form = this.$form.createForm(this, { name: "GMBPF" });
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
