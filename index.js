import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(`\n\t\t\t\t\t ${chalk.rgb(119, 75, 200)("WELCOME TO TODOSLIST")}\n`);
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: `${chalk.green("what do you want to add in your todo list?")}`
        }, {
            name: "ask",
            type: "list",
            message: `${chalk.green("what do you want to do next")}`,
            choices: ["ADDMORE", "VIEW", "EXIT"]
        },
    ]);
    if (addTask.ask == "ADDMORE") {
        let addmore = await inquirer.prompt({
            name: "addMore",
            type: "confirm",
            message: `${chalk.blue("Do you want to add more?")}`,
            default: "false"
        });
        todos.push(addTask.todo);
        condition = addmore.addMore;
        console.log(todos);
    }
    if (addTask.ask == "VIEW") {
        todos.push(addTask.todo);
        condition = addTask.addMore;
        console.log(`${chalk.rgb(255, 193, 205)(todos)}`);
    }
    if (addTask.ask == "EXIT") {
        process.exit();
    }
}
