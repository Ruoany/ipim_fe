<template>
    <div class="content flex flex-justify-content-space-between">
        <a-empty v-if="list.length === 0" class="empty"></a-empty>
        <show-cell
            v-for="item in list"
            :key="item.id"
            :class="list.length % 3 === 2 ? 'sp' : ''"
            :img-url="item.scope"
            :startTime="$moment(item.startTime).format('YYYY-MM-DD')"
            :endTime="$moment(item.endTime).format('YYYY-MM-DD')"
            :name="item.nameZh"
            :id="item.id"
        ></show-cell>
    </div>
</template>

<script>
import showCell from "@/components/card/showCell";

export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    components: { showCell }
};
</script>

<style lang="less" scoped>
.content {
    flex-wrap: wrap;
    width: 100%;
}
/deep/ .ant-pagination {
    margin: 30px 0;
}
</style>
