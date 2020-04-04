// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer");

const fs = require("fs");
// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api.js")
const generateMarkdown = require("./utils/generateMarkdown.js")
const markdown = generateMarkdown(response)
// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }
const questions = [
    {
      type: "input",
      message: "What is your Github username?",
      name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Give a brief description of your project",
        name: "description"
    },
    {
        type: "checkbox",
        message: "How can I get the proper depencies for this repo?",
        name: "installation",
        choices: [
            {
                name: "NPM init"
            }
        ]
    },
    {
        type: "input",
        message: "What should potential users know about using this repo?",
        name: "usage"
    },
    {
        type: "list",
        message: "What are you using for licensing?",
        name: "licensing",
        choices: [
            {
                name: "Apache"
            },
            {
                name: "IBM"
            },
            {
                name: "MIT"
            },
            {
                name: "Mozilla"
            },
        ]
    },
    {
        type: "checkbox",
        message: "What are the testing methods to be used?",
        name: "tests",
        choices: [
            {
                name: "NPM run test"
            }
        ]
    },
    {
        type: "input",
        message: "What are some of the rules for contributing to the repo?",
        name: "contributing"
    },
];
  

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {
}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            api.getUser(answer.username)
        .then(response => { 
            console.log(response.data)
            console.log(answers) 
        ;
        return writeToFile("output/readme.md", markdown);
    })
})
.catch(error => {
    console.log("Couldn't create the")

    });
}


init();
