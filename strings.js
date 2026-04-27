// Strings & String Methods in JavaScript
//string: it is a sequence of characters. and it is immutable in nature. it means we cannot change the string once it is created. but we can create a new string by concatenating the existing string with the new string.

let a = "shivam";
console.log(a);

let b = 'hello world';
console.log(b);

//template literals: it is a new feature in ES6 which allows us to use multi-line strings and string interpolation.
let boy1 = "john";
let boy2 = "samay";

console.log(`${boy1} is the best friend of ${boy2}
    and ${boy2} is the best friend of ${boy1}`);

//Escape sequence characters: it is used to print the special characters in the string.
// \!, \", \', \\, \n, \t, \r, \b, \f, \v, \0
let c = "hello \0world";
console.log(c);


//----------------------------------------------------------------------------------------------------

//String methods: it is used to perform some operations on the string.

/* properties: length, constructor, prototype, __proto__, __defineGetter__, 
__defineSetter__, __lookupGetter__, __lookupSetter__, __hasOwnProperty__, 
__isPrototypeOf__, __propertyIsEnumerable__, __toString__, __valueOf__, 
__toLocaleString__, __charAt__, __charCodeAt__, __concat__, __includes__, 
__indexOf__, __lastIndexOf__, __match__, __replace__, __search__, __slice__, 
__split__, __substring__, __toLowerCase__, __toUpperCase__, __trim__, 
__trimStart__, __trimEnd__, __padStart__, __padEnd__, __repeat__, 
__startsWith__, __endsWith__, __valueOf__, __localeCompare__, __normalize__, 
__codePointAt__, __fromCharCode__, __fromCodePoint__, __raw__, __anchor__, 
__big__, __blink__, __bold__, __fixed__, __fontcolor__, __fontsize__, 
__italics__, __link__, __small__, __strike__, __sub__, __sup__, 
__trimLeft__, __trimRight__, __trimStart__, __trimEnd__, __toLocaleLowerCase__, 
__toLocaleUpperCase__, __toString__, __valueOf__, __localeCompare__, 
__normalize__, __codePointAt__, __fromCharCode__, __fromCodePoint__, 
__raw__, __anchor__, __big__, __blink__, __bold__, __fixed__, __fontcolor__, 
__fontsize__, __italics__, __link__, __small__, __strike__, __sub__, __sup__. */

/* function: toUpperCase, toLowerCase, concat, includes, indexOf, lastIndexOf, 
match, replace, search, slice, split, substring, trim, padStart, padEnd, repeat, 
startsWith, endsWith, valueOf, localeCompare */

let d = "hello world";
console.log(d.length);                      //for length of the string.
console.log(d.constructor);                 //for constructor of the string.

console.log(d.toUpperCase());                       //for upper case of the string.
console.log(d.toLowerCase());                       //for lower case of the string.
console.log(d.concat(" welcome to javascript"));    //for concatenation of the string.
console.log(d.includes("world"));                   //for checking the substring in the string.
console.log(d.indexOf("w"));                        //for finding the index of the substring in the string.
console.log(d.lastIndexOf("w"));                    //for finding the last index of the substring in the string.
console.log(d.match(/w/g));                         //for finding the all occurrences of the substring in the string.
console.log(d.replace("world", "javascript"));      //for replacing the substring in the string.
console.log(d.search("world"));                     //for searching the substring in the string.
console.log(d.slice(3, 7));                         //for slicing the string.
console.log(d.split(" "));                          //for splitting the string.
console.log(d.substring(0, 5));                     //for getting the substring from the string.
console.log(d.trim());                              //for removing the whitespace from the string.
console.log(d.padStart(20, "*"));                   //for padding the string at the start.
console.log(d.padEnd(20, "*"));                     //for padding the string at the end.
console.log(d.repeat(2));                           //for repeating the string.
console.log(d.startsWith("hello"));                 //for checking the string starts with the substring.
console.log(d.endsWith("world"));                   //for checking the string ends with the substring.
console.log(d.valueOf());                           //for getting the primitive value of the string.
console.log(d.localeCompare("hello world"));        //for comparing the string with another string.
console.log(d.normalize());                         //for normalizing the string.
console.log(d.codePointAt(2));                      //for getting the unicode of the character at the specified index.
console.log(String.fromCharCode(72));               //for getting the character from the unicode.
console.log(String.fromCodePoint(62));              //for getting the character from the unicode.
console.log(String.raw`hello\nworld`);              //for getting the raw string.



//-------------------------------------------------------------------------------------------------------------------
//Concatenation of the string: it is used to concatenate two or more strings.
let name = "john";

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

let name2 = "john + samay + raman + rohit";
console.log(name2);


