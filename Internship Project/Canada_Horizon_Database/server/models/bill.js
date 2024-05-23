class Bill {
    constructor(service, price, payment, createdDate) {
        this.service = service;
        this.price = price;
        this.payment = payment;
        this.createdDate = createdDate;
    }
    getServiceName() {
        return this.service;
    }
}
module.exports = Bill