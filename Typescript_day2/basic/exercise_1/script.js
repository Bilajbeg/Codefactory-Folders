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
