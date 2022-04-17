let regex = new RegExp('[a-z]', 'i');
let regex2 = /[a-z]/i;
// This is also valid
let regex3 = new RegExp(/[a-z]/i);
let regex4 = new RegExp(/[a-z]/, 'i');
let regex44 = /RegExp is very useful[!.]/  // Match a single character present in the list below [!.]

console.log('2-----------------------');
let regex5 = new RegExp('\w');

console.log(regex5.test('abc')); // false  regex.test(string)
console.log(regex5.test('w')); // true

console.log('3-----------------------');
let regex6 = new RegExp('\\w');
let regex7 = new RegExp(/\w/);
console.log(regex6.test('abc')); // false
console.log(regex7.test('w')); // true

console.log('4-----------------------');
let regex8 = /\d+/; //a string containing one or more + digits

console.log(regex8.test('2021')); // true
console.log(regex8.test('199')); // true
console.log(regex8.test('a5b')); // true
console.log(regex8.test('')); // false

console.log('5-----------------------');
let regex9 = /JavaScript ES./; // . dot Matches any character except linebreaks. Equivalent to [^\n\r].
// try to change . to \.
console.log(regex9.test('JavaScript ES6')); // true
console.log(regex9.test('JavaScript ES7')); // true
console.log(regex9.test('JavaScript ES')); // false because there's no character after ES

console.log('6-----------------------');
let regex0 = /I have \d dogs?/;

console.log(regex0.test('I have 1 dog')); // true
console.log(regex0.test('I have 2 dogs')); // true
console.log(regex0.test('I have 3 dogsqqq')); // true