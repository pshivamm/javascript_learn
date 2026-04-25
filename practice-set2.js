// Chapter 2 - Practice set

// 1. Use logical operatore to find whether the age person lies between 10 and 20?
let agee = prompt("Tell me your age: ")

if (agee>10 && agee<=20){
    console.log("the age is between 10 and 20.")
}
else{
    console.log("the age is not between 10 and 20.")
}


// 2. Demonstrate the use of switch case statements in JavaScript.
const books = "math";
switch (books) {
    case "english":
        console.log("this is the english book.")
        break;
    case "hindi":
        console.log("this is the hindi book.")
        break;
    case "math":
        console.log("this is the math book.")
        break;
    default:
        console.log(`book is not available ${books}.`)
}


// 3. Write a Java Script program to find Whether a number is Divisible by 2 and 3.

let num = prompt("what is your number: ")

if (num%2 === num%3){
    console.log("your number is divisible by 2,3.")
}
else {
    console.log("your number is not divisible by 2,3.")
}


// 4. Write a Javascript program to find whether a number is Divisible by either 2 оr 3.

let numb = prompt("what is your second number: ")

if (numb%2 === 0){
    console.log("your number is divisible by 2.")
}
else if (numb%3 === 0) {
    console.log("your number is not divisible by 3.")
}
else{
    console.log("your number is not divisible by both 2,3.")
}


//5. Print " You can Drive " or " You cannot Drive" based on age being greater that 18 using ternary operator.
let age = prompt("what's your age: ")
let isAge = (age>18)? "You can drive.": "You cannot drive.";

console.log(isAge);
