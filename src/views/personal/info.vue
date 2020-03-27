<template>
    <div>
        <current-institution
            v-if="currentInstitution"
            :info="currentInstitution"
        ></current-institution>
        <others-institution
            v-for="item in institutionList"
            :key="item.id"
            :info="item"
            @change="changeCurrentInstitution"
        ></others-institution>
        <div class="others">
            <a-button
                type="primary"
                @click="$router.push('/personal/mechanism')"
                >{{ $t("personal.others") }}</a-button
            >
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CurrentInstitution from "./components/currentInstitution";
import OthersInstitution from "./components/othersInstitution";
import Institution from "@/apis/institution";
export default {
    components: { CurrentInstitution, OthersInstitution },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["institutionList", "currentInstitution"])
    },
    methods: {
        changeCurrentInstitution: function(id) {
            const o = this.institutionList.find(item => item.id === id);
            sessionStorage.setItem("institution", id);
            this.$store.dispatch("setCurrentInstitution", o);
        }
    }
};
</script>

<style lang="less" scoped>
.card {
    width: 140px;
    margin-right: 20px;
    text-align: center;
    line-height: 30px;
}
.title {
    height: 300px;
    background: #f9f9f9;
    margin-bottom: 40px;
    padding: 40px;
    .img {
        width: 300px;
        height: 200px;
    }
    .name {
        padding-left: 20px;
    }
}
.others {
    padding: 20px 0;
}
</style>
