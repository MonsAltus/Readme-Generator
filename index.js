// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

// Generate README content with user input.
const generateReadme = ({title, repo, description, userStory1, userStory2, userStory3, usage, installation, tests, contribute, github, email, license}) => {
const mdString = 
`# ${title}

![license-badge]('https://shields.io/github/license/${github}/${repo}')

## Description:
${description}

Table of Contents:
[User Story](#User Story)<br>
[Usage](#Usage)<br>
[Installation](#Installation)<br>
[Contributing](#Contributing)<br>
[Tests](#Tests)<br>
[Questions](#Questions)<br>
[License](#License)<br>

## User Story:
- AS A ${userStory1}
- I WANT ${userStory2}
- SO THAT I ${userStory3}

## Usage:
${usage} 

## Installation:
${installation} 

## Tests:
${tests} 

## Contributing:
${contribute}

## Questions:
Reach me at my [Github](https://github.com/${github})<br>
Email me at <${email}>

## License:
Covered under the [${license}](https://github.com/${github}/${repo}/blob/main/LICENSE) license.
`
return mdString;
}


const questions = [
    //Title, description, install-notes, user-story- usage-case, contact, license
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title for your readme:',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Enter the Github repository name for your project:',
        // default: '${title}'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description for you project:',
    },
    {
        //First user story question.
        type: 'input',
        name: 'userStory1',
        message: 'Fill out your User Story: AS A',
    },
    {
        //Second user story question.
        type: 'input',
        name: 'userStory2',
        message: 'Fill out your User Story: I WANT',
    },
    {
        //Third user story question.
        type: 'input',
        name: 'userStory3',
        message: 'Fill out your User Story: SO THAT I',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 
        'Boost Software License 1.0 ', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 
        'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username for contact:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an Email for contact:',
    },




    {
        type: 'input',
        name: 'usage',
        message: 'Enter instrustions for usage of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions to install your project?',
    },    {
        type: 'input',
        name: 'tests',
        message: '',
    },    {
        type: 'input',
        name: 'contribute',
        message: '',
    },



];

inquirer
    .prompt(questions)
    .then(({title, repo, description, userStory1, userStory2, userStory3, usage, installation, tests, contribute, github, email, license}) => {
        // Creates file named newREADME with user input.
        fs.writeFile('newREADME.md',
        generateReadme ({title, repo, description, userStory1, userStory2, userStory3, usage, installation, tests, contribute, github, email, license}),
        (err) =>
        err ? console.error(err) : console.log('Readme created! Check root folder.')
        );
        }
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
