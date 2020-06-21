const config = { rules: [{ required: true, message: "please input" }] };
const config_select = { rules: [{ required: true, message: "please select" }] };

export default {
  form: {},
  name: ["name", config],
  files: ["files", config_select],
  rules: {
    ecPlatformNmae: [{ required: true, message: "please input" }],
    costTechAnnual: [{ required: true, message: "please input" }],
    ecProductInfo: [{ required: true, message: "please input" }],
    costVAS: [{ required: true, message: "please input" }],
    liaisonId: [{ required: true, message: "please select" }],
  },
};

