// const fs = require('fs')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// must have a couple license options
// create a conditional to check if there is a license

function renderLicenseBadge(license) {
    var licenseBadge = [''];
  if ('BSD-3-Clause' == data.license ){
      licenseBadge.push('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]');
  } if  ('MIT' == data.license){
      licenseBadge.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]');
  } if ('Apache' == data.license){
      licenseBadge.push('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]');
  } if ('GPL' == data.license){
      licenseBadge.push('[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]');
  }
     return ;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// create a conditional to check if there is a license
// returns a string that is a link

function renderLicenseLink(license) {
    var lincenseLink = [];
  if ('BSD-3-Clause' == data.license ){
      lincenseLink.push('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]');
  } if  ('MIT' == data.license){
      lincenseLink.push('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]');
  } if ('Apache' == data.license){
      lincenseLink.push('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]');
  } if ('GPL' == data.license){
      lincenseLink.push('[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]');
  }
   return lincenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// create a conditional to check if there is a license
// call renderlicenseBadge and renderlicenselink
// use template literal to format license section and call functions
// return template literal

function renderLicenseSection() {
 
 
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // plug in data from user and put it into the readme file
  // create layout of what you markdown readme with template literals
  // hint - call renderlicense functions inside this function
return `  ${lincenseLink}
# Project Title

${data.title}

## Installation

${data.installation}

## Contributers

${data.contributer}

## License

${data.license}

## Github name

${data.Githubname}

## email  

${data.email}`

};
// create layout of what the readme file will need to print using template literals
module.exports = generateMarkdown;
