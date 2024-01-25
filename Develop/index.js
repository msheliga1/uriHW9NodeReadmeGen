// MJS URI HW 9 - Readme.md generator using fs and inquirier.
// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');
const gm = require('./utils/generateMarkdown');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Starting writeToFile ");   
    fs.writeFile('README.md', data, (err) => err ? errFunct(err): console.log("Success!"));
}

function errFunct(err) {console.log ("Error in write file ");}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to Mike Sheliga's README.md file generator.");
    const licenseInfo = initLicenseInfo(); 
    const licenseNameArray = initLicenseNameArray(licenseInfo);
    const questions = initQuestions();
    inq
    .prompt(questions)
    .then((ans) => {
        console.log("Beginning .then");
        const data = gm.generateMarkdown(ans);
        console.log("The gm data is \n" + data);
        writeToFile('README.md', data)
    });
}

// Create a list of licenses. Each license has a name, link and badge.
function initLicenseInfo() {
//  License stuff
//    Badges are made with Shields.io.
//    Github has a new autodetection for LICENSE files, which shows the license at the repo overview
//    Shields.io has autogenerated license badges: https://img.shields.io/github/license/<Github-Username>/<Repository>
//    Really nice: https://choosealicense.com/ (if you are unsure, which license to choose)

const licenseInfo = []; 
var license = {};
license.name = "None";
license.badge = "";
license.link = "";
licenseInfo.push(license);
// Apache
license.name = "Apache - Apache 2.0 License";
license.badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
license.link = "https://opensource.org/licenses/Apache-2.0"
licenseInfo.push(license);
// Boost
license.name = "Boost Software License 1.0";
license.badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
license.link = "(https://www.boost.org/LICENSE_1_0.txt)";
licenseInfo.push(license);

// BSD
// BSD 3-Clause License
// [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

// BSD 2-Clause License
// [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

// Creative Commons
// CC0 License: CC0-1.0
// [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

// License: CC BY 4.0
// [![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)

// Eclipse - Eclipse Public License 1.0
// [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

// GNU - GNU GPL v3
// License: GPL v3
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// IBM - IBM Public License Version 1.0
// License: IPL 1.0
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

// ISC - ISC License (ISC)
// License: ICL
// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// Mozilla - Mozilla Public License 2.0
// License: MPL 2.0
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

// Open Data Commons - Attribution License (BY)
// License: Open Data Commons Attribution
// [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)

// Open Database License (ODbL)
// License: ODbL
// [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)

// Perl - The Perl License
// License: Artistic-2.0
// [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

// The Artistic License 2.0
// License: Artistic-2.0
// [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

// Unlicense - The Unlicense
// License: Unlicense
// [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

// WTFPL - The Do What the Fuck You Want to Public License
// License: WTFPL
// [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

// Zlib - The zlib/libpng License
// License: Zlib
// [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
    return licenseInfo;
} // end createLicenseInfo

function initLicenseNameArray(licenseInfo) {
    const licenseNameArray = [];
    for (var license of licenseInfo) {
        licenseNameArray.push(license.name);
    }
    return licenseNameArray;
} // end initLicenseNameArray 

function initQuestions(licenseInfo) {
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
    //    {
    //      type: 'text', message: 'Please enter installation instructions:', name: 'install',
    //    },
    //    {
    //      type: 'text', message: 'Please enter usage information', name: 'usage',
    //    },    
    //    {
    //        type: 'text', message: 'Please enter contribution guidelines:', name: 'contribution',
    //    },   
    //    {
    //        type: 'text', message: 'Please enter test instructions:', name: 'test',
    //    }, 
        {
            type: 'rawlist', message: 'Please choose a license:', name: 'license', 
            default: '1', choices: ['None', "Apache - Apache 2.0 License", "Boost Software License 1.0"],
        }, 
    ];
  return questions;
} // end initQuestions 

// Function call to initialize app
init();