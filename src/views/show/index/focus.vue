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
            :statusImg="item.status | statusImgFilter"
        ></show-cell>
    </div>
</template>

<script>
import unopen from "@/assets/image/unopen.svg";
import ing from "@/assets/image/ing.svg";
import over from "@/assets/image/over.svg";
import showCell from "@/components/card/showCell";
import { getActiveList } from "@/apis/show";
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
            const data = await getActiveList({ ...this.listQuery });
            if (data.code === 200) {
                this.showList = data.data;
                this.showList.push(data.data[0]);
            } else {
                this.$message.error(data.message);
            }
        }
    },
    mounted() {
        this.getActiveList();
    },
    filters: {
        statusImgFilter(e) {
            let img = null;
            let that = this;
            switch (e) {
                case 2:
                    img = unopen;
                    break;
                case 3:
                    img = ing;
                    break;
                case 4:
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
