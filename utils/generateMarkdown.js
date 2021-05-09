function generateMarkdown(data) {
  return `# ${data.title}

![license-badge](https://shields.io/github/license/${data.github}/${data.repo})

## Description:
${data.description}

## Table of Contents:
[User Story](#User-Story)<br>  
[Usage](#Usage)<br>
[Installation](#Installation)<br>
[Contributing](#Contributing)<br>
[Tests](#Tests)<br>
[Questions](#Questions)<br>
[License](#License)<br>

## User-Story:
- AS A ${data.userStory1}
- I WANT ${data.userStory2}
- SO THAT I ${data.userStory3}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Tests:
${data.tests} 

## Contributing:
${data.contribute}

## Questions:
Reach me at my [Github](https://github.com/${data.github}).<br>
Email me at <${data.email}>

## License:
Covered under the [${data.license}](https://github.com/${data.github}/${data.repo}/blob/main/LICENSE) license.
`;
}

module.exports = generateMarkdown;
