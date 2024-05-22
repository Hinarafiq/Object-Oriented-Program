#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Peoples {
    students = [];
    addStudent(object) {
        this.students.push(object);
    }
}
const peoples = new Peoples();
const programBegin = async (peoples) => {
    do {
        console.log("Welcome!");
        const answer = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to connect with?",
            choices: ["staff", "student", "exit"]
        });
        if (answer.select == "staff") {
            console.log("You can approach the staff room.Please feel free to ask any question.");
        }
        else if (answer.select == "student") {
            const answer = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you want to connect with:"
            });
            const student = peoples.students.find(value => value.name == answer.student);
            if (!student) {
                const name = new Student(answer.student);
                peoples.addStudent(name);
                console.log(`Hello,I am ${name.name}. Pleasure to meet you!`);
                console.log("New student added.");
                console.log("Current student list:");
                console.log(peoples.students);
            }
            else {
                console.log(`Hello,I am ${student.name}.Pleasure to set you again!`);
                console.log("Existing student list:");
                console.log(peoples.students);
            }
        }
        else if (answer.select == "exit") {
            console.log("Exiting the program.");
            process.exit();
        }
    } while (true);
};
programBegin(peoples);
