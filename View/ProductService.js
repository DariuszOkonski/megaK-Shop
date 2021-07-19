import {createUniqueID} from "../Utilities/utilities.js";

export default class ProductService {
    constructor(name, price) {
        this.id = createUniqueID()
        this.name = name;
        this.price = price;
    }

    getProductJSON() {
        return {
            id: this.id,
            name: this.name,
            price: this.price
        }
    }
}