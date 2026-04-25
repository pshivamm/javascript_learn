// Conditional-Expressions in JavaScript

let a = prompt("Enter your age: ");
a = Number.parseInt(a);
console.log(typeof a);

//If statement:

if (a >= 18) {
    alert("Your age is valid.");
}

//If-else statement:
let b = prompt("Enter your score:")
if (a < 33) {
    alert("your score is less that allegible score.")
}
else {
    alert("your score is allegible.")
}

//If-else-if statement:
let c = prompt("Enter your marks(%):");
Number.parseInt(c);

if (c < 33) {
    alet("you have failed the exam.")
}
else if (c > 33 && c <= 60) {
    alert("you have passed the exam with 3nd division.")
}
else if (c < 60 && c <= 80) {
    alert("you have passed the exam with 2nd division.")
}
else if (c < 80 && c <= 100) {
    alert("You have passed the exam with 1st division.")
}
else {
    alert("Invalid marks.")
}

//expressions:
const fruit = "mango";
switch (fruit) {
    case "Orange":
        console.log("Orange is a citrus fruit.");
        break;
    case "mango":
        console.log("Mango is a tropical fruit.");
        break;
    case "Banana":
        console.log("Banana is a tropical fruit.");
        break;
    default:
        console.log(`Sorry, we are out of ${fruit}.`);
}

const day = prompt("Enter any day of the week: ");
switch (day) {
    case "tuesday":
        console.log("it is Tuesday.");
        break;
    case "wednesday":
        console.log("it is wednesday.");
        break;
    default:
        console.log(`the day is not found ${day}.`);
}

