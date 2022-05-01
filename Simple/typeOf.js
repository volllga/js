const x = 367;
const y = String(x);
console.log('x =', x, typeof x);
console.log('y =', y, typeof y);

const z = parseInt(y, 10); //десятичная система исчисления. вместо 10 мб 8, 16, 2 и др.
console.log('z =', z, typeof z);

const n = parseFloat('3.14какие-нибудь не цифровые знаки');
console.log('n =', n, typeof n);

const array = ['2', '7', '56', '61'];
const myArrey = array.map();
console.log('myArray =', myArrey, typeof myArrey);