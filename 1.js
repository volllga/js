let firstStr = "Apple";
let secondStr = "Apple Iphone";

let compareTwo = secondStr.localeCompare(firstStr);
console.log(compareTwo);

let txt = "I slit the sheet, the sheet I slit, and on the slitted sheet I sit";
let searchStr = 'sheet';

console.log(txt.search(searchStr));

let text = "I am Even: 2, 4, 6, 8, 10";
let str1 = /\d+/g; //\d - digit , \s - whitespace
let str2 = /\s+/g;

console.log(text.search(str1), text.search(str2));

let textData = "I have got a date at a quarter to eight; I'll see you at the gate, so don’t be late";
let position = textData.search(/['']/);

console.log(position);