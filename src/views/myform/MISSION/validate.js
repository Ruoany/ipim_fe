const config = { required: true, message: "plese input" };
const config_select = { required: true, message: "plese select" };

export default {
    form: {
        activityId: "",
        institutionId: "",
        applicantId: "",
        liaisonId: "",
        certs: [],
        nameZh: "",
        gender: "M",
        birthDate: null,
        exitNumber: "",
        exitValidityDate: null,
        passportNumber: "",
        passportValidityDate: null,
        otherCertificateName: "",
        otherIDNumber: "",
        otherValidityDate: null,
        isAssociation: false,
        associationName: "",
        associationPosition: "",
        associateIndustry: "",
        isCompany: false,
        companyName: "",
        companyAddress: "",
        companyPosition: "",
        companyIndustry: "",
        isOtherWay: false,
        otherWayName: "",
        goWithGroup: true,
        backWithGroup: true,
        arrangement: true,
        otherArrangement: "",
        idcard: "",
        idcardValidityDate: null
    },
    formInfo: {}, //表單詳細
    activityId: 1, //展會ID
    applicantId: 1, //申請人ID
    institutionId: 1, //機構ID
    stepCurrent: 0,
    rules: {
        nameZh: config,
        birthDate: config_select,
        liaisonId: config_select
    },
    formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 }
    }
};
