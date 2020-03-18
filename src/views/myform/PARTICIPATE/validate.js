const config = { rules: [{ required: true, message: "please input" }] };
const config_select = { rules: [{ required: true, message: "please select" }] };
const config_upload = { rules: [{ required: true, message: "please upload file" }] };

export default {
    form: "",
    liaisonId: ["liaisonId", config_select],
    registrationOfBureauFiles: ["registrationOfBureauFiles", config_upload],
    macaoShareholderFiles: ["macaoShareholderFiles", config_upload],
    taxpayerFiles: ["taxpayerFiles"],
    shareholderSamesFiles: ["shareholderSamesFiles", config_upload],
    salesTaxFiles: ["salesTaxFiles", config_upload],
    differentTaxpayerFiles: ["differentTaxpayerFiles"],
    businessRegistrationFiles: ["businessRegistrationFiles", config_upload],
    certificateBureauFiles: ["certificateBureauFiles", config_upload],
    otherFiles: ["otherFiles"],
    shareholderSamesFiles: ["shareholderSamesFiles"],
    unitIntroductionFiles: ["unitIntroductionFiles", config_upload],
    idcardFiles: ["idcardFiles", config_upload],
    exhibitionProduct: ["exhibitionProduct", config]
};
