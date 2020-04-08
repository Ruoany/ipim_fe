import general from "./general";
import request from "./request";

const m = general("participate-mfe", {
    download: () => request({ url: "/participate-mfe/excel", method: "GET", responseType: "blob" }),
});

export default m;
