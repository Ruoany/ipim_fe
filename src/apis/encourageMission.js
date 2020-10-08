import general from "./general";
import request from "./request";

const m = general("encourage-mission", {
    downloadNameList: () => request({ url: "/encourage-mission/mission_name_list", method: "GET", responseType: "blob" }),
    downloadSchedule: () => request({ url: "/encourage-mission/application_form", method: "GET", responseType: "blob" }),
    downloadBudgetSheet: () => request({ url: "/encourage-mission/mission_budget_sheet", method: "GET", responseType: "blob" })
});

export default m;
