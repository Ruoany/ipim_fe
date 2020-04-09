<template>
    <a-calendar :fullscreen="false" class="all" @select="calSelect" />
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
    mounted() {}
};
</script>

<style lang="less" scoped>
.all {
    width: 100%;
    height: 454px;
}
/deep/.ant-fullcalendar-header .ant-radio-group {
    display: none;
}
/deep/.ant-fullcalendar-value {
    border-radius: 50%;
}
/deep/.ant-fullcalendar-value {
    height: 40px;
    width: 40px;
    line-height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 18px 0 0 0;
}
/deep/.ant-fullcalendar-header {
    text-align: left;
    padding-left: 36px;
}
/deep/.ant-fullcalendar {
    border: 0;
}
/deep/.ant-fullcalendar-date {
    padding-top: 18px;
}
</style>
