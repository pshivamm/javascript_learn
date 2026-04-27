// Chapter 2 - Practice set
//----------------------------------------------------------------------------------------------------

// 1. What will the following print in Javastript!
// Console log ( "har"" length)
console.log( "har\"".length );


// 2. Explore the includes, starts with & ends with functions a string.
let str = "hello world";
console.log(str.includes("world")); // for checking the substring in the string.
console.log(str.startsWith("hello")); 
console.log(str.endsWith("world"));


// 3. Write a program to convert a given string 1owercase.
console.log(str.toLowerCase());


// 4. Extract the amount out of this string "Please give Rs 1000".
let str2 = "Please give Rs 1000";
// console.log(str2.slice(15, 19)); or
// console.log(str2.slice("Please give Rs ".length)); // or
console.log(str2.slice(str2.indexOf("Rs") + 3)); // for slicing the string from the index of "Rs" + 3 to the end of the string.
console.log(str2.slice());
console.log(str2.indexOf("Rs"));


// 5. Try to change 4th characters of a given string were you able to do it?
let str3 = "Hello World";
str3[3] = "a";
console.log(str3); // No, we cannot change the string because it is immutable in nature. but we can create a new string by concatenating the existing string with the new string.