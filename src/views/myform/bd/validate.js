const config = { rules: [{ required: true, message: "plese input" }] };
const config_select = { rules: [{ required: true, message: "plese select" }] };

export default {
    loading: false,
    step: 0,
    rules: {
        name: ["name", config],
        files: ["files", config_select],
    },
    formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
};
