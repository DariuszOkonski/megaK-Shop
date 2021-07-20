export default class WarehouseService {
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