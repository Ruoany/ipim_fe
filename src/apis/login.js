import axios from "axios";
import { baseURL } from "./request";
export const Login = async (data) =>
    axios({
        url: `${baseURL}/login`,
        data,
        method: "POST",
    });
