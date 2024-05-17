const { contextBridge, ipcMain } = require('electron');
const  AdminController  = require('./controllers/adminController.js');

async function getAdminListFromDB() {
    AdminController.getAdminList()
};  

contextBridge.exposeInMainWorld("api", {
    getAdminListFromDB
});
