// import { AdminDB } from "../datas/adminDB.js";
// import { Admin } from "../models/Admin.js";


const  AdminDB  = require("../datas/adminDB.js");
const  Admin  = require("../models/Admin.js");

class AdminController {
    static createAdmin(firstName, lastName, email, password) {
        
        const admin = new Admin(firstName, lastName, email, Date.now(), password);
        AdminDB.create(admin);
    }
    static getAdminList() {
        return AdminDB.findAll();
    }
    static findAdminByFilter(type, keywordOrStartDate, endDate) {
        return AdminDB.find(type, keywordOrStartDate, endDate);
    }
}

module.exports = AdminController;
