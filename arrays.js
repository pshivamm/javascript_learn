// Arrays in javascript: 
// it is a data structure that can hold multiple values in a single variable. it is an ordered collection of values. it can hold values of any type. it is mutable in nature. it means we can change the array once it is created.

let marks12th =[80, 95, 75, 90, 85, null, undefined, "hello", [1, 2, 3], {name: "john", age: 30}];

/*console.log(marks12th.length);
console.log(typeof(marks12th));

console.log(marks12th[0]);
console.log(marks12th[1]);
console.log(marks12th[2]);
console.log(marks12th[3]);
console.log(marks12th[4]);
console.log(marks12th[5]);
console.log(marks12th[6]);
console.log(marks12th[7]);
console.log(marks12th[8]);
console.log(marks12th[9]);

console.log(marks12th[9][2]); // for accessing the first element of the nested array.
marks12th[5] = 180;
console.log(marks12th);*/

// for (let i = 0; i < marks12th.length; i++){
//     console.log(marks12th[i]);
// }


// array method: 
// toString(), join(), pop(), 

let num = [10, 15, 20, 25, 30];
let b = num.toString();

console.log(b, typeof b);

let c = num.join(" and ");
console.log(c);

let d = num.pop();

console.log(d);

let e = num.push(35);
console.log(num, e);

let f = num.shift();
console.log(num,f);

let g = num.unshift(45);
console.log(num,f);

let num2 = [21, 31, 41, 51, 61];
let num3 = [71, 81, 91, 101, 111, 121, 131, 141, 151];

let h = delete num2[2];
console.log(num2, h, "length of array after delete:", num2.length);

let i = num.concat(num2, num3);
console.log(i);

let j = num3.sort();
console.log("Sort:", j);

let compareAscend = (a, b)=>{
    return a - b;
}
num3.sort(compareAscend);
console.log("Ascending order of the array: ", num3);

let compareDescend = (a, b)=>{
    return b - a;
}
num3.sort(compareDescend);
console.log("Descending order of the array: ", num3);

let k = num3.reverse();
console.log("Reverse:", k);

let m = num3.slice(1, 4);
console.log("Slice:", m);

let n = num3.splice(1, 2, 200, 300);
console.log("Splice:", num3); 