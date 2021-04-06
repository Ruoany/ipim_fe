<template>
    <a-spin v-if="form.status !== 'passed' && role" :spinning="spinning">
        <h1>{{ $t("personal.s") }}</h1>
        <a-form-model
            ref="form"
            :model="form"
            :rules="rules"
            style="width:100%;"
        >
            <a-form-model-item prop="logo" :label="$t('personal.logo')">
                <a-upload
                    name="file"
                    listType="picture-card"
                    :showUploadList="false"
                    :action="upFiles"
                    :beforeUpload="beforeUpload"
                    @change="imgChange"
                >
                    <img
                        v-if="form.logo"
                        :src="form.logo"
                        alt="avatar"
                        class="img"
                    />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                    </div>
                </a-upload>
            </a-form-model-item>

             <!-- 国家/地区 -->
            <a-form-model-item  :label="$t('personal.country')">
                 
                <a-select allowClear={true}  style="width: 328px" size="small"  v-model="form.countryZh"  >
                    
                    <a-select-option  v-for="item in country" :key="item.id" @click="info3(item.id)" :label="item.merName">
                            {{item.merName}}
                    </a-select-option>
                          
                </a-select>

                                      
                 <a-select allowClear={true}  style="width: 275px;margin-left: 26px"  size="small" v-model="form.provinceZh" >
                    <a-select-option   v-for="item in province" :key="item.id"  @click="info4(item.id)" :label="item.name">
                            {{item.name}}
                    </a-select-option>
                </a-select>
                
               
                 <a-select  allowClear={true} style="width: 316px;margin-left: 24px" size="small" v-model="form.cityZh" >
                    <a-select-option  v-for="item in city" :key="item.id" :label="item.sname">
                            {{item.sname}}
                    </a-select-option>
                </a-select>
                

            </a-form-model-item>

             <!-- 负责人姓名 -->
            <a-form-model-item :label="$t('personal.chargeName')">
                <a-input v-model="form.chargeName"></a-input>
            </a-form-model-item>

         <!-- 联络电话++传真 -->
         <a-Row>
              <a-Col span="12">
            <a-form-model-item :label="$t('personal.concact')">
                 <a-select  style="width: 228px" v-model="form.telAreaCode" optionLabelProp="code" placeholder="區號" >
                     <a-select-option
                                v-for="item in AreaCode"
                                :key="item.id"
                                :value="item.code"
                                :code="item.code"
                                
                                >{{
                                    `${item.nameZh}-${item.nameEn}-${item.code}`
                                }}</a-select-option
                            >
                </a-select>
                <a-input v-model="form.tel" style="width:226px;height:32px;margin-left:6px" ></a-input>
            </a-form-model-item>
            </a-Col>
            
              
                <a-Col span="12">
             <a-form-model-item  :label="$t('personal.fax')"> 
                 <a-select  style="width: 228px" v-model="form.faxAreaCode" optionLabelProp="code" placeholder="區號"  >
                   <a-select-option
                                v-for="item in AreaCode"
                                :key="item.id"
                                :value="item.code"
                               :code="item.code"
                                >{{
                                    `${item.nameZh}-${item.nameEn}-${item.code}`
                                }}</a-select-option
                            >
                </a-select>
                <a-input v-model="form.fax" style="width:226px;height:32px;margin-left:6px" ></a-input>
            </a-form-model-item>
                </a-Col>
            </a-Row>

            <!-- 电邮地址 -->
            <a-form-model-item :label="$t('personal.be')">
                <a-input v-model="form.email"></a-input>
            </a-form-model-item>

            <!-- 通讯地址 -->
            <a-form-model-item :label="$t('personal.street')">
                <a-input v-model="form.streetZh" style="width:968px;height:30px"></a-input>
            </a-form-model-item>

 
            <!-- 机构性质 -->
            <a-form-model-item prop="nature" :label="$t('personal.ar')" >
                 <a-select  style="width: 968px" v-model="form.nature">
                    <a-select-option value="ENTERPRISE">
                            企業
                    </a-select-option>
                    <a-select-option value="BUSINESS_OR_ASSOCIATION">
                            非牟利團體
                    </a-select-option>
                    <a-select-option value="NATURAL_PERSON">
                            自然人
                    </a-select-option>
                    <a-select-option value="GOVERNMENT_ORGANS">
                           政府機構
                    </a-select-option>
                    <a-select-option value="UNIVERSITY">
                            大學/研究機構
                    </a-select-option>
                    <a-select-option value="OTHER">
                            其他
                    </a-select-option>
                   
                </a-select>
            </a-form-model-item>

            <!-- 机构名称 -->
            <a-form-model-item prop="nameZh" :label="$t('personal.meNameZh')">
                <a-input v-model="form.nameZh"></a-input>
            </a-form-model-item>
            <!-- 机构名称（英） -->
            <a-form-model-item :label="$t('personal.meNameEn')">
                <a-input v-model="form.nameEn"></a-input>
            </a-form-model-item>
            <!-- 机构名称（葡） -->
            <a-form-model-item :label="$t('personal.meNamePt')">
                <a-input v-model="form.namePt"></a-input>
            </a-form-model-item>

            <!-- 场地登记编号 -->
            <a-form-model-item
            v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' && this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER' && this.form.nature != 'NATURAL_PERSON'"
                prop="siteRegistrationCode"
                :label="$t('personal.w')"
                
            >
                <a-input v-model="form.siteRegistrationCode" @blur="repeat(form.siteRegistrationCode)"></a-input>
            </a-form-model-item>


             <a-modal v-model="visible" title="提示" @ok="handleOk">
                        <p>場地登記編號已存在</p>
            </a-modal>


            <!-- 商业登记编号 -->
            <a-form-model-item
            v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' && this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER' && this.form.nature != 'NATURAL_PERSON'"
                :prop="this.form.nature == 'BUSINESS_OR_ASSOCIATION' ? null : 'registrationNumber'"
                :label="$t('personal.u')"
            >
                <a-input v-model="form.registrationNumber"></a-input>
            </a-form-model-item>


            <!-- 纳税人编号 -->
            <a-form-model-item :label="$t('personal.y')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <a-input v-model="form.taxpayerNo"></a-input>
            </a-form-model-item>

            <!-- 纳税人名称 -->
            <a-form-model-item :label="$t('personal.ay')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <a-input v-model="form.taxpayerName"></a-input>
            </a-form-model-item>

            <!-- 成立日期 -->
            <a-form-model-item :label="$t('personal.z')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <a-month-picker
                    v-model="form.dateOfEstablishment"
                    style="width:100%"
                />
            </a-form-model-item>

            <!-- 业务 -->
            <a-form-model-item :label="$t('personal.aa')"  v-if="this.form.nature != 'ENTERPRISE' && this.form.nature != 'BUSINESS_OR_ASSOCIATION' && this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <a-textarea v-model="form.business"></a-textarea>
            </a-form-model-item>

            <!-- 行业编号 -->
            <a-form-model-item :label="$t('personal.industryNumber')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <!-- <a-input v-model="form.industryNumber" style="width:968px;height:30px"></a-input> -->
                <a-select placeholder="Please select" mode="multiple"   style="width: 968px;" v-model="form.industryNumber">
                    <a-select-option :value="item.code +'--'+item.name" v-for="item in industryNumbers" :key="item.code +'--'+item.name"   >
                            {{ `${item.code}--${item.name}`  }}
                    </a-select-option>
                </a-select>
            </a-form-model-item>

            <!-- 企业股东分配情况 -->
            <a-form-model-item
            v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' && this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'"
                prop="institutionShareholderVOS"
                :label="$t('personal.ac')"
            >
                <div
                    v-for="(item, index) in form.institutionShareholders"
                    :key="index"
                    class="shareholder-wrapper"
                >
                    <a-input
                        v-model="item.name"
                        :placeholder="$t('personal.shareName')"
                    ></a-input>
                    <a-input
                        v-model="item.percent"
                        :placeholder="$t('personal.sharePer')"
                    ></a-input>
                    
                    <a-button
                        v-if="index == 0"
                        shape="circle"
                        icon="plus"
                        type="primary"
                        @click="
                            form.institutionShareholders.push({
                                name: '',
                                percent: ''
                            })
                        "
                    ></a-button>
                    <a-button
                        v-else
                        shape="circle"
                        icon="minus"
                        @click="form.institutionShareholders.splice(index, 1)"
                    ></a-button>
                </div>
            </a-form-model-item>

            <!-- 业务范畴 -->
            <a-form-model-item :label="$t('personal.ba')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                 <a-select placeholder="Please select" mode="multiple"   style="width: 968px" v-model="form.scopes">
                    <a-select-option :value="item" v-for="item in scope" :key="item"   >
                            {{item}}
                    </a-select-option>
                </a-select>
            </a-form-model-item>

            <!-- 主要市場 -->
            <a-form-model-item :label="$t('personal.bb')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <a-checkbox-group v-model="form.targetMarkets">
                     <a-checkbox value="MAINLAND_CHINA">中国内地</a-checkbox>
                    <a-checkbox value="MACAO">中國澳門</a-checkbox>
                    <a-checkbox value="HONGKONG">中國香港</a-checkbox>
                    <a-checkbox value="THE_UNITED_STATES">美國</a-checkbox>
                    <a-checkbox value="PORTUGUESE_SPEAKING_COUNTRIES_REGIONS">葡語國家</a-checkbox>
                     <a-checkbox value="ASIA_AREA">亞洲</a-checkbox>
                    <a-checkbox value="EUROPE">歐洲</a-checkbox>
                    <a-checkbox value="AFRICA">非洲</a-checkbox>
                    <a-checkbox value="SOUTH_AMERICA">南美洲</a-checkbox>
                    <a-checkbox value="NORTH_AMERICA">北美洲</a-checkbox>
                    <a-checkbox value="OTHER">其他</a-checkbox>
                </a-checkbox-group>
            </a-form-model-item>


            <!-- 公司簡介 -->
            <a-form-model-item :label="$t('personal.bd')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' && this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <a-textarea v-model="form.companyBrief"></a-textarea>
            </a-form-model-item>


            <!-- 是否同意选择 -->
            <a-form-model-item :label="$t('personal.ab')" v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' && this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'">
                <a-radio-group v-model="form.deal">
                    <a-radio :value="true">{{ $t("util.yes") }}</a-radio>
                    <a-radio :value="false">{{ $t("util.no") }}</a-radio>
                </a-radio-group>
                <p>備註:如已同意上項，則可豁免提交財政局發出之營業開業 M/1 或開業聲明書副本、 商業登記證明副本(三個月內有效)及營業稅 M/8 副本(最近一年)。</p>
            </a-form-model-item>


             <!--行業編號  -->
             <a-form-model-item v-if="this.form.nature != 'ENTERPRISE' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'BUSINESS_OR_ASSOCIATION' ? 'idnumber' : null" :label="$t('personal.idNumber')">
                <a-input v-model="form.idnumber"></a-input>
            </a-form-model-item>

             <!-- 營業稅-最初開業M/1或更改申請表M/1副本 -->
             <a-form-model-item v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'ENTERPRISE' ? 'salesTaxOpenFiles' : null"  :label="$t('personal.an')">
                    <upload
                        :value.sync="form.salesTaxOpenFiles"
                        :multiple="true"
                        @handleChange="v=>uploadChange(v, 'salesTaxOpenFiles')"
                    ></upload>
            </a-form-model-item>

            <!--營業稅-徵稅憑單M/8副本(最近一年)註1 -->
            <a-form-model-item v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' && this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'ENTERPRISE' ? 'salesTaxFiles' : null" :label="$t('personal.ao')">
                    <upload
                        :value.sync="form.salesTaxFiles"
                        :multiple="true"
                        @handleChange="v=>uploadChange(v, 'salesTaxFiles')"
                    ></upload>
            </a-form-model-item>

            <!-- 商業登記證明副本（三個月內有效） -->
            <a-form-model-item v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION'&& this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'ENTERPRISE' ? 'businessRegistrationFiles' : null" :label="$t('personal.ap')">
                    <upload
                        :value.sync="form.businessRegistrationFiles"
                        :multiple="true"
                        @handleChange="v=>uploadChange(v, 'businessRegistrationFiles')"
                    ></upload>
            </a-form-model-item>

            <!-- 50%股東為澳門居民/全資澳門企業擁有之證明  -->
            <a-form-model-item v-if="this.form.nature != 'BUSINESS_OR_ASSOCIATION' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'ENTERPRISE' ? 'shareholderSamesFiles' : null" :label="$t('personal.aj')">
                    <upload
                        :value.sync="form.shareholderSamesFiles"
                        :multiple="true"
                        @handleChange="v=>uploadChange(v, 'shareholderSamesFiles')"
                    ></upload>
            </a-form-model-item>

            <!-- 團體設立之澳門政府公報副本 -->
            <a-form-model-item v-if="this.form.nature != 'ENTERPRISE' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'BUSINESS_OR_ASSOCIATION' ? 'groupEstablishmentFiles' : null" :label="$t('personal.ak')">
                    <upload
                        :value.sync="form.groupEstablishmentFiles"
                        :multiple="true"
                        @handleChange="v=>uploadChange(v, 'groupEstablishmentFiles')"
                    ></upload>
            </a-form-model-item>

             <!-- 身份證明局發出之登記證明書副本 -->
            <a-form-model-item v-if="this.form.nature != 'ENTERPRISE'&& this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'BUSINESS_OR_ASSOCIATION' ? 'identificationBureauFiles' : null" :label="$t('personal.al')">
                    <upload
                        :value.sync="form.identificationBureauFiles"
                        :multiple="true"
                        @handleChange="v=>uploadChange(v, 'identificationBureauFiles')"
                    ></upload>
            </a-form-model-item>

             <!-- 法人代表之身份證副本 -->
            <a-form-model-item v-if="this.form.nature != 'ENTERPRISE' &&this.form.nature != 'GOVERNMENT_ORGANS' && this.form.nature != 'UNIVERSITY' && this.form.nature != 'OTHER'&& this.form.nature != 'NATURAL_PERSON'" :prop="this.form.nature == 'BUSINESS_OR_ASSOCIATION' ? 'legalPersonFiles' : null" :label="$t('personal.am')">
                    <upload
                        :value.sync="form.legalPersonFiles"
                        :multiple="true"
                        @handleChange="v=>uploadChange(v, 'legalPersonFiles')"
                    ></upload>
            </a-form-model-item>


            <a-form-model-item>
                <a-button
                    :style="{ marginRight: '8px' }"
                    @click="$router.back()"
                    >{{ $t("util.cancel") }}</a-button
                >
                <a-button type="primary" @click="handleSubmit">{{
                    $t("util.save")
                }}</a-button>
            </a-form-model-item>
        </a-form-model>
    </a-spin>
    <a-descriptions v-else :title="$t('personal.m')" :column="1">
        <a-descriptions-item :label="$t('personal.logo')"
            ><img :src="form.logo" class="img"
        /></a-descriptions-item>
        <a-descriptions-item :label="$t('personal.meNameZh')">{{
            form.nameZh
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.meNameEn')">{{
            form.nameEn
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.meNamePt')">{{
            form.namePt
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.w')">{{
            form.siteRegistrationCode
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.u')">{{
            form.registrationNumber
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.y')">{{
            form.taxpayerNo
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.ay')">{{
            form.taxpayerName
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.z')">{{
            form.dateOfEstablishment
        }}</a-descriptions-item>
        <!-- <a-descriptions-item :label="$t('personal.aa')">{{
            form.business
        }}</a-descriptions-item> -->
        <a-descriptions-item :label="$t('personal.ac')">{{
            form.institutionShareholders | formatShareholders
        }}</a-descriptions-item>
        <a-descriptions-item :label="$t('personal.ab')">
            {{ form.deal === true ? $t("util.yes") : $t("util.no") }}
        </a-descriptions-item>

        <!-- <a-descriptions-item :label="$t('personal.ar')">{{
            form.nature
        }}</a-descriptions-item> -->

          <a-descriptions-item :label="$t('personal.country')">{{
            form.countryZh
        }}</a-descriptions-item>

        <a-descriptions-item :label="$t('personal.province')">{{
            form.provinceZh
        }}</a-descriptions-item>

         <a-descriptions-item :label="$t('personal.city')">{{
            form.cityZh
        }}</a-descriptions-item>

        <a-descriptions-item :label="$t('personal.street')">{{
            form.streetZh
        }}</a-descriptions-item>

        <a-descriptions-item :label="$t('personal.concact')">{{
            form.tel
        }}</a-descriptions-item>

        <a-descriptions-item :label="$t('personal.fax')">{{
            form.fax
        }}</a-descriptions-item>

      
        <a-descriptions-item :label="$t('personal.idNumber')" v-if="form.nature = 'BUSINESS_OR_ASSOCIATION' ">{{
            form.idnumber
        }}</a-descriptions-item>

          <a-descriptions-item :label="$t('personal.chargeName')" v-if="form.nature = 'BUSINESS_OR_ASSOCIATION' ">{{
            form.chargeName
        }}</a-descriptions-item>
       
        <a-descriptions-item :label="$t('personal.an')" v-if="form.nature = 'BUSINESS_OR_ASSOCIATION' ">
       
            <a-icon type="download" @click="down1(form.groupEstablishmentFiles[0].url,form.groupEstablishmentFiles[0].oriname)"/>

        </a-descriptions-item>
        

         <a-descriptions-item :label="$t('personal.ao')" v-if="form.nature = 'BUSINESS_OR_ASSOCIATION' ">
            <a-icon type="download" @click="down2(form.identificationBureauFiles[0].url,form.identificationBureauFiles[0].oriname)"/>
        </a-descriptions-item>

        <a-descriptions-item :label="$t('personal.ap')" v-if="form.nature = 'BUSINESS_OR_ASSOCIATION' ">
             <a-icon type="download" @click="down3(form.legalPersonFiles[0].url,form.legalPersonFiles[0].oriname)"/>
        </a-descriptions-item>

         <a-descriptions-item :label="$t('personal.aj')" v-if="form.nature = 'ENTERPRISE' ">
           <a-icon type="download" @click="down1(form.businessRegistrationFiles[0].url,form.businessRegistrationFiles[0].oriname)" /> 
        </a-descriptions-item>

        <a-descriptions-item :label="$t('personal.ak')" v-if="form.nature = 'ENTERPRISE' ">
           
            <a-icon type="download" @click="down1(form.salesTaxOpenFiles[0].url,form.salesTaxOpenFiles[0].oriname)" /> 
    </a-descriptions-item>

         <a-descriptions-item :label="$t('personal.al')" v-if="form.nature = 'ENTERPRISE' ">
           
            <a-icon type="download" @click="down1( form.salesTaxFiles[0].url, form.salesTaxFiles[0].oriname)" /> 
        </a-descriptions-item>

         <a-descriptions-item :label="$t('personal.am')" v-if="form.nature = 'ENTERPRISE' ">
    
            <a-icon type="download" @click="down1(form.shareholderSamesFiles[0].url,form.shareholderSamesFiles[0].oriname)" /> 
        </a-descriptions-item>




    </a-descriptions>
</template>

<script>
import { mapGetters } from "vuex";
import Liaison from "@/apis/liaison";
import { upFiles } from "@/apis/files";
import Upload from "@/components/upload";
import Institution from "@/apis/institution";
import User from "@/apis/user";
import { formatString } from "@/common/format";


export default {
    components: { Upload },
    data() {
        let config = { required: true, message: "Please input" };
        return {
            targetMarkets:[],
            
            countrys: ['中國'],
            upFiles,
            rules: {
                nameZh: [config],
                siteRegistrationCode: [config],
                registrationNumber: [config],
                taxpayerNo: [config],
                taxpayerName: [config],
                dateOfEstablishment: [config],
                business: [config],
                deal: [config],
                institutionShareholders: [config],
                nature:[config],
                salesTaxOpenFiles:[config],
                salesTaxFiles:[config],
                businessRegistrationFiles:[config],
                shareholderSamesFiles:[config],
                groupEstablishmentFiles:[config],
                identificationBureauFiles:[config],
                legalPersonFiles:[config],
                idnumber:[config],
                // countrys:[config],
                // tels:[config],
                // faxs:[config]
            },
            // nature: [],
            // country:[],
            scope:[],
            industryNumbers:[],
            AreaCode:[],
            province:[],
            city: [],
            visible: false,
            form: {
                adminId: this.$store.getters.currentUser,
                logo: "",
                nameZh: "",
                nameEn: "",
                namePt: "",
                nature: [],

                countryZh:"",
                provinceZh: "",
                cityZh: "",
                // merName:"",
                // name:"",
                // sname:"",

                streetZh: "",
                telAreaCode: "",
                faxAreaCode: "",
                
                
                scopes: [],
                targetMarkets:[],
                tel: "",
                industryNumber:[],
                fax: "",
                idnumber: "",
                chargeName: "",
                identificationBureauFiles: [],
                groupEstablishmentFiles: [],
                legalPersonFiles: [],
                // businessRegistrationFiles: "",
                salesTaxOpenFiles: [],
                salesTaxFiles: [],
                shareholderSamesFiles: [],
                siteRegistrationCode: "",
                registrationNumber: "",
                taxpayerNo: "",
                taxpayerName: "",
                dateOfEstablishment: null,
                business: "",
                deal: true,
                institutionShareholders: [{ name: "", percent: "" }]
            },
            loading: false,
            spinning: false,
            appData:[],
            citys:[]
        };
    },
    computed: {
        ...mapGetters(["currentInstitution", "currentUser"]),
        role() {
            if (this.currentInstitution) {
                return (
                    this.$route.query.type === "new" ||
                    this.currentInstitution.adminId === this.currentUser
                );
            }
            return true;
        }
    },
    filters: {
        formatShareholders(value) {
            return value
                ? value
                      .map(item => {
                          return `${item.name}:${item.percent}%`;
                      })
                      .join(";")
                : "尚未設定";
        }
    },
    methods: {
        change(){
            
            for(var i = 0; i<this.appData.length; i++ ) {
                if(this.appData[i].name == this.form.provinceZh){
                    this.citys = this.appData[i].city
                }
                
            }
        },
        beforeUpload(file) {
            const isJPG =
                file.type === "image/jpeg" || file.type === "image/png";
            if (!isJPG) {
                this.$message.error("You can only upload JPG and PNG file!");
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error("Image must smaller than 2MB!");
            }
            if (isJPG && isLt2M) {
                this.loading = true;
            }
            return isJPG && isLt2M;
        },
        imgChange(info) {
            if (info.file.status === "done") {
                let data = info.file.response;
                if (data.code === 200) {
                    this.form.logo = data.data.url;
                } else {
                    // this.$message.error(data.message);
                }
                this.loading = false;
            }
        },
        async onSuccess() {
            const { data } = await User.current();
            this.$store.dispatch("setInfo", data);
            this.spinning = false;
            this.$message.success("操作成功");
            this.$router.replace("/personal/info");
        },

       async repeat(number) {  
            const { data } = await Institution.repeat(number);
              if(data != 0  && data >0){
                  this.visible = true;
                  this.form.siteRegistrationCode = null;
              }
           
        },

        handleOk () {
            this.visible = false;
        },

        async handleSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.spinning = true;
                    const { code, message } = await Institution.create(
                        formatString(this.form)
                    );
                    if (code !== 200) {
                        return;
                    }
                    if (!this.$route.query.type) {
                        this.$store.dispatch("removeCurrentInstitution");
                    }
                    this.onSuccess();
                }
            });
        },

        //上傳的文件
        uploadChange(info, type) {
            this.form[type] = info
        },
        async initData() {
            this.spinning = true;
            const { data } = await Institution.one(this.currentInstitution.id);

              
               console.log("123456",data);

            this.form = data;
            if (this.form.institutionShareholders.length === 0) {
                this.form.institutionShareholders.push({
                    name: "",
                    percent: ""
                });
            }
            if (
                this.form.status !== "passed" &&
                this.form.dateOfEstablishment
            ) {
                this.form.dateOfEstablishment = this.$moment(
                    data.dateOfEstablishment
                );
            }
            this.spinning = false;
        },

        async  info () {
              const { data } = await Institution.info();

              this.country = data;
             
          },



          async  info1 () {
              const { data } = await Institution.info1();
              
              this.scope = data;
          },

         async getCode () {
           const { data } = await Institution.info2();
           this.AreaCode = data;
           
    },

         async  info3 (id) {
              const { data } = await Institution.info3(id);
             
              this.province = data;
          },

         async  info4 (id) {
              const { data } = await Institution.info4(id);
              this.city = data;
          },

        async  info5 () {
              const { data } = await Institution.info5();
              this.industryNumbers = data;
          },



         down1(url, name) {
             console.log("11111",url);
            let x = new XMLHttpRequest();
            x.open("GET", url, true);
            x.responseType = "blob";
            x.onload = e => {
                let url = window.URL.createObjectURL(x.response);
                let a = document.createElement("a");
                a.href = url;
                a.download = name;
                a.click();
            };
            x.send();
        },
        down2(url, name) {
            let x = new XMLHttpRequest();
            x.open("GET", url, true);
            x.responseType = "blob";
            x.onload = e => {
                let url = window.URL.createObjectURL(x.response);
                let a = document.createElement("a");
                a.href = url;
                a.download = name;
                a.click();
            };
            x.send();
        },
        down3(url, name) {
            let x = new XMLHttpRequest();
            x.open("GET", url, true);
            x.responseType = "blob";
            x.onload = e => {
                let url = window.URL.createObjectURL(x.response);
                let a = document.createElement("a");
                a.href = url;
                a.download = name;
                a.click();
            };
            x.send();
        },
    },


    mounted() {
        if (!this.$route.query.type) {
            this.initData();
        }
       
        this.appData = require('@/json/country.json');

        this.getCode();
    },
    created() {
        this.info();
        this.info1();
        this.info5();
        
    }
};
</script>

<style lang="less" scoped>
.img {
    width: 80px;
    max-height: 80px;
}
/deep/ .ant-descriptions-item > .ant-descriptions-item-label {
    width: 250px;
    text-align: right;
    white-space: pre-wrap;
    color: #aaa;
}
/deep/.ant-descriptions-item > .ant-descriptions-item-content {
    color: #000;
    padding-left: 20px;
    max-width: 700px;
}
.shareholder-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    input {
        width: 46%;
    }
}
</style>
