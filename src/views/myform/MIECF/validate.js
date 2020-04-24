const config = { required: true, message: "Please input" };
const config_select = { required: true, message: "Please select" };
const methods = [
    { value: "GENERAL_EXHIBITION", label: "miecf.ap" },
    { value: "GROUP_EXHIBITION", label: "miecf.aq" },
    { value: "SME_PARTICIPATION", label: "miecf.ar" },
    { value: "DISTINGUISHED_EXHIBITOR", label: "miecf.as" },
    { value: "AREA", label: "miecf.at" },
];
const exhibitionProducts = [
    { value: "ENERGY_EFFICIENCY", label: "miecf.dl" },
    { value: "RENEWABLE_ENERGY", label: "miecf.dm" },
    { value: "GREEN_BUILDING", label: "miecf.dn" },
    { value: "GREEN_TRANSPORTATION", label: "miecf.do" },
    { value: "WASTE_MANAGEMENT_SOLUTIONS", label: "miecf.dp" },
    { value: "WATER", label: "miecf.dr" },
    { value: "AIR_QUALITY", label: "miecf.ds" },
    { value: "ENVIRONMENTAL_PRODUCTS_AND_SERVICES", label: "miecf.dt" },
    { value: "SOIL_REMEDIATION", label: "miecf.du" },
    { value: "ENVIRONMENTAL_MONITORING", label: "miecf.dv" },
    { value: "ECO_CITY_INTEGRATION_PLAN", label: "miecf.dw" },
];
const businessMatchings = [
    { value: "GOVERNMENT_PUBLIC", label: "miecf.bk" },
    { value: "HOTEL", label: "miecf.bl" },
    { value: "BUILDING", label: "miecf.bm" },
    { value: "GENERAL_OFFICE", label: "miecf.bn" },
    { value: "EDUCATION", label: "miecf.bo" },
    { value: "CONSTRUCTION", label: "miecf.bp" },
];
const targetMarkets = [
    { value: "MACAO", label: "miecf.bs" },
    { value: "HONGKONG", label: "miecf.bt" },
    { value: "GREATER_BAY_AREA", label: "miecf.bu" },
    { value: "MAINLAND_CHINA", label: "miecf.bv" },
    { value: "PORTUGUESE_SPEAKING_COUNTRIES_REGIONS", label: "miecf.bw" },
    { value: "SOUTHEAS_ASIA_REGION", label: "miecf.bx" },
    { value: "INDIA_AND_MIDDLE_EASE_AREA", label: "miecf.by" },
    { value: "OTHER_ASIA_AREA", label: "miecf.bz" },
    { value: "EUROPE", label: "miecf.ca" },
    { value: "OTHER_COUNTRIES", label: "miecf.cb" },
    { value: "WORLDWIDE_COVERAGE", label: "miecf.cc" },
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
