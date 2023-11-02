let constellations = [
  "Orion",
  "Ursa Major",
  "Cygnus",
  "Pegasus",
  "Cassiopeia",
  "Draco",
  "Taurus",
  "Leo",
];

for (let index = 0; index < constellations.length; index++) {
  console.log(constellations[index]);
  console.log(
    `Tonight, you can see the ${constellations[index]} constellation in the night sky`
  );
}

//Unshift method
constellations.unshift("Crux", "Cassiopeia"); // Adding elements to the beginning of the array
console.log(constellations);

//Shift method
constellations.shift(); //Removing the element at the beginning of the array
console.log(constellations);

//Split method
const sentence =
  "Hydra is the largest of the 88 modern constellations, measuring 1303 square degrees✨";
const words = sentence.split(" "); //split by spaces
console.log(words);

//Concatenate a list
const celestialObjects = [
  "Andromeda Galaxy",
  "The Pleiades Star Cluster",
  "The Horsehead Nebula",
  "Sirius",
  "The Orion Nebula",
  "Mars",
  "Jupiter",
  "Saturn",
  "The Perseid Meteor Shower",
  "Hubble Space Telescope",
];

//Concat method
const allCelestialObjects = constellations.concat(celestialObjects);
console.log(allCelestialObjects);

// + method
// const allCelestialObjects = constellations + celestialObjects;
// console.log(allCelestialObjects);

// Using objects and methods
const spaceship = {
  name: "Stellar Voyager",
  captain: "Commander Astra",
  type: "Exploration",
  fuel: 100,
  repairsRequired: false,
  destinations: ["Alpha Centauri", "Andromeda Galaxy", "Mars"],
  checkLaunchReadiness: function () {
    if (!this.repairsRequired && this.fuel >= 50) {
      console.log("Spaceship is ready to launch!");
    } else {
      console.log("Spaceship is not ready to launch.");
    }
  },
};

console.log(`Spaceship Name: ${spaceship.name}`);
console.log(`Captain: ${spaceship.captain}`);
console.log(`Spaceship Type: ${spaceship.type}`);
console.log(`Current Fuel Percentage: ${spaceship.fuel}%`);
console.log(`Destinations: ${spaceship.destinations}`);
console.log(`Repairs required: ${spaceship.repairsRequired}`);

while (spaceship.fuel >= 50) {
  console.log(`Fuel is ${spaceship.fuel}% , ready to explore the cosmos🚀`);
  spaceship.fuel -= 10; // Simulating fuel consumption
  spaceship.checkLaunchReadiness(); // Call the object method to check readiness
}

console.log(`Fuel is ${spaceship.fuel}% , time to refuel!⛽`);
