import general from "./general";
import request from "./request";

const m = general("liaison", {
    getList: (params) => request({ url: "liaison/getLiaisonByInstitutionId", method: "GET", params }),
});

export default m;
