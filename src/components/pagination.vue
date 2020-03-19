<template>
    <a-pagination
        v-model="currentPage"
        showLessItems
        :total="total"
        :pageSize="size"
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
            get: function() {
                return this.page + 1;
            },
            set: function(value) {
                this.$emit("update:page", value - 1);
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
