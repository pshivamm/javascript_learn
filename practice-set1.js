// Chapter 1 - Practice Set

// 1. Create a variable of string and try to add a number to it.
let a = "hello";
let b = 5;
c = a + b;
console.log(c);

// 2. Use typeof operator to find the data type of the string created in question 1.
console.log(typeof c);

// 3. Create a const object in JS can you change it to hold a number later?
const person = {
    name: "john",
    age: 30,
    city: "New York"
}
// person = 5; // This will throw an error because person is a constant variable and it cannot be reassigned.

// 4. Try to add a new key to the const object created in question 3. where you able to do it?
person['country'] = "USA"; // This will work because we are not reassigning the person variable, we are just adding a new key to the object.
person['name'] = "Sam"
console.log(person);

// 5. Write a JS program to create a word-meaning dictionary of 5 words. 

let disctonary = {
    "hello": "a greeting",
    "world": "the earth, together with all of its countries and peoples",
    "javascript": "a programming language",
    "python": "a programming language",
    "java": "a programming language"
}

console.log(disctonary["hello"]);
console.log(disctonary.hello);
console.log(disctonary[2]); // This will print undefined because disctonary is an object and it does not have an index like an array. We can only access the values using the keys.