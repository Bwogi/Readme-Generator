
function genMarkdown(data) {
    return `
# ${data.Title}

<p align="left">
    <img src="https://img.shields.io/github/repo-size/${data.Username}/${data.Title}" />
    <img src="https://img.shields.io/github/languages/top/${data.Username}/${data.Title}"  />
    <img src="https://img.shields.io/github/issues/${data.Username}/${data.Title}" />
    <img src="https://img.shields.io/github/last-commit/${data.Username}/${data.Title}" >   
  </p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br />


## Repository
___
https://github.com/${data.Username}/${data.Title}


## Description
${data.Description}


## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Process](#process)
* [MockUp](#mockup)
* [ProjectDemo](#projectdemo)
* [Testing](#testing)
* [ProjectRepo](#projectrepo)
* [Contribution](#contribution)
* [Questions](#questions)

## Installation
${data.Installation}

##  Usage
${data.Usage}

## License 
This project is licensed under the ${data.License} license.
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  
## Process
  
  
## Mockup

  
##  ProjectDemo
<img src="./img/readme-file-generator.gif" alt="project-gif">

## Testing
The following is needed to run the test: ${data.Tests}

## ProjectRepo
https://github.com/${data.Username}/${data.Title}

## Contribution
Contributors: ${data.Contributing}

## Questions
For any enquiries about this repo, open an [issue](https://github.com/${data.Username}/${data.Title}/issues)(https://img.shields.io/github/issues/${data.Username}/${data.Title}) or shoot me an email at: ${data.Email}.

Created with ❤️ by [Andrew Bwogi](https://github.com/bwogi/README-generator)

`
}

module.exports = genMarkdown;