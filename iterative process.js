// const smallestDivisor = (num) => {
//     // BEGIN (write your solution here)
//     const divisor = (num, acc) => {
//         if (num % acc === 0){
//             return acc;
//         }
//         return divisor (num, acc + 1);
//     }
//     if (num === 1 || num === 0){
//         return 1;
//     }
//
//     return divisor (num, 2);
//     // END
// };

//console.log(smallestDivisor(0))


// вычислениеи суммы последовательности от нуля до данного положительног числа

// const summa = (n) => {
//     summa_sequence = (counter, acc) =>{
//         if (counter === 0){
//             return acc;
//         }
//         return summa_sequence(counter - 1, acc + counter);
//     }
//     return summa_sequence (n, 0);
// }
//
// console.log(summa(5));


// вычислениеи суммы последовательности от нуля до данного положительного числа
const summa = (start, end) => {
    summa_sequence = (acc, counter) =>{
        if (counter === start){
            return acc;
        }
        return summa_sequence(acc + counter, counter - 1);
    }
    return summa_sequence (start, end);
}
console.log(summa(-2, 10461)); // ломается на 10462

summ_x = 0;
for (let i = -2; i <= 3000000; i++){
    let = summ_x += i
}
console.log(summ_x);