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