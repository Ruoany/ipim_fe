import request from "./request";

//获取展會page
export const getActivePage = params => request.get("/activity", { params });

//獲取展會推薦
export const getReActivePage = params => request.get("/activity/recommend", { params });

//获取展会详情byId
export const getActiveById = params => request.get(`/activity/${params}`);

//獲取展會列表
export const getActiveList = params => request.get("/activity/list", { params });
