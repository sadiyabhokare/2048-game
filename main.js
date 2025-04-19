import { app, BrowserWindow, screen } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 660,
    height: 650,
    minWidth: 600,
    minHeight: 700,
    resizable: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'www', 'images', '2048.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Make window fullscreen
  win.maximize();

  // Load index.html from the www folder
  win.loadFile(path.join(__dirname, 'www', 'index.html'));

  // Send window resize event to the renderer process
  win.on('resize', () => {
    const [width, height] = win.getSize();
    win.webContents.send('window-resized', { width, height });
  });

  // Handle restore/unmaximize
  win.on('unmaximize', () => {
    win.setSize(600, 650); // Set to minimum dimensions when restored
    const [width, height] = win.getSize();
    win.webContents.send('window-resized', { width, height });
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS, it's common to re-create a window if none are open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed (except on macOS).
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

