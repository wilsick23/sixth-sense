/*
 * File Name: previous-fortunes.js
 */
import { EMOTIONS_TABLE, STAR_SIGNS } from './constants.js';
// create variable formattedReadings which pulls from local storage. used throughout the page
const formattedReadings = window.localStorage.getItem('readings')
  ? JSON.parse(window.localStorage.getItem('readings'))
  : [];

/**
 * Takes in month and date and return the starsign
 *
 * @param {string} month: month of the birthday
 * @param {string} date: date of the birthday
 * @return {string} name of the star sign and null if none match
 */
export function getStarSign (month, date) {
  // Convert the month and date strings to numbers
  const monthNum = parseInt(month);
  const dateNum = parseInt(date);

  // Find the corresponding star sign
  for (const starSign of STAR_SIGNS) {
    if (
      (monthNum === starSign.start.month && dateNum >= starSign.start.day) ||
      (monthNum === starSign.end.month && dateNum <= starSign.end.day)
    ) {
      return starSign.name;
    }
  }

  return null;
}

/**
 * create list entries(previous readings) and allows it to be selected
 *
 * @input listItems: the list of readings to be added into the list
 */
function createEntries (listItems) {
  let deleteButton = document.getElementById('delete');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
      if (this.classList.contains('selected')) {
        // If the item is already selected, remove the 'selected' class
        this.classList.remove('selected');
        deleteButton.innerHTML= 'Delete All';
      } else {
        // Remove 'selected' class from all items
        for (let j = 0; j < listItems.length; j++) {
          listItems[j].classList.remove('selected');
        }

        // Add 'selected' class to the clicked item
        this.classList.add('selected');
        console.log('selected:' + this.innerText);
        deleteButton.innerHTML = 'Delete Fortune';
      }
    });
  }
}

/**
 * function name: createCloseButton
 * Function to create the close button for the expanded content
 *
 * @return the button at the end of the reading that closes the expanded content when clicked
 */
function createCloseButton () {
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    const expandedContent = document.getElementById('expanded-content');
    expandedContent.classList.remove('expanded');
  });
  return closeButton;
}

/**
 * function name: openSelectedItem
 * Function to open the selected list item
 */
function openSelectedItem () {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    // Open the selected item (perform the desired action)
    // For example:
    console.log('Opening:', selectedItem.innerText);
    const text = selectedItem.innerText;

    // Get the expanded content element
    const expandedContent = document.getElementById('expanded-content');

    // Clear the content
    expandedContent.innerHTML = text;

    // Add the close button to the expanded content
    const closeButton = createCloseButton();
    expandedContent.appendChild(closeButton);

    // Add the expanded class to show the expanded content
    expandedContent.classList.add('expanded');
  } else {
    console.log('No item selected.');
  }
}

/*
 * function name: deleteSelectedItem
 * Function to delete the selected list item
 */
function deleteSelectedItem () {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    // Delete the selected item from the list
    selectedItem.remove();

    // Remove the corresponding entry from formattedReadings array
    const selectedText = selectedItem.innerText;
    const selectedDate = selectedText.split(': ')[0];
    console.log('date = ' + selectedDate);
    const selectedReading = selectedText.split(': ')[1];
    console.log('reading = ' + selectedReading);

    /* formattedReadings = formattedReadings.filter(function (reading) {
      return reading.date !== selectedDate || reading.reading !== selectedReading;
    }); */

    for (let i = 0; i < formattedReadings.length; i++) {
      const reading = formattedReadings[i];
      console.log('iteration reading = ' + reading.date + reading.reading);
      if (reading.date === selectedDate && reading.reading === selectedReading) {
        formattedReadings.splice(i, 1);
        break;
      }
    }

    // Update the formattedReadings in local storage
    window.localStorage.setItem('readings', JSON.stringify(formattedReadings));
    console.log('Deleted:', selectedText);
  } else {
    console.log('No item selected.');
  }
}

/**
 * When no fortune is selected, deletes all of the stored fortunes
 */
function deleteAllItems () {
  // if there are no readings, nothing happens
  if (formattedReadings.length == 0) {
    console.log('nothing to delete');
    return;
  } else {
    // clear out the container of readings
    console.log('at least one item was found');
    const UL = document.getElementById('reading-list');
    UL.innerHTML = '';
    console.log('clearing out LOCAL STORAGE!');
    //window.localStorage.removeItem('readings');
  }
}

function init () {
  // profile emotion -- retrieve emotions from local storage
  /*const emotion1 = !window.localStorage.getItem('emotion1') ? '' : JSON.parse(window.localStorage.getItem('emotion1')).emotion;
  const emotion2 = !window.localStorage.getItem('emotion2') ? '' : JSON.parse(window.localStorage.getItem('emotion1')).emotion;
  const overallEmotion = (emotion1 === '' || emotion2 === '') ? '' : EMOTIONS_TABLE[emotion1][emotion2];*/
  const overallEmotion = JSON.parse(window.localStorage.getItem('overallEmotion'));
  const finalemotion = document.getElementById('finalemotion');
  finalemotion.alt = overallEmotion;
  finalemotion.src = overallEmotion !== '' ? `assets/emotion_auras/${overallEmotion}.gif` : '';

  // profile text -- Retrieve the form data from local storage
  let formData = window.localStorage.getItem('formData');

  // Check if data exists in local storage
  if (formData) {
    // Parse the JSON string back into an object
    formData = JSON.parse(formData);
    console.log(formData);
  } else {
    // Handle the case where no data is stored
    console.log('No form data found.');
  }
  console.log(formData.name);

  // set up name, star-sign, and relationship
  const nameElement = document.getElementById('name');
  nameElement.textContent = formData.name;
  const signElement = document.getElementById('star-sign');
  signElement.textContent = getStarSign(formData.month, formData.date);
  const loveElement = document.getElementById('relationship');
  loveElement.textContent = formData.status;

  // Get the <ul> element to populate
  const ulElement = document.getElementById('reading-list');

  // Create an array to store the dynamically created <li> elements
  const liElements = [];

  // Function to add a reading to the list
  function addReadingToList (reading) {
    const liElement = document.createElement('li');

    // parse the date so that it is easier to read
    // moved to general reading
    /* let separatedDate = reading.date.split('T');    // separate date from time first
    let withoutTime = separatedDate[0].split('-');
    let readingDate = withoutTime[1] + '/'+ withoutTime[2] + '/' + withoutTime[0]; */
    liElement.innerText = reading.date + ': ' + reading.reading;
    // liElement.innerText = reading.date + ' - ' + reading.reading;
    ulElement.appendChild(liElement); // Append to the end
    liElements.push(liElement);
  }

  for (let i = formattedReadings.length - 1; i >= 0; i--) {
    const reading = formattedReadings[i];
    addReadingToList(reading);
    console.log(reading);
  }

  createEntries(liElements); // Move the function call here
  const openButton = document.getElementById('open-button');
  openButton.addEventListener('click', openSelectedItem);

  // deletebutton
  const deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', function () {
    const buttonText = deleteButton.innerHTML;
    if (buttonText == 'Delete Fortune') {
      deleteSelectedItem();
    } else {
      deleteAllItems();
    }
  })

  // Go back to welcome page if user clicks home
  const homeButton = document.getElementById('home');
  homeButton.addEventListener('click', function () {
    location.href = 'index.html';
  });
}

document.addEventListener('DOMContentLoaded', init);
