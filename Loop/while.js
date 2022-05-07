let n = 1;
while(n <= 5) {
    if(n < 6) {
        console.log('Tree!');
    } else {
        console.log("City!");
    }
    ++n;
}

do {
    if(n < 6) {
        console.log('do Tree!');
    } else {
        console.log("do City!");
    }
    ++n;
} while (n === 1);