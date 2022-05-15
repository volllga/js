// function isPrime(n){
//     if (n <= 1){
//         return false;
//     }
//     for(let i = 2; i <= n; i++){
//         if (n % i === 0){
//             if (i === n){
//                 return true;
//                 break;
//             }
//             else {
//                 return false;
//                 break;
//             }
//         }
//     }
// }

const isPrime = (x) => { // мое решение совпало с учительским, кроме while(i <= x / 2)
    if(x < 2) {          // уменя было while(i < x)
        return false;
    }
    let i = 2;
    while(i <= x / 2) {
        // console.log(i);
        if(x % i === 0) {
            return false;
        }
    i += 1;
    }
    return true;
}

console.log(isPrime(2017)); //true
console.log(isPrime(15)); //false
console.log(isPrime(22)); //false
console.log(isPrime(13)); //true
console.log(isPrime(-3)); //false
console.log(isPrime(0)); //false
// assert.equal(area(98), 8284);