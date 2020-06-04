import request, { baseURL } from "./request";
export const upFiles = `${baseURL}/upload1`;
export const upload = data =>
    request({
        url: "/upload1",
        method: "POST",
        data,
    });
