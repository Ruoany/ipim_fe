const config = [{ required: true, message: "please input" }];
const config_select = [{ required: true, message: "please select" }];

export default {
    loading: false,
    stepCurrent: 0,
    rules: {
        activityId: config_select,
        institutionId: config_select,
        receive: config_select,
        taxpayer: config,
        taxpayerCode: config,
        taxpayerType: config,
        liaisonId: config_select,
        identityFiles: config_select,
        incomeFiles: config_select,
        depositFiles: config_select,
        quotationSheet: config_select,
        registerFiles: config_select,
        identityForm: config_select,
        taxationBills: config_select,
        productServe: config_select,
        productServeFiles: config_select,
    },
    formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
};
