// Inside the Student function, write a method getStudent() that displays the text
// "Student name: a, student surname: b, student age: c" via console.log(), where a, b, and c are parameters.

function Student(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.getStudent = () => {
        console.log(`Student name: ${this.name}`,
            `student surname: ${this.surname},`,
            `student age: ${this.age}`);
    }
}

const student1 = new Student('Nicol', "Smith", 21);
student1.getStudent();