'use strict';
const url = require('url');
const path = require('path');
const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');

let mainWindow = null;

initApp(mainWindow, configWindow, setUpSubcribeChannels);

// Control your application’s event lifecycle.
function initApp(mWindow, windowCallback, channelsCallback) {
    app.on('ready', () => {
        windowCallback(mWindow, registerGlobalShortcuts);
        channelsCallback();
    });
    app.on('window-all-closed', () => {
        app.quit();
    });
    app.on('activate', () => {
        if (mwindow === null) {
            windowCallback(mwindow);
        }
    });
}

// Create and control browser windows.
function configWindow(window, shortcutsCallback) {
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
    // wait until when rendered process has done
    window.once('ready-to-show', () => {
        window.show();
    });
    window.webContents.on('did-finish-load', () => {
        shortcutsCallback(window.webContents);
    });
    // open DevTools
    // window.webContents.openDevTools();

    // Emmited when the window is closed.
    window.on('closed', () => {
        window = null;
    });
}

function setUpSubcribeChannels() {
    ipcMain.on('close-main-window', (event, arg) => {
        console.log(arg);
        app.quit();
    });
    ipcMain.on('open-setting-window', (event, arg) => {
        console.log(arg);
    });
}

function registerGlobalShortcuts(contents) {
    globalShortcut.register('CommandOrControl+1', () => {
        contents.send('globalShortcut', { msg: "asdnasd" });
        console.log("1");
    });
    globalShortcut.register('CommandOrControl+2', () => {
        contents.send('globalShortcut', { msg: "asdnasd" });
        console.log("2");
    });
}