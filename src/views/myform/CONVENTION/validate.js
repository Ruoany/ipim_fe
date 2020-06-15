const config = { required: true, message: "plese input" };
const config_select = { required: true, message: "plese select" };

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
        liaisonId: [config_select],
    },
    formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
};
