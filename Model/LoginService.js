import {PASSWORD} from "../Utilities/constants.js";

export default class LoginService {
    #password;
    constructor() {
        this.#password = PASSWORD
    }

    login(password) {
        return password === this.#password;
    }
}