<template>
    <div class="form-container">
        <a-steps v-model="stepCurrent" direction="vertical" size="small">
            <a-step :title="$t('iiicf.aa')" />
            <a-step :title="$t('iiicf.af')" />
            <a-step :title="$t('iiicf.an')" />
            <a-step :title="$t('iiicf.bb')" />
            <a-step :title="$t('iiicf.cf')" />
            <a-step :title="$t('iiicf.ck')" />
            <a-step :title="$t('iiicf.dc')" />
        </a-steps>
        <a-form class="form" :form="form" @submit="handleSubmit" v-bind="formatLayout">
            <div v-show="stepCurrent === 0">
                <a-form-item :label="$t('iiicf.ab')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.ac')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.ad')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.ae')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 1">
                <a-form-item :label="$t('iiicf.ag')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.ai')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.aj')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.ak')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.al')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.am')">
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.an')">
                    <a-input v-decorator />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 2">
                <a-form-item :label="$t('iiicf.av')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("iiicf.aw") }}</a-radio>
                        <a-radio :value="6">{{ $t("iiicf.au") }}</a-radio>
                    </a-radio-group>
                    <a-input class="inline-input" v-decorator />
                </a-form-item>
                <a-form-item>
                    <span slot="label">
                        <span>{{ $t("iiicf.ax") }}</span>
                        <span style="color:#ccc">({{ $t("iiicf.ay") }})</span>
                    </span>
                    <a-input v-decorator />
                </a-form-item>
                <a-form-item :label="$t('iiicf.az')">
                    <a-radio-group v-decorator>
                        <a-radio :value="1">{{ $t("util.yes") }}</a-radio>
                        <a-radio :value="6">{{ $t("util.no") }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="$t('iiicf.ba')">
                    <a-date-picker class="full" />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 3">
                <a-form-item :label="$t('iiicf.bj')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('iiicf.bk')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('iiicf.bl')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('iiicf.bm')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('iiicf.bn')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('iiicf.bo')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('iiicf.bp')}}</a-checkbox>
                        <a-input class="inline-input" v-decorator placeholder="others" />
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('iiicf.br')">
                    <a-checkbox-group v-decorator>
                        <a-checkbox :value="1">{{$t('iiicf.bs')}}</a-checkbox>
                        <a-checkbox :value="2">{{$t('iiicf.bt')}}</a-checkbox>
                        <a-checkbox :value="3">{{$t('iiicf.bu')}}</a-checkbox>
                        <a-checkbox :value="4">{{$t('iiicf.bv')}}</a-checkbox>
                        <a-checkbox :value="5">{{$t('iiicf.bw')}}</a-checkbox>
                        <a-checkbox :value="6">{{$t('iiicf.bx')}}</a-checkbox>
                        <a-checkbox :value="7">{{$t('iiicf.by')}}</a-checkbox>
                        <a-checkbox :value="8">{{$t('iiicf.bz')}}</a-checkbox>
                        <a-checkbox :value="9">{{$t('iiicf.ca')}}</a-checkbox>
                        <a-checkbox :value="10">{{$t('iiicf.cb')}}</a-checkbox>
                        <a-checkbox :value="11">{{$t('iiicf.cc')}}</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item :label="$t('iiicf.cd')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 4">
                <a-form-item :label="$t('iiicf.cg')">
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
                <a-form-item :label="$t('iiicf.ch')">
                    <upload />
                </a-form-item>
                <a-form-item :label="$t('iiicf.cj')">
                    <upload />
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 5">
                <a-form-item :label="$t('iiicf.ck')">
                    <ul>
                        <li>{{$t('iiicf.cl')}}</li>
                        <li>{{$t('iiicf.cm')}}</li>
                        <li>{{$t('iiicf.cn')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('iiicf.co')">
                    <ul>
                        <li>{{$t('iiicf.cp')}}</li>
                        <li>{{$t('iiicf.cq')}}</li>
                        <li>{{$t('iiicf.cr')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('iiicf.cs')">
                    <ul>
                        <li>{{$t('iiicf.ct')}}</li>
                        <li>{{$t('iiicf.cu')}}</li>
                        <li>{{$t('iiicf.cv')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <div v-show="stepCurrent === 6">
                <a-form-item :label="$t('iiicf.cw')">
                    <ul>
                        <li>{{$t('iiicf.cx')}}</li>
                        <li>{{$t('iiicf.cy')}}</li>
                        <li>{{$t('iiicf.cz')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('iiicf.da')">
                    <ul>
                        <li>{{$t('iiicf.db')}}</li>
                    </ul>
                </a-form-item>
                <a-form-item :label="$t('iiicf.dc')">
                    <ul>
                        <li>{{$t('iiicf.dd')}}</li>
                        <li>{{$t('iiicf.de')}}</li>
                        <li>{{$t('iiicf.df')}}</li>
                        <li>{{$t('iiicf.dg')}}</li>
                        <li>{{$t('iiicf.dh')}}</li>
                        <li>{{$t('iiicf.di')}}</li>
                    </ul>
                </a-form-item>
            </div>
            <a-form-item>
                <a-button type="primary" @click="stepCurrent--" style="margin-right:12px">上一步</a-button>
                <a-button v-if="stepCurrent < 6" type="primary" @click="stepCurrent++">下一步</a-button>
                <a-button v-else type="primary" html-type="submit">{{ $t("iiicf.dk") }}</a-button>
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
        this.form = this.$form.createForm(this, { name: "IIICF" });
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
