import DOMService from "../View/DOMService.js";
import ProductService from "../View/ProductService.js";

class ShopController {
    constructor() {
        this.domService = new DOMService(this)
    }

    addProduct(e) {
        e.preventDefault();


        console.log('ShopContorller: addProduct')
    }

    makeOrder() {
        console.log('ShopController: makeOrder')
    }

    buyProduct(e) {

    }

    dropProduct(e) {
        console.log("dropProduct: " + e.target.dataset.id)
    }

    run() {
        console.log(this.domService)
    }
}

new ShopController().run()