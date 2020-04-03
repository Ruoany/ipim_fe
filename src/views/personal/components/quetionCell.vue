<template>
    <div class="question-cell-container">
        <div class="question-cell-title">{{ idx }}.{{ title }}</div>
        <div v-if="type === 'RADIO'">
            <div
                v-for="item in q"
                :key="item.id"
                :class="value === item.id ? 'item-active' : 'item'"
                @click="handleRadio(item.id)"
            >
                {{ item.item }}
            </div>
        </div>
        <div v-if="type === 'CHECKBOX'">
            <div
                v-for="item in q"
                :key="item.id"
                :class="value.includes(item.id) ? 'item-active' : 'item'"
                @click="handleCheckbox(item.id)"
            >
                {{ item.item }}
            </div>
        </div>
        <div v-if="type === 'FILL'">
            <a-input v-model="value" size="large" style="width:500px"></a-input>
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
    computed: {
        value: {
            get: function() {
                switch (this.type) {
                    case "RADIO":
                        return null;
                        break;
                    case "CHECKBOX":
                        return [];
                        break;
                    default:
                        return "";
                        break;
                }
            },
            set: function(value) {
                return value;
            }
        }
    },
    methods: {
        handleRadio: function(value) {
            console.log("--->", value);
            this.value = value;
        },
        handleCheckbox: function(value) {
            const isHave = this.value.includes(value);
            if (isHave) {
                this.value = this.value.filter(item => item !== value);
            } else {
                this.value = this.value.concat([value]);
            }
        }
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
        margin-top: 8px;
        line-height: 40px;
        padding: 0 10px;
    }
    .item-active {
        width: 500px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #ee1c24;
        margin-top: 8px;
        background: #ee1c24;
        color: #fff;
        line-height: 40px;
        padding: 0 10px;
    }
    .question-cell-title {
        line-height: 50px;
        font-size: 18px;
    }
}
</style>