import moment from "moment";

const obj = {};
export default forms => {
    Object.keys(forms).map(item => {
        if (moment.isMoment(forms[item])) {
            obj[item] = moment(forms[item]).format("YYYY-MM-DD");
        } else {
            obj[item] = forms[item];
        }
    });
    return obj;
};
