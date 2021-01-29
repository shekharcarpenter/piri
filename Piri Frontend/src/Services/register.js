import API from "./API";

class RegisterApi {
    static url = "register";

    static registerUser(payload) {
        const api = new API(`${this.url}`);
        return api.post(payload)
    }

}

export default RegisterApi;
