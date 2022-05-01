const solution = (str) =>{
     str = str.split(' ');
     console.log(str);
     const newStr = str.map(function (word){word = word[0].toUpperCase() + word.slice(1);
                                            return word;})
     return newStr.join(' ');
}
console.log(solution('my name is olga'));


const solution2 = (str) =>{
    str = str.split(' ');
    console.log(str);
    const newStr = str.map(function (word){wordUpper = word.toUpperCase();
        word = wordUpper[0] + word.slice(1);
        return word;})
    return newStr.join(' ');
}
console.log(solution2('my home town is bobruisk 1387!'));

const solution3 = (str) => {
    str = str.split('');
    for(let i = 0; i < str.length; i++){
        str[0] = str[0].toUpperCase();
        if (str[i] === ' '){
            str[i + 1] = str[i + 1].toUpperCase();
        }
    }
    return str.join('');
}
console.log(solution3('i am a russian language   and literature teacher'));