<template>
    <div class="flex-align-items-center">
        <div class="width-1280">
            <div class="flex-justify-content-space-between flex-align-items-center title">
                <div class="font-bold">{{ $t("index.keAc") }}</div>
                <div class="go" @click="$router.push('/show/all_index')">
                    {{ $t("index.allAc") }}
                    <a-icon type="right" />
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
                ></show-cell>
            </div>
        </div>
    </div>
</template>

<script>
import showCell from "@/components/card/showCell";
import { getActiveList } from "@/apis/show";
export default {
    components: { showCell },
    data() {
        return {
            listQuery: {
                momentous: true
            },
            showList: []
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
    }
};
</script>
<style lang="less" scoped>
.title {
    height: 120px;
}
.go {
    cursor: pointer;
}
.font-bold {
    font-size: 28px;
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
