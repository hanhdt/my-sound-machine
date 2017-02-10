'use strict';
const url = require('url');
const path = require('path');
let { app, BrowserWindow } = require('electron');
let mainWindow = null;

initApp(mainWindow, configWindow);

// Control your application’s event lifecycle.
function initApp(mwindow, callback) {
    app.on('ready', function() {
        callback(mwindow);
    });
    app.on('window-all-closed', () => {
        app.quit();
    });
    app.on('activate', () => {
        if (mwindow === null) {
            callback(mwindow);
        }
    });
}

// Create and control browser windows.
function configWindow(window) {
    window = new BrowserWindow({
        frame: false,
        height: 700,
        width: 368,
        backgroundColor: '#2e2c29',
        show: false,
        resizable: false
    });
    // Load local html file to browser window
    window.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file',
        slashes: true
    }));
    // wait untill when rendered process has done
    window.once('ready-to-show', () => {
        window.show();
    });
    // open DevTools
    // window.webContents.openDevTools();

    // Emmited when the window is closed.
    window.on('closed', () => {
        window = null;
    });
}