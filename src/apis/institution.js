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
    

    info5: data => {
        return request({
            url: "common_config/group/institution_industry/childs",
            method: "GET",
            data
        });
    },

    repeat: number => {
        return request.get(`institution/checking?siteRegistrationCode=${number}`);
    },

    count: id => {
        return request.get(`institution/${id}`);
    },

    cancel: id =>{
        return request.put(`encourage-enterprise/withdraw?id=${id}`)
    },

    existed: (id,o) =>{
        return request.get(`encourage-enterprise/records?institutionId=${id}&mice=${o}`)
    },

    legal_date: (id) => {
        return request.get(`encourage-enterprise/feone?id=${id}`)
    },

    certificate_1: data => {
        return request({
            url: "participate-delegation/payorder",
            method: "PUT",
            data
        });
    },

    certificate_2: data => {
        return request({
            url: "participate-attend-abroad/payorder",
            method: "PUT",
            data
        });
    },

    downloadCar_1: (id) => {
        return request.get(`participate-attend-abroad/findone?id=${id}`)
    },
    
    downloadCar_2: (id) => {
        return request.get(`participate-delegation/feone?id=${id}`)
    },
    


});

export default m;
