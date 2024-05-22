const { ObjectId } = require("mongodb");
const AdminDB = require("../../server/datas/adminDB");
async function findAllAdmins() {
    let admins = await AdminDB.findAll();
    let truong = await AdminDB.findById(admins[0]._id);
    console.log('Truong: ' + truong._id);
}
async function truong1() {
    let truong = await AdminDB.findById('6647ba4128e74e5b0fd9807e');
    console.log('Truong ' + truong._id);
}
findAllAdmins();