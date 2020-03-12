const config = { rules: [{ required: true, message: "please input" }] };
const config_select = { rules: [{ required: true, message: "please select" }] };
const config_upload = { rules: [{ required: true, message: "please upload file" }] };

export default {
    name: ["name", config],
    files: ["files", config_select]
};
