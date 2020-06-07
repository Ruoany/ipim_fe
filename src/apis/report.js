import general from "./general";
import request from "./request";

const m = general("report", {
    getEncourageEnterpriseById: (id) => request({ url: `/encourage-enterprise/${id}`, method: "GET" }),
    getEncourageEnterpriseReportById: (id) => request({ url: `/encourage-enterprise-report/${id}`, method: "GET" }),
    addEncourageEnterpriseReport:(data) => request({ url: `/encourage-enterprise-report`, method: "POST", data}),
});

export default m;
