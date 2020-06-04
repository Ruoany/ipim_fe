import general from "./general";
import request from "./request";

const m = general("participate-gmbpf", {
    download: () => request({ url: "/participate-gmbpf/excel", method: "GET", responseType: "blob" }),
});

export default m;
