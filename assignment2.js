//Using let to create a variable
let age = 21;
//Reassigning the variable
age = 13;
console.log(age);

//Using a function to group code
if (age >= 16) {
  console.log("You're old enough to learn how to drive!🚗");
} else
  console.log(
    `You're not old enough to learn how to drive yet, you need to wait ${
      16 - age
    } more years!`
  );

age = 27;
let drivingLicence = true;
let badEyeSight = false;

//Combiing multiple logical operators in a condition
if (age >= 16 && drivingLicence === true && !badEyeSight) {
  console.log("You can drive!🚗");
} else console.log("You can't drive yet");

//Investigating how comparison operators work with strings
let firstName = "Faith";
let lastName = "Phillips";

console.log(firstName == lastName); //false
//The == operator checks for equality in values, and since the values of firstName and lastName are different ("Faith" and "Phillips"), it returns false.
console.log(firstName === lastName); //false
//The === operator checks for strict equality in both values and data types. Since the data types (strings) and values are different, it returns false.
console.log(firstName != lastName); //true
//The != operator checks if the values are not equal, and since the values are different, it returns true.
console.log(firstName !== lastName); //true
//The !== operator checks for strict inequality in both values and data types. Since the data types and values are different, it returns true.
console.log(firstName > lastName); //false
//When comparing strings using the > operator, it checks for their lexicographical (dictionary) order. In this case, "Faith" comes before "Phillips," so it returns false.
console.log(firstName < lastName); //true
//Similar to the previous comparison, this checks if "Faith" comes before "Phillips" in lexicographical order, which is true, so it returns true.
console.log(firstName >= lastName); //false
//The >= operator checks if the left operand is greater than or equal to the right operand in lexicographical order. Since "Faith" is not greater than "Phillips," it returns false.
console.log(firstName <= lastName); //true
//The <= operator checks if the left operand is less than or equal to the right operand in lexicographical order. Since "Faith" is less than "Phillips," it returns true.

//Using a switch case statement
let day = "Thursday";
day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Machine Learning MOOC👩🏽‍💻");
    break;
  case "Tuesday":
    console.log("Solving problems in Python MOOC👩🏽‍💻");
    break;
  case "Wednesday":
    console.log("Coaching university team📣");
    break;
  case "Thursday":
    console.log("JavaScript Kickstarter Course👩🏽‍💻");
    break;
  case "Friday":
    console.log("Cheerleading🤸🏽‍♀️");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Time to relax😌");
    break;
  default:
    console.log("It's another day of the week");
}
