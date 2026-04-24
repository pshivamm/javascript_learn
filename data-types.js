//Premitive data types in JavaScript

// nn bb ss u
let a = null; //null
let b = 100;  //number, it should be integer (100) or decimal(99.99)
let c = true; //boolean
let d = BigInt(6323648); //BigInt
let e = "john"; //string
let f = Symbol("id"); //symbol
let g = undefined //undefined, (let g);

console.log(typeof d);


//Non-primitive data types in JavaScript

//object: it stores data in key-value pairs.
let person = {
    name: "john",
    age: 30,
    city: "New York"
}

// console.log(item["name"]);

// array: it stores multiple values in single variable.
let numbers= [1, 2, 3, 4, 5];
console.log(numbers[0]); 

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

let alphabets = [a, b, c, d, e, f, g];
console.log(alphabets[0]); // This will print null because a is assigned to null.