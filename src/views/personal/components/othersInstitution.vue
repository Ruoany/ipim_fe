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
            <div class="top">
                <div class="name">{{ info.name }}</div>
                <div class="status">{{ info.status }}</div>
            </div>
            <div class="bottom">
                <a-button>設為當前機構</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { info: Object },
    methods: {
        handleNavigate: function(url) {
            this.$router.push(`${url}?institutionId=${this.info.id}`);
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
        .top {
            font-size: 30px;
            font-weight: bold;
            .name {
                width: 100%;
            }
            .status {
                font-size: 15px;
                line-height: 40px;
            }
        }
        .bottom {
            display: flex;
            align-items: center;
            .item {
                width: 150px;
                display: flex;
                align-items: center;
                border-left: 1px solid #e6e6e6;
                padding-left: 20px;
                cursor: pointer;
                span {
                    margin-left: 5px;
                }
                &:hover {
                    color: lightcoral;
                }
                &:nth-child(1) {
                    padding-left: 0;
                    border-left: none;
                }
            }
        }
    }
}
</style>