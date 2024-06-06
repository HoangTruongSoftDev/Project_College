class ConfigDB {
    // Setting of the database and collection
    static url = 'mongodb://localhost:27017';
    static dbName = 'db_CanadaHorizon';
    static adminCollection = "admins";
    static employerCollection = "employers";
    static workerCollection = "workers"

}
module.exports = ConfigDB;