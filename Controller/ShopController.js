import DOMService from "../View/DOMService.js";
import ProductController from "./ProductController.js";
import CartController from "./CartController.js";
import LoginController from "./LoginController.js";

class ShopController {
    #domService;
    #productController;
    #cartController;
    #loginController;

    constructor() {
        this.#domService = new DOMService(this)
        this.#productController = new ProductController();
        this.#cartController = new CartController();
        this.#loginController = new LoginController();
        this.#render();
    }

    #render() {
        const newProduct = this.#productController.getProductsFromLocalStorage();
        this.#domService.renderAvailableProducts(newProduct);

        const cartProducts = this.#cartController.getAllProductsFromCart();
        const totalCartValue = this.#cartController.getTotalAmountFromCart();
        this.#domService.renderProductsFromCart(cartProducts, totalCartValue);
    }

    tryToLogIn = (e) => {
        e.preventDefault();
        const password = this.#domService.getPassword();
        const response = this.#loginController.login(password);

        this.#domService.tryToLogIn(response);
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

alert('Admin password: admin123')
new ShopController();