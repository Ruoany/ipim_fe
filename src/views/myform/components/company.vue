<template>
    <div class="company-container">
        <a-input v-model="nameC" :placeholder="$t('util.companyName')"></a-input>
        <a-input v-model="liaisonNameC" :placeholder="$t('util.liaisonName')"></a-input>
        <a-input v-model="phoneC" :placeholder="$t('index.tel')"></a-input>
        <a-input v-model="emailC" :placeholder="$t('index.email')"></a-input>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        liaisonName: String,
        phone: [Number, String],
        email: String
    },
    computed: {
        nameC: {
            get: function() {
                return this.name;
            },
            set: function(value) {
                this.$emit("update:name", value);
            }
        },
        liaisonNameC: {
            get: function() {
                return this.liaisonName;
            },
            set: function(value) {
                this.$emit("update:liaisonName", value);
            }
        },
        phoneC: {
            get: function() {
                return this.phone;
            },
            set: function(value) {
                this.$emit("update:phone", value);
            }
        },
        emailC: {
            get: function() {
                return this.email;
            },
            set: function(value) {
                this.$emit("update:email", value);
            }
        }
    }
};
</script>

<style lang="less" scoped>
.company-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        width: 180px;
    }
}
</style>