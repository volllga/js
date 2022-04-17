

let z = [4, 1, 3, , 13, 4, 0 ];

function doubleA(arr) {
    let newArr = [];
    arr.forEach(function (item) {
        newArr.push(item * 2);
    })
    return newArr;
}

console.log(doubleA(z));

for (let i = 0; i < z.length; i++) {
    console.log(z[i]);
}

for (let i in z) {
    console.log(z[i]);
}