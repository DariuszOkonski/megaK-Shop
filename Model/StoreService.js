export default class StoreService {
    #products;
    constructor() {
        this.#products = [];
    }

    addProductToStore(product) {
        this.#products.push(product);
    }

    getProducts() {
        return this.#products;
    }
}