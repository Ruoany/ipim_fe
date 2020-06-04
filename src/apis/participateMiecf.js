import general from "./general";
import request from "./request";

const m = general("participate-miecf", {
    download: () => request({ url: "/participate-miecf/excel", method: "GET", responseType: "blob" }),
});

export default m;
