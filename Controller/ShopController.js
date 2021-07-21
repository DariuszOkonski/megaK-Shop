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

        const products = this.#cartController.getAllProductsFromCart()
        const totalCartValue = this.#cartController.getTotalAmountFromCart();
        this.#domService.renderProductsFromCart(products, totalCartValue);
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

        const products = this.#cartController.getAllProductsFromCart()
        const totalCartValue = this.#cartController.getTotalAmountFromCart();
        this.#domService.renderProductsFromCart(products, totalCartValue);

        alert('Total amount to pay: ' + totalAmountToPay);
    }

    buyProduct = (e) => {
        const {name, price} = this.#productController.getProductById(e.target.dataset.id);
        const product = this.#productController.getProduct(name, price)

        this.#cartController.addProductToCart(product)

        const products = this.#cartController.getAllProductsFromCart()
        const totalCartValue = this.#cartController.getTotalAmountFromCart();
        this.#domService.renderProductsFromCart(products, totalCartValue)
    }

    dropProduct = (e) => {

        this.#cartController.removeSingleProductFromCart(e.target.dataset.id);

        const products = this.#cartController.getAllProductsFromCart();
        const totalCartValue = this.#cartController.getTotalAmountFromCart();
        this.#domService.renderProductsFromCart(products, totalCartValue);
    }

    #updateAndRenderCart() {
        const products = this.#cartController.getAllProductsFromCart();
        const totalCartValue = this.#cartController.getTotalAmountFromCart();
        this.#domService.renderProductsFromCart(products, totalCartValue);
    }

    run() {
        // console.log(this.#domService)
    }
}

new ShopController().run()