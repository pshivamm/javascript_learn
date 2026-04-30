//DOM in javascript
/*
DOM stands for Document Object Model. It is a programming interface for 
web documents.
*/

//1. DOM elements:
//getElementById():
let element = document.getElementById("myElement");

//getElementsByClassName():
let elements = document.getElementsByClassName("myClass");

//getElementsByTagName():
let tags = document.getElementsByTagName("p");

//querySelector():
let firstElement = document.querySelector(".myClass");

//querySelectorAll():
let allElements = document.querySelectorAll(".myClass");

//Manipulating DOM elements:
//innerHTML:
element.innerHTML = "Hello, World!";

//style:
element.style.background = "red";
element.style.color = "red";
document.body.style.background = "red";

//classList:
element.classList.add("newClass");
document.body.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("active");

//setAttribute():
element.setAttribute("data-id", "123");

//getAttribute():
let dataId = element.getAttribute("data-id");


//-------------------------------------------------------------------------------------

//2. BOM in javascript
/*
BOM stands for Browser Object Model. It is a programming interface for 
web browsers.
*/

//window object:
console.log(window);

//alert():
window.alert("This is an alert message.");

//confirm():
let result = window.confirm("Are you sure?");
console.log(result);

//prompt():
let name = window.prompt("What is your name?");
console.log(name);

//location object:
console.log(window.location);

//navigator object:
console.log(window.navigator);

//history object:
console.log(window.history);