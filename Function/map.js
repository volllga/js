var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
    return name.length;
});  // получили массив с длинами
console.log( nameLengths ); // 4,3,10

var names2 = ['HTML', 'CSS', 'JavaScript'];
var nameLengths2 = names.map(function(name) {
    return name + ' language';
});  // изменяем все элементы
console.log( nameLengths2 ); // [ 'HTML language', 'CSS language', 'JavaScript language' ]

