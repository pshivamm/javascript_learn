// map, reduce, filter in javascript

/* 
1. map: create a new array by applying a function to each element of the original 
array.
2. filter: create a new array by filtering the elements of the original array 
based on a condition.
3. reduce: reduce the array to a single value by applying a function to each 
element of the array.
*/

// map:
let num = [11, 22, 33, 44, 55];

// let newNum = num.map((element) => {
let newNum = num.map((element, index, array) => { // element: current element, index: index of current element, array: original array
    console.log(element, index, array);
    return element + 1;
})

console.log(newNum);


//filter:
let num2 = [13, 200, 45, 67, 89, 100];

let newNum2 = num2.filter((a) => {
    return a < 50;
})

console.log(newNum2);


//reduce:
let num3 = [1, 2, 3, 4, 5];

let newNum3 = num3.reduceRight((h1, h2) =>{
    return h1 + h2;
})
console.log(newNum3);

/*
Write a JavaScript brogram to generate a random number and store it in a variable.
The program then takes an inbut from the user to tell them whether the guess was 
correct, greater or lesser than the original number.
*/



let a = 0;
console.log(Math.floor(Math.random(a)));

let b = prompt("Enther your guessed number: ")

if (b == a){
    alert("Your guessed number is correct.");
}
else if (b > a){
    alert("your guessed number is greater than randon nuumber.");
}
else if (b < a){
    alert("your guessed number is less than randon nuumber.");
}
else{
    alert("Your number is not correct.");
}

console.log("Then corect number is: " + a)



// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Take user input
let userGuess = prompt("Guess a number between 1 and 100:");
userGuess = Number(userGuess);

// Check the guess
if (userGuess === randomNumber) {
    alert("Correct! You guessed the number.");
} else if (userGuess > randomNumber) {
    alert("Your guess is greater than the number.");
} else if (userGuess < randomNumber) {
    alert("Your guess is less than the number.");
} else {
    alert("Invalid input. Please enter a number.");
}

// (Optional) reveal the number
console.log("The correct number was: " + randomNumber);