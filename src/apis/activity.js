import general from "./general";
import request from "./request";

const m = general("activity", {
    disabled: (params) => request({ url: "/activity/infoActivityForDate", method: "GET", params }),
});

export default m;
