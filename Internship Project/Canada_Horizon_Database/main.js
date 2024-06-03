const path = require("path");
const { app, BrowserWindow } = require('electron');
require('./server/server.js');
const fs = require('fs');
const { spawn } = require('child_process');

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
      webSecurity: false,
      preload: path.join(__dirname, '..', '..', '..', '..', 'server', 'preload.js')
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
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


app.on('will-quit', () => {
  const removeFilePath = path.join(__dirname, '..', '..','..', '..', 'observation');

  const cmd = `cmd /c rd /s /q "${removeFilePath}"`; // Adjust command for your OS
  const process = spawn(cmd, { shell: true, stdio: 'ignore', detached: true });
  process.unref();
});


