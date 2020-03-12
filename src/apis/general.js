import request from "./request";

const func = (modules, o = {}) => {
    const modulesUrl = `/${modules}`;
    const otherModules = o;
    return {
        ...otherModules,
        get: params =>
            request({
                url: modulesUrl,
                method: "GET",
                params
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
