let s = "Andsirdaarrevarariarewbutovearrmararan";
let sub_s = /ar/g;
let result = s.match(sub_s);

console.log(result);

function testRegExp(s, sub_s) {
    let my_reg = new RegExp(sub_s,"g");
    let result = s.match(my_reg);
    return result.join();
}
console.log(testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar'));

/*
Sample Input 1:

Andsirdaarrevarariarewbutovearrmararanar
Sample Output 1:

ar,ar,ar,ar,ar,ar,ar

 */

// function testRegExp(s, sub_s) {
//     return s.match(new RegExp(sub_s, "g")).join(",");
// }
