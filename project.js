// Declare a variable to store the interval ID for the timer
let intervalId;

// Declare a variable to track the timer status
let isTimerRunning = false;

// Function to start the relaxation timer
function startTimer() {
  // Check if the timer is already running
  if (isTimerRunning) {
    alert(
      "Timer is already running. Please wait until it finishes or clear it."
    );
    return;
  }
  // Set isTimerRunning to true to indicate that the timer is in progress
  isTimerRunning = true;
  // Get the user input for the timer duration
  const inputTime = document.getElementById("inputTime").value;

  // Check if the input is a valid positive number
  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please enter a valid positive number for the timer.");
    return;
  }

  console.log(`Relaxation Timer started for ${inputTime} ${minutes}`); //

  // Define constants for time units in milliseconds
  const second = 1000,
    minute = second * 60,
    hour = minute * 60;

  // Calculate the total time for relaxation in milliseconds
  const relaxationTime = inputTime * minute;

  // Calculate the end time of the relaxation session
  const countDown = new Date().getTime() + relaxationTime;

  // Display the countdown div
  document.getElementById("countdown").style.display = "block";

  // Set up an interval to update the timer every second
  intervalId = setInterval(function () {
    // Get the current time
    const now = new Date().getTime(),
      // Calculate the remaining time
      distance = countDown - now;

    // Update the display with minutes and seconds
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );

    // Check if the timer has reached zero
    if (distance < 0) {
      // Update headline and display content when the timer completes
      document.getElementById("headline").innerText =
        "Relaxation time complete";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(intervalId); // Clear the interval
      // Set isTimerRunning back to false when the timer completes
      isTimerRunning = false;
    }
  }, 1000); // Update every second
}

// Function to clear the relaxation timer
function clearTimer() {
  // Clear the interval to stop the timer
  clearInterval(intervalId);
  // Set isTimerRunning back to false
  isTimerRunning = false;
  // Hide the countdown and content divs
  document.getElementById("countdown").style.display = "none";
  document.getElementById("content").style.display = "none";
  // Reset the headline
  document.getElementById("headline").innerText = "Relaxation Timer";
  // Clear the input field
  document.getElementById("inputTime").value = "";
}

//Function for the surprise me button
function surpriseMe() {
  // Check if the timer is already running
  if (isTimerRunning) {
    alert(
      "Timer is already running. Please wait until it finishes or clear it."
    );
    return;
  }
  // Generate a random time
  // Minimum time is one minute
  const min = 1;
  // Maxiumum time is ten minutes
  const max = 10;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomInteger);
  //The user is informed of the random integer generated
  alert(`The random time generated is ${randomInteger} minutes`);
  // The input value is set to the random time
  document.getElementById("inputTime").value = randomInteger;
  //The timer is immediately started
  startTimer();
}
