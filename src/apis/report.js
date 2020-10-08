import general from "./general";
import request from "./request";

const m = general("report", {
    getEncourageEnterpriseById: (id) => request({ url: `/encourage-enterprise/${id}`, method: "GET" }),
    getEncourageEnterpriseReportById: (id) => request({ url: `/encourage-enterprise-report/encourage/${id}`, method: "GET" }),
    addEncourageEnterpriseReport:(data) => request({ url: `/encourage-enterprise-report`, method: "POST", data}),
    updateEncourageEnterpriseReport:(data) => request({ url: `/encourage-enterprise-report`, method: "PUT", data}),

    getEncourageConventionById: (id) => request({ url: `/encourage-convention/${id}`, method: "GET" }),
    getEncourageConventionReportById: (id) => request({ url: `/encourage-convention-report/encourage/${id}`, method: "GET" }),
    addEncourageConventionReport:(data) => request({ url: `/encourage-convention-report`, method: "POST", data}),
    updateEncourageConventionReport:(data) => request({ url: `/encourage-convention-report`, method: "PUT", data}),

    getEncourageAttendById: (id) => request({ url: `/encourage-attend/${id}`, method: "GET" }),
    getEncourageAttendReportById: (id) => request({ url: `/encourage-attend-report/encourage/${id}`, method: "GET" }),
    addEncourageAttendReport:(data) => request({ url: `/encourage-attend-report`, method: "POST", data}),
    updateEncourageAttendReport:(data) => request({ url: `/encourage-attend-report`, method: "PUT", data}),

    
    getEncourageMissionById: (id) => request({ url: `/encourage-mission/${id}`, method: "GET" }),
    getEncourageMissionReportById: (id) => request({ url: `/encourage_mission_report/encourage/${id}`, method: "GET" }),
    addEncourageMissionReport:(data) => request({ url: `/encourage_mission_report`, method: "POST", data}),
    updateEncourageMissionReport:(data) => request({ url: `/encourage_mission_report`, method: "PUT", data}),

});

export default m;
