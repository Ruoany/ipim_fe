<template>
    <div>
        <a-tabs type="card" style="min-height:400px;">
            <a-tab-pane :tab="$t('show.info')" key="1">
                <info></info>
            </a-tab-pane>
            <a-tab-pane :tab="$t('show.coPe')" key="4">
                <co-pe :cardData="cardData.liaisons===null?[]:cardData.liaisons"></co-pe>
            </a-tab-pane>
            <a-tab-pane :tab="$t('show.organizer')" key="5">
                <organizer :organizer="cardData.organizer" :helpers="cardData.helpers"></organizer>
            </a-tab-pane>
            <a-tab-pane :tab="$t('show.shop')" key="2">
                <shop></shop>
            </a-tab-pane>
            <a-tab-pane :tab="$t('show.photo')" key="3">
                <photo></photo>
            </a-tab-pane>
        </a-tabs>
    </div>
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

<style>
</style>