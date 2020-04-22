import axios from "axios";
import { message } from "ant-design-vue";
import router from "@/router/index";

export const baseURL = process.env.NODE_ENV === "production" ? "/api" : "/api";
// export const baseURL = process.env.NODE_ENV === "production" ? "http://192.168.101.53:9196" : "/api";

const request = axios.create({
    baseURL, // api的base_url
    timeout: 50000, // 设置默认的请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        config.headers = {
            Authorization: sessionStorage.getItem("token"),
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
request.interceptors.response.use(
    (response) => {
        const { data } = response;
        if (!data.success) {
            message.error(data.message);
            return false;
        }
        return data;
    },
    (error) => {
        const {
            response: { data },
        } = error;
        message.error(data.message);
        if (data.code === 401) {
            sessionStorage.removeItem("login");
            router.push("/login");
        }
        return false;
    }
);

export default request;
