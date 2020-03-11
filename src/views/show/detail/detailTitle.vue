<template>
    <div class="hei-200 flex-justify-content-space-between">
        <div class="flex">
            <img class="img" :src="scope" />
            <div style="padding-left:40px;">
                <div class="font-bold font-26">{{ nameZh }}</div>
                <div>{{ nameEn }}</div>
                <div>{{ namePt }}</div>

                <div style="padding-top:20px;">{{ $t("show.ofWe") }}：{{ place }}</div>
                <div>{{ $t("show.acAd") }}：{{ website }}</div>
                <div style="color:#EE1C24">
                    {{ $t("show.acTime") }}：{{ startTime | formatTime }}-{{ endTime | formatTime }}
                </div>
            </div>
        </div>
        <div class="end" v-if="actType === 'DEPUTATION'">
            <a-button type="primary" size="large" class="btn">{{ $t("show.paDe") }}</a-button>
        </div>
        <div class="end" v-if="actType === 'SELF'">
            <a-button type="primary" size="large" class="btn">{{ $t("show.grEx") }}</a-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nameZh: { type: String, default: null },
        nameEn: { type: String, default: null },
        namePt: { type: String, default: null },
        place: { type: String, default: null },
        startTime: { type: String, default: null },
        endTime: { type: String, default: null },
        scope: { type: String, default: null },
        website: { type: String, default: null },
        actType: { type: String, default: null }
    },
    filters: {
        formatTime: function(value) {
            return value ? value.slice(0, 10) : null;
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
}
.end {
    align-self: flex-end;
    .btn {
        margin: 0 10px;
    }
}
.font-26 {
    font-size: 26px;
}
</style>
