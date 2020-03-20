const config = { rules: [{ required: true, message: "plese input" }] };
const config_select = { rules: [{ required: true, message: "plese select" }] };

export default {
    form: {},
    communityName: ["communityName", config],
    files: ["files", config_select],
    contactName: ["contactName", config],
    contactPosition: ["contactPosition", config],
    phone: ["phone", config],
    fax: ["fax", config],
    email: ["email", config],
    contactAddress: ["contactAddress", config],
    liaisonId: ["liaisonId", config_select]
};
