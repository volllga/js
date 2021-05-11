const name = 'Sherlok';
console.log(typeof name);
console.log(13 / 'NaN');

const showArgs = (a, b) => console.log(`Arg 'a' equals ${a} & arg 'b' equals ${b}`);
showArgs(null);

const x = 438;
y = String(x);
console.log(y, typeof y);


const addDigits = num => (num === 0) ? 0: (num % 9) || 9;