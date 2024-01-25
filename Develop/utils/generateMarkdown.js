// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
function generateMarkdown(data) {
    console.log("Starting generateMarkdown");
    var mdStr = "";
    mdStr += `# ${data.title}   \n\n`;
    mdStr += `# Description   \n  ${data.description}   \n\n`;
    mdStr += `# Table of Contents   \n`;
    mdStr += `[Installation](#installation) \n`;
    mdStr += `[Usage](#usage) \n`;
    mdStr += `\n`;
    mdStr += `# Installation  \n  ${data.install}   \n\n`;
    mdStr += `# Usage  \n  ${data.usage}   \n\n`;
    mdStr += `# Contributing  \n  ${data.contribution}   \n\n`;
    mdStr += `# Tests  \n  ${data.test}   \n\n`;
    mdStr += `# Questions  \n  ${data.test}   \n\n`;
    return mdStr;
}

// Following line seems to need {} added. Wouldn't work without it!!
module.exports = {generateMarkdown};