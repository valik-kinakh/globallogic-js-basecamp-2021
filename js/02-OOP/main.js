import University from "./university.js";
import User from "./user.js";
import Student from "./student.js";
import Worker from "./worker.js";

const lp = new University('National University Lviv Polytechnic', 'Lviv', 79000);
console.log(lp.getAddress());

const user1 = new User('Misha', 'Savchak', 1991);
console.log(user1.getFullName());
console.log(user1.getFullInfo());


const student1 = new Student('Misha', 'Savchak', 1991, 2014, lp);
console.log(student1.getCourse());
console.log(student1.isFinished());
console.log(Student.getCounter());
console.log(student1.getFullInfo())

const worker = new Worker('Misha', 'Savchak', 1991, 20, 34);
console.log(worker.getFullName());
console.log(worker.isRetired());
console.log(worker.getSalary());
console.log(worker.days);
console.log(worker.rate);
worker.retired = true;
console.log(worker.getSalary());