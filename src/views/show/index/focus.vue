<template>
    <div class="flex-align-items-center">
        <div class="width-1280">
            <div class="flex-justify-content-space-between flex-align-items-center title">
                <div class="font-bold">{{ $t("index.keAc") }}</div>
                <div class="go flex-align-items-center" @click="$router.push('/show/all_index')">
                    {{ $t("index.allAc") }}
                    <img src="../../../assets/image/more.svg" style="margin-left:10px;" />
                </div>
            </div>
            <div class="flex img-list">
                <show-cell
                    v-for="item in showList"
                    :key="item.id"
                    class="show"
                    :imgUrl="item.scope"
                    :startTime="item.startTime"
                    :endTime="item.endTime"
                    :name="item.nameZh"
                    :id="item.id"
                    :statusImg="item.status | statusImgFilter"
                ></show-cell>
            </div>
        </div>
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
.title {
    // height: 210px;
    padding: 100px 0 60px 0;
}
.go {
    cursor: pointer;
    color: #666666;
    font-size: 18px;
}
.font-bold {
    font-size: 36px;
    font-weight: bold;
}
.img-list {
    flex-wrap: wrap;
}
.show {
    margin-right: 20px;
    padding-bottom: 60px;
}
</style>
