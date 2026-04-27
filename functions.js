//functions in JS
// it is a block of code which performs a specific task.

let a = 10;
let b = 20;
let c = 30;

function sum(x, y) {
    return (x + y) / 2;
}

let result = sum(a, b);
console.log(result);

//if the function have not return statement then.
function sum1(x, y) {
    console.log((x + y) / 2);   
}

sum1(a, b);

//-------------------------------------------------------------------------------------------------------------------
//arrow function: it is a shorter syntax for writing a function.
const sum2 = (x, y) => {
    return (x + y) / 2;
}

console.log(sum2(a, c));

//-------------------------------------------------------------------------------------------------------------------
//if the function body has only one statement then we can omit the curly braces and the return keyword.
const sum3 = (x, y) => (x + y) / 2;

console.log(sum3(a, c));

//-------------------------------------------------------------------------------------------------------------------
//if the function has only one parameter then we can omit the parentheses around the parameter.
const square = x => x * x;

console.log(square(a));

//-------------------------------------------------------------------------------------------------------------------
//if the function has no parameter then we can use empty parentheses.
const greet = () => {
    console.log("Hello World!");
    return "hii"; //if it is not available.
};

// greet(); //then we can do this.
let v = greet();
console.log(v);