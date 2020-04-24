import axios from "axios";
import { baseURL } from "./request";
export const Login = async (params) => {
    const {
        data: { data },
    } = await axios({
        url: `${baseURL}/swagger/login`,
        params: {
            loginUrl: "http://127.0.0.1:9196/login",
            saveLogin: false,
            ...params,
        },
        method: "GET",
    });
    return data;
};
