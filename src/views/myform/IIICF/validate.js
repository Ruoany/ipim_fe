const config = { required: true, message: "plese input" };
const config_select = { required: true, message: "plese select" };
const businessMatchings = [
    { value: "GOVERNMENT_PUBLIC", label: "iiicf.bk" },
    { value: "HOTEL", label: "iiicf.bl" },
    { value: "BUILDING", label: "iiicf.bm" },
    { value: "GENERAL_OFFICE", label: "iiicf.bn" },
    { value: "EDUCATION", label: "iiicf.bo" },
    { value: "CONSTRUCTION", label: "iiicf.bp" }
];
const targetMarkets = [
    { value: "MACAO", label: "iiicf.bs" },
    { value: "HONGKONG", label: "iiicf.bt" },
    { value: "GREATER_BAY_AREA", label: "iiicf.bu" },
    { value: "MAINLAND_CHINA", label: "iiicf.bv" },
    { value: "PORTUGUESE_SPEAKING_COUNTRIES_REGIONS", label: "iiicf.bw" },
    { value: "SOUTHEAS_ASIA_REGION", label: "iiicf.bx" },
    { value: "INDIA_AND_MIDDLE_EASE_AREA", label: "iiicf.by" },
    { value: "OTHER_ASIA_AREA", label: "iiicf.bz" },
    { value: "EUROPE", label: "iiicf.ca" },
    { value: "OTHER_COUNTRIES", label: "iiicf.cb" },
    { value: "WORLDWIDE_COVERAGE", label: "iiicf.cc" }
];

export default {
    stepCurrent: 0,
    rules: {
        liaisonId: [config_select],
        preference: [config_select],
        area: [
            config,
            {
                validator: (rule, value, callback) => {
                    if (value > 450) callback("面積不能大於450");
                    callback();
                }
            }
        ],
        attendHistoryExhibition: [config_select],
        businessMatchings: [config_select],
        targetMarkets: [config_select]
    },
    selectedActivity: {},
    formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 }
    },
    specialLayout: {
        wrapperCol: { span: 16, offset: 4 }
    },
    businessMatchings,
    targetMarkets
};
