// MJS URI HW 9 - Readme.md generator using fs and inquirier.
// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');
const gm = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Please enter project title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Wheerz ya frum?',
      name: 'hometown',
    },
    {
        type: 'input',
        message: 'Bio?',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'GitHub URL',
        name: 'gitHub',
      },    
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Starting writeToFile ");   
    fs.writeFile('README.md', data, (err) => err ? errFunct(err): console.log("Success!"));
}

function errFunct(err) {console.log ("Error in write file ");}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to Mike Sheliga's README.md file generator.");
    inq
    .prompt(questions)
    .then((ans) => {
        console.log("Beginning .then");
        const data = gm.generateMarkdown(ans);
        console.log("The gm data is " + data);
        writeToFile('README.md', data)
    });
}

// Function call to initialize app
init();