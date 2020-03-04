<template>
    <div>
        <a-spin :spinning="loading" style="min-height:750px;">
            <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />

            <div class="flex wrap" style=" padding-top: 20px;">
                <show-cell
                    v-for="item in showList"
                    :key="item.id"
                    :imgUrl="item.scope"
                    :startTime="$moment(item.startTime).format('YYYY-MM-DD')"
                    :endTime="$moment(item.endTime).format('YYYY-MM-DD')"
                    :name="item.nameZh"
                    :id="item.id"
                    class="show"
                ></show-cell>
            </div>
        </a-spin>
        <pagination class="show" :page.sync="listQuery.page" :total="total"></pagination>
    </div>
</template>

<script>
import showCell from "@/components/card/showCell";
import pagination from "@/components/pagination";
import { getActivePage } from "@/apis/show";
export default {
    props: {
        listQuery: {
            type: Object,
            default: () => {
                return { page: 0, size: 9 };
            }
        }
    },
    components: { showCell, pagination },
    watch: {
        "listQuery.page": function() {
            this.getActivePage();
        }
    },
    data() {
        return {
            showList: [],
            total: 0,
            loading: true
        };
    },
    methods: {
        async getActivePage() {
            this.loading = true;
            const data = await getActivePage({ ...this.listQuery });
            if (data.code === 200) {
                this.showList = data.data.content;
                this.total = data.data.totalElements;
                this.loading = false;
            } else {
                this.$message.error(data.message);
            }
        }
    },
    mounted() {
        this.getActivePage();
    }
};
</script>

<style lang="less" scoped>
.wrap {
    flex-wrap: wrap;
}
.show {
    margin-right: 20px;
    padding-bottom: 60px;
}
</style>