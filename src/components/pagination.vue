<template>
    <a-pagination
        :current="currentPage"
        :total="total"
        :page-size="size"
        @change="currentPageChange"
        style="padding-bottom:60px;"
    />
</template>
<script>
export default {
    props: {
        page: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
        size: { type: Number, default: 6 }
    },
    computed: {
        currentPage: {
            get() {
                return this.page + 1;
            }
        }
    },
    methods: {
        currentPageChange: function(page) {
            this.$emit("handleChange", page);
        }
    }
};
</script>
