import { READINGS, EMOTIONS_TABLE, EMOTIONS, READING_TYPES } from './constants.js'
import { randomArrayItem } from './helpers.js'

const SECONDS_PER_DAY = 86400

/**
 * Runs on page initialization. Generates a reading based on emotion1 and emotion2
 * and records it to localstorage.
 */
async function init () {
  const urlParams = new URLSearchParams(window.location.search)
  const currentUnixTimestamp = Date.now() / 1000.0

  const readingType = urlParams.get('reading')
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html'
  }

  const auraImage = document.getElementById('aura-image')
  const readingBox = document.getElementById('reading')

  const emotion1Obj = JSON.parse(localStorage.getItem('emotion1'))
  const emotion2Obj = JSON.parse(localStorage.getItem('emotion2'))

  // If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
  if (emotion1Obj == null ||
			emotion1Obj.emotion == null ||
			currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
    window.location.href = 'emotion1.html' + window.location.search
  }

  // If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
  if (emotion2Obj == null ||
			emotion2Obj.emotion == null ||
			currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
    window.location.href = 'emotions2.html' + window.location.search
  }

  // Calculate overall emotion based on emotion1 and emotion2
  const emotion1 = emotion1Obj.emotion
  const emotion2 = emotion2Obj.emotion
  const overallEmotion = EMOTIONS_TABLE[emotion1][emotion2]

  // Generate a random reading from readings list
  const reading = randomArrayItem(READINGS[readingType][overallEmotion])
  auraImage.src = `assets/emotion_auras/${overallEmotion}.gif`
  readingBox.textContent = reading

  // Update localstorage
  let currentReadings = JSON.parse(localStorage.getItem('readings'))
  if (currentReadings == null) {
    currentReadings = []
  }

  currentReadings.push({
    date: (new Date()).toISOString(),
    reading
  })

  localStorage.setItem('readings', JSON.stringify(currentReadings))

  /**
   * Event listener for back button click. Navigates back to emotions1.html
   */
  document.getElementById('home').addEventListener('click', function () {
  window.location.href = 'index.html' + window.location.search
  })
}

window.addEventListener('DOMContentLoaded', init);
