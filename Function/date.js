let myDate = new Date();

console.log(myDate.getDate(), myDate.getMonth() + 1, myDate.getFullYear());

let myFullYear = new Date();

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

// request a weekday along with a long date

const options = { day: '2-digit', month: 'long', year: 'numeric' };
const today = new Intl.DateTimeFormat('en-AU', options).format(myDate);
console.log(today);
//