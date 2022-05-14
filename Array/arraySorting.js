let fruits = ["Apple", "Banana", "Watermelon", "Grapes", "Pineapple", "Kiwi"];
fruits.sort();
console.log(fruits);


let numbers = [0, 10, 49, 115, 63, 59, 88, 23];
numbers.sort();
console.log(numbers); // [0, 10, 115, 23, 49, 59, 63, 88]


// If the return value of the compareFunction is less than zero, the firstEle is sorted before the secondEle.
// If the return value is greater than zero, the secondEle is sorted before the firstEle.
// If the return value is zero, the positions of the firstEle and the secondEle are not changed.
numbers_ = [0, 10, 49, 115, 63, 59, 88, 23];
numbers.sort((firstEle, secondEle) => firstEle - secondEle);
console.log(numbers);  // [0, 10, 23, 49, 59, 63, 88, 115]


let arr = ["red", "orange", "blue", "green"];
arr.reverse();
console.log(arr); // ["green", "blue", "orange", "red"]


numbers = [0, 10, 49, 115, 63, 59, 88, 23];
numbers.sort((firstEle, secondEle) => firstEle - secondEle);
numbers.reverse();
console.log(numbers);  // [115, 88, 63, 59, 49, 23, 10, 0]