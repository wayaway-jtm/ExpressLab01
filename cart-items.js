"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItem {
    constructor(newId, productName, newPrice, newQuantity) {
        this._id = newId;
        this._product = productName;
        this._price = newPrice;
        this._quantity = newQuantity;
    }
    get quantity() {
        return this._quantity;
    }
    get price() {
        return this._price;
    }
    get product() {
        return this._product;
    }
    get id() {
        return this._id;
    }
    toString() {
        return `${this.product}(ID: ${this._id}) - $${this.price} (${this.quantity} in stock)`;
    }
}
exports.CartItem = CartItem;
class Cart {
    constructor() {
        this._items = [
            new CartItem(0, "Juicebox", 1, 54),
            new CartItem(1, "Soda(can)", 1.25, 43),
            new CartItem(2, "Soda(bottle)", 1.75, 37),
            new CartItem(3, "Banana", 1, 14),
            new CartItem(4, "Apple", 0.75, 19),
            new CartItem(5, "Milk(bottle)", 1.50, 32),
            new CartItem(6, "Pizza(whole)", 10, 23),
            new CartItem(7, "Pizza(slice)", 1.75, 65),
            new CartItem(8, "Tea(unsweetened)", 1.25, 22),
            new CartItem(9, "Tea(sweet)", 1.25, 25),
            new CartItem(10, "Donut", 0.99, 35)
        ];
    }
    get items() {
        return this._items;
    }
    getItem(itemId) {
        if (itemId > 0 &&
            itemId < this._items.length - 1) {
            return this._items.find(x => x.id === itemId);
        }
        else {
            return undefined;
        }
    }
    addItem(itemName, itemPrice, itemQuantity) {
        this._items.push(new CartItem(this._items.length, itemName, itemPrice, itemQuantity));
    }
}
exports.Cart = Cart;
