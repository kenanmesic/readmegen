// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the Title",
        name: "title"
    },
    {
        type: "input",
        message: "when was the weather",
        name: "time"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log("created a file")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answerObj => {
        const template = buildTemplate(answerObj);
        // const template = generateMarkdown(answerObj);

        writeToFile("README.md", template)
    })
}

function buildTemplate(obj) {
    return `This is my story
today at ${obj.time} the weather was ${obj.weather}
    
SDF
    
SDF
    
SDF
    
SDF
SDF`
}

// Function call to initialize app
init();
