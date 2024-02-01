// JAVASCRIPT WITH HTML (DOM) (NAV) 
// DOM = DOCUMENT OBJECT MODEL

//      Object{} that represents the page you see in the web browser 

//      and provides you with an API to interact with it.

//      Web browser constructs the DOM when it loads an HTML document,

//      and structures all the elements in a tree-like representation.

//      JavaScript can access the DOM to dynamically 

//      change the content, structure, and style of a web page.

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


