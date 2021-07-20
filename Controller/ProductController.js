import Product from "../Model/Product.js";
import WarehouseService from "../Model/WarehouseService.js";
import ProductsLocalStorageService from "../Model/ProductsLocalStorageService.js";

export default class ProductController {
    #warehouseService;
    #productsLocalStorageService;

    constructor() {
        this.#warehouseService = new WarehouseService();
        this.#productsLocalStorageService = new ProductsLocalStorageService();
    }

    addProduct({name, price}) {
        const product = new Product(name, price).getProductJSON();
        this.#warehouseService.addProductToStore(product);

        const products = this.#warehouseService.getProducts();

        this.#productsLocalStorageService.setProductsToLocalStorage(products)

        console.log("recived new product")
    }
}