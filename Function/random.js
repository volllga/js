console.log(Math.random(), Math.random(), Math.random() != Math.random());

let randomNumber = Math.random();
console.log(randomNumber, Math.floor(randomNumber * 10),
                        Math.floor(randomNumber * 100),
                        Math.floor(randomNumber * 1000));// from 0 to 999

// function getRandom() {   // from 0 to 4
//     return Math.floor(Math.random() * 5);
// }

function getRandom() {   // from 1 to 3
    return Math.floor(Math.random() * 3) + 1;
}

console.log('getRandom', getRandom());

function getRandomInteger(min, max) {  //  get number of some range
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log('getRandomInteger(10, 20)', getRandomInteger(10, 20)); // 18
console.log('getRandomInteger(-5, 2)', getRandomInteger(-5, 2)); // -1

const songs = ["Stairway to Heaven", "Imagine", "Yesterday", "Light My Fire"];
function getRandomElement(array) {
    let index = Math.random();
    console.log('index', index);
    index = Math.floor(index * array.length);
    // let index = Math.floor(Math.random() * array.length);
    console.log('index = Math.floor(index * array.length)', index);
    return array[index];
}

console.log(getRandomElement(songs)); // Imagine
console.log(getRandomElement(songs)); // Stairway to Heaven