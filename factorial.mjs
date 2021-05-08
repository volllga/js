const factorial = (n) => {
    if (n <= 0){
        return NaN
    }
    let res = 1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }
    return res;
}

//console.log(factorial(10));
export  default factorial;