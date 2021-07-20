import {PRODUCTS} from "../Utilities/constants.js";

export default class ProductsLocalStorageService {
    setProductsToLocalStorage(products) {
        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }

    getProductsFromLocalStorage() {
        const products = localStorage.getItem(PRODUCTS);

        if(!products)
            return[];

        return JSON.parse(products);
    }
}