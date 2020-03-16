import request from "./request";
import qs from "qs";
const func = (modules, o = {}) => {
    const modulesUrl = `/${modules}`;
    const otherModules = o;
    return {
        ...otherModules,
        get: async params => {
            const result = await request({
                url: modulesUrl,
                method: "GET",
                params,
                paramsSerializer: function(params) {
                    return qs.stringify(params, { arrayFormat: "repeat" });
                }
            });
            return Promise.resolve(result);
        },
        one: async id => {
            const result = await request.get(`${modulesUrl}/${id}`);
            return Promise.resolve(result);
        },
        create: async data => {
            const result = await request({
                url: modulesUrl,
                method: "POST",
                data
            });
            return Promise.resolve(result);
        },
        update: async data => {
            const result = await request({
                url: modulesUrl,
                method: "PUT",
                data
            });
            return Promise.resolve(result);
        },
        delete: async id => {
            const result = await request.delete(`${modulesUrl}/${id}`);
            return Promise.resolve(result);
        },
        all: async params => {
            const result = await request({
                url: `${modulesUrl}/list`,
                method: "GET",
                params,
                paramsSerializer: function(params) {
                    return qs.stringify(params, { arrayFormat: "repeat" });
                }
            });
            return Promise.resolve(result);
        }
    };
};

export default func;
