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
        console.log('render-shop controller')

        const products = this.#productController.getProductsFromLocalStorage();
        this.#domService.renderAvailableProducts(products);
    }

    addProduct = (e) => {
        e.preventDefault();
        const newProduct = this.#domService.getNewProductCredentials()

        if(newProduct === undefined)
            return;

        this.#productController.addProduct(newProduct);

        this.#render()
    }

    makeOrder() {
        console.log('ShopController: makeOrder')
    }

    buyProduct = (e) => {
        console.log('ShopController: buyProduct')

        const {name, price} = this.#productController.getProductById(e.target.dataset.id);
        const product = this.#productController.getProduct(name, price)

        this.#cartController.addProductToCart(product)

        const products = this.#cartController.getAllProductsFromCart()

        // TODO: send products from cart to DOMService
        this.#domService.renderProductsFromCart(products)
    }

    dropProduct(e) {
        console.log("dropProduct: " + e.target.dataset.id)
    }

    run() {
        console.log(this.#domService)
    }
}

new ShopController().run()