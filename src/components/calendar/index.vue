<template>
    <a-calendar :fullscreen="false" class="all" @select="calSelect">
        <!-- :disabledDate="computedBadge" -->
        <!-- <template slot="dateCellRender" slot-scope="value">
            <div class="badge" :class="computedBadge(value)"></div>
        </template> -->
    </a-calendar>
</template>

<script>
export default {
    props: {
        dateSource: {
            type: Array,
            default: () => {
                return ["2020-03-29", "2020-04-05", "2020-04-15"];
            }
        }
    },
    methods: {
        //點擊選擇日期
        calSelect(date) {
            let upDate = this.$moment(date).format("YYYY-MM-DD");
            this.$emit("changeDate", upDate);
        }
        //判斷當天是否有展會
        // computedBadge(date) {
        //     const dateStr = this.$moment(date).format("YYYY-MM-DD");
        //     return !this.dateSource.includes(dateStr);
        // }
    }
};
</script>

<style lang="less" scoped>
.all {
    width: 100%;
    height: 454px;
    .badge {
        line-height: 30px;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        margin: auto;
    }
    .isHas {
        background: red;
    }
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
