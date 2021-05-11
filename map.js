var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
    return name.length;
});  // получили массив с длинами
console.log( nameLengths ); // 4,3,10

var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
    return name + ' language';
});  // изменяем все элементы
console.log( nameLengths ); // 4,3,10

