
let x = {"even":[2,4,6,8,10],"odd":[1,3,5,7,9]}

function sumTheArrays(naturalNumbers) {
    let arr = [];
    for(let i = 0; i < naturalNumbers.even.length; i++) {
        arr.push(naturalNumbers.even[i] + naturalNumbers.odd[i]);
        console.log(naturalNumbers.even[i] + naturalNumbers.odd[i], arr);
    }
    return arr;
}

console.log(sumTheArrays(x));