<template>
    <div class="all">
        <a-form-model-item :label="$t('reportbd.conPerson1')">
            <a-select
                v-model="form.liaisonId1"
                showSearch
                optionFilterProp="label"
                :filterOption="true"
            >
                <a-select-option
                    v-for="item in liaisonList"
                    :key="item.id"
                    :value="item.id"
                    :label="`${item.nameZh}${item.nameEnOrPt}`"
                    >{{ item.nameZh }}
                    {{ item.nameEnOrPt }}</a-select-option
                >
            </a-select>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.job')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.tel')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.phone')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.email')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.conPerson2')">
            <a-select
                v-model="form.liaisonId2"
                showSearch
                optionFilterProp="label"
                :filterOption="true"
            >
                <a-select-option
                    v-for="item in liaisonList"
                    :key="item.id"
                    :value="item.id"
                    :label="`${item.nameZh}${item.nameEnOrPt}`"
                    >{{ item.nameZh }}
                    {{ item.nameEnOrPt }}</a-select-option
                >
            </a-select>
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.job')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.tel')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.phone')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item :label="$t('reportbd.email')">
            <a-input />
        </a-form-model-item>
        <a-form-model-item>
            <a-button type="primary" @click="preClick" style="margin-right:12px">上一步</a-button>
            <a-button type="primary" @click="nextClick">下一步</a-button>
        </a-form-model-item>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(["liaisonList"])
    },
    data() {
        return {
            form: {}
        };
    },
    methods: {
        preClick() {
            this.$emit('pre')
        },
        nextClick(){
            this.$emit('next', this.form)
        },
        handleChange() {}
    }
};
</script>

<style lang="less" scoped>
@import url("../css/form.less");
.all {
    width: 800px;
    margin: auto;
    /deep/.ant-row {
        padding: 0px !important;
    }
}
</style>
