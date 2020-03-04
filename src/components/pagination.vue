<template>
    <a-pagination v-model="currentPage" :total="total" />
</template>
<script>
export default {
    props: {
        page: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
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
    data() {
        return {
            current: 1
        };
    }
};
</script>