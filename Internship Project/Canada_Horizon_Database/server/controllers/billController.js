const Bill = require("../models/bill");

class BillController {
    static createBill(service, price, payment) {
        const bill = new Bill(service,price, payment, new Date());
        return bill;
    }
    
}

module.exports = BillController;