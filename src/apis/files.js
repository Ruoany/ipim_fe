import request, { baseURL } from "./request";
export const upFiles = `${baseURL}/upload1`;
export const upload = async data => {
    const result = await request({
        url: "/upload1",
        method: "POST",
        data
    });
    return result.data;
};
