const arrayNames = ["Mike", "Alex", "Asya"];
arrayNames.forEach(console.log);
console.log('************************');


const arrayFruit = ["pineapples", "oranges", "apples"];
arrayFruit.forEach(function(value) {
    console.log("Today I ate " + value);
});
console.log('************************');


function showText(value) {
    console.log("Today I eat " + value);
}
arrayFruit.forEach(showText);
console.log('************************');


function showItem(item, index, array) {
    console.log("My value is " + item + ". I’m the " + index + " element of array " + array);
}
arrayFruit.forEach(showItem);
console.log('************************');


const customThis = {
    value: 10
}

function showThisValue() {
    console.log(this.value);
}

arrayFruit.forEach(showThisValue, customThis);
console.log('************************');


const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
        music.forEach((item, _, array) => {
            console.log(`My favorite music is ${item} choosing from ${array}`);
        });
}
myFavoriteMusic(music);
console.log('************************');


const planets = ["Earth", "Jupiter", "Neptune"];

function showPlanets(planets) {
    planets.forEach(planet => console.log(planet));
}
showPlanets(planets)
// // Arrow function
// forEach((element) => { /* ... */ })
// forEach((element, index) => { /* ... */ })
// forEach((element, index, array) => { /* ... */ })
//
// // Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)
//
// // Inline callback function
// forEach(function(element) { /* ... */ })
// forEach(function(element, index) { /* ... */ })
// forEach(function(element, index, array){ /* ... */ })
// forEach(function(element, index, array) { /* ... */ }, thisArg)