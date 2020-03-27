<template>
    <div class="others-institution-container">
        <div
            class="logo"
            :style="
                info.logo
                    ? { backgroundImage: `url(${info.logo})` }
                    : {
                          backgroundImage:
                              'url(../../../assets/image/nologo.png)'
                      }
            "
        ></div>
        <div class="content">
            <div class="name">{{ info.nameZh }}</div>
            <div class="status">{{ info.status | formatStutas }}</div>
            <div class="bottom">
                <a-button @click="handleChange">設為當前機構</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { info: Object },
    filters: {
        formatStutas: function(value) {
            switch (value) {
                case "approving":
                    return "審核中";
                    break;
                case "approving":
                    return "審核中";
                    break;
                case "approving":
                    return "審核中";
                    break;
                default:
                    return "未認證";
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
    border: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    margin-top: 20px;
    background: #e6e6e6;
    position: relative;
    .logo {
        width: 80px;
        height: 80px;
        background-size: contain;
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
}
</style>