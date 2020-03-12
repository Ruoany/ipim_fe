const config = { rules: [{ required: true, message: "plese input" }] };
const config_select = { rules: [{ required: true, message: "plese select" }] };

export default {
    form: "",
    activityId: "", //展會ID
    applicantId: "", //申請人ID
    address: ["address", config], //地址
    arrangement: ["arrangement"], //由本局安排
    associationName: ["associationName"], //協商會名稱
    associationPosition: ["associationPosition"], //會內職務
    backWithGroup: ["backWithGroup"], //隨團回程
    birthDate: ["birthDate", config], //出生日期
    certs: ["certs"], //附件
    code: ["code"], //申請編號
    companyAddress: ["companyAddress"], //公司地址
    companyName: ["companyName"], //公司名稱
    companyPosition: ["companyPosition"], //公司職務
    email: "", //郵箱
    exitNumber: ["exitNumber"], //港澳居民来往内地通行证号码
    exitValidityDate: ["exitValidityDate"], //港澳居民来往内地通行证有效日期
    fax: "", //傳真
    goWithGroup: ["goWithGroup"], //隨團去程
    idcard: ["idcard"], //身份證號碼
    idcardValidityDate: ["idcardValidityDate"], //身份證有效期
    associateIndustry: ["associateIndustry"], //行業類別
    companyIndustry: ["companyIndustry"], //公司行業類別
    institutionId: "", //機構ID
    isAssociation: ["isAssociation"], //是否商協會
    isCompany: ["isCompany"], //是否是公司
    isOtherWay: ["isOtherWay"], //是否其他名義參與
    liaisonId: ["liaisonId", config_select], //聯絡人ID,
    liaisonName: ["liaisonName"], //聯絡人名稱
    otherArrangement: ["otherArrangement"], //其他交通和住宿情况
    otherCertificateName: ["otherCertificateName"], //其他證件名稱
    otherIDNumber: ["otherIDNumber"], //其他證件號碼
    otherValidityDate: ["otherValidityDate"], //其他证件有效期
    otherWayName: ["otherWayName"], //其他名义名称
    passportNumber: ["passportNumber"], //護照號碼
    passportValidityDate: ["passportValidityDate"], //護照有效期
    phone: "", //流動電話
    myMocauPhone: "", //澳門流動電話
    myChinesePhone: "", //國內流動電話
    gender: ["gender", config], //性別
    nameEn: ["nameEn", config], //姓名（英文）
    nameZh: ["nameZh", config] //姓名（中文）
};
