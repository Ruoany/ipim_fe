<template>
    <div class="container">
        <div class="title">{{ $t("personal.question") }}</div>
        <question-cell
            v-for="item in question.questions"
            :key="item.sequence"
            ref="question"
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
import QuestionnaireAnswer from "@/apis/questionnaireAnswer";
import QuestionNaire from "@/apis/questionNaire";
import QuestionCell from "./components/quetionCell";

export default {
    components: { QuestionCell },
    data() {
        return {
            query: {},
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
        validator: function() {
            const promise = new Promise(resolve => {
                const arr = this.$refs.question.map(item => item.init);
                for (let item of arr) {
                    if (Array.isArray(item)) {
                        if (item.length === 0) {
                            this.$message.error({
                                content: "請完成所有題目之後再提交",
                                key: "error"
                            });
                            resolve(false);
                        }
                    }
                    if (!item) {
                        this.$message.error({
                            content: "請完成所有題目之後再提交",
                            key: "error"
                        });
                        resolve(false);
                    }
                }
                resolve(arr);
            });
            return promise;
        },
        handleSubmit: async function() {
            const result = await this.validator();
            const body = {
                ...this.query,
                questionnaireId: this.question.id,
                answers: result
            };
            console.log("--->", body);
        }
    },
    mounted: function() {
        this.query = this.$route.query;
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