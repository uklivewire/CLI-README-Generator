// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- If you have any questions, feel free to reach out to me on [GitHub](https://github.com/${data.github}).
- You can also reach me at ${data.email} for any additional questions.

`;
}

module.exports = generateMarkdown;
