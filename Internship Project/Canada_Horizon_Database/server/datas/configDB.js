class ConfigDB {
    // Setting of the database and collection
    static url = 'mongodb://localhost:27017';
    static dbName = 'db_CanadaHorizon';
    static adminCollection = "Admins";
}
module.exports = ConfigDB;