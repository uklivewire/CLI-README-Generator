const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Enter a brief description of your project:"
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage information:"
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache", "GPL", "None"]
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:"
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test instructions:"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address:"
      }
];

// // function to write README file
function createReadme(answers){
    const readme = generateMarkdown(answers);
    fs.writeFileSync('README.md', readme);
}

// // function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      // Create the README with the user's answers
      createReadme(answers);
      console.log("README.md generated successfully!");
    })
    .catch(err => {
      console.log(err);
    });
}

// // function call to initialize program
init();
