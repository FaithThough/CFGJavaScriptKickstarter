//Removing HTML element using DOM
function fadeOut(h2Element) {
  // Set initial opacity if not already set
  if (!h2Element.style.opacity) {
    h2Element.style.opacity = 1;
  }

  let interval = setInterval(function () {
    let opacity = h2Element.style.opacity;
    if (opacity >= 0.1) {
      opacity -= 0.1;
      h2Element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 600);
}

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

  // Call the fadeOut function to start the fade-out effect
  fadeOut(document.getElementById("h2"));

  // Set up an interval to update the timer every second
  intervalId = setInterval(function () {
    // Get the current time
    const now = new Date().getTime(),
      // Calculate the remaining time
      distance = countDown - now + second;

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
      alert("Relaxation time complete!");
      clearInterval(intervalId); // Clear the interval
      // Set isTimerRunning back to false when the timer completes
      isTimerRunning = false;
      // Set the opacity of the h2 element back to 1
      document.getElementById("h2").style.opacity = 1;
    }
  }, 0); // Update every second
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
  document.getElementById("inputTime").value = " ";
  //Clear the displayed minutes and seconds
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
  // Set the opacity of the h2 element back to 1
  document.getElementById("h2").style.opacity = 1;
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
  // Log the random time to the console
  console.log(
    `'Surprise me' button clicked. Random time generated: ${randomInteger} minutes`
  );
  //The user is informed of the random integer generated
  alert(`The time generated is ${randomInteger} minutes`);
  // The input value is set to the random time
  document.getElementById("inputTime").value = randomInteger;
  //The timer is immediately started
  startTimer();
}

const mindfulnessActivities = [
  "Deep breathing exercises",
  "Mindful walking in nature",
  "Body scan meditation",
  "Visualization meditation",
  "Journaling about gratitude",
  "Mindful eating",
  "Guided meditation",
  "Listening to calming music",
  "Mindful stretching or yoga",
  "Focusing on the breath for a few minutes",
  "Observing and describing your surroundings",
  "Savoring a cup of tea or coffee mindfully",
  "Creating a small art or craft project",
  "Mindful shower or bath",
  "Five senses mindfulness exercise",
  "Mindful phone detox (disconnect for a while)",
  "Mindful colouring or doodling",
  "Sending positive messages to loved ones",
  "Mindful awareness of thoughts and emotions",
  "Expressing self-compassion and self-love",
];

//Using a loop to iterate through values in a list
for (let index = 0; index < mindfulnessActivities.length; index++) {
  console.log(mindfulnessActivities[index]);
}

//Using the shift method
const shiftedMindfulnessActivities = mindfulnessActivities.shift();
console.log(shiftedMindfulnessActivities); // "Deep breathing exercises" the removed element

//Using the unshift method
const unshiftedMindfulnessActivities =
  mindfulnessActivities.unshift("EFT tapping");
console.log(unshiftedMindfulnessActivities); // '20' the updated length of the array

function getRecommendation() {
  const recommendationIndex = Math.floor(
    Math.random() * mindfulnessActivities.length
  );
  const recommendation = mindfulnessActivities[recommendationIndex];
  const resultBox = document.getElementById("result");

  //Set the recommendation and remove the 'hidden' class
  resultBox.textContent = recommendation;
  resultBox.classList.remove("hidden");
}

//onmouseover DOM event
//Shows heart emoji when hovering over the inspire me button
function showEmoji() {
  document.getElementById("heartEmoji").style.display = "inline";
}

function hideEmoji() {
  document.getElementById("heartEmoji").style.display = "none";
}

//onMouseover DOM event
//Change color of heading
function mouseOver() {
  document.getElementById("headline").style.color = "white";
}

function mouseOut() {
  document.getElementById("headline").style.color = "black";
}

// First set of functions for "headline"
function mouseOver() {
  document.getElementById("headline").style.color = "white";
}

function mouseOut() {
  document.getElementById("headline").style.color = "black";
}

// Second set of functions for "headline 2"
function mouseOverHeadline2() {
  document.getElementById("headline 2").style.color = "white";
}

function mouseOutHeadline2() {
  document.getElementById("headline 2").style.color = "black";
}

// Adding HTML element using DOM
let paragraph = document.createElement("p");
paragraph.textContent =
  "Don't forget to take regular moments like this for yourself!🧘";

// Get the container by its class name
let container = document.querySelector(".container");

// Append the new paragraph to the container
container.appendChild(paragraph);
