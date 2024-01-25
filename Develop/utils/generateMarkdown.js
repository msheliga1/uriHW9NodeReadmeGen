// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
// Badges aren't necessary, per se, but they demonstrate street cred. 
// Badges let other developers know that you know what you're doing. 
// Check out the badges hosted by [shields.io](https://shields.io/). 
// You may not understand what they all represent now, but you will in time.
function renderLicenseBadge(license, licenseInfo) {
    if (license === "None" || license === "" || license === undefined || license == null) {
        return ""; 
    }
    for (const licenseData of licenseInfo) {
        if (license === licenseData.name) {
            var licenseBadgeStr = `${licenseData.badge}${licenseData.link}`;
            return licenseBadgeStr;
        }
    }
    console.log(`Error. Could not find ${license} in array of all licenses while looking for license badge.`);
    return ""; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseInfo) {
    if (license === "None" || license === "" || license === undefined || license == null) {
        return ""; 
    }
    for (const licenseData of licenseInfo) {
        if (license === licenseData.name) {
            var licenseLinkStr = `[${license}]${licenseData.link}`;
            return licenseLinkStr;
        }
    }
    console.log(`Error. Could not find ${license} in array of all licenses.`);
    return ""; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseInfo) {
    if (license === "None") {
        return "";
    }
    var licenseStr = `## License  \n`;
    licenseStr += renderLicenseLink(license, licenseInfo); 
    licenseStr += `  \n\n`
    return licenseStr;
} // end function rendenLicenseSections

// TODO: Create a function to generate markdown for README
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
// licenseInfo used to create license link and license badge.
function generateMarkdown(data, licenseInfo) {
    console.log("Starting generateMarkdown");
    var mdStr = "";
    mdStr += `# ${data.title}   `;
    mdStr += renderLicenseBadge(data.license, licenseInfo);
    mdStr += `  \n\n`;
    mdStr += `## Description   \n  ${data.description}   \n\n`;
    mdStr += `## Table of Contents   \n`;
    mdStr += `[Installation](#installation)  \n`;
//    mdStr += `[Usage](#usage)  \n`;
//    mdStr += `[Contributing](#contributing)  \n`;
//    mdStr += `[Testing](#tests)  \n`;
    mdStr += `[Questions](#questions)  \n`; 
    mdStr += `[License](#license)  \n`;   
    mdStr += `  \n`;
    mdStr += `## Installation  \n  ${data.install}   \n\n`;
//    mdStr += `## Usage  \n  ${data.usage}   \n\n`;
//    mdStr += `## Contributing  \n  ${data.contribution}   \n\n`;
//    mdStr += `## Tests  \n  ${data.test}   \n\n`;
    mdStr += `## Questions  \n`;
    mdStr += `GitHub UserName: [${data.gitName}](https://github.com/${data.gitName})   \n`;
    mdStr += `Contact Email: ${data.email}  \n\n`;
    mdStr += renderLicenseSection(data.license, licenseInfo);
    return mdStr;
}

// Following line seems to need {} added. Wouldn't work without it!!
module.exports = {generateMarkdown};