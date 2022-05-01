function reverse(str){
    let end = str.length - 1;
    let new_str = "";
    while(end >= 0){
        new_str = new_str + str[end];
        console.log(new_str);
        --end;
    }
    return new_str;
}
console.log(reverse("milk and butter"));
console.log("milk and butter".split('').reverse().join(''));

let a = 4;
a -= 8 - a;
console.log(a);