// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  return `
  # $(answers.projectTitle)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
  $(answers.description)
  
## Table of Contents
  
  * [Necessary Files](#Installation)
  $(answers.installation)

  * [Rules of Usage](#Usage)
  $(answers.usage)
  
  * [Licensing](#Licensing)
  $(answers.licensing)
  
  * [Rules on Contribution](#Contribution)
  $(answers.contribution)
  
  * [How to Conduct Testing](#Testing)
  $(answers.testing)
  
  * [Where to Direct Questions](#Questions)
  
  
## Installation
  
  
## Usage
  
  
## Licensing 
  
  
## Contribution
  
  
## Testing
  
  
## Questions


`;
}

module.exports = generateMarkdown;
