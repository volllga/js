function getRandom() {   // from 1 to 3
    return Math.floor(Math.random() * 3) + 1;
}

// for (let i = 0; i < 10; i++) {
//     console.log('getRandom', getRandom());
// }

const romanNumbers = ["I", "II", "III", "IV", "V"];

function getRomanNumber(array) {
    let index = Math.floor(Math.random() * array.length + 1);
    if(index < array.length){
        return array[index];
    } else {
        return array[index - 1];
    }
}

for (let i = 0; i < 10; i++) {
    console.log(getRomanNumber(romanNumbers));
}
;