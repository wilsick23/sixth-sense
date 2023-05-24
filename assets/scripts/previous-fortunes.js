document.addEventListener('DOMContentLoaded', function() {
  // Check if formatted readings exist in local storage
  if (localStorage.getItem('formattedReadings')) {
    // Retrieve the formatted readings from local storage
    var formattedReadings = JSON.parse(localStorage.getItem('formattedReadings'));

    // Get the <ul> element to populate
    var ulElement = document.getElementById('readingList');

    // Create an array to store the dynamically created <li> elements
    var liElements = [];

    // Loop through the formatted readings and create <li> elements
    formattedReadings.forEach(function(reading) {
      var liElement = document.createElement('li');
      liElement.innerText = reading.date + ' - ' + reading.reading;
      ulElement.appendChild(liElement);

      // Store the dynamically created <li> elements in the array
      liElements.push(liElement);
    });

    createEntries(liElements); // Move the function call here
  }
});

function createEntries(listItems) {
  const expandedContent = document.getElementById('expanded-content');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
      const selectedItem = this.textContent;
      expandedContent.textContent = selectedItem;
      expandedContent.style.height = '0'; // Set initial height to 0
      expandedContent.classList.add('expanded');

      // Create and append the close button
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('close-button');
      expandedContent.appendChild(closeButton);

      // Add event listener to the close button
      closeButton.addEventListener('click', function() {
        expandedContent.classList.remove('expanded');
        expandedContent.removeChild(closeButton); // Remove the close button
      });

      // Trigger the animation after a short delay to allow for height update
      setTimeout(() => {
        expandedContent.style.height = '65vh'; // Set the final expanded height
      }, 10);
    });
  }  
}
