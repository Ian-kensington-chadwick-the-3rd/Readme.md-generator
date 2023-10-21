// const fs = require('fs')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// must have a couple license options
// create a conditional to check if there is a license

// const { zipObjectDeep } = require("lodash");

function renderLicenseBadge(license) {
    
  if ('BSD-3-Clause' == license ){
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if  ('MIT' == license){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
     
  } else if ('Apache' == license){
      return  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if ('GPL' == license){
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else {
    return '';

  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// create a conditional to check if there is a license
// returns a string that is a link


// function renderLicenseLink(license) {
    // the link should be formatted like this: * [License](#license)
    // and it will only render if the user chose a license
    // if license === 'none'
    // return
    // else return the link 
    //  console.log(license)
    // if (license === 'none') {
    //     return ''
    // }     
//     } else {
//          return '* [License](#license)'
//  }

//     var lincenseLink = [];
//   if ('BSD-3-Clause' == license ){
//       lincenseLink.push('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]');
//   } else if  ('MIT' == license){
//       lincenseLink.push('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]');
//   } else if ('Apache' == license){
//       lincenseLink.push('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]');
//   } if ('GPL' == license){
//       lincenseLink.push('[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]');
//   } else {
//     return
//   }
//    return lincenseLink;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// create a conditional to check if there is a license
// call renderlicenseBadge and renderlicenselink
// use template literal to format license section and call functions
// return template literal

function renderLicenseSection(license) {
   // it will only render if the user chose a license
    // if license === 'none'
    // return
    // else return the link
    if (license === 'none') {
        return ''
    } else {
        return `
This project is licensed under the ${license} license`
    }
 
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // plug in data from user and put it into the readme file
  // create layout of what you markdown readme with template literals
  // hint - call renderlicense functions inside this function
return `  
# Project Title: ${data.title} 

 
# Description


${data.Desc}



## Table of Contents

* [Installation](#installation)
* [Contributers](#contributers)
* [LicenseSection](#license-section)
* [test](#test)
* [Description](#description)





## Installation

${data.installation}

## Contributers


Made by: ${data.Githubname}

If you have any questions you can reach me at: ${data.email}

## test

${data.test}

# License Section

${renderLicenseSection(data.license)}


${renderLicenseBadge(data.license)}
`

};
// create layout of what the readme file will need to print using template literals
module.exports = generateMarkdown;
