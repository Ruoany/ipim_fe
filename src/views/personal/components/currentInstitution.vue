<template>
    <div class="current-institution-container">
        <div
            class="logo"
            :style="
                info.logo
                    ? { backgroundImage: `url(${info.logo})` }
                    : {
                          backgroundImage: 'url(../../../assets/image/nologo.png)'
                      }
            "
        ></div>
        <div class="content">
            <div class="top">
                <div class="name">{{ info.nameZh }}</div>
                <div class="status" :class="info.status">
                    {{ info.status | formatStutas }}
                </div>
            </div>
            <div class="bottom">
                <div class="item" @click="handleNavigate('/personal/mechanism')">
                    <a-icon type="bars" style="font-size:25px;" />
                    <span>{{ $t("personal.s") }}</span>
                </div>
                <div class="item" @click="handleNavigate('/personal/con_user')">
                    <a-icon type="team" style="font-size:25px;" />
                    <span>{{ $t("personal.n") }}</span>
                </div>
                <div class="item" @click="handleNavigate('/personal/sub_account')">
                    <a-icon type="solution" style="font-size:25px;" />
                    <span>{{ $t("personal.x") }}</span>
                </div>
                <div class="right-button">
                    <a-button @click="handleNavigate('/personal/attest')">{{ $t("personal.certify") }}</a-button>
                </div>
            </div>
        </div>
        <img :src="now_me" class="img" />
    </div>
</template>

<script>
import now_me from "@/assets/image/now_me.svg";
export default {
    props: { info: Object },
    filters: {
        formatStutas: function(value) {
            switch (value) {
                case "approving":
                    return "審核中";
                    break;
                case "passed":
                    return "已認證";
                    break;
                case "rejected":
                    return "認證失敗";
                    break;
                default:
                    return "未認證";
                    break;
            }
        }
    },
    data() {
        return { now_me };
    },
    methods: {
        handleNavigate: function(url) {
            this.$router.push(`${url}?institutionId=${this.info.id}`);
        }
    }
};
</script>

<style lang="less" scoped>
.current-institution-container {
    position: relative;
    padding: 20px 40px;
    height: 200px;
    box-sizing: border-box;
    border: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    border-radius: 6px;
    .logo {
        width: 140px;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .content {
        width: 740px;
        padding-left: 20px;
        height: 140px;
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
            .certified {
                color: #db0f0f;
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
            .right-button {
                width: 290px;
                border: none;
                text-align: right;
            }
        }
    }
}
.img {
    transform: rotate(90deg);
    position: absolute;
    top: 0;
    right: 0;
}
</style>
