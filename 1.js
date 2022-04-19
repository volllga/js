

let array = [1, 2, 3, 44, 5];
let array2 = [ '1', '2', '3', '44', '5' ]
function multiplyThem(numbers) {
    console.log(numbers.map((element) => {
        return element * element;
    }));
}

multiplyThem(array);

function convertToNumber(arrayOfString) {
    return arrayOfString.map(e => e * 1);
}

console.log(convertToNumber(array2), array.map(Math.floor), array.toString());