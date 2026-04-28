let num = [121, 122, 123, 124, 125];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// forEach loop: 
// it is a method of array which takes a callback function as an argument and executes the callback function for each element of the array.
num.forEach((element)=>{
    console.log(element * element);
});

//Array.from(): it is a method of array which creates a new array from an array-like or iterable object.
let name = "john";
let nameArray = Array.from(name);
console.log(nameArray, typeof nameArray);

//for ... 0f loop: it is a loop which is used to iterate over the elements of an array.
for (let i of num){
    console.log(i);
}

//for  ... in loop: it is a loop which is used to iterate over the properties of an object.
for (let item in num){
    console.log(item);
}