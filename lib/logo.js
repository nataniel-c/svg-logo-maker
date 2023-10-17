const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./shapes.js');
const Text = require('./text.js');

// Array containing all the questions to be asked in the command prompt
const questions = [
    'Welcome to the Logo Generator.\nPlease enter the text for your logo (up to three characters)',
    'Please choose a text color for your logo',
    'Please choose a shape:',
    'Please choose a color for the shape',
];

// Function to initialize app. Asks questions using inquirer
class Logo {
    constructor() {
        this.data = '';
    }

    run() {
        return inquirer
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
          const text = new Text(response.text, response.textColor.toLowerCase());
          const shape = new Shape(response.shape.toLowerCase(), response.shapeColor.toLowerCase());
          return this.render(text, shape);
        })
        .then(() => {
            return fs.appendFile('logo.svg', this.data, 
                (err) => {
                    err ? console.error(err) : console.log('Data written to README.md')
                }
            );
        })
        .then(() => console.log('Created logo.svg'))
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong. Please try again.');
        })
    }

    render(textObj, shapeObj) {
        this.data = `<svg xmlns="http://www.w3.org/2000/svg" width='300' height='200'>
        ${shapeObj.render()}
        ${textObj.render()}
    </svg>`
    }
    }


module.exports = Logo;
