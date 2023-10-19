// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = 
// add readme questions (description, usage, license, etc)
    [{
        type: 'input',
        message: 'what is your Github name?',
        name: 'Github name',
        validate: (value)=>{ if(value) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'Github name',
        validate: (value)=>{ if(value) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'input',
        message: 'what is the project title?',
        name: 'title',
        validate: (value)=>{ if(value) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'list',
        message: 'please choose a license!',
        name: 'license',
        choices:['MIT', 'BSD-3-Clause', 'Apache', 'GPL'],
        validate: (value)=>{ if(value) {return true} else{return 'you have to choose a license!!!'}} 

    }
   
];
 
  
// TODO: Create a function to write README file
function writeToFile(fileName, generateMarkdown) {
// fs write file to write to readme.md file
generateMarkdown(answers);


}

// TODO: Create a function to initialize app
function init() {
 inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      writeToFile(readme.md);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log('Prompt couldnt be rendered in the current environment')
      } else {
        // Something else went wrong
        console.log('Something else went wrong')
      }
    })  
};

// Function call to initialize app
init();
// user inquire to display message to user
// call generate mark down function on the data collected from user 
// take what is returned to us then pass it to the writeToFile function
// research fs and inquire