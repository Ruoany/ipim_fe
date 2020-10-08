import general from "./general";
import request from "./request";

const m = general("encourage-attend", {
    download: () => request({ url: "/encourage-attend/excel", method: "GET", responseType: "blob" }),
});

export default m;
