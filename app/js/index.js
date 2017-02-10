'use strict';
const path = require('path');
let soundButtons = document.querySelectorAll('.button-sound');
let closeButton = document.getElementsByClassName('.close');
let settingButton = document.getElementsByClassName('.settings');

setUpSoundButtons(soundButtons, prepareSoundButton);

function setUpSoundButtons(buttons, callback) {
    for (var i = 0; i < buttons.length; i++) {
        let soundButton = buttons[i];
        let soundName = soundButton.attributes['data-sound'].value;

        callback(soundButton, soundName);
    }
}

function prepareSoundButton(sButton, sName) {
    sButton.querySelector('span').style.backgroundImage = 'url("img/icons/' + sName + '.png")';

    let audio = new Audio(path.join(__dirname, '/wav/' + sName + '.wav'));

    sButton.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play();
    });
}