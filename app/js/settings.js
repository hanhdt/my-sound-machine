'use strict';
const { ipcRenderer } = require('electron');
const configuration = require('../configuration.js');

var closeEl = document.querySelector('.close');
var modifierCheckboxes = document.querySelectorAll('.global-shortcut');

closeEl.addEventListener('click', (e) => {
    console.log("click");
    ipcRenderer.send('close-settings-window', closeEl.attributes['class'].value);
});

for (var i = 0; i < modifierCheckboxes.length; i++) {
    var shortcutKeys = configuration.readSettings('shortcutKeys');
    var modifierKey = modifierCheckboxes[i].attributes['data-modifier-key'].value;
    modifierCheckboxes[i].checked = shortcutKeys.indexOf(modifierKey) != -1;

    // Binding of clicks
    modifierCheckboxes[i].addEventListener('click', (e) => {
        bindModifierCheckboxes(e);
    });
}

function bindModifierCheckboxes(e) {
    var shortcutKeys = configuration.readSettings('shortcutKeys');
    var modifierKey = e.target.attributes['data-modifier-key'].value;

    if (shortcutKeys.indexOf(modifierKey) !== -1) {
        var shortcutKeyIndex = shortcutKeys.indexOf(modifierKey);
        shortcutKeys.splice(shortcutKeyIndex, 1);
    } else {
        shortcutKeys.push(modifierKey);
    }

    configuration.saveSettings('shortcutKeys', shortcutKeys);
    ipcRenderer.send('set-global-shortcuts');
}