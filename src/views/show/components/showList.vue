<template>
    <div class="show-list-content flex flex-justify-content-space-between">
        <a-empty
            v-if="list.length === 0"
            description="暫無數據"
            class="empty"
        ></a-empty>
        <show-cell
            v-for="item in list"
            :key="item.id"
            :class="list.length % 3 === 2 ? 'sp' : ''"
            :img-url="item.scope"
            :startTime="$moment(item.startTime).format('YYYY-MM-DD')"
            :endTime="$moment(item.endTime).format('YYYY-MM-DD')"
            :name="item.nameZh"
            :id="item.id"
            :statusImg="item.showStatus | statusImgFilter"
        ></show-cell>
    </div>
</template>

<script>
import showCell from "@/components/card/showCell";
import unopen from "@/assets/image/unopen.svg";
import ing from "@/assets/image/ing.svg";
import over from "@/assets/image/over.svg";
import cancel from "@/assets/image/cancel.svg";

export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    components: { showCell },
    data() {
        return {
            unopen,
            ing,
            over,
            cancel
        };
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
                case "CANCEL":
                    img = cancel;
                    break;
            }
            return img;
        }
    }
};
</script>

<style lang="less" scoped>
.show-list-content {
    flex-wrap: wrap;
    width: 100%;
    .empty {
        height: 500px;
    }
}
/deep/ .ant-pagination {
    margin: 30px 0;
}
</style>
