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
}
