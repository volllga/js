//You cannot use break and continue with the ? operator
// because such constructions lead to errors.

for (let n = 1; n <= 50; n++) {
    if (n == 5) {
        break;
    }
    console.log(n); // 1 2 3 4
}

console.log('-------------------');

for (let n = 1; n <= 10; n++) {
    if (n % 2 !== 0) {
        continue;
    }
    console.log(n); // 2 4 6 8 10
}

console.log('-------------------');

function sum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0) {
            break;
        }
        sum += numbers[i];
    }
    return sum;
}

console.log(sum([2, 12, 0, 15, 10])) // 14

console.log('-------------------');

function checkEvenOrOdd(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0 || !Number.isInteger(numbers[i] )) {
            break;
        } else if(numbers[i] % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    }
}
const arr = [2, 12, 5, 8, 7, 'e', 0, 15, 10]
console.log(checkEvenOrOdd(arr));

console.log('-------------------');