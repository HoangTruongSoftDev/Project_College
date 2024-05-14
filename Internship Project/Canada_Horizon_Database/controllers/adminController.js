const AdminDatabase = require("../datas/adminDB");
const Admin = require("../models/Admin");

class AdminController {
    static createAdmin(firstName, lastName, email, password) {
        let admin = new Admin(firstName, lastName, email, Date.now(), password);
        AdminDatabase.create(admin);
    }
    static getAdminList() {
        return AdminDatabase.findAll();
    }
    static findAdminByFilter(type, keywordOrStartDate, endDate) {
        return AdminDatabase.find(type, keywordOrStartDate, endDate);
    }
}
module.exports = AdminController;