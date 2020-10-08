import general from "./general";
import request from "./request";

const m = general("encourage-convention", {
    download: () => request({ url: "/encourage-convention/excel", method: "GET", responseType: "blob" }),
});

export default m;
