let marks = new Array(5); // create an Array of 5 undefined elements
let marks1 = [45, 50, 44, 30, 29];
marks1[10] = 65;
console.log(marks1); // [ 45, 50, 44, 30, 29, <5 empty items>, 65 ]


console.log("---------------------------");

const myNumbers = [1, 4, 7, 10, 15];
// fill with 0 from position 1 until position 3
console.log(myNumbers.fill(0, 1, 3)); // [1, 0, 0, 10, 15]
console.log(myNumbers.fill(13)); // [13, 13, 13, 13, 13]
// fill with 5 from position 2
console.log(myNumbers.fill(5, 2)); // [13, 13, 5, 5, 5]
let numberArray = new Array(6).fill(2); // [2, 2, 2, 2, 2, 2]

console.log("---------------------------");

Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
function createArray() {
    return Array.from(arguments);
}
createArray(2, 4, 6); // [2, 4, 6]

Array.from([3, 5, 7], x => x * x); // [9, 25, 49] Array.from(object, mapFunction, thisValue)

console.log("---------------------------");

Array.of(15); // [15]
Array.of(101, 202, 303); // [101, 202, 303]
Array.of(undefined); // [undefined]

console.log("---------------------------");

let array1 = ['item1', 'item2', 'item3', 'item4', 'item5'];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]); // 'item1', 'item2', 'item3', 'item4', 'item5'
}

console.log("---------------------------");

let array2 = [1, 2, 3, 4, 5];
array2.forEach(function(item) {
    console.log(item); // 1, 2, 3, 4, 5
});

console.log("---------------------------");

let result = array2.forEach(function(item, index, array) { //this method does not return anything.
    console.log('a[' + index + '] = ' + item * 2);
});
// The result is:
// a[0] = 1
// a[1] = 2
// a[2] = 3
// a[3] = 4
// a[4] = 5
console.log(result);

function doubleA(arr) {
    arr.forEach(function(item, index){
        arr[index] = item * 2;
    });
    return arr;
}

console.log("---------------------------");

let array3 = [1, 2, 3, 4, 5];
array3.forEach((e) => {
    console.log(e +' from array3'); //1, 2, 3, 4, 5
});

console.log("---------------------------");

let array4 = ['a', 'b', 'c'];
array4.stringProperty = 'd';

for (let i in array4) {
    console.log(i, array4[i]);
}
//0 a
//1 b
//2 c
//stringProperty d

console.log("---------------------------");

function doubleArr(arr) {
    return arr.map(x => x * 2);
}