function myFunc() {
    let i = 1;
    for(i; i <= 5; i++){
        console.log(i * i * i);
    }
}

myFunc();

var fruit = "banana";

function favFruit() {
    var fruit = "apple";
    console.log(fruit);
}

console.log(fruit);
favFruit();