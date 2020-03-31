const config = { required: true, message: "please input" };
const config_select = { required: true, message: "please select" };
const conig_upload = { required: true, message: "please upload file" };

export default {
    selectedInstitution: {},
    rules: {
        liaisonId: [config_select]
    },
    stepCurrent: 0,
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
    upLabel: { span: 16, offset: 4 },
    reason: false,
    checkNick: false,
    applicantId: 5
};
