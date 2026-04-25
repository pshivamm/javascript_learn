//Operators in JavaScript

//1. Arithmetic operators
let a = 3;
let b = 2;

console.log("a + b =", a + b, ",", typeof(a+b)); // addition operator
console.log("a - b =", a - b); // subtraction operator
console.log("a * b =", a * b); // multiplication operator
console.log("a / b =", a / b); // division operator
console.log("a % b =", a % b); // modulus operator . it retures the reminder of the division of a by b.
console.log("a ** b =", a ** b); // exponentiation operator . it returens the value of a to the power of b.
console.log("++a =", ++a); // increment operator
console.log("--b =", --b); // decrement operator

let c = 5;
let d = 6;
console.log("c++ =", c++); // increment operator . because it print the value of c before incrementing it.
console.log("d-- =", d--); // increment operator . because it print the value of c before incrementing it.

//-------------------------------------------------------------------------------------------------------------------
//2. Assignment operators

let f = 10;

f += 5; // f = f + 5
console.log("f += 5 =", f);

let g = 10;
g -= 5; // g = g - 5
console.log("g -= 5 =", g);

let h = 10;
h *= 5; // h = h * 5
console.log("h *= 5 =", h);

let i = 10;
i /= 5; // i = i / 5
console.log("i /= 5 =", i);

let j = 10;
j %= 5; // j = j % 5
console.log("j %= 5 =", j);

let k = 10;
k **= 5; // k = k ** 5
console.log("k **= 5 =", k);


//-------------------------------------------------------------------------------------------------------------------
//3. Comparison operators

let x = 5;
let y = "5"

console.log("x == y =", x==y); //equality operator
console.log("x != y =", x!=y); //inequality operator
console.log("x === y =", x===y); //strict equality operator. it checks both value and type of values.
console.log("x !== y =", x!==y); //strict inequality operator. it checks both value and type of values.
console.log("x > y =", x>y); //greater than operator
console.log("x < y =", x<y); //less than operator
console.log("x >= y =", x>=y); //greater than or equal to operator
console.log("x <= y =", x<=y); //less than or equal to operator


//-------------------------------------------------------------------------------------------------------------------
//4. Logical operators

let p = 5; //or 5 < 10, 10 > 5, 5 == 5, 5 != 6, 5 >= 5, 5 <= 10 
let q = 10; //or 10 > 5, 10 == 10, 10 != 5, 10 >= 5, 10 <= 10

console.log("p && q =", p && q); // AND operator. it returns true if both operands are true, otherwise it returns false.
console.log("p || q =", p || q); // OR operator. it returns true if at least one of the operands is true, otherwise it returns false.
console.log("!p =", !p); // NOT operator. it returns true if the operand is false, and it returns false if the operand is true.
console.log("!q =", !q); // NOT operator. it returns true if the operand is false, and it returns false if the operand is true. 

//-------------------------------------------------------------------------------------------------------------------
//5. Type operators

let r = 5;
let s = "hello";
let t = true;

console.log("typeof r =", typeof r); // typeof operator. it returns the data type of the operand.
console.log("typeof s =", typeof s); // typeof operator. it returns the data type of the operand.
console.log("typeof t =", typeof t); // typeof operator. it returns the data type of the operand.

let u = [1, 2, 3];
let v = {name: "john", age: 30};

console.log("typeof u =", typeof u); // typeof operator. it returns the data type of the operand. it will return object because arrays are also objects in JavaScript.
console.log("typeof v =", typeof v); // typeof operator. it returns the data type of the operand. it will return object because objects are also objects in JavaScript.

//-------------------------------------------------------------------------------------------------------------------
//6. String operators

let str1 = "hello";
let str2 = "world";

console.log("str1 + str2 =", str1 + str2);
console.log("str1 + ' ' + str2 =", str1 + ' ' + str2); // concatenation operator. it concatenates two strings and returns a new string.

//-------------------------------------------------------------------------------------------------------------------
//7. Conditional (ternary) operator

let age = 18;
let isAdult = (age >= 18) ? "Yes" : "No"; // conditional (ternary) operator. it returns a value based on a condition. if the condition is true, it returns the first value, otherwise it returns the second value.
console.log("Is the person an adult?", isAdult);

let score = 65;
let isScoreGood = (score < 60) ? "Good" : "Bad";
console.log("Is score good?", isScoreGood);

let amount = prompt("what's amount of the mango: ");
let isAmount = (amount >= 80) ? "Okay" : "Not Okay";
console.log("The amount is", isAmount);