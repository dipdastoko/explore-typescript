"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._milage = 100000;
    }
    getTotalMilage() {
        const readMilage = this._milage + 50000;
        return readMilage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyota', 450000);
const totalPrice = toyota.getTotalPrice(25);
