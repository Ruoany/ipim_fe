const config = [{ required: true, message: "please input" }];
const config_select = [{ required: true, message: "please select" }];

export default {
    loading: false,
    stepCurrent: 0,
    rules: {
        institutionId: config,
        newspapers: config_select,
        registration: config_select,
        identification: config_select,
        liaisonId: config_select,
        activityId: config_select,
        haveReceive: config,
        haveCharge: config,
        activityIntroduction: config,
        activityFiles: config_select,
        objective: config,
        expectedResults: config,
        airTicketNum: config,
        airTicketFee: config,
        boatTicketNum: config,
        boatTicketFee: config,
        railTicketNum: config,
        railTicketFee: config,
        tranOtherNum: config,
        tranOtherFee: config,
    },
    formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
};
