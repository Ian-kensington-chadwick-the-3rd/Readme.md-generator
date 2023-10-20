// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = 
// add readme questions (description, usage, license, etc)
    [{
        type: 'input',
        message: 'what is your Github name?',
        name: 'Githubname',
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'input',
        message: 'what is the project title?',
        name: 'title',
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'list',
        message: 'please choose a license!',
        name: 'license',
        choices:['MIT', 'BSD-3-Clause', 'Apache', 'GPL'],
        validate: (data)=>{ if(data) {return true} else{return 'you have to choose a license!!!'}} 

    },
    {
      type: 'input',
      message: 'Contributers? If there are none then press enter',
      name: 'contributers',
    
    },
    {
      type: 'input',
      message: 'how would I go about using your project? *usage',
      name: 'usage',
      validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
      type: 'input',
      message: 'how do you install your project?',
      name: 'installation',
      validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },

   
];
 
  
//  TODO: Create a function to write README file
//  fs write file to write to readme.md file
 function writeToFile(data) {
  
   fs.writeFile('newreadme.md', generateMarkdown(data), (err) => {
     if (err) throw err;
       console.log('The file has been saved!');
     
    });

  

 }

// TODO: Create a function to initialize app
function init() {
 inquirer
    .prompt(questions)
    .then((data) => {  
      console.log(data)
      writeToFile(data);
      console.log(licenseLink)
    
      // Use user feedback for... whatever!!
      
      
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