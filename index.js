const jest = require('jest');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const questions = [
    'Welcome to the Logo Generator.\nEnter three characters that will make up your logo',
    'Please choose a text color for your logo',
    'Please choose a shape:',
    'Please choose a color for the shape',
];


// Function to write SVG file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, 
        (err) => {
    err ? console.error(err) : console.log('Data written to logo.svg')
        }
    );

}

// Function to initialize app. Asks questions using inquirer
function init() {
inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'text',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'textColor',
    },
    {
        type: 'list',
        message: questions[2],
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: questions[3],
        name: 'shapeColor',
    }
  ])
  .then((response) => {
    console.log('Generating logo......')
    logo = shapes(response);
    writeToFile('logo.svg', logo);
  }
  );
}

// Function call to initialize app
init();