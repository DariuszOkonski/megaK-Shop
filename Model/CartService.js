export default class CartService {
    #products;
    constructor() {
        this.#products = []
    }

    addProductToCart(product) {
        this.#products.push(product)
    }

    getAllProductsFromCart() {
        return this.#products;
    }

    clearCart() {
        this.#products = [];
    }

}