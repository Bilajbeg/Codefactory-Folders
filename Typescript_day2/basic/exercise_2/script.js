"use strict";
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    output() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}
let person_1 = new Person("John", 35, "Web Developer");
document.write(person_1.output());
class extendedPerson extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    salaryOutput() {
        return `<br>${this.output()}and I get ${this.salary} every month, and I work in ${this.salary}.`;
    }
}
let person_2 = new extendedPerson("MArkus", 25, "Professor", 3000, "Vienna");
let output_2 = person_2.salaryOutput();
document.write(output_2);
