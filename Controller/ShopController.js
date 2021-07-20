import DOMService from "../View/DOMService.js";
import ProductController from "./ProductController.js";

class ShopController {
    constructor() {
        this.domService = new DOMService(this)
        this.productController = new ProductController();

        console.log(this.domService)
    }

    addProduct = (e) => {
        e.preventDefault();
        // console.log('ShopContorller: addProduct')
        const newProduct = this.domService.getNewProductCredentials()

        if(newProduct === undefined)
            return;

        // console.log(newProduct)

        this.productController.getNewProduct(newProduct);

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