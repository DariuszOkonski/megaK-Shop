export default class WarehouseService {
    #products;
    constructor(products) {
        this.#products = products;
    }

    addProductToStore(product) {
        this.#products.push(product);
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        return this.#products.find(product => product.id === id);
    }
}