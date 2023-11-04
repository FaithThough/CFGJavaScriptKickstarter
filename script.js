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

/*
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
*/

/*Lesson 3

let fruit = ["apple", "plum", "cherry", "mango", "kiwi", "banana", "peach"];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
console.log(fruit[5]);
console.log(fruit[6]);
console.log(fruit);
console.log(fruit.length);

let findFruit = fruit.includes("apple");
console.log(findFruit);

findFruit = fruit.indexOf("plum");
console.log(findFruit);

let itemToFind = "strawberry";
if (fruit.includes(itemToFind)) {
  console.log(`${itemToFind} is in the array.`);
} else {
  console.log(`${itemToFind} is not in the array.`);
}

console.log(fruit);
//Add avocado to the end of the list
fruit.push("avocado");
console.log(fruit);

//Avocado is not a fruit, let's remove it
fruit.pop();
console.log(fruit);

//Let's add something else
fruit.push("strawberry", "guava");
console.log(fruit);

//Using .splice to remove multiple items from an array
fruit.splice(1, 2); // The first argument is the starting index, and the second argument is the number of items to remove
console.log(fruit); // Output: ["apple","mango","kiwi","banana","peach","strawberry","guava"]

// let addItem = prompt("Which fruit would you like to add to your list?")

// fruit.push(addItem);
// console.log(fruit);

const aCinderellaStory = {
  title: "A Cinderella Story",
  mainActors: ["Hillary Duff", "Chad Michael Murray"],
  director: "Mark Rosman",
  quote: "never let the fear of striking out keep you from playing the game.",
  year: 2004,
};

console.log(aCinderellaStory.title);
console.log(aCinderellaStory.mainActors[0]);
console.log(aCinderellaStory.mainActors[1]);
console.log(aCinderellaStory.director);
console.log(aCinderellaStory.quote);
console.log(aCinderellaStory.year);

//Calling multiple at once
//Concatenation
console.log(aCinderellaStory.title + ", " + aCinderellaStory.year);

//Interpolotion
console.log(`${aCinderellaStory.mainActors}, ${aCinderellaStory.quote}`);

//Nested objects
let woman = {
  name: "Faith",
  age: 26,
  friends: ["Lauren", "Mabel", "Chloe"],
  address: {
    houseNumber: 1,
    street: "Main Street",
    city: "York",
  },
};

console.log(woman.address.houseNumber);
console.log(woman.friends[0]);

//For loops
for (let counter = 1; counter <= 10; counter++) {
  console.log(counter);
}

//Code broken
// for (let index = 0; index < fruit.length; index++) {
//   fruit.pop();
//   console.log(fruit);
// }
*/

//Lesson 4
document.write("Hello world👋");

// Get the text content of the HTML element with the id "studying"
const value = document.getElementById("studying").textContent;

// Initialize an empty string to store the result
let result = " ";

// Start a loop that runs 10 times
for (let i = 0; i <= 10; i++) {
  // Concatenate the original text content with a space and the current value of 'i'
  result += value + " " + i;
}

// Update the text content of the HTML element with the id "studying" to the 'result' string
document.getElementById("studying").textContent = result;

//Creating a new paragraph element
let paragraph = document.createElement("p");

//Setting the text content of the paragraph
paragraph.textContent =
  "Hello again! I was added by using document.createElement()!";

//Append the paragraph to the body
document.body.appendChild(paragraph);
