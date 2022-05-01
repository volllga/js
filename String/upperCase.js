const bigLettersCount = (str) => {
    // BEGIN (write your solution here)
    let n = 0;
    let strUpper = str.toUpperCase();
    let counter = 0;
    while (n < str.length){
        if (str[n] === strUpper[n]){
           counter += 1;
        }
        n += 1;
    }
    return counter;
    // END
};
const a = ' Hf GjjHH HbH ';
const b = ' Hf GjjHH HbH ';
console.log(bigLettersCount(a));
console.log(bigLettersCount(b));


const firstCount = bigLettersCount(a);
const secondCount = bigLettersCount(b);

console.log(firstCount, secondCount);

const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

    // BEGIN (write your solution here)
    if (firstCount === secondCount){
        return 0;
    }
    else if (firstCount > secondCount){
        return 1;
    }
    else if (firstCount < secondCount) {
        return -1;
    }
    // END
};

// const greaterThan = (first, second) =>
//     compare(first, second) === 1;

// const lessThan = (first, second) =>
//     compare(first, second) === -1;
//
// const isEqual = (first, second) =>
//     compare(first, second) === 0;


console.log(compare(a, b));
