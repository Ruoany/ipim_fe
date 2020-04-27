import general from "./general";
import request from "./request";

const m = general("user", {
    current: () => request({ url: "/user/current", method: "GET" }),
    register: (data) => request({ url: "/user/register", method: "POST", data }),
    updatePwd: (data) => request({ url: "/user/pwdreset", method: "POST", data }),
    resetPwd: (data) => request({ url: "/user/forget", method: "POST", data }),
    send: (account) => request.get(`/user/send/${account}`),
});

export default m;
