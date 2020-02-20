class CartItem {
    private _id: number;
    private _product: string;
    private _price: number;
    private _quantity: number;

    constructor(newId: number, productName: string,
        newPrice: number, newQuantity: number) {
        this._id = newId;
        this._product = productName;
        this._price = newPrice;
        this._quantity = newQuantity;
    }


    public get quantity(): number {
        return this._quantity
    }


    public get price(): number {
        return this._price
    }


    public get product(): string {
        return this._product
    }


    public get id(): number {
        return this._id
    }

    toString(): string {
        return `${this.product}(ID: ${this._id}) - $${this.price} (${this.quantity} in stock)`;
    }
}

class Cart {
    private _items: CartItem[] = [
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

    public get items(): CartItem[] {
        return this._items
    }

    public getItem(itemId: number): CartItem|undefined {
        if (itemId > 0 &&
            itemId < this._items.length - 1) {
            return this._items.find(x => x.id === itemId);
        } else {
            return undefined;
        }
    }

    public addItem(itemName: string, itemPrice: number, itemQuantity: number) {
        this._items.push(new CartItem(this._items.length, itemName, itemPrice, itemQuantity));
    }
}

export { CartItem, Cart };