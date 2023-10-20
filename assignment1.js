// Inch to feet converter
// Prompt user to input amount of inches they want to convert into feet
const inches = prompt("How many inches would you like to convert into feet?");
//Algorithm to complete conversion of inches into feet
const inchesToFeet = inches / 12;
//Response logged in the console
console.log(`${inches} inches is ${inchesToFeet} feet! 📏`);
//Response fed back to user in complete sentence
alert(`${inches} inches is ${inchesToFeet} feet! 📏`);

//A random integer between 12 and 500 is generated
const min = 12;
const max = 500;
const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInteger);
//The user is informed of the random integer generated
alert(`The random integer generated is ${randomInteger}! 🔢`);
//Algorithm to complete conversion of inches into feet
const inchesToFeet2 = randomInteger / 12;
//Response logged in the console
console.log(`${randomInteger} inches is ${inchesToFeet2} feet! 📏`);
//Response fed back to user in complete sentence
alert(`${randomInteger} inches is ${inchesToFeet2} feet! 📏`);
