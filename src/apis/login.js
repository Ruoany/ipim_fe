import axios from "axios";
export const Login = async () => {
    const {
        data: { data }
    } = await axios({
        url:
            "/api/swagger/login?loginUrl=http%3A%2F%2F127.0.0.1%3A9196%2Flogin&password=123456&saveLogin=true&username=test",
        method: "GET"
    });
    sessionStorage.setItem("token", JSON.parse(data).data.token);
};
