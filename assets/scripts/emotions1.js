/**
 * file name: emotions1
 * Randomly generate one set of images to show for each emotion.
 * The order of images within each set is randomized as well.
 */

import { shuffleArray, randomInt, addSearchParams } from './helpers.js';
import { RAW_EMOTIONS, READING_TYPES } from './constants.js';

// Set 1: Abstract Paints
const set1 = {
  joy: 'assets/images/selectionpics/joy1.png',
  sadness: 'assets/images/selectionpics/sadness1.png',
  disgust: 'assets/images/selectionpics/disgust1.png',
  fear: 'assets/images/selectionpics/fear1.png',
  anger: 'assets/images/selectionpics/anger1.png'
};

// Set 2: Fantasy Scapes
const set2 = {
  joy: 'assets/images/selectionpics/joy2.png',
  sadness: 'assets/images/selectionpics/sadness2.png',
  disgust: 'assets/images/selectionpics/disgust2.png',
  fear: 'assets/images/selectionpics/fear2.png',
  anger: 'assets/images/selectionpics/anger2.png'
};

// Set 3: Landscapes
const set3 = {
  joy: 'assets/images/selectionpics/joy3.png',
  sadness: 'assets/images/selectionpics/sadness3.png',
  disgust: 'assets/images/selectionpics/disgust3.png',
  fear: 'assets/images/selectionpics/fear3.png',
  anger: 'assets/images/selectionpics/anger3.png'
};

const sets = [
  set1,
  set2,
  set3
];

let next;
let selectedEmotion;

/**
 * function name: handleNextButtonClick
 * Moves to next page in flow (emotions2), and passes along desired fortune type
 */
function handleNextButtonClick () {
  window.localStorage.setItem('emotion1', JSON.stringify({
    emotion: selectedEmotion,
    timestamp: Date.now() / 1000.0
  }));
  window.location.href = addSearchParams(
    new URL(window.location.origin + "/emotions2.html"),
    Object.fromEntries((new URLSearchParams(window.location.search)).entries())
  );
}

/**
 * function name: handleBackButtonClick
 * removes emotion1 in local storage
 * moves to next page in flow (emotions2), resets desired fortune type
 */
function handleBackButtonClick () {
  window.localStorage.removeItem('emotion1');
  window.location.href = 'choose-your-fortune.html';
}

  /**
  * function name: playButtonHoverSound
  * purpose: Function to play the button hover sound
  * 
  * @const buttonHoverSound: new audio with soundSrc
  */
  function playButtonHoverSound(soundSrc) {
    const buttonHoverSound = new Audio(soundSrc);
    buttonHoverSound.volume = (volumeSlider.value) / 20; // change volume according sound bar
    buttonHoverSound.currentTime = 0; // Reset the sound to start
    buttonHoverSound.play();
  }

/**
 * function name: init
 * purpose: Generate a new set of images on page load.
 * user cannot click next until a picture is selected
 * 
 * @const urlParams: new URLsearchParams
 * @const readingtype: reading from urlParams
 * @const next: next button on the page
 * @const buttons: 5 buttons with pics
 * @const randomSet: random number between 0 and 2, choose which set to display
 * @const shuffledEmotions: shuffled list of emotions to display on buttons
 * @const emotion: used to loop through shuffledEmotions
 * @const back: back button on the page
 */
function init () {
  const urlParams = new URLSearchParams(window.location.search);

  const readingType = urlParams.get('reading');
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html';
  }

  //disable next button till someone selects a button
  next = document.getElementById('button-right');
  next.disabled = true;

  // Grab all the circular buttons
  const buttons = [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five')
  ];

  // Select random set
  const randomSet = sets[randomInt(0, 2)];

  // Generate shuffled list to randomize order within the set
  const shuffledEmotions = shuffleArray(RAW_EMOTIONS);

  //loop through the shuffled Array list to display pics on the buttons
  for (let i = 0; i < buttons.length; i++) {
    const emotion = shuffledEmotions[i];
    buttons[i].setAttribute('src', randomSet[emotion]);

    //when you click and select a button, it highlights and you can now click next
    buttons[i].addEventListener('click', function () {
      selectedEmotion = emotion;
      const selected = buttons[i];
      if (selected.classList.contains('selected')) {
        next.disabled = true;
        selected.classList.remove('selected');
      } else {
        next.disabled = false;
        buttons.forEach(button => {
          button.classList.remove('selected');
        });
        selected.classList.add('selected');
      }
    });
  }
  next.addEventListener('click', handleNextButtonClick);
  // hover sound for next when enabled
  next.addEventListener('mouseenter', function () {
    playButtonHoverSound('assets/sounds/button-hover.mp3');
  });
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('mouseenter', function () {
        playButtonHoverSound('assets/sounds/button-hover.mp3');
      });
    }
    
  
}

window.addEventListener('DOMContentLoaded', init);

// back navigation button
const backButton = document.getElementById('button-left');

backButton.addEventListener('click', handleBackButtonClick);

backButton.addEventListener('mouseenter', function () {
  playButtonHoverSound('assets/sounds/button-hover.mp3');
});

// sound control
const backgroundSound = new Audio('assets/sounds/aura.mp3');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

let lastVolume = retrieveVolume(); // Retrieve volume value from local storage
backgroundSound.volume = lastVolume; // Set the initial volume
  // Set the volume slider to reflect the initial volume
volumeSlider.value = lastVolume; 
updateVolume();
backgroundSound.currentTime = 0; // Reset the background sound to start
backgroundSound.loop = true; // Enable looping
backgroundSound.play(); // Play the background sound

// mute and unmute for clicking icon

function retrieveVolume() {
  let storedVolume = localStorage.getItem('lastVolume');

  // If there's no stored volume level or it's 0, set the default to 1
  if (storedVolume === null) {
    return 1;
  } else {
    return Number(storedVolume); // Convert the stored string value to a number before returning
  }
}

// store the last volumn in record 
volumeSlider.addEventListener('input', function () {
  backgroundSound.volume = volumeSlider.value;
  lastVolume = backgroundSound.volume; // Update the lastVolume to reflect the volume of the background sound
  localStorage.setItem('lastVolume', lastVolume); // Store the volume level in local storage
  updateVolume();
});

volumeIcon.addEventListener('click', function() {
  if (backgroundSound.volume == 0) {
    if (lastVolume == 0) {
      backgroundSound.volume = 1;
      volumeSlider.value = 1;
    } else {
      backgroundSound.volume = lastVolume;
      volumeSlider.value = lastVolume;
    }
  } else {
    lastVolume = backgroundSound.volume;
    backgroundSound.volume = 0;
    volumeSlider.value = 0;
  }
  updateVolume();
});

volumeSlider.addEventListener('change', updateVolume);
volumeSlider.addEventListener('mousemove', updateVolume);

/**
 * function name: updateVolume
 * purpose: update the volume of sound effects
 * 
 * @const volumelevel: level of volume ranges from 0 to 3
 */
function updateVolume() {
  backgroundSound.volume = volumeSlider.value;
  backgroundSound.volume = volumeSlider.value;
  let volumeLevel;

  window.localStorage.setItem('lastVolume', volumeSlider.value);

  if (backgroundSound.volume === 0) {
    volumeLevel = "0";
  } else if (backgroundSound.volume < 0.33) {
    volumeLevel = "1";
  } else if (backgroundSound.volume < 0.66) {
    volumeLevel = "2";
  } else {
    volumeLevel = "3";
  }
  volumeIcon.src = `assets/images/volume-level-${volumeLevel}.svg`;
}
