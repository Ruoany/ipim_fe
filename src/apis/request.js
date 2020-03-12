import axios from "axios";

export const baseURL = process.env.NODE_ENV === "production" ? "http://api-exhibition.servier.iteratech.net" : "/api";
const request = axios.create({
    baseURL, // api的base_url
    timeout: 50000 // 设置默认的请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
    config => {
        config.headers = {
            token: sessionStorage.getItem("token")
        };
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);
request.interceptors.response.use(
    response => {
        response = response.data;
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default request;
