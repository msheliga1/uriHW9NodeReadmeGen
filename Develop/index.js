// MJS URI HW 9 - Readme.md generator using fs and inquirier.
// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');
const gm = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, and test instructions
// Description, Installation,              Usage,             Contributing,            and Tests
const questions = [
    {
      type: 'input', message: 'Please enter project title:', name: 'title',
    },
    {
      type: 'input', message: 'Please enter project description:', name: 'description',
    },
    {
      type: 'input', message: 'Please enter installation instructions:', name: 'install',
    },
    {
      type: 'input', message: 'Please enter usage information', name: 'usage',
    },    
    {
        type: 'input', message: 'Please enter contribution guidelines:', name: 'contribution',
    },   
    {
        type: 'input', message: 'Please enter test instructions:', name: 'test',
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
        console.log("The gm data is \n" + data);
        writeToFile('README.md', data)
    });
}

// Function call to initialize app
init();