import general from "./general";
import request from "./request";

const m = general("participate-mif", {
    download: () => request({ url: "/participate-mif/excel", method: "GET", responseType: "blob" }),
});

export default m;
