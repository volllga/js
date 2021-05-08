function isPrime(n){
    if (n <= 1){
        return false;
    }
    for(let i = 2; i <= n; i++){
        if (n % i === 0){
            if (i === n){
                return true;
                break;
            }
            else {
                return false;
                break;
            }
        }
    }
}
console.log(isPrime(2017));
console.log(isPrime(15));
console.log(isPrime(22));
console.log(isPrime(13));

assert.equal(area(98), 8284);