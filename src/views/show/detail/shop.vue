<template>
    <div class="container">
        <a-empty
            v-if="institutions.length === 0"
            class="empty"
            :description="$t('util.nodata')"
        ></a-empty>
        <a-card v-for="item in institutions" :key="item.id" class="sp-card">
            <div
                class="sp-card-avatar"
                :style="
                    item.logo
                        ? `backgroundImage:url(${item.logo})`
                        : `backgroundImage:url(${defaultImage})`
                "
            ></div>
            <div class="sp-card-content sp-card-content-title">
                <span>{{ item.nameZh }}</span>
            </div>
        </a-card>
    </div>
</template>

<script>
import defaultImage from "@/assets/image/nologo.jpg";
export default {
    props: { institutions: Array },
    data() {
        return {
            defaultImage
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
            font-size: 40px;
            color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border: 1px solid #e9e9e9;
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
