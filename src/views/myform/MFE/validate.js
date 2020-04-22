const config = { required: true, message: "plese input" };
const config_select = { required: true, message: "plese select" };
const methods = [
    { value: "GENERAL_EXHIBITION", label: "mfe.ap" },
    { value: "GROUP_EXHIBITION", label: "mfe.aq" },
    { value: "SME_PARTICIPATION", label: "mfe.ar" },
    { value: "DISTINGUISHED_EXHIBITOR", label: "mfe.as" },
];
const exhibitionProducts = [
    { value: "FASHIONABLE_COSTUME", label: "mfe.dl" },
    { value: "CATERING", label: "mfe.dm" },
    { value: "BRAND_AGENCY", label: "mfe.dn" },
    { value: "SERVICE_INDUSTRY", label: "mfe.do" },
    { value: "RETAIL", label: "mfe.dp" },
    { value: "LEISURE_INDUSTRY", label: "mfe.dq" },
    { value: "BRAND_CONSULTING_AND_DESIGN", label: "mfe.dr" },
    { value: "EQUIPMENT_AND_TECHNOLOGY", label: "mfe.ds" },
];
const businessMatchings = [
    { value: "GOVERNMENT_PUBLIC", label: "mfe.bk" },
    { value: "HOTEL", label: "mfe.bl" },
    { value: "BUILDING", label: "mfe.bm" },
    { value: "GENERAL_OFFICE", label: "mfe.bn" },
    { value: "EDUCATION", label: "mfe.bo" },
    { value: "CONSTRUCTION", label: "mfe.bp" },
];
const targetMarkets = [
    { value: "MACAO", label: "mfe.bs" },
    { value: "HONGKONG", label: "mfe.bt" },
    { value: "GREATER_BAY_AREA", label: "mfe.bu" },
    { value: "MAINLAND_CHINA", label: "mfe.bv" },
    { value: "PORTUGUESE_SPEAKING_COUNTRIES_REGIONS", label: "mfe.bw" },
    { value: "SOUTHEAS_ASIA_REGION", label: "mfe.bx" },
    { value: "INDIA_AND_MIDDLE_EASE_AREA", label: "mfe.by" },
    { value: "OTHER_ASIA_AREA", label: "mfe.bz" },
    { value: "EUROPE", label: "mfe.ca" },
    { value: "OTHER_COUNTRIES", label: "mfe.cb" },
    { value: "WORLDWIDE_COVERAGE", label: "mfe.cc" },
];

export default {
    loading: false,
    stepCurrent: 0,
    rules: {
        liaisonId: [config_select],
        method: [config_select],
        preference: [config_select],
        area: [
            config,
            {
                validator: (rule, value, callback) => {
                    // if (value > 450) callback("面積不能大於450");
                    callback();
                },
            },
        ],
        attendHistoryExhibition: [config_select],
        exhibitionProducts: [config_select],
        businessMatchings: [config_select],
        targetMarkets: [config_select],
    },
    selectedActivity: {},
    formatLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    },
    specialLayout: {
        wrapperCol: { span: 16, offset: 4 },
    },
    methods,
    exhibitionProducts,
    businessMatchings,
    targetMarkets,
};
