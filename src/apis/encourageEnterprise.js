import general from "./general";
import request from "./request";

const m = general("encourage-enterprise", {
    download: () => request({ url: "/encourage-enterprise/excel", method: "GET", responseType: "blob" }),
});

export default m;
