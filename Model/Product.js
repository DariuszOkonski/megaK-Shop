import {createUniqueID} from "../Utilities/utilities.js";

export default class Product {
    #id;
    #name;
    #price;
    constructor(name, price) {
        this.#id = createUniqueID()
        this.#name = name;
        this.#price = price;
    }

    setId(id) {
        this.#id = id;
    }

    getProductJSON() {
        return {
            id: this.#id,
            name: this.#name,
            price: this.#price
        }
    }
}