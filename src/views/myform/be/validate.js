const config = { rules: [{ required: true, message: "please input" }] };
const config_select = { rules: [{ required: true, message: "please select" }] };

export default {
    form: {},
    name: ["name", config],
    files: ["files", config_select],
};
