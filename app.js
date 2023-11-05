#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("welcom");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap Kis Sy Baat Kerna Passand kry gaye..",
            name: "select",
            choices: ["Khud Se: Self", "student",]
        });
        if (ans.select == "Khud Se: Self") {
            console.log("Hello I'm speking with me");
            console.log("I Am Fine");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Ap Ko Kis Student Sy Baat Kana Hy.",
                name: "Student",
            });
            const student = persons.students.find(val => val.name == ans.Student);
            if (!student) {
                const name = new Student(ans.Student);
                persons.addStudent(name);
                console.log(`Hello I Am ${name.name}, and I'm Fine.`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I Am ${student.name}, and I'm Fine........`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
