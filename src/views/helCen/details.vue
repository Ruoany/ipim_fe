<template>
    <div class="width-1280 container">
        <a-spin :spinning="loading" class="width-1280 content">
            <a-tabs>
               <a-breadcrumb>
                    <a-breadcrumb-item><span @click="$router.push('/help_center')">幫助</span></a-breadcrumb-item>
                    <a-breadcrumb-item>參與本局主辦之展會</a-breadcrumb-item>
                    <a-breadcrumb-item><span style="color:red">澳門國際環保合作發展論壇</span></a-breadcrumb-item>
               </a-breadcrumb>

                <ul>
                    <li>註冊</li>
                    <div style="border-bottom:2px solid red;width:830px"></div>
                    <img src="../../assets/image/register.jpg" width="300px" height="400px" style="margin: 20px auto" />
                    <li>登陸</li>
                    <div style="border-bottom:2px solid red;width:830px"></div>
                    <li>認證</li>
                    <div style="border-bottom:2px solid #999;width:830px"></div>
                    <li>申請</li>
                    <div style="border-bottom:2px solid #999;width:830px"></div>
                    <li>下載資料表</li>
                    <div style="border-bottom:2px solid #999;width:830px"></div>
                    <li>等待結果</li>
                    <div style="border-bottom:2px solid #999;width:830px"></div>
                    <li>展後報告</li>
                    <div style="border-bottom:2px solid #999;width:830px"></div>
                    <li>調查問卷</li>
                    <div style="border-bottom:2px solid #999;width:830px"></div>
                    <li>展會照片</li>
                    <div style="border-bottom:2px solid #999;width:830px"></div>
                </ul>
                
            </a-tabs>
             

            
        </a-spin>
    </div>
</template>

<script>
import Pagination from "@/components/pagination";
import CompanyDocument from "@/apis/companyDocument";
import CommonConfig from "@/apis/commonConfig";
import { mapGetters } from "vuex";
// import { saveAs } from "file-saver";

export default {
    components: { Pagination },
    computed: {
        ...mapGetters(["lan"])
    },
    data() {
        return {
            loading: false,
        };
    },


};
</script>
<style lang="less" scoped>
.container {
    margin: auto;
    .content {
        margin: auto;
        min-height: 750px;
        padding-top: 30px;
    }
    /deep/.ant-tabs-bar {
        border-color: transparent;
    }
    /deep/.ant-tabs-tab {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 0;
    }
    .list-content {
        min-height: 500px;
        padding-top: 40px;
    }
}

.container ul{
    list-style: none;
    line-height: 50px;
    margin-left: -400px;
    margin-top: 40px;
}

</style>
