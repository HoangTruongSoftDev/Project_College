
const EmployerDB = require("../datas/employerDB.js");
const Employer = require("../models/employer.js");

class EmployerController {
    static createEmployer(companyName, address, phoneNumber, professionalActivities, EIMT) {
        const employer = new Employer(companyName, address, phoneNumber, professionalActivities, EIMT, new Date());
        return EmployerDB.create(employer);
    }
    static updateEmployer(employerId, companyName, address, phoneNumber, professionalActivities, EIMT) {
        const employer = new Employer(companyName, address, phoneNumber, professionalActivities, EIMT, new Date());
        return EmployerDB.update(employerId, employer);
    }
    static deleteEmployer(employerId) {
        return EmployerDB.delete(employerId);
    }
    static findEmployerById(employerId) {
        return EmployerDB.findById(employerId);
    }
    static getEmployerList() {
        return EmployerDB.findAll();
    }
    static findEmployerByCompanyName(keyword) {
        return EmployerDB.findByCompanyName(keyword);
    }
    static findEmployerByAddress(keyword) {
        return EmployerDB.findByAddress(keyword);
    }
    static findEmployerByPhoneNumbner(keyword) {
        return EmployerDB.findByPhoneNumber(keyword);
    }
    static findEmployerByCreatedDate(startDate, endDate) {
        return EmployerDB.findByCreatedDate(startDate, endDate);
    }
}
module.exports = EmployerController;
