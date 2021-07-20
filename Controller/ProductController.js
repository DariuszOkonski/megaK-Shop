import Product from "../Model/Product.js";
import ProductsStoreService from "../Model/ProductsStoreService.js";

export default class ProductController {
    #storeService;

    constructor() {
        this.#storeService = new ProductsStoreService();
    }

    addProduct({name, price}) {
        const product = new Product(name, price).getProductJSON();
        this.#storeService.addProductToStore(product);

        const products = this.#storeService.getProducts();

        console.log(products)
        console.log("recived new product")
    }
}