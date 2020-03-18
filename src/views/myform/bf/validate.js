const config = { rules: [{ required: true, message: "plese input" }] };
const config_select = { rules: [{ required: true, message: "plese select" }] };

export default {
    form: {},
    name: ["name", config],
    files: ["files", config_select]
};
