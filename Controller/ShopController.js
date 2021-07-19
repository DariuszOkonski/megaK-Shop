import DOMService from "../View/DOMService.js";

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
        console.log("buyProduct: " + e.target.dataset.id)
    }

    dropProduct(e) {
        console.log("dropProduct: " + e.target.dataset.id)
    }

    run() {
        console.log(this.domService)
    }
}

new ShopController().run()