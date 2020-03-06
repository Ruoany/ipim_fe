<template>
    <a-pagination v-model="currentPage" :total="total" :page-size="size" />
</template>
<script>
export default {
    props: {
        page: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
        size: { type: Number, default: 10 }
    },
    computed: {
        currentPage: {
            get() {
                return this.page + 1;
            },
            set(val) {
                this.$emit("update:page", val - 1);
            }
        }
    },
    mounted: function() {
        console.log("sdasdasdasda", this.total);
    }
};
</script>