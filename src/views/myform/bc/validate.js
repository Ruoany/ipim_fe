const config = { rules: [{ required: true, message: "plese input" }] };
const config_select = { rules: [{ required: true, message: "plese select" }] };

export default {
    loading: false,
    stepCurrent: 0,
    rules: {
        name: ["name", config],
        files: ["files", config_select],
    },
    formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
    specialLayout: {
        wrapperCol: { span: 16, offset: 4 },
    },
};
