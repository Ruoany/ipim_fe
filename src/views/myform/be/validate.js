const config = { rules: [{ required: true, message: "please input" }] };
const config_select = { rules: [{ required: true, message: "please select" }] };

export default {
  form: {},
  name: ["name", config],
  files: ["files", config_select],
  rules: {
    ecPlatformNmae: [{ required: true, message: "plese input" }],
    costTechAnnual: [{ required: true, message: "plese input" }],
    ecProductInfo: [{ required: true, message: "plese input" }],
    costVAS: [{ required: true, message: "plese input" }],
    liaisonId: [{ required: true, message: "plese select" }],
  },
};

