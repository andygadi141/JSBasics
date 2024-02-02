// JAVASCRIPT WITH HTML (DOM) (NAV) 
// DOM = DOCUMENT OBJECT MODEL

      // Object{} that represents the page you see in the web browser 

      // and provides you with an API to interact with it.

      // Web browser constructs the DOM when it loads an HTML document,

      // and structures all the elements in a tree-like representation.

      // JavaScript can access the DOM to dynamically 

      // change the content, structure, and style of a web page.

// document.getElementById();
document.title = "My website"
document.body.style.backgroundColor = "hsl(0, 0%, 50%)"
console.log(document); 
// console.dir(document); 

const userName = "Bro"
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += userName === "" ? `Guest` : userName;

//  
let a = 2;
let b = 4;

console.log(a += b);
console.log(a);

//onclick using only JS
  document.getElementById("btn").onclick = function() {myFunction()};

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

ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "violet";
})

// ---------- .lastElementChild ----------
const lastEl = document.getElementById("desserts");
const lastChild = lastEl.lastElementChild;
lastChild.style.backgroundColor = "lightblue";


const lastUl = document.querySelectorAll("ul");

lastUl.forEach(lastEle => {
  const lastCh = lastEle.lastElementChild;
  lastCh.style.backgroundColor = "orange"
})

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

Array.from(children).forEach(child => {
  child.style.backgroundColor = "lightgreen";
})

children[1].style.backgroundColor = "lightblue";

// SYNTAX AND VARIABLES, SCOPE
// VARIABLES
