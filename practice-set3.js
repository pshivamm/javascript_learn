// Chapter 2 - Practice set

// 1. Write a program to print the marks of a student in object using for loop.
// obj = { harry: 98, vohan: 70, aakash: 73}

let marks = {
    harry: 98, 
    vohan: 70, 
    aakash: 73
}

// for (let i in marks){
//     console.log("marks of the " + i + " is " + marks[i]);
// }

//another way
for (let i = 0; i < Object.keys(marks).length; i++){
    console.log("makrks of the " + Object.keys(marks));
    console.log("makrks of the " + Object.keys(marks)[i]);
    console.log("makrks of the " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}


// 2. Write the program in Q1. using for in loop.

for (let i in marks){
    console.log("marks of the " + i + " is " + marks[i]);
}

// 3. Write a program to print "try again" until the user enters the correct number.

let correctNumber = 40;
let userInput;

while (userInput !== correctNumber) {
    userInput = prompt("Enter the correct number: ");
    userInput = Number.parseInt(userInput);
    console.log(userInput + " try again");
}

console.log("You have entered the correct number:" + userInput);


// 4. Write a function to find mean of 5 numbers.
const mean = (a, b, c ,d, e) => (a + b + c + d + e)/5;

let meanResult = mean(15, 45, 53, 44, 75);

// meanResult = Math.round(meanResult);
console.log(meanResult);