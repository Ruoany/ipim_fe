const config = { rules: [{ required: true, message: "plese input" }] };
const config_select = { rules: [{ required: true, message: "plese select" }] };

export default {
    type: ["type", config_select],
    name: ["name", config],
    files: ["files", config_select],
    contactName: ["contactName", config],
    contactPosition: ["contactPosition", config],
    phone: ["phone", config],
    fax: ["fax", config],
    email: ["email", config],
    contactAddress: ["contactAddress", config]
};
