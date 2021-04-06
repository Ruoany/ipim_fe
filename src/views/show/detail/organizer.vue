<template>
    <div class="container">
        <div v-show="organizers" class="organizer-title">
            {{ $t("show.organizers") }}
        </div>
        <ul>
            <li v-for="item in organizers" :key="item.id">{{ item.name }}</li>
        </ul>

        <div v-show="helpers" class="organizer-title">
            <div v-for="item in helpers" :key="item.id">
                <span v-if="item.activityHelperType=== 'A' " >{{ $t("show.helpers") }}</span>
            </div>
        </div>
        <ul v-for="item in helpers" :key="item.id">  
                <li  v-if="item.activityHelperType === 'A'">{{item.name}}</li>  
        </ul>


        <div v-show="helpers" class="organizer-title">
            <div v-for="item in helpers" :key="item.id">
                <span v-if="item.activityHelperType=== 'B' " >{{ $t("show.organizersh") }}</span>
            </div>
            
        </div>
        <ul v-for="item in helpers" :key="item.id">  
                <li  v-if="item.activityHelperType === 'B'">{{item.name}}</li>  
        </ul>


        <div v-show="helpers" class="organizer-title">
             <div v-for="item in helpers" :key="item.id">
                <span v-if="item.activityHelperType=== 'C' " >{{ $t("show.SupportUnits") }}</span>
            </div>
            
        </div>
        <ul v-for="item in helpers" :key="item.id">  
                <li  v-if="item.activityHelperType === 'C'">{{item.name}}</li>  
        </ul>
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
