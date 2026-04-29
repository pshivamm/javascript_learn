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