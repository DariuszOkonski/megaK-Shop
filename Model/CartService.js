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
        return this.#products.reduce((acc, curr) => acc += Number(curr.price), 0);
    }

    removeSingleProductFromCart(id) {
        const products = this.#products.filter(product => product.id != id);
        this.#products = products;
    }
}