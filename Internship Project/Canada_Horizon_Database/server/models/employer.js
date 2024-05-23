class Employer {
    constructor(companyName, address, phoneNumber, professionalActivities, EIMT , createdDate) {
        this.companyName = companyName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.professionalActivities = professionalActivities;
        this.EIMT = EIMT;
        this.createdDate = createdDate;
    }
    getCompanyName() {
        return this.companyName;
    }
}
module.exports = Employer
