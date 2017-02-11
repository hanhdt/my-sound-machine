'use strict';
const { ipcRenderer } = require('electron');

var closeEl = document.querySelector('.close');

closeEl.addEventListener('click', (e) => {
    console.log("click");
    ipcRenderer.send('close-settings-window', closeEl.attributes['class'].value);
});