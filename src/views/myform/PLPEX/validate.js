const config = { required: true, message: "Please input" };
const config_select = { required: true, message: "Please select" };
const methods = [
    { value: "GENERAL_EXHIBITION", label: "plpex.ap" },
    { value: "GROUP_EXHIBITION", label: "plpex.aq" },
];
const exhibitionProducts = [
    { value: "INVESTMENT_ENVIRONMENT", label: "plpex.dl" },
    { value: "CURTURAL_INNOVATION", label: "plpex.ec" },
    { value: "FURNITURE", label: "plpex.dm" },
    { value: "FOOD_AND_DRINK", label: "plpex.dn" },
    { value: "ELECTRONIC_PRODUCT", label: "plpex.do" },
    { value: "CHINESE_MEDICINE", label: "plpex.dp" },
    { value: "HOTEL_INDUSTRY", label: "plpex.dq" },
    { value: "TOY", label: "plpex.dr" },
    { value: "GOVERNMENT_SERVICES", label: "plpex.ds" },
    { value: "MICE_BUSINESS_TRAVEL", label: "plpex.dt" },
    { value: "FRANCHISE", label: "plpex.du" },
    { value: "DIGITAL_IMAGING", label: "plpex.dv" },
    { value: "ENVIRONMENTAL_PROTECTION", label: "plpex.dw" },
    { value: "ACCESSORIES", label: "plpex.dy" },
    { value: "E_COMMERCE", label: "plpex.dz" },
    { value: "CRAFTS_AND_ACCESSORIES", label: "plpex.ea" },
];
const businessMatchings = [
    { value: "GOVERNMENT_PUBLIC", label: "plpex.bk" },
    { value: "HOTEL", label: "plpex.bl" },
    { value: "BUILDING", label: "plpex.bm" },
    { value: "GENERAL_OFFICE", label: "plpex.bn" },
    { value: "EDUCATION", label: "plpex.bo" },
    { value: "CONSTRUCTION", label: "plpex.bp" },
];
const targetMarkets = [
    { value: "MACAO", label: "plpex.bs" },
    { value: "HONGKONG", label: "plpex.bt" },
    { value: "GREATER_BAY_AREA", label: "plpex.bu" },
    { value: "MAINLAND_CHINA", label: "plpex.bv" },
    { value: "PORTUGUESE_SPEAKING_COUNTRIES_REGIONS", label: "plpex.bw" },
    { value: "SOUTHEAS_ASIA_REGION", label: "plpex.bx" },
    { value: "INDIA_AND_MIDDLE_EASE_AREA", label: "plpex.by" },
    { value: "OTHER_ASIA_AREA", label: "plpex.bz" },
    { value: "EUROPE", label: "plpex.ca" },
    { value: "OTHER_COUNTRIES", label: "plpex.cb" },
    { value: "WORLDWIDE_COVERAGE", label: "plpex.cc" },
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
