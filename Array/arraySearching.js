const array = ["Try", "to", "find", "me", "!"];
console.log(array.includes("find", 2)); // true index from which to start searching the array
console.log(array.includes(5)); // false
console.log(array.includes("me", -10,), array); // true value is added to the array length, and its sum is considered
// the index from which to start searching. If it is less than or equal to zero, then the whole array will be searched:
console.log(array.includes("me", -1)); // false

console.log("----------------------------");

const projects = [{name: "To-Do App", lang: "JS"}, {name: "Website", lang: "HTML"}];
console.log(projects.find(e => e.lang === "JS")); // {name: "To-Do App", lang: "JS"}
console.log(projects.find(e => e.lang === "CSS")); // undefined
function search(objects) {
    return objects.find(e => e.name === "John" && e.age === 30);
}


console.log(projects.findIndex(e => e.lang === "HTML")); // 1
console.log(projects.findIndex(e => e.lang === "C")); // -1

const languages = ["HTML", "CSS", "JS", "Python", "JS"];
console.log(languages.indexOf("JS", 1)); // 2
console.log(languages.indexOf("English")); // -1

console.log(languages.lastIndexOf("JS")); // 4
console.log(languages.lastIndexOf("JS", 3)); // 2
console.log(languages.lastIndexOf("JS", 1)); // -1