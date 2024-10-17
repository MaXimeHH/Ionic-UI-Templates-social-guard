const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Assurez-vous que contextIsolation est activé
      enableRemoteModule: false // Désactivez les modules distants pour des raisons de sécurité
    }
  });

  win.loadURL('http://localhost:4200'); // URL de votre application Angular
}

app.on('ready', createWindow);

ipcMain.on('launch-electron-app', (event, arg) => {
  console.log('Lancement de l\'application Electron avec l\'argument:', arg);
  // Ajoutez ici le code pour lancer l'application
});

ipcMain.on('go-to-points-page', (event) => {
  console.log('Naviguer vers la page des points');
  // Ajoutez ici le code pour naviguer vers la page des points
});

ipcMain.on('go-back-to-twitter', (event) => {
  console.log('Retour à Twitter');
  // Ajoutez ici le code pour retourner à Twitter
});
