<template>
    <div class="container">
        <a-empty
            v-if="institutions.length === 0"
            class="empty"
            description="暫無數據"
        ></a-empty>
        <a-card v-for="item in institutions" :key="item.id" class="sp-card">
            <img :src="item.logo" class="sp-card-avatar" />
            <div class="sp-card-content sp-card-content-title">
                <span>{{ item.nameZh }}</span>
            </div>
        </a-card>
    </div>
</template>

<script>
export default {
    props: {
        institutions: {
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
            font-size: 20px;
            font-weight: bold;
            color: #333;
        }
    }
}
</style>
