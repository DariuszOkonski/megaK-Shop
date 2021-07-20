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

    getTotalAmountFromCart() {
        return this.#products.reduce((acc, curr) => acc += curr.price, 0);
    }
}