import general from "./general";
import request from "./request";

const m = general("common_config", {
    getByName: async (groupName) => {
        const certified = await request({ url: `common_config/group/${groupName}/childs`, method: "get" });
        return certified;
    },
});

export default m;
