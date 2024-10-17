const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  goBackToTwitter: () => ipcRenderer.send('go-back-to-twitter'),
  getPoints: (callback) => ipcRenderer.once('points', (event, points) => callback(points))
});
