'use strict';
const path = require('path');
const remote = require('electron').remote;
const { ipcRenderer } = require('electron');
const Tray = remote.require('electron').Tray;
const Menu = remote.require('electron').Menu;

let currentWindow = remote.getCurrentWindow();
// Query select the sound buttons
let soundButtons = document.querySelectorAll('.button-sound');

// Query select close and settings buttons
let closeButton = document.querySelector('.close');
let settingButton = document.querySelector('.settings');

// Tray 
let trayIcon = null;

// Call functions from Renderer process
setUpSoundButtons(soundButtons, prepareSoundButton, setUpRendererChannels);
sendToMainChannels(closeButton, 'close-main-window');
sendToMainChannels(settingButton, 'open-settings-window');

// Tray setup
if (process.platform === 'drawin') {
    trayIcon = new Tray(path.join(__dirname, 'img/tray-iconTemplate.png'));
} else {
    trayIcon = new Tray(path.join(__dirname, 'img/tray-icon-alt.png'));
}
let trayMenuTemplate = [{
        label: 'Sound Machine',
        enabled: true,
        click: function() {
            if (!currentWindow.isFocused()) {
                currentWindow.show();
                currentWindow.center();
                currentWindow.focus();
            }
        }
    },
    {
        label: 'Settings',
        click: function() {
            ipcRenderer.send('open-settings-window');
        }
    },
    {
        label: 'Quit',
        click: function() {
            ipcRenderer.send('close-main-window');
        }
    }
];
let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayIcon.setToolTip('Sound machine application.');
trayIcon.setContextMenu(trayMenu);

// Iterate through sound button reading out the data-sound attributes
function setUpSoundButtons(buttons, prepareSoundButtonCallback, setUpRendererChannelsCallback) {
    for (var i = 0; i < buttons.length; i++) {
        let soundButton = buttons[i];
        let soundName = soundButton.attributes['data-sound'].value;

        prepareSoundButtonCallback(soundButton, soundName);
    }
    setUpRendererChannelsCallback(buttons, 'global-shortcut');
}

// Prepare sound button:
// - Add background image
// - Add click event that plays audio
function prepareSoundButton(sButton, sName) {
    sButton.querySelector('span').style.backgroundImage = 'url("img/icons/' + sName + '.png")';

    let audio = new Audio(path.join(__dirname, '/wav/' + sName + '.wav'));

    sButton.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play();
    });
}

// Setup sending message to Main channels
function sendToMainChannels(object, channel) {
    object.addEventListener('click', function() {
        ipcRenderer.send(channel, object.attributes['class'].value);
    });
}

// Setup Renderer channels listen for main messages
function setUpRendererChannels(objects, channel) {
    ipcRenderer.on(channel, (event, message) => {
        console.log("Play: " + message + " of " + objects[message].attributes['data-sound'].value);
        let clk = new MouseEvent('click');
        objects[Number(message)].dispatchEvent(clk);
    });
}