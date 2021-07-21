import CartService from "../Model/CartService.js";

export default class CartController {
    #cartService;
    constructor() {
        this.#cartService = new CartService();
    }

    addProductToCart(product) {
        this.#cartService.addProductToCart(product);
    }

    getAllProductsFromCart() {
        return this.#cartService.getAllProductsFromCart()
    }

    clearCart() {
        this.#cartService.clearCart();
    }

    getTotalAmountFromCart() {
        return this.#cartService.getTotalAmountFromCart();
    }

    removeSingleProductFromCart(id) {
        this.#cartService.removeSingleProductFromCart(id)
    }


}