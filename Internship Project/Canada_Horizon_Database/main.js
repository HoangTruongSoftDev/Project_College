const { app, BrowserWindow } = require('electron')
const path = require("path");
const { contextBridge, ipcMain } = require('electron');
const { AdminController } = require('./server/controllers/adminController');


async function getAdminListFromDB() {
  try {
    // Assuming getAdminList returns a Promise resolving to the admin list
    const adminList = await AdminController.getAdminList();
    return adminList;
  } catch (error) {
    console.error("Error fetching admin list:", error);
    return []; // Return empty array or handle error accordingly
  }
}


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // You may need to set this to true if it's not already set
      enableRemoteModule: true,
      contextIsolation: true,
    }
  })
  win.loadFile('public/index.html')
}
contextBridge.exposeInMainWorld("api", {
  getAdminListFromDB
});
app.whenReady().then(() => {
 
  createWindow();
})
// app.whenReady().then(() => {
//   createWindow()
// })
