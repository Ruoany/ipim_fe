import general from "./general";
import request from "./request";

const m = general("institution", {
    certified: async data => {
        const certified = await request({ url: "institution/certified", method: "post", data });
        return certified;
    }
});

export default m;
