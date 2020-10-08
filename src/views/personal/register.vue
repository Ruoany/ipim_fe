<template>
    <a-spin :spinning="loading" class="container">
      <div style="float:left;width:200px;font-size: 18px;height: 30px;line-height: 30px;
font-family: 微软雅黑;
font-weight: bold;margin-top:10px">展會登記 </div>
                  <a-button
                        type="primary"
                        icon="plus"
                        @click="change"
                        style="margin-left:640px;margin-top:10px"
                        >添加展會</a-button
                    >
        <!-- <div style="float:right; cursor: pointer;height: 30px;line-height: 30px;color:red;"

             @click="$router.push('/personal/addActivity?type=new')">


            <a-icon type="plus"></a-icon>
            <span>{{ $t("personal.addAc") }}</span>
         </div> -->
        <div  style="clear: both;"></div>


        <a-row style="background-color: #fafafa;margin-top:30px">
            <a-col :span="24">
        <a-table :columns="columns" :data-source="list"  :pagination="false" >



            <span slot="action"  slot-scope="record">
      <a   @click="$router.push('/personal/addActivity?type=update&id='+record.id)">修改</a>
      <a-divider type="vertical" />
      <a   @click="() => deleteAcitity(record.id)">刪除</a>

    </span>
        </a-table>
        </a-col>
        </a-row>
        <div style="background-color: #fafafa" ></div>
        <pagination :page.sync="page" :size="size" :total="total" />

    </a-spin>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/components/pagination";
import Activity from "@/apis/activity";


const columns = [
    {
        title: '名稱',
        dataIndex: 'nameZh',
        key: 'nameZh',
    },
    {
        title: '開始時間',
        dataIndex: 'startTime',
        key: 'startTime',
    },
    {
        title: '結束時間',
        dataIndex: 'endTime',
        key: 'endTime',
    },
    {
        title: '地點',
        key: 'place',
        dataIndex: 'place',

    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
    },
];

const tableData = [
    {
        key: '1',
        name: 'John Brown',
        beginDate: 32,
        endDate: 'New York No. 1 Lake Park',
        place: '1234',
    },
    {
        key: '2',
        name: '1John Brown',
        beginDate: 132,
        endDate: '1New York No. 1 Lake Park',
        place: '12345',
    },
    {
        key: '3',
        name: 'dddohn',
        beginDate: 952,
        endDate: 'bk',
        place: '123245',
    },

];

export default {
    components: {  Pagination },
    data() {
        return {
            columns,
            tableData,
            list:[],
            pagination: {},
            size:10,
            total:0,
            page:0,
            loading:false,
        };
    },
    watch:{
        page: function() {
            this.initData();
        },
    },
    computed: {
        ...mapGetters(["institutionList", "currentInstitution"])
    },
    methods: {
        change(){
            this.$router.push('/personal/addActivity?type=new')
        },
        changeCurrentInstitution: function(id) {
            const o = this.institutionList.find(item => item.id === id);
            sessionStorage.setItem("institution", id);
            this.$store.dispatch("setCurrentInstitution", o);
        },
        initData: async function() {
            if (!this.currentInstitution) {
                return;
            }
            this.loading = true;
            const { data } = await Activity.get({
                institutionId: this.currentInstitution.id,
                page: this.page,
                size: this.size
            });

            this.list = data ? data.content.filter(obj => {
                return obj.id !== null;
            }) : [];
            // let filterData = data.content.filter(obj => obj.activity != null);
            // this.$set(this.list,0, filterData);
            this.total = data ? data.totalElements : 0;
            this.loading = false;
            console.info(this.list);
            console.info(data);
        },
        deleteAcitity:async function (id) {
            this.loading = true;
            const {  code, message } = await Activity.deleteSelf( id);
            if(code===200){
                this.initData();
            }

        }
    },
    mounted(){


        this.initData();
    }

};
</script>

<style lang="less" scoped>
/deep/button {
    width: 120px;
}
.card {
    width: 140px;
    margin-right: 20px;
    text-align: center;
    line-height: 30px;
}
.title {
    height: 300px;
    background: #f9f9f9;
    margin-bottom: 40px;
    padding: 40px;
    .img {
        width: 300px;
        height: 200px;
    }
    .name {
        padding-left: 20px;
    }
}
.others {
    margin-top: 20px;
    height: 40px;
    width: 100%;
    line-height: 40px;
    background: #f7f8fa;
    text-align: center;
    border: none;
}
</style>
