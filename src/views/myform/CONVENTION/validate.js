const config = { required: true, message: "please input" };
const config_select = { required: true, message: "please select" };

export default {
    loading: false,
    stepCurrent: 0,
    rules: {
        country: [config],
        city: [config],
        address: [config],
        phone: [config],
        fax: [config],
        email: [config],
        web: [config],
        activityId: [config_select],
        liaisonId: [config_select],
    },
    formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
};
