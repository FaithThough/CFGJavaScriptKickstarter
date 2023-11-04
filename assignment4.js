const relaxedDestinations = [
  "Bali, Indonesia",
  "Maldives",
  "Maui, Hawaii",
  "Cancun, Mexico",
  "Phuket, Thailand",
  "Seychelles",
  "Fiji",
  "Hilton Head, South Carolina",
];

const adventureSeekerDestinations = [
  "Queenstown, New Zealand",
  "Interlaken, Switzerland",
  "Patagonia, Argentina/Chile",
  "Banff National Park, Canada",
  "Moab, Utah, USA",
  "Costa Rica",
  "Nepal",
  "South Africa",
];

const romanticDestinations = [
  "Paris, France",
  "Venice, Italy",
  "Santorini, Greece",
  "Bora Bora, French Polynesia",
  "Kyoto, Japan",
  "Savannah, Georgia, USA",
  "Prague, Czech Republic",
  "The Maldives",
];

const foodieDestinations = [
  "Bangkok, Thailand",
  "Barcelona, Spain",
  "Istanbul, Turkey",
  "New Orleans, Louisiana, USA",
  "Tokyo, Japan",
  "Lima, Peru",
  "Marrakech, Morocco",
  "Hanoi, Vietnam",
];

const culturalEnthusiastDestinations = [
  "Rome, Italy",
  "Kyoto, Japan",
  "Cairo, Egypt",
  "Machu Picchu, Peru",
  "Istanbul, Turkey",
  "Jerusalem, Israel",
  "Vienna, Austria",
  "Cusco, Peru",
];

function suggestDestination(mood) {
  if (mood === "Relaxed") {
    const index = Math.floor(Math.random() * relaxedDestinations.length);
    return `You should go on holiday to a beautiful beach destination like ${relaxedDestinations[index]}`;
  } else if (mood === "Adventure Seeker") {
    const index = Math.floor(
      Math.random() * adventureSeekerDestinations.length
    );
    return `You should go on holiday to an exciting destination like ${adventureSeekerDestinations[index]}`;
  } else if (mood === "Romantic") {
    const index = Math.floor(Math.random() * romanticDestinations.length);
    return `You should go on holiday to a romantic destination like ${romanticDestinations[index]}`;
  } else if (mood === "Foodie") {
    const index = Math.floor(Math.random() * foodieDestinations.length);
    return `You should go on holiday to a destination with delicious cuisine like ${foodieDestinations[index]}`;
  } else if (mood === "Cultural Enthusiast") {
    const index = Math.floor(
      Math.random() * culturalEnthusiastDestinations.length
    );
    return `You should go on holiday to a culturally rich destination like ${culturalEnthusiastDestinations[index]}`;
  } else {
    return "We don't have a recommendation for this mood at the moment.";
  }
}

function getRecommendation(event) {
  event.preventDefault(); // Prevent form submission and page reload
  const currentMood = document.getElementById("currentMood").value;
  const recommendation = suggestDestination(currentMood);
  document.getElementById("result").textContent = recommendation;
}
const button = document.getElementById("inspireMeButton");

button.addEventListener("click", function () {
  // Change the background color of the button when it's clicked
  button.style.backgroundColor = "#54E4FF";

  // Call the getRecommendation function
  getRecommendation();
});

//Add HTML elements to a web page using the DOM
// Select an HTML element by its ID
let p = document.getElementById("p");

// Create a new paragraph element
let newP = document.createElement("p");

// Set the text content of the new paragraph element
newP.textContent = "Have a great trip!🗺️";

// Append the new paragraph element to the parent element
document.body.appendChild(newP);

//Remove HTML elements from a web page using the DOM
// document.body.removeChild(newP);

//onmouseover DOM event
// Shows plane emoji when hovering over the inspire me button
function showEmoji() {
  document.getElementById("planeEmoji").style.display = "inline";
}

function hideEmoji() {
  document.getElementById("planeEmoji").style.display = "none";
}
