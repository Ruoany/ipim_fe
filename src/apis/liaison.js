import general from "./general";
import request from "./request";

const m = general("liaison", {
    getList: async params => {
        const result = await request({ url: "liaison/getLiaisonByInstitutionId", method: "GET", params });
        return result;
    }
});

export default m;
