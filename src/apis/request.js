import axios from "axios";
import { message } from "ant-design-vue";

export const baseURL = process.env.NODE_ENV === "production" ? "/api" : "/api";
// export const baseURL = process.env.NODE_ENV === "production" ? "http://192.168.101.53:9196" : "/api";

const request = axios.create({
    baseURL, // api的base_url
    timeout: 50000 // 设置默认的请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
    config => {
        config.headers = {
            // Authorization: sessionStorage.getItem("token")
            Authorization:
                "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiYXV0aG9yaXRpZXMiOiJbXCLnrqHnkIblkZhcIl0iLCJleHAiOjE1ODQ2Njc4MDJ9.worCLCHFWuTGDGUfS9q6WFcbRk5E3sy82cfaZxTy1Q17F4v4XNSnqZxiftCKPDUTA84s0zOpThE6dmAZfjsD0w"
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
request.interceptors.response.use(
    response => {
        response = response.data;
        return response;
    },
    error => {
        const {
            response: { data }
        } = error;
        message.error(data.message);
        return false;
    }
);

export default request;
