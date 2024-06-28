class Employer {
    constructor(companyName, address, phoneNumber, professionalActivities, EIMT, createdDate, bills, information) {
        this.companyName = companyName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.professionalActivities = professionalActivities;
        this.EIMT = EIMT;
        this.createdDate = createdDate;
        this.bills = bills;
        this.information = information
    }
    getCompanyName() {
        return this.companyName;
    }
}
module.exports = Employer
