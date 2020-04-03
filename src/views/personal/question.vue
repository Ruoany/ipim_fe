<template>
    <div class="container">
        <div class="title">{{ $t("personal.question") }}</div>
        <question-cell
            v-for="(item, index) in question.questions"
            :key="item.sequence"
            :ref="`A${index}`"
            :type="item.type"
            :title="item.title"
            :q="item.questionItems"
            :idx="item.sequence"
        ></question-cell>
        <a-button
            type="primary"
            size="large"
            style="margin-top:30px"
            @click="handleSubmit"
            >{{ $t("personal.submit") }}</a-button
        >
    </div>
</template>

<script>
import QuestionNaire from "@/apis/questionNaire";
import QuestionCell from "./components/quetionCell";
export default {
    components: { QuestionCell },
    props: {},
    data() {
        return {
            question: {}
        };
    },
    methods: {
        initData: async function() {
            const {
                data: { content }
            } = await QuestionNaire.get();
            this.question = content[0];
        },
        handleSubmit: async function() {
            console.log("--->", this.$refs);
        }
    },
    mounted: function() {
        this.initData();
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    .title {
        font-size: 36px;
        font-weight: bold;
    }
}
</style>