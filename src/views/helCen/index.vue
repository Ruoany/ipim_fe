<template>
    <div class="width-1280 container">
        <a-spin :spinning="loading" class="width-1280 content">
            <a-tabs>
                <a-tab-pane
                    :tab="$t('helpCenter.title')"
                    :key="null"
                ></a-tab-pane>
                
            </a-tabs>
             <div class="content-helpCenter">
                <a-collapse accordion style="background:#fff">
                <a-collapse-panel key="1" header="參與本局主辦之展會">
                    <p @click="$router.push('/helCen_details')">{{ "澳門國際環保合作發展論壇及展覽" }}</p>
                    <p>{{ "國際基礎設施投資與建設高峰論壇" }}</p>
                    <p>{{ "澳門國際品牌連鎖加盟展" }}</p>
                    <p>{{ "粵澳名優商品展" }}</p>
                    <p>{{ "澳門國際貿易投資展覽會" }}</p>
                    <p>{{ "葡語國家產品及服務展" }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="參與本局組織之境外展會">
                    <p>{{ "展會" }}</p>
                    <p>{{ "參加代表團" }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="3" header="支持與鼓勵措施">
                    <p>{{ "非牟利社團赴境外展會設置展位" }}</p>
                    <p>{{ "非牟利社團組織代表團參與境外展會" }}</p>
                    <p>{{ "參與推廣活動（參展財務鼓勵）" }}</p>
                    <p>{{ "電子商務推廣（應用 B2C 平台）鼓勵措施" }}</p>
                    <p>{{ "電子商務推廣鼓勵措施申請表格" }}</p>
                </a-collapse-panel>
                </a-collapse>
            </div>

            
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

.container .content-helpCenter{
      margin-top: 30px;
      margin-left: 30px;
      background: #fff;
}

.container .content-helpCenter p{
     
      margin-left: 30px;
      
}
.container .content-helpCenter p:hover{
     cursor:pointer;   
}

</style>
