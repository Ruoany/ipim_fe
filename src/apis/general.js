import request from "./request";

const func = (modules, o = {}) => {
    const modulesUrl = `/${modules}`;
    const otherModules = o;
    return {
        ...otherModules,
        get: params => request.get(modulesUrl, params),
        one: id => request.get(`${modulesUrl}/${id}`),
        create: data => request.post(`${modulesUrl}`, data),
        update: data => request.put(`${modulesUrl}`, data),
        delete: id => request.delete(`${modulesUrl}/${id}`)
    };
};

export default func;
