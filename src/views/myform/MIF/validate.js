const config = { required: true, message: "Please input" };
const config_select = { required: true, message: "Please select" };
const methods = [
    { value: "GENERAL_EXHIBITION", label: "mif.ap" },
    { value: "GROUP_EXHIBITION", label: "mif.aq" },
    { value: "SME_PARTICIPATION", label: "mif.ar" },
    { value: "SME_PARTICIPATION_MACAO", label: "mif.as" },
    // { value: "AREA", label: "mif.at" }
];
const exhibitionProducts = [
    { value: "INVESTMENT_ENVIRONMENT", label: "mif.dl" },
    { value: "CURTURAL_INNOVATION", label: "mif.dm" },
    { value: "FURNITURE", label: "mif.dn" },
    { value: "FOOD_AND_DRINK", label: "mif.do" },
    { value: "ELECTRONIC_PRODUCT", label: "mif.dp" },
    { value: "CHINESE_MEDICINE", label: "mif.dq" },
    { value: "HOTEL_INDUSTRY", label: "mif.dr" },
    { value: "TOY", label: "mif.ds" },
    { value: "GOVERNMENT_SERVICES", label: "mif.dt" },
    { value: "MICE_BUSINESS_TRAVEL", label: "mif.du" },
    { value: "FRANCHISE", label: "mif.dv" },
    { value: "DIGITAL_IMAGING", label: "mif.dw" },
    { value: "ENVIRONMENTAL_PROTECTION", label: "mif.dy" },
    { value: "ACCESSORIES", label: "mif.dz" },
    { value: "E_COMMERCE", label: "mif.ea" },
    { value: "CRAFTS_AND_ACCESSORIES", label: "mif.eb" },
];
const businessMatchings = [
    { value: "GOVERNMENT_PUBLIC", label: "mif.bk" },
    { value: "HOTEL", label: "mif.bl" },
    { value: "BUILDING", label: "mif.bm" },
    { value: "GENERAL_OFFICE", label: "mif.bn" },
    { value: "EDUCATION", label: "mif.bo" },
    { value: "CONSTRUCTION", label: "mif.bp" },
];
const targetMarkets = [
    { value: "MACAO", label: "mif.bs" },
    { value: "HONGKONG", label: "mif.bt" },
    { value: "GREATER_BAY_AREA", label: "mif.bu" },
    { value: "MAINLAND_CHINA", label: "mif.bv" },
    { value: "PORTUGUESE_SPEAKING_COUNTRIES_REGIONS", label: "mif.bw" },
    { value: "SOUTHEAS_ASIA_REGION", label: "mif.bx" },
    { value: "INDIA_AND_MIDDLE_EASE_AREA", label: "mif.by" },
    { value: "OTHER_ASIA_AREA", label: "mif.bz" },
    { value: "EUROPE", label: "mif.ca" },
    { value: "OTHER_COUNTRIES", label: "mif.cb" },
    { value: "WORLDWIDE_COVERAGE", label: "mif.cc" },
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
