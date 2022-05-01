let email = "hyperskill@gmail.com";
email.slice(11, 16); // 'gmail'  string.slice(start, end);
let str = "I am learning string methods."
str.slice(-8); // 'methods.'
let newStr = "JavaScript";
newStr.slice(-6, -1); // 'Scrip'


let numbers = "123,456,789";
// separator is ","
let splitNumbers = numbers.split(",");
console.log(splitNumbers); // [ '123', '456', '789' ]


let languages = "JavaScript, Java, C++, C, Python, Kotlin";
// separator is "," and limit is "3"
let splitLang = languages.split(",", 3);
console.log(splitLang); // [ 'JavaScript', ' Java', ' C++' ]


let numbers2 = "2 , 4, 6, 8, 10";
// separator is a regexp
let splitNumbers2 = numbers2.split(/\s*,\s*/);
console.log(splitNumbers2); // ['2', '4', '6', '8', '10']


let text = "Javascript Javascript javascript";
text.replace(/Javascript/, "JavaScript"); // 'JavaScript Javascript javascript'
text.replace(/Javascript/g, "JavaScript"); // 'JavaScript JavaScript javascript'
text.replace(/Javascript/gi, "JavaScript"); // 'JavaScript JavaScript JavaScript'