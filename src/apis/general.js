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
                    for (let key in params) {
                        if (params[key] == null) {
                            delete params[key];
                        }
                    }

                    return qs.stringify(params, { arrayFormat: "repeat" });
                }
            });
            return result;
        },
        one: async id => {
            const result = await request.get(`${modulesUrl}/${id}`);
            return result;
        },
        create: async data => {
            const result = await request({
                url: modulesUrl,
                method: "POST",
                data
            });
            return result;
        },
        update: async data => {
            const result = await request({
                url: modulesUrl,
                method: "PUT",
                data
            });
            return result;
        },
        delete: async id => {
            const result = await request.delete(`${modulesUrl}/${id}`);
            return result;
        },
        all: async params => {
            const result = await request({
                url: `${modulesUrl}/list`,
                method: "GET",
                params,
                paramsSerializer: function(params) {
                    for (let key in params) {
                        if (params[key] == null) {
                            delete params[key];
                        }
                    }
                    return qs.stringify(params, { arrayFormat: "repeat" });
                }
            });
            return result;
        }
    };
};

export default func;
