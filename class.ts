class Car {
    model: string;
    price: number;
    private _milage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._milage = 100000;
    }
    getTotalMilage(): number {
        const readMilage = this._milage + 50000;
        return readMilage;
    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}

const toyota = new Car('toyota', 450000);
const totalPrice: number = toyota.getTotalPrice(25);