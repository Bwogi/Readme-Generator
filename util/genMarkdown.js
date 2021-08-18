
function genMarkdown(data) {
    return `
# ${data.Title}
## Repository
___
https://github.com/${data.Username}/${data.Title}
## Description
---
${data.Description}
## Table of Contents 
---
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)
---
## Installation
These are some Project dependencies that need to be installed: ${data.Installation}
---
## Badges
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
## Usage
___
${data.Usage}
## License
___
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
## Contribution
___
Contributors: ${data.Contributing}
## Tests
___
The following is needed to run the test: ${data.Tests}
## Questions
___
For any enquiries about this repo, open an issue or shoot me an email at: ${data.Email}.
`
}

module.exports = genMarkdown;