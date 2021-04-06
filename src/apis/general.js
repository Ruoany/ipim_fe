import request from "./request";
import qs from "qs";
const func = (modules, o = {}) => {
    /* const   modulesUrl='';
   /* if(modules==='participate'){
         modulesUrl=`/${modules}/search`;
     }
     else if(modules==='deleteSelfActivity'){
         modulesUrl='';
     }
     else{
         modulesUrl=`/activity/deleteself`;
     }
     */

    const modulesUrl = modules === 'participate' ? `/${modules}/search` : `/${modules}`;
    const otherModules = o;
    return {
        ...otherModules,
        get: params => {
            return request({
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
        },
        one: id => {
            return request.get(`${modulesUrl}/${id}`);
        },
        create: data => {
            return request({
                url: modulesUrl,
                method: "POST",
                data
            });
        },
        save: data => {
            return request({
                url: `${modulesUrl}/tosubmit`,
                method: "POST",
                data
            });
        },
        update: data => {
            return request({
                url: modulesUrl,
                method: "PUT",
                data
            });
        },
        delete: id => {
            return request.delete(`${modulesUrl}/${id}`);
        },
        all: params => {
            return request({
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
        }
    };
};

export default func;
