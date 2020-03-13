import request from "./request";
import qs from "qs";
const func = (modules, o = {}) => {
    const modulesUrl = `/${modules}`;
    const otherModules = o;
    return {
        ...otherModules,
        get: params =>
            request({
                url: modulesUrl,
                method: "GET",
                params,
                paramsSerializer: function(params) {
                    return qs.stringify(params, { arrayFormat: "repeat" });
                }
            }),
        one: id => request.get(`${modulesUrl}/${id}`),
        create: data =>
            request({
                url: modulesUrl,
                method: "POST",
                data
            }),
        update: data =>
            request({
                url: modulesUrl,
                method: "PUT",
                data
            }),
        delete: id => request.delete(`${modulesUrl}/${id}`)
    };
};

export default func;
