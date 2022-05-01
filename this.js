let user = {
    firstName: "Elliot",
    lastName: "Alderson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(user.fullName());

let box = {
    length: 20,
    width: 30,
    height: 15,
    getVolume() {
        return this.length * this.width * this.height;
    }
};

console.log(box.getVolume());