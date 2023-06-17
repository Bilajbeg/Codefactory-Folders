
class Person {
    name: string;
    age: number;
    jobTitle: string;
    constructor(name: string, age: number, jobTitle: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    output() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`
    }
}

let person_1 = new Person("John", 35, "Web Developer");
document.write(person_1.output());


<------------------------------------------------------------------------------------------------------------------->

class Employee extends Person {
  private salary: number;
  private jobLocation: string;

  constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
    super(name, age, jobTitle);
    this.salary = salary;
    this.jobLocation = jobLocation;
  }

  public introduceWithSalary(): string {
    const baseIntroduction = super.introduce();
    return `${baseIntroduction} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
  }
}

// Create a new Employee object
const employee = new Employee("Alice", 25, "Software Engineer", 5000, "New York");

// Call the introduceWithSalary() function
const introductionWithSalary = employee.introduceWithSalary();

// Log the result
console.log(introductionWithSalary);






