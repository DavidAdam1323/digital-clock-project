// Digital Clock Project's Logic;

// Retrieve references to HTML elements for hours, minutes, and seconds; ✅
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Function to update the digital clock display;
function updateDigitalClock() {
  let now = new Date(); // Get the current date and time.

  // Extract hours, minutes, and seconds from the current time;
  let hoursValue = now.getHours();
  let minutesValue = now.getMinutes();
  let secondsValue = now.getSeconds();

  // Format hours to display with leading zero if less than 10
  let formattedHours = hoursValue < 10 ? `0${hoursValue}` : hoursValue;

  // Format minutes to display with leading zero if less than 10
  let formattedMinutes = minutesValue < 10 ? `0${minutesValue}` : minutesValue;

  // Format seconds to display with leading zero if less than 10
  let formattedSeconds = secondsValue < 10 ? `0${secondsValue}` : secondsValue;

  // Update the DOM elements with the formatted time values;
  hours.textContent = formattedHours;
  minutes.textContent = formattedMinutes;
  seconds.textContent = formattedSeconds;
}

// Initial call to update the clock when the page loads
updateDigitalClock();

// Set interval to update the clock every second (1000 milliseconds)
setInterval(updateDigitalClock, 1000);
