// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
import { app, BrowserWindow, ipcMain, Menu } from 'electron';
// import { exec } from 'child_process';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    height: 800,
    width: 1500,
    minWidth: 1500,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, 
    //   preload: path.join(__dirname, 'preload.js'), 
    },
  });
win.loadURL("http://localhost:5173")
// win.loadFile(path.join(__dirname, "build", "index.html"));
//   win.webContents.openDevTools()
  Menu.setApplicationMenu(null)
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});