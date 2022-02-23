const { app, BrowserWindow, Menu } = require('electron');

let winMain;

function createWindow() {
    app.allowRendererProcessReuse = false;

    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
        icon: './icon.ico'
    });

    win.loadURL('http://localhost:3000/');
    win.maximize();
    Menu.setApplicationMenu(null);
    winMain = win;
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
});
app.on('browser-window-focus', () => {
    winMain = BrowserWindow.getFocusedWindow();
})
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0) createWindow();
});
