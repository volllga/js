var myDate = new Date();
console.log(myDate);

var myFullYear = new Date();

console.log(myFullYear.getFullYear());
console.log(myFullYear.getYear());
console.log(myDate);

function testDateTime(a, b) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var a = new Date(a);
    var b = new Date(b);
    if(+a >= +b){
        var day = a.getDay();
    }
    else {
        var day = b.getDay();
    }
    return days[day]
}

//check of saved changes 
// yes, chenges where saved
// and what now?
// Resolving a merge conflict
