import axios from "axios";
export const Login = async (params) => {
    const {
        data: { data },
    } = await axios({
        url: "http://api-exhibition.servier.iteratech.net/swagger/login",
        params: {
            loginUrl: "http://127.0.0.1:9196/login",
            saveLogin: false,
            ...params,
        },
        method: "GET",
    });
    return data;
};
