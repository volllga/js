function nod(x, y) {
    let i = Math.max(x, y);
    while (i >= 0) {
        // console.log(i)
        if (x % i === 0 && y % i === 0) {
            return i;
        }
        i--;
    }
}


console.log('2, 3', nod(2, 3)); // 1
console.log('2, 0', nod( 2, 0)); // 2
console.log('14, 21', nod( 14, 21)); // 7
console.log('156, 228', nod( 156, 228)); // 12
// gcd(6, 3); // 3
// gcd(14, 21); // 7
// gcd(21, 35); // 7
// gcd(2, 0); // 2


// Решение учителя https://goo.gl/ZILHRg
// const gcd = (a, b) => {
//     if (b === 0) {
//         return a;
//     }
//
//     return gcd(b, a % b);
// };
//
// export default gcd;