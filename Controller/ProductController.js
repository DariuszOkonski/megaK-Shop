import Product from "../Model/Product.js";

export default class ProductController {
    constructor() {
        this.products = []
    }

    getNewProduct({name, price}) {
        const product = new Product(name, price)
        this.products.push(product.getProductJSON())
        console.log(this.products)
        console.log("recived new product")
    }
}