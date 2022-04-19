//array.map(function(currentValue, index, arr));  MAP function

const numbers = [5, 10, 15, 20, 25];
let numbersByThree = numbers.map(function (element) {
    return element * 3;
});
let numbersByThreeArrow = numbers.map((element) => {
    return element * 3;
});
console.log(numbers.map(item => item * item));
console.log(numbers.map(Math.sqrt)); // [2.23, 3.16, 3.87, 4.47, 5]

let phrase = 'Hyperskill is an excelent place to study';
let arr = phrase.split(' ');
let newPhrase = arr.join(' _ ');
let newString = arr.toString();
console.log(phrase, arr, newPhrase, newString);