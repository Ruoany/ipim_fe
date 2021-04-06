<template>
    <div class="container">
        <a-empty
            v-if="liaisons.length === 0"
            class="empty"
            :description="$t('util.nodata')"
        ></a-empty>
        <a-card v-for="item in liaisons" :key="item.id" class="sp-card">
            <div class="sp-card-avatar">
                {{ item.name | formatAvatar }}
            </div>

            <div class="sp-card-content">
                <div class="sp-card-content-title">
                    <span>{{ item.name }}</span>
                </div>
                <div class="sp-card-content-item">
                    <span>{{ $t("index.tel") }}：</span>
                    <span>{{ item.tel }}</span>
                </div>
                <div class="sp-card-content-item">
                    <span>{{ $t("index.email") }}：</span>
                    <span>{{ item.email }}</span>
                </div>
                <div class="sp-card-content-item">
                    <span>{{ $t("index.fax") }}：</span>
                    <span>{{ item.areaCodeOrFax }}</span>
                </div>
            </div>
        </a-card>
    </div>
</template>

<script>
export default {
    props: {
        liaisons: Array
    },
    data() {
        return {
            colors: [
                "#26A69A",
                "#FA541C",
                "#F5222D",
                "#FAAD14",
                "#52C41A",
                "#40A9FF",
                "#597EF7",
                "#9254DE",
                "#F759AB",
                "#5C6BC0"
            ]
        };
    },
    filters: {
        formatAvatar: function(value) {
            return value ? value.slice(0, 1) : value;
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .empty {
        min-height: 300px;
        margin: 0;
    }
    .sp-card {
        width: 600px;
        padding: 20px;
        margin-bottom: 28px;
        /deep/.ant-card-body {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .sp-card-avatar {
            font-size: 30px;
            color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e9e9e9;
            color: #333;
        }
        .sp-card-content {
            width: 350px;
            .sp-card-content-title {
                font-size: 20px;
                font-weight: bold;
                color: #333;
            }
            .sp-card-content-item {
                font-size: 16px;
                color: #999;
            }
        }
    }
}
</style>
