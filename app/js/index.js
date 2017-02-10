'use strict';
const path = require('path');

// Query select the sound buttons
let soundButtons = document.querySelectorAll('.button-sound');

// Query select close and settings buttons
let closeButton = document.getElementsByClassName('.close');
let settingButton = document.getElementsByClassName('.settings');

setUpSoundButtons(soundButtons, prepareSoundButton);

// Iterate through sound button reading out the data-sound attributes
function setUpSoundButtons(buttons, callback) {
    for (var i = 0; i < buttons.length; i++) {
        let soundButton = buttons[i];
        let soundName = soundButton.attributes['data-sound'].value;

        callback(soundButton, soundName);
    }
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