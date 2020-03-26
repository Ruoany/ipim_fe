import general from "./general";
import request from "./request";

const m = general("user", {
    current: async () => {
        const result = await request({ url: "/user/current", method: "GET" });
        return result;
    },
    register: async data => {
        const result = await request({ url: "/user/register", method: "POST", data });
        return result;
    },
    reset: async data => {
        const result = await request({ url: "/user/pwdreset", method: "POST", data });
        return result;
    }
});

export default m;
