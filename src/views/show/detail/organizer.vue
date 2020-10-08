<template>
    <div class="container">
        <div v-show="organizers" class="organizer-title">
            {{ $t("show.organizers") }}
        </div>
        <ul>
            <li v-for="item in organizers" :key="item.id">{{ item.name }}</li>
        </ul>
        <!-- <div v-show="helpers" class="organizer-title">
            {{ $t("show.helpers") }}
        </div>
        <ul>
            <li v-for="item in helpers" :key="item.id">{{ item.name }}</li>
        </ul> -->
    </div>
</template>

<script>
export default {
    props: {
        organizers: {
            type: Array,
            default: []
        },
        helpers: {
            type: Array,
            default: []
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    .organizer-title {
        font-size: 20px;
        font-weight: bold;
        color: #333;
    }
    ul {
        list-style: none;
        font-size: 18px;
        li {
            line-height: 40px;
        }
    }
}
</style>
