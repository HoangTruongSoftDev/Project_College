class Employer {
    constructor(companyName, address, phoneNumber, professionalActivities, EIMT, createdDate, bills) {
        this.companyName = companyName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.professionalActivities = professionalActivities;
        this.EIMT = EIMT;
        this.createdDate = createdDate;
        this.bills = bills;
    }
    getCompanyName() {
        return this.companyName;
    }
}
module.exports = Employer
