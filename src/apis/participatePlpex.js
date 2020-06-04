import general from "./general";
import request from "./request";

const m = general("participate-plpex", {
    download: () => request({ url: "/participate-plpex/excel", method: "GET", responseType: "blob" }),
});

export default m;
