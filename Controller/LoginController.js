import LoginService from "../Model/LoginService.js";

export default class LoginController {
    #loginService;
    constructor() {
        this.#loginService = new LoginService();
    }

    login(password) {
        return this.#loginService.login(password);
    }
}