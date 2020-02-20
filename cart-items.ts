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