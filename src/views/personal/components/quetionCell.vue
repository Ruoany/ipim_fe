<template>
    <div class="question-cell-container">
        <div class="question-cell-title">
            {{ idx }}.{{ title
            }}<span style="color:#ccc">（{{ formatQuestion }}）</span>
        </div>
        <div v-if="type === 'RADIO'">
            <a-radio
                v-for="item in q"
                :key="item.id"
                :checked="init == item.id"
                :value="item.id"
                :disabled="disabled"
                @change="handleRadio"
                style="display:block;line-height:50px;margin:0;"
            >
                {{ item.item }}
            </a-radio>
        </div>
        <div v-if="type === 'CHECKBOX'">
            <a-checkbox
                v-for="item in q"
                :key="item.id"
                :value="item.id"
                :disabled="disabled"
                :checked="init && init.includes(item.id)"
                @change="handleCheckbox"
                style="display:block;line-height:50px;margin:0;"
            >
                {{ item.item }}
            </a-checkbox>
        </div>
        <div v-if="type === 'FILL'">
            <a-input
                v-model="init"
                :disabled="disabled"
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
        handleRadio: function(event) {
            this.init = event.target.value;
        },
        handleCheckbox: function({ target: { value } }) {
            const isHave = this.init.includes(value);
            if (isHave) {
                this.init = this.init.filter(item => item !== value);
            } else {
                this.init = this.init.concat([value]);
            }
        }
    },
    mounted: function() {
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
