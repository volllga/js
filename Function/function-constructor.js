function Car(brand, year, speed) {  //This is the constructor. We spelled it with a capital letter "C"
    this.brand = brand;
    this.year = year;
    this.speed = speed;
    // return brand;    // Car { brand: 'BMW', year: 2001 }
    this.getSpeed = function() {
        return ("The speed of " + this.brand + " is: " + this.speed + " km per hour");
    };
}
//Constructors always return a new object without using the return keyword inside them.
// By default, they return this.
// You can easily change this logic and use return whenever you want.

//let year = new Date().getFullYear();

const carA = new Car('BMW', 2022, 250);
const carB = new Car("Audi", 2019, 207);

console.log('carA', carA.brand, carA.year, carA.getSpeed());
console.log(carA.getSpeed());
console.log(carA)
console.log(carB)