import DOMService from "../View/DOMService.js";
import ProductService from "../View/ProductService.js";

class ShopController {
    constructor() {
        this.domService = new DOMService(this)
    }

    addProduct = (e) => {
        e.preventDefault();

        console.log('ShopContorller: addProduct')

        const newProduct = this.domService.getNewProductCredentials()
        console.log(newProduct)
    }

    makeOrder() {
        console.log('ShopController: makeOrder')
    }

    buyProduct(e) {
        console.log('ShopController: buyProduct')
    }

    dropProduct(e) {
        console.log("dropProduct: " + e.target.dataset.id)
    }

    run() {
        console.log(this.domService)
    }
}

new ShopController().run()