<template>
    <div class="container">
        <a-empty v-if="!trades" class="empty" description="暫無數據"></a-empty>
        <a-card v-for="item in trades" :key="item.id" class="sp-card">
            <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583908268484&di=b4ba2c516f369fe632b336565f8ddce8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190928%2F19%2F1569669753-jnlcKyEuMZ.jpg"
                class="sp-card-avatar"
            />
            <div class="sp-card-content">
                <div class="sp-card-content-title">
                    <span>澳門製造有限公司</span>
                </div>
                <div class="sp-card-content-item">
                    <span>{{ $t("index.email") }}:</span>
                </div>
            </div>
        </a-card>
    </div>
</template>

<script>
export default {
    props: {
        trades: {
            type: Array,
            default: () => {
                return [];
            }
        }
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
            font-size: 40px;
            color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #666;
            display: flex;
            align-items: center;
            justify-content: center;
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
