<template>
    <div class="all">
        <a-form-model-item
            v-for="(room, index) in form.serviceProviders"
            :key="room.key"
            :label="index === 0 ? $t('reportbd.ge') : ''"
            :prop="'serviceProviders.' + index + '.rooms'"
            :rules="{
                required: true,
                message: 'room can not be null',
                trigger: 'blur',
            }"
            >
            <a-row :gutter="10">
                <a-col :span="5">
                    <a-input v-model="room.name" :placeholder="$t('reportbd.gh')" />
                </a-col>
                <a-col :span="10">
                    <a-input style="width:100%" v-model="room.description" :placeholder="$t('reportbd.gi')" />
                </a-col>
                <a-col :span="7" >
                    <a-input-number :min="0" v-model.number="room.amount" style="width:100%" :placeholder="$t('reportbd.gj')" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="plus" class="cur" @click="addDomain()" />
                </a-col>
                <a-col :span="1">
                    <a-icon 
                        type="minus"
                        class="cur"
                        v-if="form.serviceProviders.length > 1"
                        :disabled="form.serviceProviders.length === 1"
                        @click="removeDomain(room)"
                    />
                </a-col>
            </a-row>
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.cl')">
            <a-row 
            :gutter="10" 
            v-for="(item, index) in form.govSupports"
            :key="item.key"
            :prop="'govSupports.' + index + '.rooms'">
                <a-col :span="6">
                    <a-input v-model="item.name" :placeholder="$t('reportbd.cn')" />
                </a-col>
                <a-col :span="16">
                    <a-input style="width:100%" v-model="item.description" :placeholder="$t('reportbd.co')" />
                </a-col>
                <a-col :span="1">
                    <a-icon 
                        type="minus"
                        class="cur"
                        @click="removeGovSupports(item)"
                    />
                </a-col>
            </a-row>
        </a-form-model-item>
        <a-form-model-item>
            <a-button type="dashed" style="width: 60%" @click="addGovSupports">
                <a-icon type="plus" /> {{$t("reportbd.gk")}}
            </a-button>
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.gf')">
            <a-row>
                <a-col>{{$t('reportbd.go')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="invoicesFiles"
                        :value.sync="form.invoicesFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gp')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="checklistFiles"
                        :value.sync="form.checklistFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gq')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="operatingFiles"
                        :value.sync="form.operatingFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gr')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="profiles"
                        :value.sync="form.profiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gs')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="plans"
                        :value.sync="form.plans"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gt')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="certifies"
                        :value.sync="form.certifies"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gu')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="guestlList"
                        :value.sync="form.guestlList"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gv')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="delegations"
                        :value.sync="form.delegations"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gw')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="activities"
                        :value.sync="form.activities"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gx')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        name="materials"
                        :value.sync="form.materials"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gy')}}<a-input style="width:400px" :placeholder="$t('reportbd.specify')" /></a-col>
                <a-col>
                    <upload
                        type="image"
                        name="others"
                        :value.sync="form.others"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
        </a-form-model-item>

        <a-form-model-item>
            <a-button type="primary" @click="preClick" style="margin-right:12px">上一步</a-button>
            <a-button type="primary" @click="nextClick">下一步</a-button>
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    data() {
        return {
            form: {
                serviceProviders: [{ key: Date.now(), description: "", amount: "" }],
                govSupports: [],
                invoicesFiles: [],
                checklistFiles: [],
                operatingFiles: [],
                profiles: [],
                plans: [],
                certifies: [],
                guestlList: [],
                delegations: [],
                activities: [],
                materials: [],
                others: []
            },
        };
    },
    methods:{
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            const {serviceProviders, govSupports, ...others} = this.form
            const attachments = Object.keys(others).map(k => {
                return others[k].map(i => ({...i, type: k}))
            }).flat()
            const form = { serviceProviders, govSupports, attachments }
            this.$emit('next', form)
        },
        removeDomain(item) {
            let index = this.form.serviceProviders.indexOf(item);
            if (index !== -1) {
                this.form.serviceProviders.splice(index, 1);
            }
        },
        addDomain() {
            this.form.serviceProviders.push({ key: Date.now(), date: '', rooms: '' });
        },
        removeGovSupports(item) {
            let index = this.form.govSupports.indexOf(item);
            if (index !== -1) {
                this.form.govSupports.splice(index, 1);
            }
        },
        addGovSupports() {
            this.form.govSupports.push({ key: Date.now(), date: '', rooms: '' });
        },
        // 更改上傳的文件
        uploadChange(info, type) {
            this.form[type] = info
        },
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
