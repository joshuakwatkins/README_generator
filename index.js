// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "gitUser",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "descrip",
        message: "A short description of your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What license should be associated with this project?",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GNU GPLv3",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "install",
        message: "What command should we use to install the necessary dependencies?",
        default() {
            return "npm i"
        }
    },
    {
        type: "input",
        name: "test",
        message: "What command should we use to test the dependencies?",
        default() {
            return "npm test"
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this application?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to this application?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Your README.md was successfully created!"))
}

// TODO: Create a function to initialize app
function init() {
    console.log("Let's build your README.md!")
    inquirer.prompt(questions)
    .then((result) => {
        console.log(result)
        writeToFile("./readMes/README.md", generateMarkdown.generateMarkdown(result))
    })
}

// Function call to initialize app
init();
