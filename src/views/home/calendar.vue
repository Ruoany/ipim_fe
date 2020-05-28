<template>
    <div class="container flex-justify-content-space-between">
        <div class="calendar">
            <calendar
                class="list"
                :dateSource="badgeData"
                @changeDate="date => (dayTime = date)"
                @changePanel="panelChange"
            ></calendar>
        </div>
        <a-spin :spinning="loading" class="flex list spin">
            <a-icon
                slot="indicator"
                type="loading"
                style="font-size: 24px"
                spin
            />
            <a-empty
                v-if="showList.length === 0"
                class="empty"
                :description="$t('util.nodata')"
            ></a-empty>
            <a-card
                hoverable
                v-else
                v-for="item in showList"
                :key="item.id"
                @click="
                    $router.push({
                        path: '/show/detail',
                        query: { id: item.id }
                    })
                "
                class="cell"
                :bordered="false"
            >
                <div class="flex">
                    <div
                        class="img"
                        :style="{ backgroundImage: `url(${item.scope})` }"
                    ></div>
                    <div class="flex-column flex-justify-content-space-between">
                        <div class="font-20">{{ item.nameZh }}</div>
                        <div class="red-color">
                            {{
                                $moment(item.startTime).format("YYYY.MM.DD")
                            }}-{{ $moment(item.endTime).format("YYYY.MM.DD") }}
                        </div>
                    </div>
                </div>
            </a-card>
        </a-spin>
    </div>
</template>

<script>
import calendar from "@/components/calendar/index";
import Activity from "@/apis/activity";
export default {
    components: { calendar },
    data() {
        return {
            showList: [],
            badgeData: [],
            current: "",
            loading: true
        };
    },
    computed: {
        dayTime: {
            get() {
                return this.$moment().format("YYYY-MM-DD");
            },
            set(value) {
                this.getActiveList(value);
                return value;
            }
        }
    },
    methods: {
        async getBageDate(dayTime) {
            const str = dayTime.split("-");
            const { data } = await Activity.disabled({
                year: str[0],
                month: str[1]
            });
            this.badgeData = data.map(item => item.split(" ")[0]);
        },
        async getActiveList(dayTime) {
            this.loading = true;
            const str = dayTime.split("-");
            const { data, code } = await Activity.all({
                dayTime,
                manyStatus: ["NOTSTART", "PROGRESS", "END", "CANCEL"]
            });
            this.showList = data ? data : [];
            this.loading = false;
        },
        panelChange(date) {
            this.dayTime = date;
            this.getBageDate(date);
        }
    },
    mounted() {
        this.getBageDate(this.dayTime);
        this.getActiveList(this.dayTime);
    }
};
</script>

<style lang="less" scoped>
.container {
    .calendar {
        width: 600px;
        .list {
            flex-direction: column;
            justify-content: flex-start;
            height: 510px;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    .spin {
        height: 510px;
        width: calc(~"100% - 700px");
        overflow-y: scroll;
        /deep/.ant-spin-container {
            width: 100%;
        }
        .empty {
            width: 100%;
            height: 100%;
        }
        .cell {
            margin-bottom: 20px;
            background: #fafafa;
            border-radius: 3px;
            // padding: 24px;
            cursor: pointer;
            .flex-column {
                width: 320px;
                flex-direction: column;
                padding-left: 28px;
                box-sizing: border-box;
                .font-20 {
                    font-size: 22px;
                    font-weight: bold;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2; //行数
                    -webkit-box-orient: vertical;
                }
                .red-color {
                    color: #ed1c24;
                    font-size: 16px;
                }
            }
            .img {
                width: 157px;
                height: 98px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
        }
    }
    /deep/.ant-fullcalendar-column-header {
        color: #ee1c24;
        line-height: 32px;
        border-bottom: 1px solid #ee1c24;
    }
}
</style>
