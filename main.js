// JAVASCRIPT WITH HTML (DOM) (NAV)
// DOM = DOCUMENT OBJECT MODEL

// Object{} that represents the page you see in the web browser

// and provides you with an API to interact with it.

// Web browser constructs the DOM when it loads an HTML document,

// and structures all the elements in a tree-like representation.

// JavaScript can access the DOM to dynamically

// change the content, structure, and style of a web page.

// document.getElementById();
document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 50%)";
console.log(document);
// console.dir(document);

const userName = "Bro";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += userName === "" ? `Guest` : userName;

//
let a = 2;
let b = 4;

console.log((a += b));
console.log(a);

//onclick using only JS
document.getElementById("btn").onclick = function () {
  myFunction();
};

function myFunction() {
  document.body.style.backgroundColor = "black";
}

// onclick using HTML and JS
// function change() {
//  document.getElementsByTagName("body")[0].style.backgroundColor = "red";
// }

//oninput using only JS
// document.getElementById("name").oninput = function() {inPut()};

// function inPut() {
//   document.getElementById("hello").innerHTML = "Hello " + document.getElementById("name").value;
// }

//oninput using HTML & JS
function inName() {
  let input = document.getElementById("name");
  let inputValue = input.value;

  document.getElementById("hello").innerHTML = "Hello " + inputValue;
}

// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------
const element = document.getElementById("vegetables");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "lightgrey";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "violet";
});

// ---------- .lastElementChild ----------
const lastEl = document.getElementById("desserts");
const lastChild = lastEl.lastElementChild;
lastChild.style.backgroundColor = "lightblue";

const lastUl = document.querySelectorAll("ul");

lastUl.forEach((lastEle) => {
  const lastCh = lastEle.lastElementChild;
  lastCh.style.backgroundColor = "orange";
});

// ---------- .nextElementSibling ----------
const nextElement = document.getElementById("apple");
const nextSibling = nextElement.nextElementSibling;
nextSibling.style.backgroundColor = "pink";

// ---------- .previousElementSibling ----------
const prevElement = document.getElementById("ice cream");
const prevSibling = prevElement.previousElementSibling;
prevSibling.style.backgroundColor = "lightcyan";

// ---------- .parentElement ----------
const parentEl = document.getElementById("pie");
const parent = parentEl.parentElement;
parent.style.backgroundColor = "cyan";

// ---------- .children ----------
const chElement = document.getElementById("vegetables");
const children = chElement.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "lightgreen";
});

children[1].style.backgroundColor = "lightblue";

// SYNTAX AND VARIABLES, SCOPE
// variable = A container that stores a value.
//            Behaves as if it were the value it contains.
// 1. declaration let x;
// 2.assignment   x = 100;
//Numbers
let age = 25;
let price = 10.99;
let gpa = 3.0;

console.log(typeof gpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

// Strings
let firstName = "Bro";
let favoriteFood = "spaghetti";
let email = "broski@email.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You favorite food is ${favoriteFood}`);
console.log(`Your email is ${email}`);

// Booleans
let online = false;
let forSale = true;
let student = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${student}`);

// Exercise
let fullName = "The Bro";
let myAge = 21;
let amIStudent = true;

document.getElementById("p1").textContent = `My full name is ${fullName}`;
document.getElementById("p2").textContent = `My age is ${myAge}`;
document.getElementById("p3").textContent = `Student: ${amIStudent}`;

// VARIABLE SCOPE
// variable scope = where a variable is recognized
//                  and accessible (local vs global)
// NOT recommended to declare global variables in a LARGE PROGRAM
let x = 1;
let y = 2;
let z = 3;

function1();
function2();
function3();

function function1() {
  console.log(x);
}

function function2() {
  let y = 8;
  console.log(y);
}

function function3() {
  let z = 10;
  console.log(z);
}

// ARITHMETIC, TERNARY, LOGICAL, SPREAD
// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;
let numStudents = 31;
// numStudents = numStudents + 1;
// numStudents = numStudents - 1;
// numStudents = numStudents * 2;
// numStudents = numStudents / 2;
// numStudents = numStudents ** 2; // EXPONENTS
let extraStudents = numStudents % 3;

// Augmented assignment operators
numStudents += 1;
numStudents -= 1;
numStudents *= 2;
numStudents /= 2;
numStudents **= 2;
numStudents %= 2;

// Increment/decrement operator
numStudents++;
numStudents--;

console.log(numStudents);

// Operator precedence
/* 
  1. Parenthesis()
  2. Exponents
  3. Multiplication & Division & Modulo
  4. Addition & Subtraction
  */
let result = (15 % 5) + 8 / 2;
console.log(result);

// TERNARY OPERATOR
// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;
let terAge = 21;
let terMessage = terAge >= 18 ? "You are an adult :(" : "You are a baby!";

console.log(terMessage);

let time = 12;
let terTime = time >= 12 ? "Good Afternoon!" : "Good morning!";

console.log(terTime);

let terStudent = true;
let terIsStudent = (terStudent = true
  ? "You are a student!"
  : "You are NOT a student");

console.log(terIsStudent);

let purchaseAmount = 143.4;
let terTotal =
  purchaseAmount >= 100
    ? purchaseAmount - purchaseAmount * 0.1
    : purchaseAmount;

console.log(terTotal);

// LOGICAL OPERATORS
// logical operators =  used to combine or manipulate boolean values
//                      (true or false)
//                      AND = &&
//                      OR  = ||
//                      NOT = !
const andTemp = -20;

if (andTemp <= 0 && andTemp >= 35) {
  console.log("The weather id GOOD");
} else {
  console.log("The weather is BAD");
}

const onTemp = 90;

if (onTemp <= 0 || onTemp > 30) {
  console.log("The wether is GOOD");
} else {
  console.log("The weather is BAD");
}

const isCloudy = true;

if (!isCloudy) {
  console.log("Too bad is cloudy");
} else {
  console.log("Is sunny!");
}

// SPREAD OPERATOR
// spread operator =  ... allows an iterable such as an
//                    array or string to be expanded
//                    into separate elements
//                    (unpacks the elements)
// Array
let sprNum = [1, 2, 3, 4, 5];
let sprMax = Math.max(...sprNum);
let sprMin = Math.min(...sprNum);

console.log(sprMin);

// String
let sprName = "The Bro";
let sprLetters = [...sprName].join(".");

console.log(sprLetters);

let sprFruits = ["apple", "orange", "banana"];
let sprVegetables = ["onions", "celery", "potatoes"];
let sprFoodList = [sprFruits[1], ...sprVegetables, "eggs", "milk"];

console.log(sprFoodList);

// CONDITIONALS, SWITCHES
// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else
let ifAge = 18;

if (ifAge >= 18) {
  console.log("You are an adult");
} else {
  console.log("You must be 18+ to be here");
}

let ifTime = 19;

if (ifTime < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Afternoon");
}

// Boolean
let ifIsStudent = true;

if (ifIsStudent) {
  console.log("You are a student");
} else {
  console.log("You are NOT a student");
}

// Nested
let nesAge = 18;
let nesHasLicense = true;

if (nesAge >= 16) {
  console.log("You are old enough to have drive");

  if (nesHasLicense) {
    console.log("You have a license!");
  } else {
    console.log("You DO NOT have a license");
  }
} else {
  console.log("You are NOT old enough to drive");
}

// Else If
let elIfAge = 0;

if (elIfAge >= 100) {
  console.log("You are TOO OLD for this site");
} else if (elIfAge == 0) {
  console.log("You can't enter. You were just born");
} else if (elIfAge >= 18) {
  console.log("You are old enough to enter this site");
} else if (elIfAge < 0) {
  console.log();
} else {
  console.log("You must be 18+ to enter this site");
}

// Project
const ifMyText = document.getElementById("ifMyText");
const ifMySubmit = document.getElementById("ifMySubmit");
const ifResultElement = document.getElementById("ifResultElement");
let projAge;

ifMySubmit.onclick = function () {
  projAge = ifMyText.value;
  projAge = Number(projAge);

  if (projAge >= 100) {
    ifResultElement.textContent = "You are TOO OLD for this site";
    console.log("You are TOO OLD for this site");
  } else if (projAge == 0) {
    ifResultElement.textContent = "You can't enter. You were just born";
    console.log("You can't enter. You were just born");
  } else if (projAge >= 18) {
    ifResultElement.textContent = "You are old enough to enter this site";
    console.log("You are old enough to enter this site");
  } else if (projAge < 0) {
    ifResultElement.textContent = "Your age can't be below zero";
    console.log("Your age can't be below zero");
  } else {
    ifResultElement.textContent = "You must be 18+ to enter this site";
    console.log("You must be 18+ to enter this site");
  }
};

// SWITCHES
let swiDay = 2;

switch (swiDay) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log(`${swiDay} is NOT a day`);
}

let swiScore = 57;
let swiLetterGrade;

switch (true) {
  case swiScore >= 90:
    swiLetterGrade = "A";
    break;
  case swiScore >= 80:
    swiLetterGrade = "B";
    break;
  case swiScore >= 70:
    swiLetterGrade = "C";
    break;
  case swiScore >= 60:
    swiLetterGrade = "D";
    break;
  case swiScore < 60 && swiScore >= 50:
    swiLetterGrade = "E";
    break;
  default:
    swiLetterGrade = "F";
}

console.log(swiLetterGrade);

// LOOPS, WHILE & FOR
// while loop = repeat some code WHILE some condition is true
/* let whUsername = "";

while(whUsername === "" || whUsername === null) {
  whUsername = window.prompt(`Enter your name`);
}

console.log(`Hello ${whUsername}`);
*/

/* let whileLoggedIn = false;
let whileUserName;
let whilePassword;

while(!whileLoggedIn) {
  whileUserName = window.prompt('Please enter your username');
  whilePassword = window.prompt(`Please enter your password`)

  if(whileUserName === "The Bro" && whilePassword === "theBroOfBros") {
    whileLoggedIn = true;
    console.log("You are now logged in!")
  } else {
    console.log("Invalid credentials! Please try again");
  }
}
*/

// DO WHILE
// DO WHILE LOOP is to execute code AT LEAST ONCE
/*let doCar;

do {
  doCar = window.prompt(`Enter your favorite car`);
  
} while(doCar === "" || doCar === null)

console.log(`A ${doCar} is a nice car`);
*/

/* let whileLoggedIn = true;
let whileUserName;
let whilePassword;

do{
  whileUserName = window.prompt('Please enter your username');
  whilePassword = window.prompt(`Please enter your password`)

  if(whileUserName === "The Bro" && whilePassword === "theBroOfBros") {
    whileLoggedIn = true;
    console.log("You are now logged in!")
  } else {
    console.log("Invalid credentials! Please try again");
  }
} while(!whileLoggedIn)
*/

// FOR LOOPS
// for loop = repeat some code a LIMITED amount of times
// let i is a TEMPORARY COUNTER
// "i" is a pretty COMMON naming convention for counters WITHIN a LOOP, 'i' meaning INDEX
console.log(`"let i" is a TEMPORARY COUNTER`);
console.log(
  `"i" is a pretty COMMON naming convention for counters WITHIN a LOOP, 'i' meaning INDEX`
);
for (let i = 0; i <= 2; i++) {
  console.log(i);
}

console.log("Happy New Year!");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log("Decrement by 2");
for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}

console.log("Increment by 3");
for (let i = 0; i <= 20; i += 3) {
  console.log(i);
}

console.log("Number 14 is is skipped");
console.log(`"continue" is to SKIP an ITERATION`);
for (let i = 0; i <= 20; i += 2) {
  if (i === 14) {
    continue;
  } else {
    console.log(i);
  }
}

console.log(`"break" is to BREAK OUT of the loop entirely`);
console.log(`It breaks after "i === 12"`);
for (let i = 0; i <= 20; i += 2) {
  if (i === 12) {
    break;
  } else {
    console.log(i);
  }
}

// FUNCTIONS, EXPRESSIONS & ARROW
// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.
function funHappyBirth() {
  console.log("Happy Birthday!");
  console.log("Happy Birthday!");
  console.log("Happy Birthday!");
}

funHappyBirth();

// Arguments/Parameters
function paraHappyBirth(name, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${name}!`);
  console.log("Happy birthday to you!");
  console.log(`You are ${age} years old!`);
}

paraHappyBirth("Bro", 21);
paraHappyBirth("Denji", 17);
paraHappyBirth("Asa", 17);

// Return
function addXY(x, y) {
  let result = x + y;
  return result;
}

let funcAnswer = addXY(2, 4);
console.log(funcAnswer);

function funcAdd(x, y) {
  return x + y;
}
function funcSubtract(x, y) {
  return x - y;
}
function funcMulti(x, y) {
  return x * y;
}
function funcDivi(x, y) {
  return x / y;
}
function funcIsEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function funcIsOdd(number) {
  return number % 2 != 0 ? true : false;
}

console.log(funcIsEven(10));
console.log(funcIsOdd(33));

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("bro.com"));
console.log(isValidEmail("bro@com"));

// FUNCTION EXPRESSIONS
// function expressions = a way to define functions as
//                        values or variables
//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners
// As a VARIABLE
const funExHello = function () {
  console.log("Hello!");
};
funExHello();

// As a VALUE
setTimeout(function () {
  console.log("What's up!");
}, 3000);

const funExNums = [1, 2, 3, 4, 5, 6];
const squared = funExNums.map(function (element) {
  return Math.pow(element, 2);
});
const cubed = funExNums.map(function (element) {
  return Math.pow(element, 3);
});
const funEvenNums = funExNums.filter(function (element) {
  return element % 2 === 0;
});
const funOddNums = funExNums.filter(function (element) {
  return element % 2 !== 0;
});
const funTotal = funExNums.reduce(function (accumulator, element) {
  return accumulator - element;
});

console.log(funEvenNums);
console.log(funOddNums);
console.log(funTotal);

// ARROW FUNCTIONS
// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
const arrowHello = (name) => console.log(`Hello ${name}!`);

arrowHello("Bro");

// { } ARE NEEDED IF MORE than ONE statement
const arrowAge = (age, bday) => {
  console.log(`You are ${age} years old!`);
  console.log(`Your birthday is in ${bday}`);
};
arrowAge(21, "Oct");

//
setTimeout(() => console.log("This is a callback!"), 3000);

//
const arrowNums = [1, 2, 3, 4, 5, 6];

const arrowSquare = arrowNums.map((element) => Math.pow(element, 2));
const arrowCube = arrowNums.map((element) => Math.pow(element, 3));
const arrowEven = arrowNums.filter((element) => element % 2 === 0);
const arrowOdd = arrowNums.filter((element) => element % 2 !== 0);
const arrowTotal = arrowNums.reduce(
  (accumulator, element) => accumulator + element
);

console.log(arrowTotal);

// ARRAYS[ 2D, OBJECT, SHUFFLE]
// array = a variable like structure that can
//         hold more than 1 value
let arrayFruits = ["apple", "orange", "banana"];

arrayFruits[0] = "coconut";
arrayFruits[3] = "apple";

arrayFruits.push("grapes"); // Push element to the end
arrayFruits.pop(); // Removes last element
arrayFruits.unshift("melon"); // Adds element at the beginning
arrayFruits.shift(); // Removes element from the beginning

console.log(arrayFruits[0]);
console.log(arrayFruits[1]);
console.log(arrayFruits[2]);
console.log(arrayFruits[3]);
console.log(arrayFruits[4]);

//
let numOfFruits = arrayFruits.length;
let arrayIndex = arrayFruits.indexOf("coconut");
let arrayNonIndex = arrayFruits.indexOf("mango");

console.log(numOfFruits);
console.log(arrayIndex);
console.log(arrayNonIndex);

//
for (let i = 0; i < arrayFruits.length; i += 2) {
  console.log(arrayFruits[i]);
}

//
for (let i = arrayFruits.length - 1; i >= 0; i--) {
  console.log(arrayFruits[i]);
}

//Shortcut of /\
// Advanced loop called, 'for of loop'
// Iterates through ARRAYS & STRINGS
for (let fruit of arrayFruits) {
  console.log(fruit);
}

//
let sortFruits = ["mango", "strawberry", "peach", "pineapple"];

// .sort() IN ALPHABETICAL ORDER
// .reverse() ALPHABETICAL ORDER
sortFruits.sort().reverse();

for (let sort of sortFruits) {
  console.log(sort);
}

// 2D array = multi-dimensional array that stores a matrix
//            of data in rows and columns.
//            Useful for games, spreadsheets, or representing images 
const matrix = [[1, 2, 3, 4], 
                [5, 6, 7], 
                [8, 9, ' ', '#'],
                [0]];

matrix[0][3] = 'x';
matrix[3][0] = 'x';

for(let row of matrix) {
  let rowString = row.join(' ');
  console.log(rowString);
}

// ARRAY OF OBJECTS
const aOFruits = [{name: "apple", color: "red", calories: 95}, 
                  {name: "orange", color: "orange", calories: 45}, 
                  {name: "banana", color: "yellow", calories: 105}, 
                  {name: "coconut", color: "white", calories: 159}, 
                  {name: "pineapple", color: "yellow", calories: 37}];
          
console.log(aOFruits[0]);
console.log(aOFruits[1].name);

// PUSH
aOFruits.push({name: "grapes", color: "purple", calories: 62});
console.log(aOFruits);

// POP
aOFruits.pop();
console.log(aOFruits);

// SPLICE
// aOFruits.splice(2);
aOFruits.splice(1, 2);
console.log(aOFruits);

//
const aOCars = [{name: "Porsche", color: "grey", max: 124}, 
                {name: "Lamborghini", color: "orange", max: 145}, 
                {name: "Ferrari", color: "red", max: 133}, 
                {name: "Aston", color: "grey", max: 129}, 
                {name: "Alfa", color: "red", max: 117}];

// ---------- forEach() ----------
aOCars.forEach(car => console.log(car.name));

// ---------- map() ----------
const carMake = aOCars.map(car => car.name);
const carColor = aOCars.map(car => car.color)
const carMax = aOCars.map(car => car.max)

console.log(carMake);
console.log(carColor);
console.log(carMax);

// ---------- filter() ----------
const redCars = aOCars.filter(car => car.color === "red");
const carO130 = aOCars.filter(car => car.max >= 130);
const carU130 = aOCars.filter(car => car.max < 130);

console.log(redCars);
console.log(carO130);
console.log(carU130);

// ---------- reduce() ----------
const reCar = aOCars.reduce((max, car) => car.max > max.max ? car : max);
const reMinCar = aOCars.reduce((min, car) => car.max < min.max ? car : min);

console.log(reCar);
console.log(reMinCar);


// SHUFFLE AN ARRAY
// Fisher-Yates algorithm
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// NOT RECOMMENDED for shuffling \/
// cards.sort(() => Math.random() - 0.5);

shuffle(cards);


console.log(cards);

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
      const random = Math.floor(Math.random() * (i + 1));

      [array[i], array[random]] = [array[random], array[i]];
  }
}


// JSON = (JavaScript Object Notation) data-interchange format 
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = {
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}
const jsonPeople = [{
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true
},
{
  "name": "Patrick",
  "age": 37,
  "isEmployed": false
},
{
  "name": "Squidward",
  "age": 50,
  "isEmployed": true
},
{
  "name": "Sandy",
  "age": 27,
  "isEmployed": false
} ];

// JSON.stringify()
const jsonString = JSON.stringify(jsonPeople);

console.log(jsonString);

// JSON.parse()
const jsonParse = JSON.parse(jsonNames);

console.log(jsonParse);

// fetch()
fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value.isEmployed)))
  .catch(error => console.error(error));