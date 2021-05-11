const summArray = (array) => {
    let i = 0;
    let summ = 0;
    while (i < array.length){
        summ += array[i] * 1; // умножение на 1, чтобы привести тип к числу из строки))))
        i += 1;
    }
    return summ;
};

const addDigits = (n) =>{
    while (n > 9){
        let str = String(n);
        let array = str.split('');
        console.log('********', array, summArray(array));
        n = summArray(array);
    }
    return n;
};


const arr = ['1', '4', '6', '0', '5'];
console.log(summArray(arr));
console.log(addDigits(458));

console.log('-----------------');

const array = [29.76, 41.85, 46.5];
// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
const sumArray = array.reduce((sum, element) => sum + element);
console.log(sumArray); // 118.11

