import general from "./general";
import request from "./request";

const m = general("participate-iiicf", {
    download: () => request({ url: "/participate-iiicf/excel", method: "GET", responseType: "blob" }),
});

export default m;
