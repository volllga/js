function smallestDivisor (number) {
        if (number === 1) {
            return number;
        }
        const iter = (number, divisor) => {
            if (number % divisor === 0) {
                return divisor;
        }
        return iter(number, divisor + 1);
    };
    return iter(number, 2);
}

console.log(smallestDivisor(25));

//Решение учителя
const smallestDivisor2 = (num) => {
    const iter = (acc) => {
        if (acc > num / 2) {
            return num;
        }
        if (num % acc === 0) {
            return acc;
        }
        return iter(acc + 1);
    };

    return iter(2);
};

export default smallestDivisor;