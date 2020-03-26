<template>
    <div>
        <current-institution
            v-if="currentInstitution"
            :info="currentInstitution"
        ></current-institution>
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
import Institution from "@/apis/institution";
export default {
    components: { CurrentInstitution },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["institutionList", "currentInstitution"])
    },
    methods: {}
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
