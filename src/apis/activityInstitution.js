import general from "./general";
import request from "./request";

const m = general("activityInstitution", {
    certified: async data => {
        const certified = await request({ url: "activityinstitution/add", method: "post", data });
        return certified;
    }
});

export default m;
