import general from "./general";
import request from "./request";

const m = general("participate-attend-abroad", {
    download: () => request({ url: "/participate-attend-abroad/excel", method: "GET", responseType: "blob" }),
});

export default m;
