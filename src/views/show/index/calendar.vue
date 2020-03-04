<template>
    <div>
        <h1 class="font-bold">{{ $t("index.evCa") }}</h1>
        <div class="flex-justify-content-space-between">
            <calendar class="list" @changeDate="changeDate"></calendar>
            <a-spin :spinning="loading" class="flex list" style=" height: 330px;    overflow-y: scroll;">
                <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />

                <!-- <div class="flex list" style=" height: 330px;    overflow-y: scroll;"> -->
                <div v-if="showList.length === 0">今天暫無展會</div>
                <div class="flex" style="padding-top:20px;" v-else v-for="item in showList" :key="item.id">
                    <img
                        class="img"
                        :src="item.scope"
                        @click="$router.push({ path: '/show/detail', query: { id: item.id } })"
                    />
                    <div style="margin-left:20px;">
                        <div class="font-20">{{ item.nameZh }}</div>
                        <div style="color:red;">
                            {{ $moment(item.startTime).format("YYYY.MM.DD") }}-{{
                                $moment(item.endTime).format("YYYY.MM.DD")
                            }}
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </a-spin>
        </div>
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
.img {
    width: 140px;
    height: 80px;
    cursor: pointer;
}
.font-20 {
    font-size: 20px;
}
.font-bold {
    font-weight: bold;
    padding: 50px 0 20px 0;
}
.list {
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
}
.list::-webkit-scrollbar {
    display: none;
}
</style>
