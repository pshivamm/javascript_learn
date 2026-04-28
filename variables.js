var a  = 35;
console.log(a);

var b;
console.log(b);
b = 45;

//var can be used before declaration but it will be undefined. 
// This is called hoisting. and it is function scoped.

console.log(c);
// let c = 55;

// let are not hoisted. because they are not initialized at the time of declaration.
// They are also block scoped.

// const d;
// d = 65;

// const variables must be initialized at the time of declaration.
// d = 65; // This will throw an error because d is a constant variable and it cannot be reassigned.
// const is used to declare a constant variable. It cannot be reassigned.
// const are not hoisted.
// It is also block scoped.

//hoisting: it is a mechanism in javascript where variables and functions are moved to the top of their scope before the code is executed. 
// This means that you can use a variable or function before it is declared in the code. 
// However, only var variables are hoisted, let and const are not hoisted. because they are not initialized at the time of declaration.