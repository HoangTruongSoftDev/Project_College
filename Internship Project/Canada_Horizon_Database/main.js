const path = require("path");
const { app, BrowserWindow } = require('electron');
require('./server/server.js');
const fs = require('fs');

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
      preload: path.join(__dirname,'..','..','..','..', 'server', 'preload.js')
    }
  })
  win.maximize();
  // win.loadFile(path.join(__dirname, 'public', 'index.html'));
  win.loadFile(path.join(__dirname, 'public', 'testing', 'testingPage.html'));

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



app.on('will-quit', (event) => {
  const removeFilePath = path.join(__dirname, 'observation');
  event.preventDefault(); // Prevent the app from quitting immediately

  console.log(`Attempting to delete directory: ${removeFilePath}`);

  try {
    if (fs.existsSync(removeFilePath)) {
      // Attempt to remove the directory synchronously
      fs.rmSync(removeFilePath, { recursive: true, force: true });
      console.log(`${removeFilePath} is deleted!`);
    } else {
      console.log(`Directory does not exist: ${removeFilePath}`);
    }
  } catch (err) {
    console.error(`Error while deleting ${removeFilePath}.`, err);
  }

  // Now allow the app to quit
  app.quit();
});





