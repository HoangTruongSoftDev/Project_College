
const WorkerDB = require("../datas/workerDB.js");
const Worker = require("../models/worker.js");

class WorkerController {
    static createWorker(firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resume, motivationLetter) {
        const worker = new Worker(firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resume, motivationLetter, new Date())
        return WorkerDB.create(worker);
    }
    static getWorkerList() {
        return WorkerDB.findAll();
    }
    static findWorkerByCreatedDate(startDate, endDate) {
        return WorkerDB.findByCreatedDate(startDate, endDate);
    }
    static findWorkerByBirthDate(startDate, endDate) {
        return WorkerDB.findByBirthDate(startDate, endDate);
    }
    
    static findWorkerByFirstName(keyword) {
        return WorkerDB.findByFirstName(keyword);
    }
    static findWorkerByLastName(keyword) {
        return WorkerDB.findByLastName(keyword);
    }
    static findWorkerByAddress(keyword) {
        return WorkerDB.findByAddress(keyword);
    }
    static findWorkerByPhoneNumber(keyword) {
        return WorkerDB.findByPhoneNumber(keyword);
    }
    static findWorkerByProfessionalDiplomas(keyword) {
        return WorkerDB.findByProfessionalDiplomas(keyword);
    }
    static findWorkerByProfessions(keyword) {
        return WorkerDB.findByProfessions(keyword);
    }
    static findWorkerById(workerId) {
        return WorkerDB.findById(workerId);
    }
    // ===========================================================
    static updateEmployer(employerId, companyName, address, phoneNumber, professionalActivities, EIMT, bills) {
        const employer = new Employer(companyName, address, phoneNumber, professionalActivities, EIMT, new Date(), bills);
        return EmployerDB.update(employerId, employer);
    }
    static deleteEmployer(employerId) {
        return EmployerDB.delete(employerId);
    }
    

}
module.exports = WorkerController;
