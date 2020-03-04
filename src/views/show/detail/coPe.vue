<template>
    <div>
        <a-list itemLayout="horizontal" :dataSource="cardData">
            <a-list-item slot="renderItem" slot-scope="item">
                <a-list-item-meta>
                    <div slot="title">{{item.name}}</div>
                    <div slot="description">
                        <div>{{item.tel}}</div>
                        <div>{{item.email}}</div>
                    </div>
                    <!-- <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />-->
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
export default {
    props: {
        cardData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
};
</script>

<style lang="less" scoped>
</style>