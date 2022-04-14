let mystring = 'Sample text';
console.log(mystring.charAt()); // S
console.log(mystring.charAt(1));
console.log(mystring.charAt(-1)); // Empty string
console.log(mystring.charAt(1000)); // Empty string


console.log(mystring[mystring.length - 1]);
console.log(mystring[-1]); // undefined


let user_emails = ['hyperskill@gmail.com', 'jetbrains@yahoo.com', 'hyper@gmail.com'];
let gmail_count = 0;
user_emails.forEach(function(item) {
    if (item.endsWith('gmail.com')) {
        gmail_count = gmail_count + 1;
    }
});
console.log(gmail_count); // 2


let user_email = 'hyperskill@gmail.com';
let result = user_email.startsWith('hyperskill');
console.log(result); // true


let mystring2 = 'Sample text';
let result2 = mystring2.includes('Sample', 0); // accepts another argument:
                                         // the position at which to begin searching for a substring
console.log(result2); // true


let mystring3 = 'Sample text';
console.log(mystring3.indexOf('text', 0)); // 7
let mystring4 = 'text text text';
console.log(mystring4.lastIndexOf('text')); // 10
//In case the values are not found within a string, both methods will return -1.

