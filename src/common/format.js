import moment from "moment";

export const formatMoment = (forms) => {
    let obj = {};
    Object.keys(forms).map((item) => {
        const par = forms[item];
        const isDate =
            moment(par, "YYYY-MM-DD", true).unix() > 0 || moment(par, "YYYY-MM-DD HH:mm:ss", true).unix() > 0;
        if (isDate) {
            obj[item] = moment(par);
        } else {
            obj[item] = par;
        }
    });
    return obj;
};
export const formatString = (forms) => {
    let obj = {};
    Object.keys(forms).map((item) => {
        if (moment.isMoment(forms[item])) {
            if (item === "createAt" || item === "updateAt" || item === "applyTime") {
                obj[item] = moment(forms[item]).format("YYYY-MM-DD HH:mm:ss");
            } else {
                obj[item] = moment(forms[item]).format("YYYY-MM-DD");
            }
        } else {
            obj[item] = forms[item];
        }
    });
    return obj;
};
