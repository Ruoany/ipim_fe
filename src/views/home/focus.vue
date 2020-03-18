<template>
    <div class="flex img-list flex-align-items-center">
        <show-cell
            v-for="item in showList"
            :key="item.id"
            :class="showList.length % 3 === 2 ? 'sp' : ''"
            :imgUrl="item.scope"
            :startTime="item.startTime"
            :endTime="item.endTime"
            :name="item.nameZh"
            :id="item.id"
            :statusImg="item.showStatus | statusImgFilter"
        ></show-cell>
    </div>
</template>

<script>
import unopen from "@/assets/image/unopen.svg";
import ing from "@/assets/image/ing.svg";
import over from "@/assets/image/over.svg";
import showCell from "@/components/card/showCell";

import Activity from "@/apis/activity";

export default {
    components: { showCell },
    data() {
        return {
            listQuery: {
                momentous: true
            },
            showList: [],
            unopen,
            ing,
            over
        };
    },
    methods: {
        async getActiveList() {
            const data = await Activity.all({
                ...this.listQuery,
                manyStatus: ["PROGRESS", "END"]
            });
            data.code === 200 ? (this.showList = data.data) : "";
        }
    },
    mounted() {
        this.getActiveList();
    },
    filters: {
        statusImgFilter(e) {
            let img;
            let that = this;
            switch (e) {
                case "NOTSTART":
                    img = unopen;
                    break;
                case "PROGRESS":
                    img = ing;
                    break;
                case "END":
                    img = over;
                    break;
            }
            return img;
        }
    }
};
</script>
<style lang="less" scoped>
.go {
    cursor: pointer;
    color: #666666;
    font-size: 18px;
}
.img-list {
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
