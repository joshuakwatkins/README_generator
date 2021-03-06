// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let badgeURL = "";
let licenseURL = "";
let licenseSection = "";
function renderLicenseBadge(data) {
  switch (data.license) {
    case "MIT":
      badgeURL = "https://img.shields.io/badge/license-MIT-blue.svg";
      break;
    case "APACHE 2.0":
      badgeURL = "https://img.shields.io/badge/license-APACHE%202.0-blue.svg";
      break;
    case "GNU GPLv3":
      badgeURL = "https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg";
      break;
    case "BSD 3":
      badgeURL = "https://img.shields.io/badge/license-BSD%203-blue.svg";
      break;
    default: badgeUrl = "";
  }
  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data.license) {
    case "MIT":
      licenseURL = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE 2.0":
      licenseURL = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GNU GPLv3":
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3":
      licenseURL = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default: licenseUrl = "";
  }
  return licenseURL
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "None"){
    licenseSection = `[![GitHub License](${renderLicenseBadge(data)})](${renderLicenseLink(data)})`
  } else {
    licenseSection = '';
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseSection(data)}

## Description

${data.descrip}

  ## Table Of Contents

* [Installation](#!installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

================================================

## Installation

To install the necessary dependencies, please run the following command:

\`\`\`
${data.install}
\`\`\`

================================================

## Usage

${data.usage}

================================================

## License

This project is licensed under the ${data.license} license.

================================================

## Contributing

${data.contribute}

================================================

## Tests

To test if the dependencies are all installed, please run the following command:

\`\`\`
${data.test}
\`\`\`

================================================

## Questions

If you have any questions please reach out to me [HERE](mailto:${data.emailAddress}). You can find more of my work at [MY GITHUB](https://www.github.com/${data.gitUser}/).


`;
}

module.exports = {
  generateMarkdown
};
