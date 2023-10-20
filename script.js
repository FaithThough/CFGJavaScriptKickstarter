/*Lesson 1
console.clear();

// Output a greeting to the console
console.log('Hello world!👋🏽');

// Example of using double quotes and single quotes
console.log("My name's Faith 💃🏽");
// The backslash stops the next single quote from closing the string
console.log('My name\'s Faith 💃🏽');

console.clear();
//Constants
let greeting = "Hello world, my name is Faith👋🏽";
console.log(greeting);
greeting = "Hi world, my name is Faith";
console.log(greeting);
const emoji = "💗"

//Camel case example for multiple words in a constant 
const greetingForMarcus = "Hi there Marcus";
console.log(greetingForMarcus);

//Concatenation using a third const 
let message = emoji + " " + greeting + " " + emoji
console.log(message);

//Interpolation
message = ` ${emoji} ${greeting} ${emoji}`;
console.log(message);

//Currency conversion
let gbp = 10;
let eur = 1.16;

const conversion = gbp * eur;

console.log(conversion);

//Prompt currency conversion
const gbp2eur = 1.15 //exchange rate
//Testing it out by entering 500
const gbp2 = prompt("How much GBP would you like to convert?🤑")

//Calculate the amount in EUR

const conversion2 = gbp2 * gbp2eur;

console.log(conversion2 + " euros 🫰🏽");
*/

// Lesson 2
// // Attempting to reassign a const value
// const message = "hello";
// message = "hi"; //recieve error message

// Using let
let message = "hello";
message = "hi";
console.log(message);

let price = 100;
const discount = 20;
console.log(`The original price was ${price}`);

//Apply the discount
let discountedPrice = price * ((price - discount) / 100);
//See notion for explanation of this line

console.log(`The new price is ${discountedPrice}`);

//Comparison operators
let temp = 18;
const perfectTemp = 24;

console.log(temp === perfectTemp); //false

let money = 9;
const travel = 4;
const food = 5;

console.log(money >= travel + food); //true

// Try == === != !== > < >= <=
console.log(5 * 2 <= 10);
console.log(5 <= "5");

//Conditions if/else
// const decision = prompt("books 📚 or movies 🎬?");

// if (decision === 'books') {
//   console.log('You chose books!');
// } else {
//   console.log(`${decision} it is!`)
// };

//AND &&
// OR ||

// const decision = prompt("books 📚 dinner🍴, chilling ✨ or something else? ")
// if (decision === 'books' || 'dinner' || 'chilling') {
//   console.log('This is a super chilled evening!');
// } else {
//   console.log(`${decision} it is!`)
// };

//Functions

// function banner() {
//   console.log('---------------------')
//   console.log('---------Hi!👋🏽------')
//   1 + 2
// }

// banner();

function banner(recievedName, recievedActivity = "eating") {
  console.log(
    `Today is a wonderful day ${recievedName}, you're ${recievedActivity}`
  );
}

banner("Faith", "cheerleading");
banner("Marcus", "coding");
banner("Lauren");

function sum(number1, number2) {
  return number1 + number2;
}

sum(1, 2); // without 'return' keyword - nothing return
console.log(sum(1, 2)); //  without 'return' keyword undefined return
