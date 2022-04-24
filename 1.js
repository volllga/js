let str = [ 'red', 'yellow', 'green', 'blue']


function removeTail(array) {
    array.splice(-2, 2, 0);
    return array;
}

console.log(removeTail(str));
