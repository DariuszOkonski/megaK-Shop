export default class DOMService {
    #shopContorller;
    #formAddProduct;
    #btnOrder;
    #allBtnBuy;
    #allBtnDrop;
    #inputProductName;
    #inputProductPrice;
    #ulProductsItems;
    #ulCartItems;

    constructor(shopController) {
        this.#shopContorller = shopController;
        this.#formAddProduct = document.querySelector('[data-admin-submit]');
        this.#btnOrder = document.querySelector('[data-cart-btn-order]');
        // this.#allBtnBuy = document.querySelectorAll('[data-product-btn-buy]')
        this.#allBtnDrop = document.querySelectorAll('[data-cart-btn-drop]')

        this.#inputProductName = document.querySelector('[data-admin-product-name]');
        this.#inputProductPrice = document.querySelector('[data-admin-product-price]');

        this.#ulProductsItems = document.querySelector('[data-products-items]');
        this.#ulCartItems = document.querySelector('[data-cart-items]');

        this.#addAllEventListeners();
    }

    #addAllEventListeners() {
        this.#formAddProduct.addEventListener('submit', this.#shopContorller.addProduct)

        this.#btnOrder.addEventListener('click', this.#shopContorller.makeOrder)

        this.#allBtnDrop.forEach(btn =>
            btn.addEventListener('click', this.#shopContorller.dropProduct));
    }

    renderProductsFromCart(products) {
        this.#ulCartItems.innerHTML = "";

        if(!products) {
            this.#ulCartItems.innerHTML = `<h2>Cart is empty</h2>`
            return;
        }

        products.forEach((product, index) => {
            console.log(product)
            const element = `
                <li data-cart-item>
                    <span data-cart-number>${index + 1}</span> - 
                    <span data-cart-product-name>${product.name}</span>
                    <span data-cart-price>${product.price}</span> zł
                <button data-id="${product.id}" data-cart-btn-drop>drop</button>
            </li>
            `
            this.#ulCartItems.innerHTML += element;
        })

    }

    renderAvailableProducts(products) {
        this.#ulProductsItems.innerHTML = "";

        if(products.length <= 0) {
            this.#ulProductsItems.innerHTML = `<h2>No Products in Store</h2>`;
            return;
        }

        products.forEach(product => {
            const element = `
                <li data-products-item>
                    <span data-product-name>${product.name}</span> -
                    <span data-product-price>${product.price}</span> zł
                    <button data-id="${product.id}" data-product-btn-buy>Buy!</button>
                </li>`;
            this.#ulProductsItems.innerHTML += element;
        })

        this.#allBtnBuy = document.querySelectorAll('[data-product-btn-buy]')
        this.#allBtnBuy.forEach(btn =>
            btn.addEventListener('click', this.#shopContorller.buyProduct));
    }

    getNewProductCredentials() {
        const name = this.#inputProductName.value;
        const price = this.#inputProductPrice.value;

        if(name === "" || price === "")
            return alert("Product name or price can not be empty")

        this.#inputProductName.value = "";
        this.#inputProductPrice.value = "";

        return {
            name: name,
            price: price
        }
    }


}