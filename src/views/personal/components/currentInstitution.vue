<template>
    <div class="current-institution-container">
        <div
            class="logo"
            :style="
                info.logo
                    ? { backgroundImage: `url(${info.logo})` }
                    : { backgroundImage: `url(${defaultImage})` }
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
                <div
                    v-if="info.status !== 'approving'"
                    class="item"
                    @click="handleNavigate('/personal/mechanism')"
                >
                    <a-icon type="bars" style="font-size:25px;" />
                    <span>{{ $t("personal.s") }}</span>
                </div>
                <div
                    v-else
                    class="item item-disabled"
                    title="認證中的機構不允許修改資料"
                >
                    <a-icon type="bars" style="font-size:25px;" />
                    <span>{{ $t("personal.s") }}</span>
                </div>
                <div class="item" @click="handleNavigate('/personal/con_user')">
                    <a-icon type="team" style="font-size:25px;" />
                    <span>{{ $t("personal.n") }}</span>
                </div>
                <div
                    class="item"
                    @click="handleNavigate('/personal/sub_account')"
                    v-if="roleBoolean"
                >
                    <a-icon type="solution" style="font-size:25px;" />
                    <span>{{ $t("personal.x") }}</span>
                </div>
                <div class="right-button" v-if="roleBoolean">
                    <a-button
                        @click="handleNavigate('/personal/attest')"
                        v-if="
                            info.status === 'uncertified' ||
                                info.status === 'rejected'
                        "
                        ghost
                        type="danger"
                        >{{ $t("personal.certify") }}</a-button
                    >
                </div>
            </div>
        </div>
        <img :src="now_me" class="img" />
    </div>
</template>

<script>
import defaultImage from "@/assets/image/nologo.jpg";
import now_me from "@/assets/image/now_me.svg";
import i18n from "@/assets/i18n/index";
import { mapGetters } from "vuex";
export default {
    props: { info: Object },
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
    computed: {
        ...mapGetters(["currentUser"]),
        roleBoolean() {
            return this.info.adminId === this.currentUser;
        }
    },
    data() {
        return { now_me, defaultImage };
    },
    methods: {
        handleNavigate: function(url) {
            this.$router.push(url);
        }
    }
};
</script>

<style lang="less" scoped>
.current-institution-container {
    position: relative;
    padding: 20px 24px 20px 40px;
    height: 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: #f7f8fa;
    border: 1px solid #e6e6e6;

    .logo {
        width: 140px;
        height: 140px;
        background-size: cover;
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
            .rejected {
                color: #db0f0f;
            }
            .approving {
                color: #faad14;
            }
            .passed {
                color: #52c41a;
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
                    color: #ed1c24;
                }
                &:nth-child(1) {
                    padding-left: 0;
                    border-left: none;
                }
            }
            .item-disabled {
                color: #ccc;
                cursor: not-allowed;
                &:hover {
                    color: #ccc;
                }
            }
            .right-button {
                width: 295px;
                border: none;
                text-align: right;
            }
        }
    }
}
.img {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
