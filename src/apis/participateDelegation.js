import general from "./general";
import request from "./request";

const m = general("participate-delegation", {
    download: () => request({ url: "/excel", method: "GET", responseType: "blob" }),
});

export default m;
