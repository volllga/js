// factorial = (n) =>{
//     let counter = 1;
//     let result = 1;
//     while (counter <= n){
//         result = result * counter;
//         ++counter;
//     }
//     return result;
// }
// console.log(factorial(12));

smallestDivisor = (n) => {
    if (n < 1) {
        return NaN;
    }
    else  if (n === 1) {
        return n;
    }
    let divisor = 2;
    while (divisor <= n){
        if (n % divisor === 0){
            return divisor;
        }
        ++divisor;
    }
}
console.log(smallestDivisor(1));
