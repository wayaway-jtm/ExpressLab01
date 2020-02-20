class CartItem {
    id;
    product;
    price;
    quantity;

    constructor(newId, productName,
        newPrice, newQuantity) {
        this.id = newId;
        this.product = productName;
        this.price = newPrice;
        this.quantity = newQuantity;
    }


    get quantity() {
        return this.quantity
    }


    get price() {
        return this.price
    }


    get product() {
        return this.product
    }


    get id() {
        return this.id
    }

    toString() {
        return `${this.product}(ID: ${this.id}) - $${this.price} (${this.quantity} in stock)`;
    }
}

class Cart {
    _items = [
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

    get items() {
        return this._items
    }

    getItem(itemId) {
        if (itemId > 0 &&
            itemId < this._items.length) {
            console.log(this._items.find(x => x.id == itemId));
            return this._items.find(x => x.id == itemId);
        } else {
            return undefined;
        }
    }

    addItem(itemName, itemPrice, itemQuantity) {
        if (!(typeof this._items[this._items.length] === undefined)) {
            this._items.push(new CartItem(this._items.length, itemName, itemPrice, itemQuantity));
        } else {
            
        }
    }
}

export {
    CartItem,
    Cart
};