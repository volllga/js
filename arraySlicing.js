let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];

let newArr = arr.slice(1, 4);
console.log("arr = " + arr); // [ 'one', 'two', 3, 6, 'seven', 8 ]
console.log("newArr = " + newArr); // [ 'one', 'two', 3, 6, 'seven', 8 ]

arr.splice(3, 2); // splice() changes the contents of the original array.
console.log("arr 1 = " + arr); // [ 'one', 'two', 3, 6, 'seven', 8 ]

arr.splice(3, 2, "WoW", "four");
console.log("arr 2 = " + arr); // [ 'one', 'two', 3, "Wow", 'four', 8 ]

arr.splice(3, 0, "new", "4R4");
console.log("arr 3 = " + arr); // [ 'one', 'two', 3, "new", "4R4", "Wow", 'four', 8 ]

arr.splice(-3);
console.log("arr 4 = " + arr); // [ 'one', 'two', 3, "new", "4R4"]

let str = "*one* two three";
let arrFromStr = str.split(" ", 1);
console.log('arrFromStr = ' + arrFromStr); // [ '*one*' ]

let arrConcat = arr.concat(arrFromStr);
console.log('arrConcat = ' + arrConcat);// [ one,two,3,new,4R4,*one* ]

let arrConcat2 = [].concat(arr, arrFromStr);
console.log('arrConcat2 = ' + arrConcat2);// [ one,two,3,new,4R4,*one* ]

let arrConcat3 = [999].concat(arr, arrFromStr);
console.log('arrConcat3 = ' + arrConcat3);// [ 999,one,two,3,new,4R4,*one* ]
console.log(typeof arrConcat3[0], typeof arrConcat3[1]);

let color1 = "red";
let color2 = "blue";
console.log(color1.concat(" ", color2), typeof color1.concat(" ", color2)); // red blue
console.log("".concat(1, true), typeof "".concat(1, true)); // 1true