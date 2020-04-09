<template>
    <div class="others-institution-container">
        <div
            class="logo"
            :style="
                info.logo
                    ? { backgroundImage: `url(${info.logo})` }
                    : { backgroundImage: `url(${defaultImage})` }
            "
        ></div>
        <div class="content">
            <div class="name">{{ info.nameZh }}</div>
            <div class="status" :class="info.status">
                {{ info.status | formatStutas }}
            </div>
            <div class="bottom">
                <a-button @click="handleChange">設為當前機構</a-button>
            </div>
        </div>
    </div>
</template>

<script>
import defaultImage from "@/assets/image/nologo.jpg";
import i18n from "@/assets/i18n/index";

export default {
    props: { info: Object },
    data() {
        return { defaultImage };
    },
    filters: {
        formatStutas: function(value) {
            switch (value) {
                case "approving":
                    return i18n.t("personal.verifing");
                    break;
                case "passed":
                    return i18n.t("personal.verified");
                    break;
                case "rejected":
                    return i18n.t("personal.verifiedFail");
                    break;
                default:
                    return i18n.t("personal.unverified");
                    break;
            }
        }
    },
    methods: {
        handleNavigate: function(url) {
            this.$router.push(`${url}?institutionId=${this.info.id}`);
        },
        handleChange: function() {
            this.$emit("change", this.info.id);
        }
    }
};
</script>

<style lang="less" scoped>
.others-institution-container {
    padding: 20px 40px;
    height: 120px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 20px;
    background: #f7f8fa;
    position: relative;
    .logo {
        width: 80px;
        height: 80px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .content {
        padding-left: 20px;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        .rejected {
            color: #db0f0f;
        }
        .approving {
            color: #faad14;
        }
        .passed {
            color: #52c41a;
        }
        .name {
            font-size: 24px;
            font-weight: bold;
            width: 100%;
        }
        .status {
            font-size: 15px;
            line-height: 40px;
        }
        .bottom {
            position: absolute;
            right: 24px;
        }
    }
    /deep/.ant-btn {
        background: none;
    }
}
</style>
