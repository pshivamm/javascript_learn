//loops in javascript
// for loop used ot perform repetitive actions.
//statement1: it excute one time.
//statement2: it is the condition base on which the loop will run.
//statement3: it is the increment or decrement of the loop.


//-------------------------------------------------------------------------------------------------------------------
//for loop:
// for (let i = 0; i <= 20; i++) {
//     console.log(i)
// }

let n = prompt("Enter the value of n: ")
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += (i + 1);
    console.log(i + 1, sum);
}
console.log("Sum of the first" + n + "natural number is" + sum);
// console.log(i); //it is work when the variable define to "var(global scope)".


//-------------------------------------------------------------------------------------------------------------------
//for in loop:

let obj = {
    john: 30,
    samay: 40,
    raman: 90,
    rohit: 66
}

for (let a in obj) {
    console.log("marks of " + a + " is " + obj[a]);
};


//-------------------------------------------------------------------------------------------------------------------
//for of loop: it is used to iterate over the values of an object.

let obj2 = {
    name: "john",
    city: "New York",
    country: "USA"
}

for (let b of "name") {
    console.log(b);
};


//-------------------------------------------------------------------------------------------------------------------
//while loop: it works on like first condition check and then block run and again if condition true then block run.

let c = prompt("Enter the value of c: ");
c = Number.parseInt(c);

let d = 0;

while (d < c) {
    console.log(d);
    d++; //if i comment this then the increament not happening and the output will be 0 for infinite time and it can crash the PC.
};


//-------------------------------------------------------------------------------------------------------------------
//do loop: it works on like first block run then condition check. and it will excute at least one time.

let e = prompt("Enter the value of e: ");
e = Number.parseInt(e);

let f = 0;

do {
    console.log(f);
    f++; //if i comment this then the increament not happening and the output will be 0 for infinite time and it can crash the PC.
} while(f<e);