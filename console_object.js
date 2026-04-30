//console in javascript 
/* 
it is used to print the output on the console. It is a built-in object that provides 
access to the browser's debugging console. The console object has several methods, 
such as log(), error(), warn(), and info(), which can be used to display different 
types of messages.
*/

//log():
console.log("Hello, World!");

//error():
console.error("This is an error message.");

//warn():
console.warn("This is a warning message.");

//info():
console.info("This is an informational message.");

//table():
let person = {
    name: "John",
    age: 30,
    city: "New York"
}

console.table(person);

//time() and timeEnd():
console.time("myTimer");
for (let i = 0; i < 1000000; i++) {
    // some code to execute
}

console.timeEnd("myTimer");

//clear():
// console.clear();

//assert():
let x = 5;
console.assert(x > 10, "x is not greater than 10");

//count():
console.count("myCounter");
console.count("myCounter");
console.count("myCounter");

//dir():
console.dir(person);
