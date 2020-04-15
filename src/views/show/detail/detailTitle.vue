<template>
    <div class="hei-200 flex-justify-content-space-between">
        <div class="flex flex-align-items-center">
            <img class="img" :src="scope" />
            <div style="padding-left:40px;" class="flex ju">
                <div>
                    <div class="font-bold font-26">{{ nameZh }}</div>
                    <div>{{ nameEn }}</div>
                    <div>{{ namePt }}</div>
                </div>
                <div>
                    <div>{{ $t("show.acAd") }}：{{ place }}</div>
                    <div style="color:#EE1C24">
                        {{ $t("show.acTime") }}：{{ startTime | formatTime }}-{{ endTime | formatTime }}
                    </div>
                </div>
            </div>
        </div>
        <div class="end">
            <a-dropdown :disabled="!participate">
                <a-menu slot="overlay" @click="navigateForm">
                    <a-menu-item v-for="item in types" :key="item">{{ $t(FormMap[item]) }}</a-menu-item>
                </a-menu>
                <a-button v-if="participate" type="primary" size="large" class="btn">
                    {{ $t("show.method") }}
                    <i class="iconfont iconjiantouarrow486 selected"></i>
                </a-button>
                <a-button v-else size="large" class="btn">{{ $t("show.deadline") }}</a-button>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormMap from "@/common/map";
export default {
    props: {
        activityId: { type: Number },
        nameZh: { type: String, default: null },
        nameEn: { type: String, default: null },
        namePt: { type: String, default: null },
        place: { type: String, default: null },
        startTime: { type: String, default: null },
        endTime: { type: String, default: null },
        scope: { type: String, default: null },
        website: { type: String, default: null },
        actType: { type: String, default: null },
        types: { type: Array },
        participate: { type: Boolean, default: false }
    },
    data() {
        return {
            FormMap
        };
    },
    computed: {
        ...mapGetters(["currentInstitution"])
    },
    filters: {
        formatTime: function(value) {
            return value ? value.slice(0, 10) : null;
        }
    },
    methods: {
        navigateForm: function(e) {
            //判斷用戶是否登錄以及完善至少一個機構信息
            if (!this.currentInstitution && sessionStorage.getItem("login")) {
                this.$confirm({
                    title: null,
                    content: "請先完善機構信息和聯絡人信息方可參展展會，是否要去往完善？",
                    okText: "完善信息",
                    cancelText: "取消",
                    onOk: () => {
                        this.$router.push("/personal/info");
                    },
                    onCancel: () => {
                        return;
                    }
                });
                return;
            }
            this.$router.push({
                path: "/myform/index",
                query: {
                    a: escape(this.$crypto.encryption(this.activityId)),
                    form: e.key
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.hei-200 {
    padding: 70px 0;
    width: 100%;
    box-sizing: border-box;
}
.img {
    width: 240px;
    height: 160px;
    object-fit: cover;
}
.end {
    align-self: flex-end;
    .btn {
        margin: 0 10px;
        width: 144px;
    }
}
.font-26 {
    font-size: 26px;
}
.ju {
    flex-direction: column;
    justify-content: space-between;
}
</style>
