export default class DOMService {
    constructor(shopController) {
        this.shopContorller = shopController;
        this.btnAddProduct = document.querySelector('[data-admin-btn-add]');
        this.btnOrder = document.querySelector('[data-cart-btn-order]');
        this.allBtnBuy = document.querySelectorAll('[data-product-btn-buy]')
        this.allBtnDrop = document.querySelectorAll('[data-cart-btn-drop]')
        this.addAllEventListeners();
    }

    addAllEventListeners() {
        this.btnAddProduct.addEventListener('click', this.shopContorller.addProduct)
        this.btnOrder.addEventListener('click', this.shopContorller.makeOrder)

        this.allBtnBuy.forEach(btn =>
            btn.addEventListener('click', this.shopContorller.buyProduct));

        this.allBtnDrop.forEach(btn =>
            btn.addEventListener('click', this.shopContorller.dropProduct));
    }

}