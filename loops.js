//loops in javascript
// for loop used ot perform repetitive actions.
//statement:

//for loop:
// for (let i = 0; i <= 20; i++) {
//     console.log(i)
// }

let n = prompt("Enter the value of n: ")
let sum = 0;
for (let i = 0; i < n; i++){
    sum += (i+1);
    console.log(i+1, sum);
}
console.log("Sum of the first", n, "natural number is", sum);
