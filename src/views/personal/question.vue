<template>
    <div class="container">
        <div class="title">{{ $t("personal.question") }}</div>
        <a-empty
            v-if="JSON.stringify(question) == '{}'"
            class="empty"
            :description="$t('util.noquetions')"
        ></a-empty>
        <div v-else>
            <question-cell
                v-for="(item, index) in question.questions"
                :key="item.sequence"
                :value.sync="answers[index]"
                :type="item.type"
                :title="item.title"
                :q="item.questionItems"
                :idx="item.sequence"
            ></question-cell>
            <a-button
                v-show="!this.$route.query.questionnaireAnswerId"
                type="primary"
                size="large"
                style="margin-top:30px"
                @click="handleSubmit"
                >{{ $t("personal.submit") }}</a-button
            >
        </div>
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
            question: {},
            answers: []
        };
    },
    methods: {
        Transform: function(o) {
            const obj = JSON.parse(JSON.stringify(o));
            Object.keys(obj).map(item => {
                obj[item] = this.$crypto.decryption(unescape(obj[item]));
            });
            return obj;
        },
        initData: async function() {
            if (this.query.questionnaireAnswerId) {
                const { data } = await QuestionnaireAnswer.one(
                    this.query.questionnaireAnswerId
                );
                // this.question = data;
                this.question = data.questionnaire;
                this.answers = data.answers.map(item => {
                    let answerList = [];
                    if (item.items) {
                        answerList = item.items.map(answersItem => {
                            return answersItem.id;
                        });
                    } else {
                        answerList = item.answer;
                    }

                    return answerList;
                });
            } else {
                const { data } = await QuestionNaire.byActivity({
                    activityId: this.query.activityId,
                    method: this.query.method
                });
                this.question = data;
            }
        },
        validator: function() {
            const promise = new Promise(resolve => {
                for (let item of this.answers) {
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
                resolve(true);
            });
            return promise;
        },
        handleSubmit: async function() {
            const result = await this.validator();
            if (result) {
                const body = {
                    ...this.query,
                    questionnaireId: this.question.id,
                    answers: this.answers.map((item, index) => {
                        const isText = typeof item === "string";
                        return isText
                            ? {
                                  answer: item,
                                  questionId: this.question.questions[index].id
                              }
                            : {
                                  items: Array.isArray(item)
                                      ? item.map(val => {
                                            return { id: val };
                                        })
                                      : [{ id: item }],
                                  questionId: this.question.questions[index].id
                              };
                    })
                };
                const { code, message } = await QuestionnaireAnswer.create(
                    body
                );
                if (code !== 200) {
                    // this.$message.error(message);
                    return;
                }
                this.$router.back();
            }
        }
    },
    mounted: function() {
        this.$store.dispatch("setChangeFalse");
        this.query = this.Transform(this.$route.query);
        this.initData();
    },
    destroyed: function() {
        this.$store.dispatch("setChangeTrue");
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
    .empty {
        height: 500px;
    }
}
</style>
