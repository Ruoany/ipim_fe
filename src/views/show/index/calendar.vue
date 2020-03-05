<template>
    <div class="all flex-justify-content-space-between">
        <div style="width:600px;">
            <calendar class="list" @changeDate="changeDate"></calendar>
        </div>
        <a-spin :spinning="loading" class="flex list spin">
            <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />

            <!-- <div class="flex list" style=" height: 330px;    overflow-y: scroll;"> -->
            <a-empty v-if="showList.length === 0"></a-empty>
            <div class="flex cell" v-else v-for="item in showList" :key="item.id">
                <img
                    class="img"
                    :src="item.scope"
                    @click="$router.push({ path: '/show/detail', query: { id: item.id } })"
                />
                <div class=" flex-column flex-justify-content-space-between">
                    <div class="font-20">{{ item.nameZh }}</div>
                    <div class="red-color">
                        {{ $moment(item.startTime).format("YYYY.MM.DD") }}-{{
                            $moment(item.endTime).format("YYYY.MM.DD")
                        }}
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </a-spin>
    </div>
</template>

<script>
import calendar from "@/components/calendar/index";
import { getActiveList } from "@/apis/show";
export default {
    components: { calendar },
    data() {
        return {
            showList: [],
            dayTime: this.$moment().format("YYYY-MM-DD"),
            loading: true
        };
    },
    methods: {
        async getActiveList() {
            this.loading = true;
            const data = await getActiveList({ dayTime: this.dayTime });
            if (data.code === 200) {
                this.showList = data.data;
                this.loading = false;
            } else {
                this.$message.error(data.message);
            }
        },
        changeDate(date) {
            this.dayTime = date;
            this.getActiveList();
        }
    },
    mounted() {
        this.getActiveList();
    }
};
</script>

<style lang="less" scoped>
.all {
    .img {
        width: 157px;
        height: 98px;
        cursor: pointer;
        line-height: 0;
    }
    .font-20 {
        font-size: 22px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; //行数
        -webkit-box-orient: vertical;
    }

    .list {
        flex-direction: column;
        justify-content: flex-start;
        // flex: 1;
        // width: 508px;
        height: 510px;
    }
    .list::-webkit-scrollbar {
        display: none;
    }
    .cell {
        margin-bottom: 20px;
        background: #fafafa;
        border-radius: 3px;
        padding: 24px;
    }
    .flex-column {
        flex-direction: column;
        padding-left: 28px;
    }
    .red-color {
        color: #ed1c24;
        font-size: 16px;
    }
    .spin {
        height: 510px;
        width: calc(~"100% - 700px");
        overflow-y: scroll;
        /deep/.ant-spin-container,
        .ant-empty {
            height: 100%;
        }
        /deep/.ant-empty {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
