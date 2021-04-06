<template>
    <a-tabs class="all" type="card">
        <a-tab-pane :tab="$t('show.info')" key="1">
            <info :info="infoLan"></info>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.organizer')" key="3">
            <organizer
                :organizers="cardData.organizers"
                :helpers="cardData.helpers"
            ></organizer>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.coPe')" key="2">
            <co-pe
                :liaisons="cardData.liaisons ? cardData.liaisons : []"
            ></co-pe>
        </a-tab-pane>

        <a-tab-pane :tab="$t('show.money')" key="6">
            <info :info="infoLan1"></info>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.new')" key="7"></a-tab-pane>
        <!-- <a-tab-pane :tab="$t('show.shop')" key="4">
            <shop :institutions="cardData.institutions ? cardData.institutions : []"></shop>
        </a-tab-pane>
        <a-tab-pane :tab="$t('show.photo')" key="5">
            <photo :pictures="cardData.pictures ? cardData.pictures : []"></photo>
        </a-tab-pane> -->
    </a-tabs>
</template>

<script>
import coPe from "./coPe";
import organizer from "./organizer";
import shop from "./shop";
import photo from "./photo";
import info from "./info";
import money from "./money"
export default {
    props: {
        cardData: Object
    },
    components: { coPe, organizer, shop, photo, info, money },
    computed: {
        infoLan() {
            switch (sessionStorage.getItem("language")) {
                case "zh":
                    return this.cardData.contentZh;
                    break;
                case "en":
                    return this.cardData.contentEn;
                    break;
                case "pt":
                    return this.cardData.contentPt;
                default:
                    return this.cardData.contentZh;
            }
        },
    infoLan1() {
            switch (sessionStorage.getItem("language")) {
                case "zh":
                    return this.cardData.exhibitionCostExplain;
                    break;
                case "en":
                    return this.cardData.exhibitionCostExplainEn;

                    break;
                case "pt":
                    return this.cardData.exhibitionCostExplainPn;
                default:
                    return this.cardData.exhibitionCostExplain;
            }
        }
  },
};
</script>

<style lang="less" scoped>
.all {
    min-height: 450px;
    /deep/ .ant-tabs-bar {
        border-bottom: 2px solid #ee1c24 !important;
        margin-bottom: 0;
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
    /deep/ .ant-tabs-nav-container {
        margin-bottom: 0 !important;
    }
}
</style>
