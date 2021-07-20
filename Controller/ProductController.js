import Product from "../Model/Product.js";
import StoreService from "../Model/StoreService.js";

export default class ProductController {
    #storeService;

    constructor() {
        this.#storeService = new StoreService();
    }

    addProduct({name, price}) {
        const product = new Product(name, price).getProductJSON();
        this.#storeService.addProductToStore(product);

        const products = this.#storeService.getProducts();

        console.log(products)
        console.log("recived new product")
    }
}