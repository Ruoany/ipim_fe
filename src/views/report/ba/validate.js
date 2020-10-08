const config = { rules: [{ required: true, message: "please input" }] };
const config_select = { rules: [{ required: true, message: "please select" }] };

export default {
  rules: {
    advertCost: [{ required: true, message: "plese input" }],
    photoFiles: [{ required: true }],
    applyTime: [{ required: true, message: "plese select" }],
    exhibitRent: [{ required: true, message: "plese input" }],
    leafletCost: [{ required: true, message: "plese input" }],
    makeCost: [{ required: true, message: "plese input" }],
    trafficCost: [{ required: true, message: "plese input" }],
    stateAgree: [{ required: true, message: "plese select" }],
    catalogueCost: [{ required: true, message: "plese input" }],
    websiteCost: [{ required: true, message: "plese input" }],
    productFreight: [{ required: true, message: "plese input" }],
  },
  name: ["name", config],
  files: ["files", config_select],
  contactName: ["contactName", config],
  contactPosition: ["contactPosition", config],
  phone: ["phone", config],
  fax: ["fax", config],
  email: ["email", config],
  contactAddress: ["contactAddress", config],
};
