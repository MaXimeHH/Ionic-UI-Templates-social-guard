import { app, BrowserWindow, ipcMain, globalShortcut } from 'electron';
import * as path from 'path';

let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      devTools: true
    },
  });

  win.loadURL('https://twitter.com');

  win.on('closed', () => {
    win = null;
  });
}

// Gérer l'événement pour lancer Electron
ipcMain.on('launch-electron-app', (event, arg) => {
  console.log("Lancement de l'application Electron avec", arg);
  // Vous pouvez ouvrir une nouvelle fenêtre ou exécuter une action ici
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Gérer la redirection vers la page des points
ipcMain.on('go-to-points-page', () => {
  if (win) {
    win.loadFile(path.join(__dirname, 'points.html'));  // Charger la page des points
  }
});

ipcMain.on('go-back-to-twitter', () => {
  if (win) {
    win.loadURL('https://twitter.com');  // Recharger Twitter
  }
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

// Ajouter un raccourci pour ouvrir la page des points
app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+P', () => {
    if (win) {
      win.loadFile(path.join(__dirname, 'points.html'));  // Charger la page des points
    }
  });
});
