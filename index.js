const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title for your readme:',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Enter the Github repository name for your project:',
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
        name: 'installation',
        message: 'Enter instructions to install your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for the usage of your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any testing guidelines:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter any personal contributions or technologies you would like to credit:',
    },
]).then((response) => {
    fs.writeFile('NEW-README.md', generateMarkdown(response), (err) => err ? console.log(err) : console.log('New Readme created! Check root folder.'));
})