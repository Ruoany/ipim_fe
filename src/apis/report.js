import general from "./general";
import request from "./request";

const m = general("report", {
    getEncourageEnterpriseById: (id) => request({ url: `/encourage-enterprise/${id}`, method: "GET" }),
    getEncourageEnterpriseReportById: (id) => request({ url: `/encourage-enterprise-report/${id}`, method: "GET" }),
    addEncourageEnterpriseReport:(data) => request({ url: `/encourage-enterprise-report`, method: "POST", data}),
    updateEncourageEnterpriseReport:(data) => request({ url: `/encourage-enterprise-report`, method: "PUT", data}),

    getEncourageConventionById: (id) => request({ url: `/encourage-convention/${id}`, method: "GET" }),
    getEncourageConventionReportById: (id) => request({ url: `/encourage-convention-report/${id}`, method: "GET" }),
    addEncourageConventionReport:(data) => request({ url: `/encourage-convention-report`, method: "POST", data}),
    updateEncourageConventionReport:(data) => request({ url: `/encourage-convention-report`, method: "PUT", data}),

    getEncourageAttendById: (id) => request({ url: `/encourage-attend/${id}`, method: "GET" }),
    getEncourageAttendReportById: (id) => request({ url: `/encourage-attend-report/${id}`, method: "GET" }),
    addEncourageAttendReport:(data) => request({ url: `/encourage-attend-report`, method: "POST", data}),
    updateEncourageAttendReport:(data) => request({ url: `/encourage-attend-report`, method: "PUT", data}),

});

export default m;
