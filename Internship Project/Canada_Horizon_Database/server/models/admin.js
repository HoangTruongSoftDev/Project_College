class Admin {
    constructor(firstName, lastName, email, createdDate, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.createdDate = createdDate;
        this.password = password;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
module.exports = Admin
