import general from "./general";
import request from "./request";

const m = general("questionnaire", {
    byActivity: params => request({ url: "/questionnaire/activity", method: "GET", params }),
    encourage: params => request({ url: "/questionnaire/encourage", method: "GET", params }),
});

export default m;
