const config = [{ required: true, message: "plese input" }];
const config_select = [{ required: true, message: "plese select" }];

export default {
    loading: false,
    stepCurrent: 6,
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
    },
    formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
};
