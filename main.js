'use strict';
const url = require('url');
const path = require('path');
const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');

let mainWindow = null;
let settingsWindow = null;

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
        app.quit();
    });
    ipcMain.on('open-settings-window', (event, arg) => {
        if (settingsWindow) {
            return;
        }

        settingsWindow = new BrowserWindow({
            frame: false,
            height: 200,
            resizable: true,
            width: 200
        });

        // settingsWindow.webContents.openDevTools();

        settingsWindow.loadURL(url.format({
            pathname: path.join(__dirname, '/app/settings.html'),
            protocol: 'file',
            slashes: true
        }));

        settingsWindow.on('closed', () => {
            settingsWindow = null;
        });
    });
    ipcMain.on('close-settings-window', (event, arg) => {
        if (settingsWindow) {
            settingsWindow.close();
        }
    });
}

function registerGlobalShortcuts(contents) {
    globalShortcut.register('CommandOrControl+1', () => {
        contents.send('globalShortcut', 0);
        console.log("1");
    });
    globalShortcut.register('CommandOrControl+2', () => {
        contents.send('globalShortcut', 1);
        console.log("2");
    });
}