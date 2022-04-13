let mystring = 'HYPERSKILL';
console.log(mystring.toLowerCase()); // hyperskill

mystring = 'hyperskill';
console.log(mystring.toUpperCase()); // HYPERSKILL

let user_email = '    hyperskill@gmail.com        ';
console.log(user_email.trim()); // hyperskill@gmail.com

let user_email2 = '    hyPerskill@gmail.com        ';
user_email2.trim();
console.log(user_email2); //     hyperskill@gmail.com

let mystring3 = 'text ';
let result = mystring3.repeat(5);
console.log(result); // text text text text text

let mystring4 = 'Sample text';
console.log(mystring4.substring(0, 6)); // Sample

function prepareData(line) {
    //write your code here
    return line.trim().toLowerCase();
}

console.log(prepareData(user_email2))

let inputStr = "Hello, I am Constantine";

function introduction(line) {
    //write your code here
    return line.substring(12);
}

console.log(introduction(inputStr));

let inputStr2 = "John      john2000  frontend developer"

function greeting(line) {
    //write your code here
    let name = line.substring(0, 10).trim();
    let job = line.substring(20).trim();
    return ("My name is " + name + " and I'm a " + job + ".");
}

console.log(greeting(inputStr2)); //