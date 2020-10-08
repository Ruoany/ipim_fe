import general from "./general";
import request from "./request";

const m = general("institution", {
    certified: async data => {
        const certified = await request({ url: "institution/certified", method: "post", data });
        return certified;
    },
    info: data => {
        return request({
            url: "region/all?level=0",
            method: "GET",
            data
        });
    },
    info1: data => {
        return request({
            url: "common_config/readExcel",
            method: "POST",
            data
        });
    },

    info2: data => {
        return request({
            url: "area-code/list",
            method: "GET",
            data
        });
    },
    
    info3: id => {
        return request.get(`region/all?level=1&parentId=${id}`);
    },

    info4: id => {
        return request.get(`region/all?level=2&parentId=${id}`);
    },




});

export default m;
