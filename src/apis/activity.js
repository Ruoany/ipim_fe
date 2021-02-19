import general from "./general";
import request from "./request";

const m = general("activity", {
    disabled: (params) => request({ url: "/activity/infoActivityForDate", method: "GET", params }),
    deleteSelf: async id => {
   return  request.delete(`activity/deleteSelf/${id}`);
},
repeat: name => {
    return request.get(`activity/checking?nameZh=${name}`);
},

});

export default m;
