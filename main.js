'use strict';
const url = require('url');
const path = require('path');
const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');


let configuration = require('./configuration');
let mainWindow = null;
let settingsWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 700,
        width: 368,
        backgroundColor: '#2e2c29',
        show: false,
        resizable: false
    });
    // Load local html file to browser window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file',
        slashes: true
    }));
    // wait until when rendered process has done
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // open DevTools
    // mWindow.webContents.openDevTools();

    // Emmited when the window is closed.
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    setUpSubcribeChannels();

    // Setting global shortcuts
    if (!configuration.readSettings('shortcutKeys')) {
        configuration.saveSettings('shortcutKeys', ['Ctrl', 'Shift']);
    }
    setGlobalShortcuts();
});
app.on('window-all-closed', () => {
    app.quit();
});
app.on('activate', () => {
    if (mainWindow === null) {
        windowCallback(mainWindow);
    }
});

// Create and control browser windows.
function configWindow(window) {
    mWindow = new BrowserWindow({
        frame: false,
        height: 700,
        width: 368,
        backgroundColor: '#2e2c29',
        show: false,
        resizable: false
    });
    // Load local html file to browser window
    mWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file',
        slashes: true
    }));
    // wait until when rendered process has done
    mWindow.once('ready-to-show', () => {
        mWindow.show();
    });

    // open DevTools
    // mWindow.webContents.openDevTools();

    // Emmited when the window is closed.
    mWindow.on('closed', () => {
        mWindow = null;
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

    ipcMain.on('set-global-shortcuts', (event, arg) => {
        setGlobalShortcuts();
    });
}

function setGlobalShortcuts() {
    globalShortcut.unregisterAll();

    var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
    var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';

    globalShortcut.register(shortcutPrefix + '1', function() {
        mainWindow.webContents.send('global-shortcut', 0);
    });
    globalShortcut.register(shortcutPrefix + '2', function() {
        mainWindow.webContents.send('global-shortcut', 1);
    });
}