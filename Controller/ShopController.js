import DOMService from "../View/DOMService.js";
import ProductController from "./ProductController.js";
import CartController from "./CartController.js";

class ShopController {
    #domService;
    #productController;
    #cartController;

    constructor() {
        this.#domService = new DOMService(this)
        this.#productController = new ProductController();
        this.#cartController = new CartController();
        this.#render();
    }

    #render() {
        const newProduct = this.#productController.getProductsFromLocalStorage();
        this.#domService.renderAvailableProducts(newProduct);

        const cartProducts = this.#cartController.getAllProductsFromCart();
        const totalCartValue = this.#cartController.getTotalAmountFromCart();
        this.#domService.renderProductsFromCart(cartProducts, totalCartValue);
    }

    addProduct = (e) => {
        e.preventDefault();
        const newProduct = this.#domService.getNewProductCredentials()

        if(newProduct === undefined)
            return;

        this.#productController.addProduct(newProduct);

        this.#render()
    }

    makeOrder = () => {
        const totalAmountToPay = this.#cartController.getTotalAmountFromCart();

        this.#cartController.clearCart();

        this.#render();

        this.#domService.totalAmountToPay(totalAmountToPay);
    }

    buyProduct = (e) => {
        const {name, price} = this.#productController.getProductById(e.target.dataset.id);
        const product = this.#productController.getProduct(name, price)

        this.#cartController.addProductToCart(product)

        this.#render()
    }

    dropProduct = (e) => {

        this.#cartController.removeSingleProductFromCart(e.target.dataset.id);

        this.#render();
    }
}

new ShopController();