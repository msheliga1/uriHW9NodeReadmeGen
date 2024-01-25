// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
// Badges aren't necessary, per se, but they demonstrate street cred. 
// Badges let other developers know that you know what you're doing. 
// Check out the badges hosted by [shields.io](https://shields.io/). 
// You may not understand what they all represent now, but you will in time.
function renderLicenseBadge(license) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    var licenseLinkStr = "[Link](https://opensource.org/licenses/Apache-2.0)";
    return licenseLinkStr; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    }
    var licenseStr = `## License  \n  ${license}   \n\n`;
    licenseStr += renderLicenseLink(license); 
    return licenseStr;
}

// TODO: Create a function to generate markdown for README
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
function generateMarkdown(data) {
    console.log("Starting generateMarkdown");
    var mdStr = "";
    mdStr += `# ${data.title}   \n\n`;
    mdStr += renderLicenseBadge(data.license);
    mdStr += `## Description   \n  ${data.description}   \n\n`;
    mdStr += `## Table of Contents   \n`;
//    mdStr += `[Installation](#installation)  \n`;
//    mdStr += `[Usage](#usage)  \n`;
//    mdStr += `[Contributing](#contributing)  \n`;
//    mdStr += `[Testing](#tests)  \n`;
    mdStr += `[Questions](#questions)  \n`; 
    mdStr += `[License](#license)  \n`;   
    mdStr += `  \n`;
//    mdStr += `## Installation  \n  ${data.install}   \n\n`;
//    mdStr += `## Usage  \n  ${data.usage}   \n\n`;
//    mdStr += `## Contributing  \n  ${data.contribution}   \n\n`;
//    mdStr += `## Tests  \n  ${data.test}   \n\n`;
//    mdStr += `## Questions  \n  ${data.test}   \n\n`;
    mdStr += renderLicenseSection(data.license);
    return mdStr;
}

// Following line seems to need {} added. Wouldn't work without it!!
module.exports = {generateMarkdown};