import {
    EMPTY_CART_INFO,
    FRACTION_DIGITS, NO_PRODUCT_IN_STROE_INFO,
    PRODUCT_INPUT_VALIDATION_INFO,
    TOTAL_PAY_INFO
} from "../Utilities/constants.js";

export default class DOMService {
    #shopController;
    #formAddProduct;
    #btnOrder;
    #allBtnBuy;
    #allBtnDrop;
    #inputProductName;
    #inputProductPrice;
    #ulProductsItems;
    #ulCartItems;
    #spanCartOrderAmount

    constructor(shopController) {
        this.#shopController = shopController;
        this.#formAddProduct = document.querySelector('[data-admin-submit]');
        this.#btnOrder = document.querySelector('[data-cart-btn-order]');

        this.#inputProductName = document.querySelector('[data-admin-product-name]');
        this.#inputProductPrice = document.querySelector('[data-admin-product-price]');

        this.#ulProductsItems = document.querySelector('[data-products-items]');
        this.#ulCartItems = document.querySelector('[data-cart-items]');
        this.#spanCartOrderAmount = document.querySelector('[data-cart-order-amount]')

        this.#addAllEventListeners();
    }

    #addAllEventListeners() {
        this.#formAddProduct.addEventListener('submit', this.#shopController.addProduct)

        this.#btnOrder.addEventListener('click', this.#shopController.makeOrder)
    }

    renderProductsFromCart(products, totalCartValue = 0) {
        this.#ulCartItems.innerHTML = "";

        this.#btnOrder.setAttribute('disabled', 'true')
        this.#spanCartOrderAmount.innerText = `${totalCartValue.toFixed(FRACTION_DIGITS)}`;

        if(products.length <= 0) {
            this.#ulCartItems.innerHTML = `
                <div class="alert alert-danger text-center" role="alert">
                    <h5>${EMPTY_CART_INFO}</h5>
                </div>
            `
            return;
        }

        if(products.length > 0) {
            this.#btnOrder.removeAttribute('disabled')
        }

        products.forEach((product, index) => {
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

        this.#mountButtonsDrop();
    }

    renderAvailableProducts(products) {
        this.#ulProductsItems.innerHTML = "";

        if(products.length <= 0) {
            this.#ulProductsItems.innerHTML = `
                <div class="alert alert-danger text-center" role="alert">
                    <h5>${NO_PRODUCT_IN_STROE_INFO}</h5>
                </div>
            `;
            return;
        }

        products.forEach(product => {
            const element = `
                <li data-products-item class="d-flex justify-content-between m-2">
                    <div class="d-flex align-items-center">
                        <span data-product-name>${product.name}</span> -
                        <span data-product-price>${Number(product.price).toFixed(FRACTION_DIGITS)}</span> zł                    
                    </div>
                    <button data-id="${product.id}" data-product-btn-buy class="btn btn-success btn-sm">Buy!</button>
                </li>`;
            this.#ulProductsItems.innerHTML += element;
        })

        this.#mountButtonsBuy();
    }

    totalAmountToPay(totalAmountToPay) {
        return alert(`${TOTAL_PAY_INFO} ${totalAmountToPay.toFixed(FRACTION_DIGITS)}`);
    }


    getNewProductCredentials() {
        const name = this.#inputProductName.value;
        const price = this.#inputProductPrice.value;

        if(name === "" || price === "")
            return alert(`${PRODUCT_INPUT_VALIDATION_INFO}`)

        this.#inputProductName.value = "";
        this.#inputProductPrice.value = "";

        return {
            name: name.toLowerCase(),
            price: price.toLowerCase()
        }
    }

    #mountButtonsBuy() {
        this.#allBtnBuy = document.querySelectorAll('[data-product-btn-buy]')
        this.#allBtnBuy.forEach(btn =>
            btn.addEventListener('click', this.#shopController.buyProduct));
    }

    #mountButtonsDrop() {
        this.#allBtnDrop = document.querySelectorAll('[data-cart-btn-drop]')
        this.#allBtnDrop.forEach(btn =>
            btn.addEventListener('click', this.#shopController.dropProduct));
    }
}