<template>
    <div>
        <a-calendar :fullscreen="false" class="all" @select="calSelect" />
    </div>
</template>

<script>
// import "moment/locale/zh-cn";
// import "moment/locale/zh-cn";
export default {
    data() {
        return {};
    },
    methods: {
        //不可選日期
        // disDateFun(e) {
        //     if (this.$moment().format("YYYY-MM-DD") === this.$moment(e).format("YYYY-MM-DD")) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // },
        //點擊選擇日期
        calSelect(date) {
            let upDate = this.$moment(date).format("YYYY-MM-DD");
            this.$emit("changeDate", upDate);
            console.log("date==>", this.$moment(date).format("YYYY-MM-DD"));
        }
    },
    mounted() {
        // this.$moment.locale("en");
    }
};
</script>

<style lang="less" scoped>
.all {
    width: 500px;
    height: 400px;
}
/deep/.ant-fullcalendar-header .ant-radio-group {
    display: none;
}
/deep/.ant-fullcalendar-value {
    border-radius: 50%;
}
</style>
