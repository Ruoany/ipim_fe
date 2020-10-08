import axios from "axios";
import { baseURL } from "./request";
export const Login = async data => {
    const result = await axios({
        url: `${baseURL}/login`,
        data,
        method: "POST",
    })
        .then(res => res.data)
        .catch(error => error.response.data);
    return Promise.resolve(result);
};
