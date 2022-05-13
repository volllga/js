// function getRandom() {   // from 1 to 3
//     return Math.floor(Math.random() * 3) + 1;
// }

// for (let i = 0; i < 10; i++) {
//     console.log('getRandom', getRandom());
// }

//_______________________________________________

// const romanNumbers = ["I", "II", "III", "IV", "V"];
//
// function getRomanNumber(array) {
//     let index = Math.floor(Math.random() * array.length + 1);
//     if(index < array.length){
//         return array[index];
//     } else {
//         return array[index - 1];
//     }
// }
//
// for (let i = 0; i < 10; i++) {
//     console.log(getRomanNumber(romanNumbers));
// };

//___________________________________________________________

// function result(a, b, c, d){
//     if(a === c && b === d){
//         return 2;
//     } else if((a >= b &&  c >= d) || (a < b &&  c < d)) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
//
// console.log(result(2, 2, 4, 4))

//___________________________________________________________

// const salary = 25000;
// const expenses =[4000, 1000, 5000]
//
// function getSalary(expenses) {
//     let remainingSalary = expenses
//             .reduce(function subtraction(difference, subtrahend) {
//         return difference -= subtrahend;
//     }, salary);
//     return console.log(remainingSalary);
// }
//
// getSalary(expenses)

//___________________________________________________________

// const numbers = [2, 1, 2];
// function calculateExp(numbers){
//     let result = numbers.reduce((acc, num) => {
//         return acc ** num;
//     })
//     console.log(result);
// }
// calculateExp(numbers);