<template>
    <div class="question-cell-container">
        <div class="question-cell-title">
            {{ idx }}.{{ title
            }}<span style="color:#ccc">（{{ formatQuestion }}）</span>
        </div>
        <div v-if="type === 'RADIO'">
            <div
                v-for="item in q"
                :key="item.id"
                :class="init === item.id ? 'item-active' : 'item'"
                @click="() => (disabled ? '' : handleRadio(item.id))"
            >
                {{ item.item }}
            </div>
        </div>
        <div v-if="type === 'CHECKBOX'">
            <div
                v-for="item in q"
                :key="item.id"
                :class="init.includes(item.id) ? 'item-active' : 'item'"
                @click="() => (disabled ? '' : handleCheckbox(item.id))"
            >
                {{ item.item }}
            </div>
        </div>
        <div v-if="type === 'FILL'">
            <div v-if="disabled" class="disabled">{{ init }}</div>
            <a-input
                v-else
                v-model="init"
                size="large"
                style="width:500px"
            ></a-input>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        title: String,
        q: Array,
        idx: Number,
        value: [String, Number, Object, Array]
    },
    data() {
        return {
            disabled: false,
            init: null
        };
    },
    computed: {
        formatQuestion: function() {
            switch (this.type) {
                case "RADIO":
                    return "單選題";
                    break;
                case "CHECKBOX":
                    return "多選題";
                    break;
                case "FILL":
                    return "填空題";
                    break;
            }
        }
    },
    watch: {
        init: function(newValue) {
            this.$emit("update:value", newValue);
        }
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
        if (this.value) {
            this.init = this.value;
            this.disabled = true;
        } else {
            this.init = this.type === "CHECKBOX" ? [] : "";
            this.disabled = false;
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
    .disabled {
        width: 500px;
        padding: 6px 11px;
        font-size: 16px;
        color: #333;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
    }
}
</style>