<template>
    <div class="all">
        <a-form-model-item
            v-for="(room, index) in editData.serviceProviders"
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
                        v-if="editData.serviceProviders.length > 1"
                        :disabled="editData.serviceProviders.length === 1"
                        @click="removeDomain(room)"
                    />
                </a-col>
            </a-row>
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.cl')">
            <a-row 
            :gutter="10" 
            v-for="(item, index) in editData.govSupports"
            :key="item.key"
            :prop="'govSupports.' + index + '.rooms'">
                <a-col :span="6">
                    <a-input v-model="item.name" :placeholder="$t('reportbd.cn')" />
                </a-col>
                <a-col :span="16">
                    <a-input style="width:100%" v-model="item.description" :placeholder="$t('reportbd.co')" />
                </a-col>
                <a-col :span="1">
                    <a-icon type="plus" class="cur" @click="addGovSupports()" />
                </a-col>
                <a-col :span="1">
                    <a-icon 
                        type="minus"
                        class="cur"
                        v-if="editData.govSupports.length > 1"
                        :disabled="editData.govSupports.length === 1"
                        @click="removeGovSupports(item)"
                    />
                </a-col>
            </a-row>
        </a-form-model-item>

        <a-form-model-item :label="$t('reportbd.gf')">
            <a-row>
                <a-col>{{$t('reportbd.go')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_invoicesFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gp')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_checklistFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gq')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_operatingFiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gr')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_profiles"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gs')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_plans"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gt')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_certifies"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gu')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_guestlList"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gv')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_delegations"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gw')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_activities"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gx')}}</a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_materials"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
            <a-row>
                <a-col>{{$t('reportbd.gy')}}<a-input style="width:400px" :placeholder="$t('reportbd.specify')" /></a-col>
                <a-col>
                    <upload
                        type="image"
                        :value.sync="editData.attachments_others"
                        @handleChange="uploadChange"
                    ></upload>
                </a-col>
            </a-row>
        </a-form-model-item>
    </div>
</template>

<script>
import Upload from "@/components/upload";
export default {
    components: { Upload },
    props:['editData'],
    methods:{
        removeDomain(item) {
            let index = this.editData.serviceProviders.indexOf(item);
            if (index !== -1) {
                this.editData.serviceProviders.splice(index, 1);
            }
        },
        addDomain() {
            this.editData.serviceProviders.push({ key: Date.now(), date: '', rooms: '' });
        },
        removeGovSupports(item) {
            let index = this.editData.govSupports.indexOf(item);
            if (index !== -1) {
                this.editData.govSupports.splice(index, 1);
            }
        },
        addGovSupports() {
            this.editData.govSupports.push({ key: Date.now(), date: '', rooms: '' });
        },
        // 更改上傳的文件
        uploadChange(info, type) {
            this.editData[type] = info
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
