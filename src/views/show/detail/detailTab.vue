<template>
    <a-tabs class="all" type="card">
        <a-tab-pane :tab="$t('show.info')" key="1">
            <info :info="cardData.content"></info>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.coPe')" key="2">
            <co-pe :liaisons="cardData.liaisons ? cardData.liaisons : []"></co-pe>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.organizer')" key="3">
            <organizer :organizers="cardData.organizers" :helpers="cardData.helpers"></organizer>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.shop')" key="4">
            <shop :trades="cardData.trades"></shop>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.photo')" key="5">
            <photo></photo>
        </a-tab-pane>
    </a-tabs>
</template>

<script>
import coPe from "./coPe";
import organizer from "./organizer";
import shop from "./shop";
import photo from "./photo";
import info from "./info";
export default {
    props: {
        cardData: Object
    },
    components: { coPe, organizer, shop, photo, info }
};
</script>

<style lang="less" scoped>
.all {
    min-height: 400px;
    /deep/ .ant-tabs-bar {
        border-bottom: 2px solid #ee1c24 !important;
        margin-bottom: 0;
    }
    /deep/ .line {
        position: absolute;
        width: 100vw;
        height: 2px;
        background-color: red;
    }
    /deep/.ant-tabs-tab {
        font-size: 16px;
        font-weight: 500;
        padding: 0px 20px !important;
        width: 160px;
        margin-right: 12px !important;
        text-align: center;
        border-color: #fafafa !important;
    }
    /deep/.ant-tabs-tab-active {
        background-color: #ee1c24 !important;
        border-bottom: transparent !important;
        color: #fff !important;
    }
    /deep/.ant-tabs-tabpane {
        padding: 40px 0;
    }
}
</style>
