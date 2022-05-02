const cookie ={
    name: "Chocolate Chip", //you can use " " with name or not
    "isGlutenFree": false,
    "+Yammy": true,
    eatCookie: function () {
        console.log("I am eating " + this.name);
    }
};

console.log(cookie);
console.log(cookie.name);
console.log(cookie["+Yammy"]);
cookie.eatCookie();

console.log("------------------------------------------------------")

let employee = {
    'name': 'Bruce Reese',
    'email': 'diam.sed@augue.org',
    'company': 'Velit Pellentesque Institute'
};
const employeeKeys = Object.keys(employee);
console.log(employeeKeys); // [ 'name', 'email', 'company' ]
employeeKeys.forEach((key) => console.log(key));
employeeKeys.forEach((key) => console.log(employee[key]));
employeeKeys.forEach(key => {
    if (key === 'company') {
        employee[key] = "Stiedemann Group"; // override the value of some key based on a condition
    }
});
console.log(employee.company);

console.log("------------------------------------------------------")

const employeeValues = Object.values(employee);
console.log(employeeValues);
employeeValues.forEach((value) => console.log(employee[value])); // you can only access an object's indices by its key

console.log("------------------------------------------------------")

const employeeEntries = Object.entries(employee);
console.log(employeeEntries);

console.log("------------------------------------------------------")

console.log(x);
function getTheSquare(arrayOfObjects) {
    arrayOfObjects.forEach(entries => {
        entries.square = Math.sqrt(entries.source);
    });
    return arrayOfObjects;
}
console.log(getTheSquare(x));

function getTheSquare1(arrayOfObjects) {
    return arrayOfObjects.map(item => {
        return {source: item.source, square: Math.sqrt(item.source)};
    });
}