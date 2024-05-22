const path = require("path");
const { app, BrowserWindow } = require('electron');
require('./server/server.js');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // removeMenu: true,
    // autoHideMenuBar: true,
    minimizable: false, // Disable the minimize option
    webPreferences: {
      nodeIntegration: false, 
      enableRemoteModule: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'server', 'preload.js')
    }
  })
  win.maximize();
  win.loadFile(path.join(__dirname, 'public', 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }});

app.on('activate', () => {    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});




