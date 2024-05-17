const  AdminDB  = require("../datas/adminDB.js");
const   Admin  = require("../models/admin.js");

class AdminController {
    static createAdmin(firstName, lastName, email, password) {
        const admin = new Admin(firstName, lastName, email, new Date(), password);
        AdminDB.create(admin);
    }
    static getAdminList() {
        return AdminDB.findAll();
    }
    static findAdminByFName(keyword) {
        return AdminDB.findByFName(keyword);
    }
    static findAdminByLName(keyword) {
        return AdminDB.findByLName(keyword);
    }
    static findAdminByEmail(keyword) {
        return AdminDB.findByEmail(keyword);
    }
    static findAdminByCreatedDate(startDate, endDate) {
        return AdminDB.findByCreatedDate(startDate, endDate);
    }
}
module.exports = AdminController;
