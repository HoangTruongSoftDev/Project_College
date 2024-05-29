class Worker {
    constructor(firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resume, motivationLetter, createdDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.professionalDiplomas = professionalDiplomas;
        this.professions = professions;
        this.bills = bills;
        this.resume = resume;
        this.motivationLetter = motivationLetter;
        this.createdDate = createdDate;
    }
    getFirstName() {
        return this.firstName;
    }
}
module.exports = Worker