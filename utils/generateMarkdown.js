// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  return `
  # ${answers.projectTitle}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
  ${data.description}
  
// ## Table of Contents
  
//   * [Necessary Files](#Installation)
  
//   * [Rules of Usage](#Usage)
  
  
//   * [Licensing](#Licensing)
 
  
//   * [How to Conduct Testing](#Testing)
  
  
//   * [Rules on Contribution](#Contribution)
 
  
//   * [Where to Direct Questions](#Questions)
  
  
// ## Installation
// * The proper dependencies can be installed by using the command $(answers.installation)
  
// ## Usage
// * ${answers.usage}
  
// ## Licensing 
// * The licensing for this repo is provided by $(answers.licensing)

// ## Testing
// * ${answers.testing}

// ## Contribution
// * ${answers.contribution}
  
// ## Questions
// * Questions can be directed to ${answer.username}


`;

}

module.exports = generateMarkdown;
