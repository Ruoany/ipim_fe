<template>
    <div class="question-cell-container">
        <div class="question-cell-title">{{ idx }}.{{ title }}</div>
        <div v-if="type === 'RADIO'">
            <div
                v-for="item in q"
                :key="item.id"
                :class="init === item.id ? 'item-active' : 'item'"
                @click="handleRadio(item.id)"
            >
                {{ item.item }}
            </div>
        </div>
        <div v-if="type === 'CHECKBOX'">
            <div
                v-for="item in q"
                :key="item.id"
                :class="init.includes(item.id) ? 'item-active' : 'item'"
                @click="handleCheckbox(item.id)"
            >
                {{ item.item }}
            </div>
        </div>
        <div v-if="type === 'FILL'">
            <a-input v-model="init" size="large" style="width:500px"></a-input>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        title: String,
        q: Array,
        idx: Number
    },
    data() {
        return {
            init: null
        };
    },
    methods: {
        handleRadio: function(value) {
            this.init = value;
        },
        handleCheckbox: function(value) {
            const isHave = this.init.includes(value);
            if (isHave) {
                this.init = this.init.filter(item => item !== value);
            } else {
                this.init = this.init.concat([value]);
            }
        }
    },
    created: function() {
        this.init = this.type === "CHECKBOX" ? [] : "";
    }
};
</script>

<style lang="less" scoped>
.question-cell-container {
    width: 100%;
    .item {
        width: 500px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        margin-bottom: 8px;
        line-height: 40px;
        padding: 0 10px;
        cursor: pointer;
    }
    .item-active {
        width: 500px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #ee1c24;
        margin-bottom: 8px;
        background: #ee1c24;
        color: #fff;
        line-height: 40px;
        padding: 0 10px;
        cursor: pointer;
    }
    .question-cell-title {
        line-height: 50px;
        font-size: 18px;
    }
}
</style>