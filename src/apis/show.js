import request from "./request";
import qs from "qs";

//获取展會page
export const getActivePage = params =>
    request.get("/activity", {
        params,
        paramsSerializer: function(params) {
            return qs.stringify(params, { arrayFormat: "repeat" });
        }
    });

//獲取展會推薦
export const getReActivePage = params =>
    request.get("/activity/recommend", {
        params,
        paramsSerializer: function(params) {
            return qs.stringify(params, { arrayFormat: "repeat" });
        }
    });

//获取展会详情byId
export const getActiveById = params => request.get(`/activity/${params}`);

//獲取展會列表
export const getActiveList = params =>
    request.get("/activity/list", {
        params,
        paramsSerializer: function(params) {
            return qs.stringify(params, { arrayFormat: "repeat" });
        }
    });
