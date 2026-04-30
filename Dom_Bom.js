// //DOM in javascript
// /*
// DOM stands for Document Object Model. It is a programming interface for 
// web documents.
// */

// //1. DOM elements:
// //getElementById():
// let element = document.getElementById("myElement");

// //getElementsByClassName():
// let elements = document.getElementsByClassName("myClass");

// //getElementsByTagName():
// let tags = document.getElementsByTagName("p");

// //querySelector():
// let firstElement = document.querySelector(".myClass");

// //querySelectorAll():
// let allElements = document.querySelectorAll(".myClass");

// //Manipulating DOM elements:
// //innerHTML:
// element.innerHTML = "Hello, World!";

// //style:
// element.style.background = "red";
// element.style.color = "red";
// document.body.style.background = "red";

// //classList:
// element.classList.add("newClass");
// document.body.classList.add("newClass");
// element.classList.remove("oldClass");
// element.classList.toggle("active");

// //setAttribute():
// element.setAttribute("data-id", "123");

// //getAttribute():
// let dataId = element.getAttribute("data-id");


// //-------------------------------------------------------------------------------------

// //2. BOM in javascript
// /*
// BOM stands for Browser Object Model. It is a programming interface for 
// web browsers.
// */

// //window object:
// console.log(window);

// //alert():
// window.alert("This is an alert message.");

// //confirm():
// let result = window.confirm("Are you sure?");
// console.log(result);

// //prompt():
// let name = window.prompt("What is your name?");
// console.log(name);

// //location object:
// console.log(window.location);

// //navigator object:
// console.log(window.navigator);

// //history object:
// console.log(window.history);


// //-------------------------------------------------------------------------------------

// //walking the DOM:
// /*
// text node: It represents the text content of an element.
// element node: It represents an HTML element.
// comment node: It represents a comment in the HTML document.
// */

// //parentNode:
// let parent = element.parentNode;

// //childNodes:
// let children = element.childNodes;

// //firstChild:
// let firstChild = element.firstChild;

// //lastChild:
// let lastChild = element.lastChild;

// //nextSibling:
// let nextSibling = element.nextSibling;

// //previousSibling:
// let previousSibling = element.previousSibling;


// //------------------------------------------------------------------------------
// //element only navigation:

// //children:
// let elementChildren = element.children;

// //firstElementChild:
// let firstElementChild = element.firstElementChild;

// //lastElementChild:
// let lastElementChild = element.lastElementChild;

// //nextElementSibling:
// let nextElementSibling = element.nextElementSibling;

// //previousElementSibling:
// let previousElementSibling = element.previousElementSibling;


//-------------------------------------------------------------------------------------
//table navigation:
let table = document.getElementById("myTable");

//rows:
let rows = table.rows;
console.log("rows:", rows);

//cells:
let cells = table.rows[0].cells;
console.log("cells:", cells);

//rowIndex:
let rowIndex = table.rows[0].rowIndex;
console.log("rowIndex:", rowIndex);

//cellIndex:
let cellIndex = table.rows[0].cells[0].cellIndex;
console.log("cellIndex:", cellIndex);

//table caption:
let caption = table.caption;
console.log("caption:", caption);

//table tHead:
let tHead = table.tHead;
console.log("tHead:", tHead);

//table tFoot:
let tFoot = table.tFoot;
console.log("tFoot:", tFoot);

//table tBodies:
let tBodies = table.tBodies;
console.log("tBodies:", tBodies);


//-------------------------------------------------------------------------------------
// Dom searching:

let nLink = document.getElementsByClassName("nav-link");
nLink[1].style.color="red";
console.log(nLink);

let dLink = document.querySelectorAll(".dropdown-item");
dLink[0].style.color="blue";
console.log(dLink);


//-------------------------------------------------------------------------------------
// Dom matches, closest and contains:

//matches():
let navLink = document.querySelector(".nav-link");
console.log(navLink.matches(".nav-link")); // true
console.log(navLink.matches(".dropdown-item")); // false

//closest():
let dropdownItem = document.querySelector(".dropdown-item");
let closestNav = dropdownItem.closest(".dropdown-menu");
console.log(closestNav);

//contains():
let navBar = document.querySelector(".navbar");
console.log(navBar.contains(dropdownItem)); // true



//-------------------------------------------------------------------------------------
// Dom properties and attributes:

//id:
let element = document.getElementById("myElement");
console.log(element.id);

//className:
console.log(element.className);