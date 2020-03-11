<template>
    <div class="container">
        <a-card class="sp-card">
            <div class="sp-card-avatar">{{ "黃曉明" | formatAvatar }}</div>
            <div class="sp-card-content">
                <div class="sp-card-content-title">
                    <span>黃曉明 {{ $t("show.sir") }}</span>
                </div>
                <div class="sp-card-content-item">
                    <span>{{ $t("index.tel") }}:</span>
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
        liaisons: {
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
    .sp-card {
        width: 600px;
        padding: 20px;
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
