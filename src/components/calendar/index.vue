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
    // width: 500px;
    height: 454px;
}
/deep/.ant-fullcalendar-header .ant-radio-group {
    display: none;
}
/deep/.ant-fullcalendar-value {
    border-radius: 50%;
}
/deep/.ant-fullcalendar-value {
    height: 50px;
    width: 50px;
    line-height: 50px;
    font-size: 20px;
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
    width: 80px;
    padding-top: 18px;
}
</style>
