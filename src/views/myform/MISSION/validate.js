const config = { required: true, message: "Please input" };
const config_select = { required: true, message: "Please select" };

export default {
    stepCurrent: 0,
    rules: {
        nameZh: config,
        birthDate: config_select,
        liaisonId: config_select,
    },
    formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
};
