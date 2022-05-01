
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

const name = "volllga"

for(let j=0; j < name.length - 1; j++) {
    console.log(name[j] + name[j+1]);
}

let k = 0;
while (k < name.length) {
    console.log(name[k]);
    k++;
}

let factorial = 1;
let number = 5;
do {
    factorial = factorial * number;
    number--;
} while (number > 0);

console.log(factorial)