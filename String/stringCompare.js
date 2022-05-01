const referenceStr = "A";
const string = "B";

let compare = referenceStr.localeCompare(string);
console.log(compare);
console.log("__________");

console.log("C".localeCompare("A"));
console.log("S".localeCompare("S"));
console.log("A".localeCompare("B"));
console.log("__________");

let txt = "Hello JavaScript! It's fun to learn string methods in JavaScript and javascript";

// Regular expression with 'g' modifier
let regExp = /JavaScript/g;

// string.match() function
let matchFound = txt.match(regExp);

// Printing the array object
console.log(matchFound); //[ 'JavaScript', 'JavaScript' ]

console.log("__________");


let txt2 = "Hello JavaScript! It's fun to learn string methods in javascript";

// Regexp with 'i' modifier
let regExp2 = /javascript/i;

let matchFound2 = txt2.match(regExp2);

// Printing the array object
console.log(matchFound2);
console.log("__________");

const str = "No need to light a night-light on a light night like tonight";

// Regex is passed as an argument
let lightRegExp = /light/;
console.log(str.search(lightRegExp)); // 11

// String will be converted to regexp internally
let night = "night";
console.log(str.search(night)); // 19

// Passed argument is not present in str
let day = "day";
console.log(str.search(day)); // -1