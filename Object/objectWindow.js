// Window Object is global  If a document contain frames (<iframe> tags)
// full list of properties and methods https://www.w3schools.com/jsref/obj_window.asp

// Properties

console.log(window.closed); // false
console.log(innerHeight);
console.log(innerWidth);
console.log(document.getElementsByClassName('image').length);


// Methods

open(); // to create a new empty browser window
open("https://hyperskill.org/");

close(); // To close the current window JavaScript can only close the window that was opened with it

alert("Hello Hyperskill!");  // does not return anything
confirm("Hyperskill is excellent"); // returns true or false
getComputedStyle(document.getElementsByClassName('image')[1])

prompt("Please enter your name!");
// you want the user to input a value.
// the user will have to click either "OK" or "Cancel" to proceed.
// Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.