// main.js

var volumeText = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var volumeIcon = document.getElementById("volume-image");

var sound = document.getElementById("horn-sound");
var soundImage = document.getElementById("sound-image");
var selectedSound = document.getElementById("audio-selection");
var honk = document.getElementById("honk-btn");

volumeText.addEventListener("input", setVolumeSlider);
volumeSlider.addEventListener("input", setVolumeText);
selectedSound.addEventListener("change", setSound);
honk.addEventListener("click", playSound);

function setVolumeSlider() {
    volumeSlider.value = volumeText.value;
    setVolume();
}

function setVolumeText() {
    volumeText.value = volumeSlider.value;
    setVolume();
}

function setVolume() {
    if (volumeText.value == 0) {
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
        volumeIcon.alt = "No Volume";
        honk.disabled = true;
        volumeSlider.value = 0;
    }
    else {
        honk.disabled = false;
        if (volumeText.value >= 67) {
            volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
            volumeIcon.alt = "Max Volume";
        }
        else if (volumeText.value >= 34) {
            volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
            volumeIcon.alt = "Medium Volume";
        }
        else {
            volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
            volumeIcon.alt = "Low Volume";
        }
    }
    
    sound.volume = volumeText.value / 100;
}

function setSound() {
    if (document.getElementById("radio-air-horn").checked == true) {
        sound.src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = "./assets/media/images/air-horn.svg"
    }
    else if (document.getElementById("radio-car-horn").checked == true) {
        sound.src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = "./assets/media/images/car.svg"
    }
    else {
        sound.src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = "./assets/media/images/party-horn.svg"
    }
}

function playSound(event) {
    sound.play();
    event.preventDefault();
}