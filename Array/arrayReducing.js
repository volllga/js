// let example = array.reduce(callback, initialValue);
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

// accumulator: collects the return values of the callback function.
// currentValue: the value of the element that is currently being processed.
// currentIndex: the index of the current element (optional).
// array: the array to which the reduce() method is applied (optional).

let arr = [1, 3, 5, 7];

let summation = arr.reduce(function arraySum(sum, number) {
    return sum + number;
});

let summation_2 = arr.reduce(function arraySum_2(sum, number) {
    return sum + " * "  + number * 2;

});
console.log(summation, arr); // 16
console.log(summation_2, arr); // 16


let evenNumbers = [2, 4, 6, 8, 10];
let avg = evenNumbers.reduce((sum, number, currentIndex, array) => {
    sum += number;

    if (currentIndex == array.length - 1) {
        return sum / array.length;
    } else {
        return sum;
    }
});
console.log(avg); // 6



let oddNumbers = [1, 3, 5, 7];
let summation_3 = oddNumbers.reduce(function arraySum(sum, number) {
    return sum + number;
}, 4);
console.log(summation_3); // 20



const salary = 25000;
const expenses =[4000, 1000, 5000]
function getSalary(expenses) {
    let remainingSalary = expenses
        .reduce(function subtraction(difference, subtrahend) {
            return difference -= subtrahend;
        }, salary);
    return console.log(remainingSalary);
}
getSalary(expenses)
