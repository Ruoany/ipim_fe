<template>
    <div class="flex img-list flex-align-items-center">
        <a-empty
            v-if="showList.length === 0"
            :description="$t('util.nodata')"
            class="empty"
        ></a-empty>
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
import cancel from "@/assets/image/cancel.svg";
import showCell from "@/components/card/showCell";
import Activity from "@/apis/activity";

export default {
    components: { showCell },
    data() {
        return {
            listQuery: {
                momentous: true,
                sort: "publishTime,asc",
                manyStatus: ["NOTSTART", "PROGRESS", "END", "CANCEL"]
            },
            showList: [],
            unopen,
            ing,
            over,
            cancel
        };
    },
    filters: {
        statusImgFilter(e) {
            switch (e) {
                case "NOTSTART":
                    return unopen;
                    break;
                case "PROGRESS":
                    return ing;
                    break;
                case "END":
                    return over;
                    break;
                case "CANCEL":
                    return cancel;
                    break;
            }
        }
    },
    methods: {
        async getActiveList() {
            const data = await Activity.all(this.listQuery);
            data.code === 200 ? (this.showList = data.data) : "";
        }
    },
    mounted() {
        this.getActiveList();
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
    width: 100%;
}
.empty {
    height: 500px;
    // margin: auto;
    width: 100%;
}
</style>
