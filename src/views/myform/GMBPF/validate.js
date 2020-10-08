const config = { required: true, message: "Please input" };
const config_select = { required: true, message: "Please select" };
const methods = [
    { value: "GENERAL_EXHIBITION", label: "gmbpf.ap" },
    { value: "GROUP_EXHIBITION", label: "gmbpf.aq" },
    { value: "SME_PARTICIPATION", label: "gmbpf.ar" },
    { value: "GUANGDONG_EXHIBITION", label: "gmbpf.as" },
    { value: "BELT_AND_ROAD", label: "gmbpf.at" },
];
const exhibitionProducts = [
    { value: "MADE_IN_MACAO", label: "gmbpf.dl" },
    { value: "MACAO_BRAND", label: "gmbpf.dm" },
    { value: "MACAO_AGENCY", label: "gmbpf.dn" },
    { value: "DAILY_SUPPLIES", label: "gmbpf.do" },
    { value: "GIFT", label: "gmbpf.dp" },
    { value: "FOOD", label: "gmbpf.dq" },
];
const businessMatchings = [
    { value: "GOVERNMENT_PUBLIC", label: "gmbpf.bk" },
    { value: "HOTEL", label: "gmbpf.bl" },
    { value: "BUILDING", label: "gmbpf.bm" },
    { value: "GENERAL_OFFICE", label: "gmbpf.bn" },
    { value: "EDUCATION", label: "gmbpf.bo" },
    { value: "CONSTRUCTION", label: "gmbpf.bp" },
];
const targetMarkets = [
    { value: "MACAO", label: "gmbpf.bs" },
    { value: "HONGKONG", label: "gmbpf.bt" },
    { value: "GREATER_BAY_AREA", label: "gmbpf.bu" },
    { value: "MAINLAND_CHINA", label: "gmbpf.bv" },
    { value: "PORTUGUESE_SPEAKING_COUNTRIES_REGIONS", label: "gmbpf.bw" },
    { value: "SOUTHEAS_ASIA_REGION", label: "gmbpf.bx" },
    { value: "INDIA_AND_MIDDLE_EASE_AREA", label: "gmbpf.by" },
    { value: "OTHER_ASIA_AREA", label: "gmbpf.bz" },
    { value: "EUROPE", label: "gmbpf.ca" },
    { value: "OTHER_COUNTRIES", label: "gmbpf.cb" },
    { value: "WORLDWIDE_COVERAGE", label: "gmbpf.cc" },
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
