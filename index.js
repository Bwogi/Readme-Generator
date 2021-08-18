const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./util/genMarkdown');


// the prompts 
const questions = [{
        type: "input",
        message: "What's the Project name?",
        name: "Title"
    }, {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'Username'
    }, {
        type: "input",
        message: "Briefly describe your Project",
        name: "Description"
    }, {
        type: "input",
        message: "How to install this Project",
        name: "Installation"
    }, {
        type: "input",
        message: "Give examples of how your Project could be used: ",
        name: "Usage"
    }, {
        type: "input",
        message: "Which license is being used for this Project?",
        name: "License"
    }, {
        type: "input",
        message: "How many people will contribute to this Project?",
        name: "Contributing",
        validate: contributorValidation
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"
    }, {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
    }

]

function contributorValidation(num)
{
   var reg = /^\d+$/;
   return reg.test(num) || "Number Invalid, Please re submit!";
}

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}

// initialisation function 
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

// initialisation 
init();