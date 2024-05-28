
const WorkerDB = require("../datas/workerDB.js");
const Worker = require("../models/worker.js");

class WorkerController {
    static createWorker(firstName, lastName, birthDate, address, phoneNumber, professionalDiplomass, professions, bills, resume, motivationLetter) {
        const worker = new Worker(firstName, lastName, birthDate, address, phoneNumber, professionalDiplomass, professions, bills, resume, motivationLetter, new Date())
        return WorkerDB.create(worker);
    }
    static updateEmployer(employerId, companyName, address, phoneNumber, professionalActivities, EIMT, bills) {
        const employer = new Employer(companyName, address, phoneNumber, professionalActivities, EIMT, new Date(), bills);
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
    static findEmployerByPhoneNumber(keyword) {
        return EmployerDB.findByPhoneNumber(keyword);
    }
    static findEmployerByProfessionalActivities(keyword) {
        return EmployerDB.findByProfessionalActivities(keyword);
    }
    static findEmployerByEIMT(keyword) {
        return EmployerDB.findByEIMT(keyword);
    }
    static findEmployerByCreatedDate(startDate, endDate) {
        return EmployerDB.findByCreatedDate(startDate, endDate);
    }
}
module.exports = WorkerController;
